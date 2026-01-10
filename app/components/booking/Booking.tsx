"use client";
import { useState } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
    specialRequest: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking data:", form);
    setForm({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: 1,
      specialRequest: "",
    });
    setSuccess(true);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-900 text-white rounded-2xl shadow-lg mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Book A Table</h2>

      {success && (
        <p className="bg-green-600 text-white p-3 rounded mb-4 text-center">
          Your booking request has been sent!
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="flex-1 border border-gray-700 p-3 rounded bg-gray-800"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="flex-1 border border-gray-700 p-3 rounded bg-gray-800"
            required
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="flex-1 border border-gray-700 p-3 rounded bg-gray-800"
            required
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="flex-1 border border-gray-700 p-3 rounded bg-gray-800"
            required
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            className="flex-1 border border-gray-700 p-3 rounded bg-gray-800"
            required
          />
          <select
            name="guests"
            value={form.guests}
            onChange={handleChange}
            className="flex-1 border border-gray-700 p-3 rounded bg-gray-800"
          >
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} {i === 0 ? "Guest" : "Guests"}
              </option>
            ))}
          </select>
        </div>

        <textarea
          name="specialRequest"
          placeholder="Special Requests"
          value={form.specialRequest}
          onChange={handleChange}
          className="w-full border border-gray-700 p-3 rounded bg-gray-800 resize-none"
          rows={4}
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 transition text-white font-bold p-3 rounded-lg mt-2"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
