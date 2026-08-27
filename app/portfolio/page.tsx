"use client";

import { useState } from "react";

const tiktokIds = [
  "7618933985531464978",
  "7613028144014118152",
  "7608551251009096968",
];

const youtubeIds = ["fvzX8SeMqcI", "tnDZ_-mCom8"];

function SectionLabel({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8 flex flex-col items-start gap-3">
      <span className="inline-block rounded-full bg-sand px-4 py-1 text-xs font-medium uppercase tracking-widest text-latte">
        {eyebrow}
      </span>
      <h2 className="font-serif text-2xl text-clay md:text-3xl">{title}</h2>
      <div className="h-[3px] w-10 rounded bg-terracotta" />
      <p className="max-w-lg text-sm text-latte">{description}</p>
    </div>
  );
}

function ClickToActivateOverlay({
  active,
  onActivate,
}: {
  active: boolean;
  onActivate: () => void;
}) {
  if (active) return null;
  return (
    <button
      type="button"
      aria-label="Click to interact with this video"
      onClick={onActivate}
      className="absolute inset-0 z-20 cursor-pointer bg-transparent"
    />
  );
}

export default function PortfolioPage() {
  const [activeEmbeds, setActiveEmbeds] = useState<Set<string>>(new Set());

  const activate = (id: string) =>
    setActiveEmbeds((prev) => new Set(prev).add(id));

  const deactivate = (id: string) =>
    setActiveEmbeds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });

  return (
    <main className="bg-cream">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <h1 className="mb-10 font-serif text-3xl text-clay md:text-4xl">
          My Portfolio
        </h1>

        <section className="mb-20">
          <SectionLabel
            eyebrow="Short Videos"
            title="TikTok"
            description="Quick clips of guitar playing, production tips, and musical moments."
          />
          <div className="grid gap-6 sm:grid-cols-3">
            {tiktokIds.map((id) => {
              const active = activeEmbeds.has(id);
              return (
                <div
                  key={id}
                  className="relative h-[580px] w-full max-w-[325px] justify-self-center transition-transform duration-300 ease-out hover:z-10 hover:scale-105"
                  onMouseLeave={() => deactivate(id)}
                >
                  <iframe
                    src={`https://www.tiktok.com/embed/v2/${id}`}
                    className={`h-full w-full rounded-2xl border-none ${
                      active ? "" : "pointer-events-none"
                    }`}
                    allowFullScreen
                  />
                  <ClickToActivateOverlay
                    active={active}
                    onActivate={() => activate(id)}
                  />
                </div>
              );
            })}
          </div>
        </section>

        <section className="mb-20">
          <SectionLabel
            eyebrow="YouTube"
            title="Featured Videos"
            description="Longer form content, covers, and original music from the channel."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {youtubeIds.map((id) => {
              const active = activeEmbeds.has(id);
              return (
                <div
                  key={id}
                  className="relative aspect-video overflow-hidden rounded-2xl transition-transform duration-300 ease-out hover:z-10 hover:scale-105"
                  onMouseLeave={() => deactivate(id)}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    className={`absolute inset-0 h-full w-full border-none ${
                      active ? "" : "pointer-events-none"
                    }`}
                    allowFullScreen
                  />
                  <ClickToActivateOverlay
                    active={active}
                    onActivate={() => activate(id)}
                  />
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <SectionLabel
            eyebrow="Live Performance"
            title="Recital"
            description="A recorded live performance showcasing the full range of the guitar."
          />
          <div
            className="relative transition-transform duration-300 ease-out hover:z-10 hover:scale-105"
            onMouseLeave={() => deactivate("recital")}
          >
            <video
              controls
              className={`aspect-video w-full rounded-2xl bg-charcoal ${
                activeEmbeds.has("recital") ? "" : "pointer-events-none"
              }`}
            >
              <source src="/videos/recital.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <ClickToActivateOverlay
              active={activeEmbeds.has("recital")}
              onActivate={() => activate("recital")}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
