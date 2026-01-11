import { prisma } from "../../lib/prisma";

// app/api/bookings/route.ts

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, date, time, guests, specialRequest } = body;

    // FIX: Force 'guests' to be a Number
    const guestsCount = parseInt(guests, 10);

    const booking = await prisma.Booking.create({
      data: {
        name,
        email,
        phone,
        date,
        time,
        guests: guestsCount, // Use the parsed number here
        specialRequest: specialRequest || "", 
      },
    });

    return new Response(JSON.stringify({ message: "Booking confirmed!", booking }), { status: 201 });
  } catch (err) {
    console.error("Booking error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  }
}
