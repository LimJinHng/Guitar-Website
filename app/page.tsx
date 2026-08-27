import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroPortrait from "@/public/images/hero-portrait.jpg";

const qualifications = [
  {
    org: "LASALLE College of the Arts",
    credential: "Diploma in Music (Guitar)",
    logo: "/images/lasalle-logo.jpg",
  },
  {
    org: "SOMA",
    credential: "Diploma in Songwriting and Production",
    logo: "/images/soma-logo.jpg",
  },
  {
    org: "Rockschool",
    credential: "Grade 8 (Drums)",
    logo: "/images/rockschool-logo.jpg",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="bg-ink">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="mb-4 inline-block rounded-full bg-cream/10 px-4 py-1 text-xs font-medium uppercase tracking-widest text-terracotta">
              Guitar Teacher · Singapore
            </span>
            <h1 className="font-serif text-4xl leading-tight text-cream md:text-5xl">
              Play Guitar With Confidence
            </h1>
            <p className="mt-6 max-w-md text-base font-light leading-relaxed text-cream/70">
              Learn the fundamentals, develop real technique, and start
              expressing yourself through the guitar with clear, practical
              lessons. Turn simple notes into expressive music.
            </p>
            <div className="mt-8">
              <WhatsAppButton />
            </div>
          </div>
          <Image
            src={heroPortrait}
            alt="Jin playing electric guitar"
            className="aspect-[3/4] w-48 max-w-full justify-self-center rounded-2xl object-cover sm:w-64 md:w-full md:max-w-sm"
            priority
          />
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 sm:grid-cols-3">
            {qualifications.map((q) => (
              <div key={q.org} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-36 items-center justify-center">
                  <Image
                    src={q.logo}
                    alt={`${q.org} logo`}
                    width={144}
                    height={56}
                    className="h-full w-full object-contain opacity-80 mix-blend-multiply"
                  />
                </div>
                <p className="text-sm text-latte">{q.credential}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center">
          <h2 className="font-serif text-2xl text-clay md:text-3xl">
            Ready to start learning guitar?
          </h2>
          <p className="max-w-lg text-latte">
            Beginner-friendly · All genres welcome · Acoustic &amp; Electric ·
            Home visits available · Flexible scheduling
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <WhatsAppButton />
            <Link
              href="/about"
              className="inline-block rounded-full border border-terracotta px-7 py-3 text-sm font-medium text-terracottaDark transition hover:bg-terracotta/10"
            >
              Meet your instructor
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
