"use client";

import { cn } from "@/lib/utils";
import { services, stats } from "@/constants";
import { SectionWrapper } from "@/components/shared";
import { MagicCard } from "@/components/ui/magic-card";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextReveal } from "@/components/ui/text-reveal";
import Image from "next/image";

export function About() {
  return (
    <SectionWrapper id="about" className="relative">
      <BlurFade delay={0.1}>
        <p className="section-subheading">Introduction</p>
        <h2 className="section-heading mt-2">About Me</h2>
      </BlurFade>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        {/* Left - Text Content */}
        <div className="space-y-8">
          <BlurFade delay={0.2}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I&apos;m a passionate Full Stack Software Engineer with expertise in building
              scalable web applications. With a strong foundation in both frontend and
              backend technologies, I specialize in creating seamless user experiences
              while ensuring robust and efficient server-side solutions.
            </p>
          </BlurFade>

          <BlurFade delay={0.3}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              My journey in software development has equipped me with skills in React,
              Next.js, Node.js, and cloud technologies. I love tackling complex problems
              and turning ideas into reality through clean, maintainable code.
            </p>
          </BlurFade>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 pt-4 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <BlurFade key={stat.label} delay={0.4 + index * 0.1}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white sm:text-4xl">
                    <NumberTicker value={stat.value} delay={0.5} />
                    <span>+</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>

        {/* Right - Image */}
        <BlurFade delay={0.3}>
          <div className="relative flex items-center justify-center">
            <div className="relative h-80 w-80 overflow-hidden rounded-2xl border border-white/10 sm:h-96 sm:w-96">
              <Image
                src="/about.png"
                alt="About Vinay"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </BlurFade>
      </div>

      {/* Services */}
      <div className="mt-20">
        <BlurFade delay={0.5}>
          <h3 className="mb-8 text-center text-2xl font-bold text-white">What I Do</h3>
        </BlurFade>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
    </SectionWrapper>
  );
}
