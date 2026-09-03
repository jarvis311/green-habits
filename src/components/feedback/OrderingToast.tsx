"use client";

import { createContext, useCallback, useContext, useState } from "react";
import type { ReactNode } from "react";

interface ToastState {
  id: number;
  message: string;
}

interface OrderingToastContextValue {
  notify: (message: string) => void;
}

const OrderingToastContext = createContext<OrderingToastContextValue | null>(null);

/**
 * Phase 1 has no cart/checkout (see docs/implementation-plan.md §6). This
 * provider is the placeholder feedback layer for "Add to Order" / "Order
 * Now" CTAs — a real cart implementation will replace `notify` calls with
 * actual cart mutations without touching any card component, since they
 * only ever call the `onAddToOrder` prop passed into them.
 */
export function OrderingToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<ToastState | null>(null);

  const notify = useCallback((message: string) => {
    const id = Date.now();
    setToast({ id, message });
    setTimeout(() => {
      setToast((current) => (current?.id === id ? null : current));
    }, 2600);
  }, []);

  return (
    <OrderingToastContext.Provider value={{ notify }}>
      {children}
      <div
        aria-live="polite"
        className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4"
      >
        {toast && (
          <div className="pointer-events-auto rounded bg-ink px-5 py-3 text-body-sm text-white shadow-elevated">
            {toast.message}
          </div>
        )}
      </div>
    </OrderingToastContext.Provider>
  );
}

export function useOrderingToast() {
  const ctx = useContext(OrderingToastContext);
  if (!ctx) {
    throw new Error("useOrderingToast must be used within OrderingToastProvider");
  }
  return ctx;
}
