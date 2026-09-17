"use client";

import Image from "next/image";
import { useState } from "react";

const chapters = [
  {
    time: "06:40",
    title: "Birds, then kettle",
    text: "Mist sits in the lily court. Tea on the verandah before anyone speaks.",
    image: "/images/day-morning.jpg",
    alt: "Morning on the verandah",
  },
  {
    time: "11:15",
    title: "Out through the estate",
    text: "A two-hour walk along the tea rows, or the jeep down to the river.",
    image: "/images/day-garden-wing.jpg",
    alt: "The garden wing and ferns",
  },
  {
    time: "16:00",
    title: "Cloud arrives",
    text: "The valley fills in twenty minutes. Cake, cards, the fire laid in the salon.",
    image: "/images/day-cloud.jpg",
    alt: "Cloud filling the valley",
  },
  {
    time: "19:30",
    title: "Lamps up, dinner in",
    text: "Five curries from the cook's kitchen, eaten at the long teak table.",
    image: "/images/day-salon.jpg",
    alt: "The salon by lamplight",
  },
];

export default function DayChapters() {
  const [active, setActive] = useState(0);

  return (
    <div className="split border-t" style={{ borderBottom: 0 }}>
      <div className="day__list">
        {chapters.map((c, i) => (
          <button
            key={c.time}
            type="button"
            className="chapter"
            aria-pressed={active === i}
            onClick={() => setActive(i)}
          >
            <span className="chapter__time">{c.time}</span>
            <span>
              <span className="chapter__title">{c.title}</span>
              <span className="chapter__text">{c.text}</span>
            </span>
          </button>
        ))}
      </div>
      <div className="media day__media">
        {chapters.map((c, i) => (
          <Image
            key={c.image}
            src={c.image}
            alt={c.alt}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            style={{ opacity: active === i ? 1 : 0 }}
          />
        ))}
      </div>
    </div>
  );
}
