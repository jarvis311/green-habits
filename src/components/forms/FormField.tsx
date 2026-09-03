"use client";

import { forwardRef } from "react";
import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { AlertCircle, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface BaseProps {
  label: string;
  error?: string;
  success?: string;
  hint?: string;
  hideLabel?: boolean;
}

export type FormFieldProps = BaseProps &
  InputHTMLAttributes<HTMLInputElement> & { as?: "input" };

export type FormTextareaProps = BaseProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & { as: "textarea" };

const fieldBase =
  "w-full min-h-[44px] rounded border bg-white px-3 py-2.5 text-body-sm text-ink placeholder:text-muted " +
  "transition-colors duration-150 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage " +
  "disabled:bg-sand disabled:text-muted disabled:cursor-not-allowed";

export const FormField = forwardRef<HTMLInputElement | HTMLTextAreaElement, FormFieldProps | FormTextareaProps>(
  function FormField({ label, error, success, hint, hideLabel, id, className, as = "input", ...props }, ref) {
    const fieldId = id ?? `field-${label.replace(/\s+/g, "-").toLowerCase()}`;
    const borderClass = error ? "border-error" : success ? "border-success" : "border-border";

    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={fieldId} className={cn("text-body-sm font-medium text-ink", hideLabel && "sr-only")}>
          {label}
        </label>
        {as === "textarea" ? (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            id={fieldId}
            rows={4}
            aria-invalid={!!error}
            aria-describedby={error ? `${fieldId}-error` : hint ? `${fieldId}-hint` : undefined}
            className={cn(fieldBase, borderClass, className)}
            {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            id={fieldId}
            aria-invalid={!!error}
            aria-describedby={error ? `${fieldId}-error` : hint ? `${fieldId}-hint` : undefined}
            className={cn(fieldBase, borderClass, className)}
            {...(props as InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
        {error && (
          <span id={`${fieldId}-error`} className="flex items-center gap-1.5 text-body-sm text-error">
            <AlertCircle size={14} aria-hidden />
            {error}
          </span>
        )}
        {!error && success && (
          <span className="flex items-center gap-1.5 text-body-sm text-success">
            <Check size={14} aria-hidden />
            {success}
          </span>
        )}
        {!error && !success && hint && (
          <span id={`${fieldId}-hint`} className="text-body-sm text-muted">
            {hint}
          </span>
        )}
      </div>
    );
  }
);
