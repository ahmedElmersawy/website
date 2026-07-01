"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { HeroFallback } from "./HeroFallback";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <HeroFallback />,
});

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")),
    );
  } catch {
    return false;
  }
}

export function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [canUse3D, setCanUse3D] = useState(false);

  useEffect(() => {
    const isWideEnough = window.innerWidth >= 768;
    setCanUse3D(isWideEnough && !prefersReducedMotion && supportsWebGL());
  }, [prefersReducedMotion]);

  return (
    <section className="relative flex min-h-[92vh] w-full items-center overflow-hidden">
      <div className="absolute inset-0">
        {canUse3D ? <HeroScene /> : <HeroFallback />}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-paper/10 via-transparent to-paper" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-14">
          {/* Headshot */}
          <div
            className="animate-fade-up flex-shrink-0"
            style={{ animationDelay: "0.04s" }}
          >
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-gold/40 shadow-lg md:h-44 md:w-44">
              <Image
                src="/images/headshot.jpg"
                alt="Ahmed Elmersawy, undergraduate researcher at Purdue University"
                fill
                sizes="(max-width: 768px) 128px, 176px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Text content */}
          <div className="max-w-2xl">
            <p className="animate-fade-up font-mono text-sm font-medium uppercase tracking-[0.2em] text-gold">
              {site.degree}
            </p>
            <h1
              className="animate-fade-up mt-4 font-display text-5xl font-medium tracking-tight text-ink sm:text-6xl lg:text-7xl"
              style={{ animationDelay: "0.08s" }}
            >
              {site.name}
            </h1>
            <p
              className="animate-fade-up mt-3 text-lg text-muted"
              style={{ animationDelay: "0.16s" }}
            >
              {site.university}
            </p>
            <p
              className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-ink/90"
              style={{ animationDelay: "0.24s" }}
            >
              {site.tagline}
            </p>

            <div
              className="animate-fade-up mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "0.32s" }}
            >
              <Link
                href="/research"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-paper transition-transform hover:scale-[1.03]"
              >
                Explore Research
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 rounded-full border border-navy-border px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-gold hover:text-gold"
              >
                View CV
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted-dim">
        <ArrowDown size={18} className="animate-float" aria-hidden="true" />
        <span className="sr-only">Scroll to learn more</span>
      </div>
    </section>
  );
}
