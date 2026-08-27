import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import aboutPortrait from "@/public/images/about-portrait.png";

const highlights = [
  "Beginner-friendly",
  "All genres welcome",
  "Acoustic & Electric",
  "Home visits available",
  "Flexible scheduling",
];

export default function AboutPage() {
  return (
    <main className="bg-cream">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.6fr] md:py-28">
        <div className="flex flex-col items-center">
          <Image
            src={aboutPortrait}
            alt="Jin, guitar teacher in Singapore"
            className="aspect-[1024/1536] w-48 max-w-full rounded-2xl object-cover sm:w-56 md:w-full"
          />
        </div>

        <div>
          <span className="mb-4 inline-block rounded-full bg-sand px-4 py-1 text-xs font-medium uppercase tracking-widest text-latte">
            Guitar Teacher · Singapore
          </span>
          <h1 className="font-serif text-3xl text-clay md:text-4xl">
            Hi, I&apos;m Jin
          </h1>
          <p className="mt-2 font-serif italic text-latte">
            Making music feel like home, one string at a time.
          </p>
          <div className="mt-6 h-[3px] w-12 rounded bg-terracotta" />

          <div className="mt-6 space-y-4 text-base font-light leading-relaxed text-clay/90">
            <p>
              Music has always been more than just a hobby for me. It has
              been a way to express emotions, process life, and connect with
              people. Over the years, the guitar became a huge part of my
              life, not just as an instrument to play, but as something I
              continually study, explore, and grow with.
            </p>
            <p>
              I&apos;m a guitarist and teacher based in Singapore, and my
              goal is to help students develop a genuine relationship with
              the instrument. While learning songs is important, I believe
              the real goal of learning guitar is to understand music and
              eventually make the instrument feel like an extension of
              yourself.
            </p>
            <p>
              I also enjoy studying the deeper side of music, including
              harmony, improvisation, and songwriting. Exploring things like
              chord progressions, scales, and musical phrasing has helped me
              better understand how music works, and I enjoy sharing that
              knowledge with students in a way that is practical and easy to
              apply.
            </p>
            <p>
              When I teach, my focus is not only on helping students play
              songs, but also on building strong fundamentals and musical
              awareness. My goal is to help students become confident
              players who understand what they are doing, rather than just
              memorizing shapes on the fretboard.
            </p>
            <p>
              Outside of music, I also train{" "}
              <strong className="font-medium text-clay">
                Brazilian Jiu-Jitsu
              </strong>
              . Martial arts has taught me a lot about discipline, patience,
              and continuous improvement. In many ways, learning Jiu-Jitsu is
              very similar to learning guitar &mdash; progress happens
              gradually through consistent practice and small improvements
              over time.
            </p>
            <p>
              Both music and martial arts are long journeys, and they have
              shaped the way I approach learning and teaching. Ultimately, my
              goal as a teacher is simple: to help people enjoy the process
              of learning guitar and to guide them toward becoming the kind
              of musician they want to be.
            </p>
            <p>
              Whether you&apos;re picking up the guitar for the first time or
              looking to take your playing to the next level, I&apos;m here
              to help you grow as a musician.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {highlights.map((h) => (
              <span
                key={h}
                className="rounded-full border border-terracotta/40 bg-sand px-4 py-1 text-xs text-latte"
              >
                {h}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <WhatsAppButton label="Book a free trial lesson" />
            <Link
              href="/portfolio"
              className="inline-block rounded-full border border-terracotta px-7 py-3 text-sm font-medium text-terracottaDark transition hover:bg-terracotta/10"
            >
              See my portfolio
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
