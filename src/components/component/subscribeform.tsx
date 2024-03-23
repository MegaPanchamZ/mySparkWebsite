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
          className="max-w-lg flex-1"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}

export default SubscribeNewsletter;
