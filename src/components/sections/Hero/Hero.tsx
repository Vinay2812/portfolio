"use client";

import { services, stats } from "@/constants";
import { Particles } from "@/components/ui/particles";
import { RetroGrid } from "@/components/ui/retro-grid";
import { Meteors } from "@/components/ui/meteors";
import { LineShadowText } from "@/components/ui/line-shadow-text";
import { TextHighlighter } from "@/components/ui/text-highlighter";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { PulsatingButton } from "@/components/ui/pulsating-button";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { NumberTicker } from "@/components/ui/number-ticker";
import Image from "next/image";

export function Hero() {
  return (
    <section id="about" className="relative min-h-screen w-full overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <Particles
          className="absolute inset-0"
          quantity={80}
          color="#ffffff"
          staticity={50}
        />
        <RetroGrid className="opacity-30" />
        <Meteors number={15} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:px-16 lg:py-32">
        {/* Hero + About Grid */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Hero Intro */}
          <div className="text-center lg:text-left">
            <BlurFade delay={0.2}>
              <p className="mb-4 text-lg text-muted-foreground">Hi, I&apos;m</p>
            </BlurFade>

            <BlurFade delay={0.3}>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                <LineShadowText shadowColor="rgba(158, 122, 255, 0.5)">
                  Vinay Sarda
                </LineShadowText>
              </h1>
            </BlurFade>

            <BlurFade delay={0.4}>
              <div className="mb-6 flex flex-wrap items-center justify-center gap-2 text-lg text-muted-foreground sm:text-xl md:text-2xl lg:justify-start">
                <span>I&apos;m a</span>
                <TypingAnimation
                  words={[
                    "Full Stack Developer",
                    "Backend Developer",
                    "Cloud Engineer",
                    "Problem Solver",
                  ]}
                  className="font-semibold text-white"
                  loop
                  typeSpeed={80}
                  deleteSpeed={40}
                  pauseDelay={2000}
                />
              </div>
            </BlurFade>

            <BlurFade delay={0.5}>
              <p className="mb-8 max-w-xl text-base text-muted-foreground sm:text-lg lg:mx-0">
                I&apos;m a passionate{" "}
                <TextHighlighter delay={0.6}>
                  Full Stack
                </TextHighlighter>
                <TextHighlighter delay={0.6}>{" "}Software </TextHighlighter>{" "}
                <TextHighlighter delay={0.6}>Engineer</TextHighlighter>{" "}
                with expertise in building scalable web applications. I specialize in creating{" "}
                <TextHighlighter delay={0.8}>
                  seamless user experiences
                </TextHighlighter>{" "}
                while ensuring robust and efficient server-side solutions.
              </p>
            </BlurFade>

            <BlurFade delay={0.6}>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <a href="#contact">
                  <PulsatingButton
                    pulseColor="#9E7AFF"
                    className="px-8 py-3 text-base font-medium"
                  >
                    Get in Touch
                  </PulsatingButton>
                </a>
                <a href="#projects">
                  <button className="rounded-full border border-white/20 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-white/10">
                    View My Work
                  </button>
                </a>
              </div>
            </BlurFade>

            {/* Stats */}
            <BlurFade delay={0.7}>
              <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white sm:text-3xl">
                      <NumberTicker value={stat.value} delay={0.5 + index * 0.1} />
                      <span>+</span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </BlurFade>
          </div>

          {/* Right - Image */}
          <BlurFade delay={0.4}>
            <div className="relative flex items-center justify-center">
              <div className="relative h-72 w-72 overflow-hidden rounded-2xl border border-white/10 sm:h-96 sm:w-96 lg:h-[450px] lg:w-[450px]">
                <Image
                  src="/about.png"
                  alt="About Vinay"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </BlurFade>
        </div>

        {/* Services */}
        <div className="mt-20 lg:mt-32">
          <BlurFade delay={0.5}>
            <h3 className="mb-8 text-center text-2xl font-bold text-white">What I Do</h3>
          </BlurFade>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <BlurFade key={service.title} delay={0.6 + index * 0.1}>
                <MagicCard
                  className="group cursor-pointer p-6 text-center"
                  gradientColor="rgba(120, 119, 198, 0.3)"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="flex size-16 items-center justify-center rounded-full bg-white/5">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-white transition-colors group-hover:text-primary-foreground">
                    {service.title}
                  </h4>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
