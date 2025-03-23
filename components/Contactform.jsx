"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/lib/supabaseClient";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    if (!formData.name || !formData.email) {
      setStatus("Name and Email are required.");
      return;
    }

    const { error } = await supabase.from("contact_form").insert([formData]);

    if (error) {
      console.error("Supabase Error:", error.message);
      setStatus("Failed to submit. Please try again.");
    } else {
      setStatus("Submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 relative overflow-hidden">
      <div className="absolute -right-12 -bottom-12 w-40 h-40 rounded-full bg-blue-100 opacity-30"></div>
      <div className="absolute -left-8 -top-8 w-24 h-24 rounded-full bg-orange-100 opacity-30"></div>

      <h2 className="text-2xl font-bold text-blue-900 mb-2">Enquire Us</h2>
      <p className="text-gray-700 mb-6">
        Ready to start a conversation? Drop your details below and we'll get back to you with the solutions you need.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 relative">
        <Input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg p-3"
        />

        <Input
          name="email"
          type="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg p-3"
        />

        <Input
          name="phone"
          type="tel"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3"
        />

        <Textarea
          name="message"
          placeholder="How can we help?"
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3 min-h-[120px]"
        />

        <Button type="submit" className="w-full bg-blue-800 hover:bg-blue-700 text-white font-medium py-3 rounded-lg">
          Submit
        </Button>

        {status && <p className="text-sm text-gray-600 mt-2">{status}</p>}
      </form>
    </div>
  );
}
