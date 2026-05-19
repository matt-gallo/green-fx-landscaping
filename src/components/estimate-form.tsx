"use client";

import { useState } from "react";
import { serviceAreas } from "@/lib/site";
import { tiers } from "@/lib/services";

/*
  Lead-capture form — section 11 bottom-funnel. Client-side only for now;
  Pino wires the action to a CRM/email endpoint or embeds Cal.com here.
  No financial or sensitive fields are collected.
*/
export function EstimateForm() {
  const [submitted, setSubmitted] = useState(false);

  const field =
    "mt-1 w-full rounded-[var(--radius-card)] border border-stone bg-white px-4 py-3 text-body text-charcoal outline-none transition-colors focus:border-forest";
  const labelCls = "text-meta font-medium text-charcoal/80";

  if (submitted) {
    return (
      <div className="rounded-[var(--radius-card)] bg-white p-8 text-center shadow-[var(--shadow-card)]">
        <h3 className="text-h3">Thanks — we&rsquo;ve got it.</h3>
        <p className="mt-3 text-charcoal/75">
          We respond within one business day to book your on-site visit.
        </p>
      </div>
    );
  }

  return (
    <form
      className="rounded-[var(--radius-card)] bg-white p-7 shadow-[var(--shadow-card)]"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            Name
          </label>
          <input id="name" name="name" required className={field} />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className={field}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={field}
          />
        </div>
        <div>
          <label htmlFor="area" className={labelCls}>
            Municipality
          </label>
          <select id="area" name="area" required className={field} defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            {serviceAreas.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
            <option value="other">Other / GTA</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="tier" className={labelCls}>
            What are you considering?
          </label>
          <select id="tier" name="tier" className={field} defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            {tiers.map((t) => (
              <option key={t.slug} value={t.slug}>
                {t.name} — {t.price}
              </option>
            ))}
            <option value="unsure">Not sure yet</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="scope" className={labelCls}>
            Tell us about the project
          </label>
          <textarea
            id="scope"
            name="scope"
            rows={4}
            className={field}
            placeholder="Rough scope, timeline, anything you've been quoted before…"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-sandstone px-7 py-3.5 text-[0.95rem] font-medium text-white transition-colors hover:bg-clay"
      >
        Request my free estimate
      </button>
      <p className="mt-3 text-center text-[0.78rem] text-charcoal/55">
        No obligation. We respond within one business day.
      </p>
    </form>
  );
}
