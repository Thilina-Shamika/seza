"use client";

import { useState } from "react";

const NIGHTLY_RATE = 520;
const ADDON_PRICE = 45;

type RoomKey = "whole" | "verandah" | "garden";

const rooms: Record<RoomKey, { name: string; note?: string; label: string; rate: number }> = {
  whole: { name: "The whole house", note: "— 5 rooms", label: "the whole house", rate: NIGHTLY_RATE },
  verandah: { name: "The Verandah Room", label: "the Verandah Room", rate: Math.round(NIGHTLY_RATE * 0.38) },
  garden: { name: "The Garden Room", label: "the Garden Room", rate: Math.round(NIGHTLY_RATE * 0.3) },
};

const addonOptions = ["Cook for dinner", "Jeep transfer", "Tea estate walk"];

const money = (n: number) => "$" + n.toLocaleString("en-US");
const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? "" : "s"}`;

export default function EnquiryForm() {
  const [room, setRoom] = useState<RoomKey>("whole");
  const [guests, setGuests] = useState(2);
  const [arrive, setArrive] = useState("2026-10-09");
  const [depart, setDepart] = useState("2026-10-12");
  const [addons, setAddons] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const diff = Math.round((new Date(depart).getTime() - new Date(arrive).getTime()) / 86400000);
  const nights = Number.isFinite(diff) && diff > 0 ? diff : 0;
  const selected = rooms[room];
  const total = nights > 0 ? nights * selected.rate + addons.length * ADDON_PRICE : 0;
  const emailOk = /.+@.+\..+/.test(email);

  const hint =
    nights > 0 && nights < 2
      ? "Two-night minimum."
      : nights >= 2 && emailOk
        ? "We answer every enquiry by hand."
        : "Add your email and we will reply within a day.";

  const toggleAddon = (name: string) =>
    setAddons((a) => (a.includes(name) ? a.filter((x) => x !== name) : [...a, name]));

  if (sent) {
    return (
      <div className="sent">
        <div className="eyebrow">Enquiry sent</div>
        <h3>Thank you — we&apos;ll write back within a day.</h3>
        <p>
          Held for you: {plural(nights, "night")} in {selected.label} for {plural(guests, "guest")}.
          Nothing is charged until we confirm.
        </p>
        <button type="button" className="outline-btn" onClick={() => setSent(false)}>
          Edit enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: send the enquiry to a backend (e.g. an API route or form service).
        if (nights >= 2) setSent(true);
      }}
    >
      <div className="form-head">
        <h3>Request dates</h3>
        <span className="eyebrow">No card needed</span>
      </div>

      <div className="date-grid">
        <label>
          <span className="eyebrow field-label">Arrive</span>
          <input type="date" className="input" value={arrive} onChange={(e) => setArrive(e.target.value)} />
        </label>
        <label>
          <span className="eyebrow field-label">Depart</span>
          <input type="date" className="input" value={depart} onChange={(e) => setDepart(e.target.value)} />
        </label>
      </div>

      <div className="form-block">
        <span className="eyebrow field-label" style={{ marginBottom: 8 }}>
          What you&apos;d like
        </span>
        <div className="choice-list">
          {(Object.keys(rooms) as RoomKey[]).map((key) => (
            <button
              key={key}
              type="button"
              className="choice"
              aria-pressed={room === key}
              onClick={() => setRoom(key)}
            >
              <span>
                {rooms[key].name}
                {rooms[key].note && <span className="choice__note"> {rooms[key].note}</span>}
              </span>
              <span className="choice__price">{money(rooms[key].rate)} / night</span>
            </button>
          ))}
        </div>
      </div>

      <div className="guests-row">
        <div>
          <span className="eyebrow field-label" style={{ marginBottom: 8 }}>
            Guests
          </span>
          <div className="stepper">
            <button type="button" aria-label="Fewer guests" onClick={() => setGuests((g) => Math.max(1, g - 1))}>
              −
            </button>
            <output aria-live="polite">{guests}</output>
            <button type="button" aria-label="More guests" onClick={() => setGuests((g) => Math.min(10, g + 1))}>
              +
            </button>
          </div>
        </div>
        <div className="total">
          <span className="eyebrow">{nights > 0 ? `${plural(nights, "night")} · estimate` : "select dates"}</span>
          <div className="total__value">{nights > 0 ? money(total) : "—"}</div>
        </div>
      </div>

      <div className="form-block">
        <span className="eyebrow field-label" style={{ marginBottom: 8 }}>
          Add to the stay
        </span>
        <div className="addons">
          {addonOptions.map((name) => (
            <button
              key={name}
              type="button"
              className="addon"
              aria-pressed={addons.includes(name)}
              onClick={() => toggleAddon(name)}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <label className="form-block" style={{ display: "block" }}>
        <span className="eyebrow field-label">Email</span>
        <input
          type="email"
          className="input"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <button type="submit" className="submit btn-dark">
        Send enquiry
      </button>
      <p className="hint">{hint}</p>
    </form>
  );
}
