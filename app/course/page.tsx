import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";
import instructorPortrait from "@/public/images/instructor-portrait.jpg";
import signature from "@/public/images/signature.jpg";

const stages = [
  {
    number: "Stage 1",
    title: "Building the Foundation",
    points: [
      "Understanding the fundamentals",
      "Essential guitar skills",
      "Tips for beginners",
    ],
  },
  {
    number: "Stage 2",
    title: "Developing your Technique",
    points: [
      "Strengthen control",
      "Develop better accuracy",
      "Gain strong musicality",
    ],
  },
  {
    number: "Stage 3",
    title: "Playing Real Music",
    points: [
      "Learn your favourite songs",
      "Play with feel",
      "Create your own solos",
    ],
  },
  {
    number: "Stage 4",
    title: "Finding your Voice and Style",
    points: [
      "Develop your own style",
      "Understand your influences",
      "Experiment with musical ideas",
    ],
  },
];

const pricing = [
  { duration: "45 minutes", price: "$50" },
  { duration: "60 minutes", price: "$60" },
];

export default function CoursePage() {
  return (
    <main className="bg-cream">
      <section className="bg-charcoal">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.6fr] md:py-28">
          <Image
            src={instructorPortrait}
            alt="Jin, guitar instructor, seated with an electric guitar"
            className="mx-auto aspect-[467/747] w-48 max-w-full rounded-2xl object-cover sm:w-56 md:mx-0 md:w-full"
          />
          <div>
            <span className="mb-4 inline-block rounded-full bg-cream/10 px-4 py-1 text-xs font-medium uppercase tracking-widest text-terracotta">
              Your Instructor
            </span>
            <h1 className="font-serif text-3xl text-cream md:text-4xl">
              Hi, I&apos;m Jin
            </h1>
            <p className="mt-6 max-w-md text-base font-light leading-relaxed text-cream/70">
              A guitarist and drummer passionate about expressive, melodic
              playing. My teaching focuses on strong fundamentals, musical
              understanding, and helping students turn technique into real
              musical expression.
            </p>
            <p className="mt-4 max-w-md text-base font-light leading-relaxed text-cream/70">
              My goal is to help you build confidence on the guitar and find
              your own voice on the instrument.
            </p>
            <Image
              src={signature}
              alt="Jin's signature"
              className="mt-6 h-14 w-auto mix-blend-screen invert"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <h2 className="mb-3 font-serif text-2xl text-clay md:text-3xl">
          What You&apos;ll Learn
        </h2>
        <div className="mb-12 h-[3px] w-12 rounded bg-terracotta" />

        <div className="grid gap-6 sm:grid-cols-2">
          {stages.map((stage) => (
            <div
              key={stage.number}
              className="rounded-2xl border border-terracotta/20 bg-sand p-8"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-terracottaDark">
                {stage.number}
              </span>
              <h3 className="mt-2 font-serif text-xl text-clay">
                {stage.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-latte">
                {stage.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-terracotta">&bull;</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center md:py-24">
          <h2 className="font-serif text-2xl text-clay md:text-3xl">
            Lesson Pricing
          </h2>
          <div className="mx-auto mt-3 mb-10 h-[3px] w-12 rounded bg-terracotta" />
          <div className="mx-auto grid max-w-md gap-6 sm:grid-cols-2">
            {pricing.map((p) => (
              <div
                key={p.duration}
                className="rounded-2xl border border-terracotta/20 bg-cream p-8"
              >
                <p className="font-serif text-3xl text-clay">{p.price}</p>
                <p className="mt-1 text-sm text-latte">{p.duration} lesson</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <WhatsAppButton label="Ask about lesson availability" />
          </div>
        </div>
      </section>
    </main>
  );
}
