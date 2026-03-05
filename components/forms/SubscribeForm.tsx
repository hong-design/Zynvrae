"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";

type FormState = "idle" | "loading" | "success" | "error";

type SubscribeFormProps = {
  idPrefix?: string;
  className?: string;
  buttonLabel?: string;
};

export function SubscribeForm({
  idPrefix = "updates",
  className,
  buttonLabel = "訂閱產品更新"
}: SubscribeFormProps) {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "").trim();
    const website = String(formData.get("website") ?? "").trim();

    if (!email) {
      setState("error");
      setMessage("請輸入 Email。\n");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setState("error");
      setMessage("請輸入有效的 Email 格式。\n");
      return;
    }

    setState("loading");

    await new Promise((resolve) => setTimeout(resolve, 600));

    if (website) {
      setState("success");
      setMessage("已加入更新清單。\n");
      form.reset();
      return;
    }

    setState("success");
    setMessage("已加入候補名單，我們會在有新進度時通知你。\n");
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-3", className)} noValidate>
      <label htmlFor={`${idPrefix}-email`} className="sr-only">
        Email
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Input
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="name@company.com"
          aria-describedby={`${idPrefix}-hint ${idPrefix}-status`}
        />
        <Button type="submit" size="lg" disabled={state === "loading"}>
          {state === "loading" ? "處理中..." : buttonLabel}
        </Button>
      </div>

      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor={`${idPrefix}-website`}>Website</label>
        <input id={`${idPrefix}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <p id={`${idPrefix}-hint`} className="text-xs text-muted">
        我們僅發送產品與營運更新，不發送促銷訊息。
      </p>

      {state !== "idle" ? (
        <p
          id={`${idPrefix}-status`}
          role="status"
          className={cn(
            "rounded-md border px-3 py-2 text-xs",
            state === "success"
              ? "border-success/45 bg-success/10 text-success"
              : "border-warning/45 bg-warning/10 text-warning"
          )}
        >
          {message}
        </p>
      ) : (
        <p id={`${idPrefix}-status`} className="sr-only" aria-live="polite" />
      )}
    </form>
  );
}
