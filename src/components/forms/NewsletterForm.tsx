"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { FormField } from "./FormField";
import { Button } from "@/components/ui/Button";

export function NewsletterForm({ ctaLabel = "Subscribe" }: { ctaLabel?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 500));
    setStatus("success");
    setEmail("");
  }

  if (status === "success") {
    return <p className="text-body-sm font-medium text-sage">You&rsquo;re on the list — welcome to the habit.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3 md:flex-row md:items-start">
      <div className="flex-1">
        <FormField
          label="Email address"
          hideLabel
          type="email"
          required
          placeholder="Your active email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Button type="submit" size="lg" isLoading={status === "submitting"}>
        {ctaLabel}
      </Button>
    </form>
  );
}
