"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { FormField } from "./FormField";
import { Checkbox } from "@/components/ui/Checkbox";
import { Button } from "@/components/ui/Button";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  acceptsNewsletter: boolean;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  subject: "General Inquiry",
  message: "",
  acceptsNewsletter: false,
};

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function validate(current: FormValues) {
    const next: Partial<Record<keyof FormValues, string>> = {};
    if (!current.name.trim()) next.name = "Please tell us your name.";
    if (!/^\S+@\S+\.\S+$/.test(current.email)) next.email = "Enter a valid email address.";
    if (!current.message.trim()) next.message = "Let us know how we can help.";
    return next;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validation = validate(values);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setStatus("submitting");
    // Phase 1 has no backend — this simulates a request so the interaction
    // states (loading/success) are real; wire to an API route later.
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("success");
    setValues(initialValues);
  }

  if (status === "success") {
    return (
      <div className="flex flex-col gap-2 rounded-lg border border-success/30 bg-success/5 p-6">
        <span className="font-semibold text-h4 text-ink">Message sent</span>
        <p className="text-body-sm text-muted">
          We typically respond to all clean culinary inquiries within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <FormField
          label="Full Name"
          placeholder="Jane Doe"
          value={values.name}
          error={errors.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          required
        />
        <FormField
          label="Email Address"
          type="email"
          placeholder="jane@example.com"
          value={values.email}
          error={errors.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          required
        />
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <FormField
          label="Phone"
          type="tel"
          placeholder="+1 (555) 000-0000"
          value={values.phone}
          onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
        />
        <FormField
          label="Subject"
          as="input"
          list="contact-subjects"
          value={values.subject}
          onChange={(e) => setValues((v) => ({ ...v, subject: e.target.value }))}
        />
        <datalist id="contact-subjects">
          <option value="General Inquiry" />
          <option value="Catering" />
          <option value="Feedback" />
          <option value="Careers" />
        </datalist>
      </div>
      <FormField
        as="textarea"
        label="Your Message"
        placeholder="Tell us how we can make your day a little healthier..."
        value={values.message}
        error={errors.message}
        onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
        required
      />
      <Checkbox
        label="I accept terms of the Green Habit atelier and newsletter"
        checked={values.acceptsNewsletter}
        onChange={(e) => setValues((v) => ({ ...v, acceptsNewsletter: e.target.checked }))}
      />
      <Button type="submit" size="lg" isLoading={status === "submitting"} className="w-fit">
        Send Message
      </Button>
    </form>
  );
}
