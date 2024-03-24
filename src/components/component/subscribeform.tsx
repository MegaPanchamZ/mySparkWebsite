import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function SubscribeNewsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (evt: { preventDefault: () => void }) => {
    evt.preventDefault();
    const res = await fetch("/api/send/", {
      method: "POST",
      body: JSON.stringify({ toEmail: email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const payload = await res.json();
    if (payload.success) {
      alert(payload.message);
    } else {
      alert(payload.message + " " + payload.email || "An error occurred");
    }
    // Clear the email field
    setEmail("");
  };

  return (
    <div className="flex flex-col items-center mb-10">
      <form onSubmit={handleSubscribe} className="flex space-x-2">
        <Input
          className="max-w-lg flex-1 rounded-full border-2 text-gray-900 dark:text-neutral-50 border-[#FF7A00] focus:border-[#FFE81C] focus:ring-2 focus:ring-[#FFE81C]"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
        />
        <Button
          type="submit"
          className="bg-[#FF7A00] text-white font-semibold rounded-full px-6 py-3 hover:bg-[#FFE81C] hover:text-[#FF7A00] transition-colors duration-300"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default SubscribeNewsletter;