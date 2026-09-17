import Image from "next/image";
import DayChapters from "@/components/DayChapters";
import EnquiryForm from "@/components/EnquiryForm";

const facts = [
  { label: "Minimum", value: "Two nights" },
  { label: "Capacity", value: "Sleeps ten" },
  { label: "Included", value: "Cook, staff, laundry" },
  { label: "Grounds", value: "1.4 acres" },
];

const rooms = [
  {
    name: "The Verandah Room",
    bed: "King",
    text: "Teal fretwork on two sides, opening onto the pillared verandah.",
    day: "/images/room-verandah-day.jpg",
    night: "/images/room-verandah-night.jpg",
    alt: "The verandah room",
  },
  {
    name: "The Planter's Room",
    bed: "King",
    text: "Carved four-poster, blue oxide floor, a dressing room behind the wardrobe wall.",
    day: "/images/room-planters-day.jpg",
    night: "/images/room-planters-night.jpg",
    alt: "The planter's room",
  },
  {
    name: "The Garden Room",
    bed: "Twin",
    text: "The quiet corner room — its own door to the lawn, ferns at the sill.",
    day: "/images/room-garden-day.jpg",
    night: "/images/room-garden-night.jpg",
    alt: "The garden room",
  },
];

const details = [
  { src: "/images/detail-kitchen.jpg", alt: "The cook's kitchen", caption: "Pine kitchen" },
  { src: "/images/detail-bath.jpg", alt: "Terracotta bathroom", caption: "Terracotta bath" },
  { src: "/images/detail-camphor-chest.jpg", alt: "Camphor chest below a carved window", caption: "Camphor chest" },
  { src: "/images/detail-lily-court.jpg", alt: "Blue sphere in the lily pond", caption: "Lily court" },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="site-header__bar">
          <a href="#top" className="site-header__brand">
            Seza Leisure
          </a>
          <nav className="site-header__nav">
            <a href="#house">House</a>
            <a href="#day">Day</a>
            <a href="#rooms">Rooms</a>
            <a href="#stay" className="site-header__cta">
              Enquire<span className="arrow">↗</span>
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="top" className="hero">
          <Image src="/images/hero.jpg" alt="Seza Leisure at first light" fill priority sizes="100vw" />
          <div className="hero__shade" />
          <div className="hero__content">
            <h1>
              Five rooms,
              <br />
              one valley
            </h1>
            <div className="hero__row">
              <p>
                A 1928 planter&apos;s bungalow on the ridge above Hanguranketha. Teak shutters, a lily court, a cook
                on call, and cloud that fills the valley by four — taken whole, by one party at a time.
              </p>
              <div className="hero__actions">
                <a href="#stay" className="pill pill--light">
                  Request dates
                </a>
                <a href="#rooms" className="pill pill--ghost">
                  See the rooms
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="facts">
          {facts.map((f) => (
            <div key={f.label}>
              <div className="eyebrow">{f.label}</div>
              <div className="facts__value">{f.value}</div>
            </div>
          ))}
        </div>

        <section id="house" className="split">
          <div className="house__text">
            <div>
              <div className="eyebrow">01 / The house</div>
              <h2 className="h2">Kept, rather than staged</h2>
              <p className="lede">
                Lime plaster, teak shutters, oxide floors — repaired rather than replaced. Five bedrooms open onto a
                pillared verandah; the verandah onto a lily court; the court onto 1.4 acres of frangipani and fern.
              </p>
            </div>
            <dl className="specs">
              <div>
                <dt>Bedrooms</dt>
                <dd>Five, sleeping ten</dd>
              </div>
              <div>
                <dt>Elevation</dt>
                <dd>1,140 m</dd>
              </div>
              <div>
                <dt>Getting here</dt>
                <dd>3 h Colombo · 40 min Kandy</dd>
              </div>
            </dl>
          </div>
          <div className="media house__media">
            <Image
              src="/images/verandah-lily-court.jpg"
              alt="The verandah and lily court"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        </section>

        <section id="day" className="border-b">
          <div className="day__head">
            <div className="eyebrow">02 / A day here</div>
            <h2 className="h2">The hours do most of the decorating</h2>
          </div>
          <DayChapters />
        </section>

        <section id="rooms" className="border-b">
          <div className="section-head rooms__head">
            <div>
              <div className="eyebrow">03 / Rooms</div>
              <h2 className="h2">Three of five, shown</h2>
            </div>
            <p className="aside">
              Hover any room to see it after dark. The other two — twins off the garden wing — come with the house.
            </p>
          </div>
          <div className="rooms__grid">
            {rooms.map((r) => (
              <article key={r.name} className="room">
                <div className="media room__media">
                  <Image src={r.day} alt={`${r.alt} by day`} fill sizes="(max-width: 640px) 100vw, 33vw" />
                  <Image
                    src={r.night}
                    alt={`${r.alt} by lamplight`}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="room__night"
                  />
                </div>
                <div className="room__body">
                  <div className="room__title-row">
                    <h3>{r.name}</h3>
                    <span className="eyebrow">{r.bed}</span>
                  </div>
                  <p>{r.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="quote">
          <blockquote>
            <p>“We came for two nights and cancelled the rest of the trip.”</p>
            <cite>Anjali &amp; Tom — March 2026</cite>
          </blockquote>
        </section>

        <section id="gallery" className="border-b">
          <div className="section-head details__head">
            <div>
              <div className="eyebrow">04 / Details</div>
              <h2 className="h2">Small things, kept</h2>
            </div>
            <p className="aside">
              Nothing was bought as a set. Brass taps, a pine dresser, a cook&apos;s kitchen that still works like one.
            </p>
          </div>
          <div className="details__grid">
            {details.map((d) => (
              <figure key={d.src}>
                <div className="media">
                  <Image src={d.src} alt={d.alt} fill sizes="(max-width: 640px) 50vw, 25vw" />
                </div>
                <figcaption>{d.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="stay" className="split stay">
          <div className="stay__left">
            <div className="stay__intro">
              <div className="eyebrow">05 / Enquire</div>
              <h2 className="h2">Take the whole house</h2>
              <p className="lede">
                Two-night minimum, one party at a time — so the verandah, the court and the cook are yours alone.
                Every enquiry is answered by hand within a day.
              </p>
            </div>
            <div className="media stay__media">
              <Image src="/images/house-at-night.jpg" alt="The house lit at night" fill sizes="(max-width: 640px) 100vw, 50vw" />
            </div>
          </div>
          <div className="stay__form">
            <EnquiryForm />
          </div>
        </section>
      </main>

      <footer>
        <div className="footer__grid">
          <div className="footer__col">
            <p className="footer__tagline">Come for two nights. Stay for the weather.</p>
            <a href="#stay" className="footer__cta btn-dark">
              Enquire<span className="arrow">↗</span>
            </a>
          </div>
          <div className="footer__col footer__links">
            <span className="eyebrow">Visit</span>
            <a href="#house">The house</a>
            <a href="#day">A day here</a>
            <a href="#rooms">Rooms</a>
          </div>
          <div className="footer__col footer__links">
            <span className="eyebrow">Contact</span>
            <a href="mailto:stay@sezaleisure.lk">stay@sezaleisure.lk</a>
            <a href="tel:+94000000000">+94 00 000 0000</a>
            <span className="footer__address">Hanguranketha, Central Highlands</span>
          </div>
        </div>
        <div className="footer__bottom">
          <span>Seza Leisure</span>
          <span>06°55′N / 80°46′E</span>
          <span>© 2026 — Sri Lanka</span>
        </div>
      </footer>
    </>
  );
}
