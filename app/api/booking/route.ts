import { prisma } from "../../lib/prisma";

export async function POST(req: Request) {
  try {
    const { name, email, phone, date, time, guests, specialRequest } =
      await req.json();

    const booking = await prisma.Booking.create({
      data: {
        name,
        email,
        phone,
        date,
        time,
        guests: Number(guests),
        specialRequest,
      },
    });

    return new Response(
      JSON.stringify({ message: "Booking confirmed!", booking }),
      { status: 201 }
    );
  } catch (err) {
    console.error("Booking error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
