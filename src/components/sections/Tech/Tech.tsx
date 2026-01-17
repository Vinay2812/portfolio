"use client";

import { technologies } from "@/constants";
import { SectionWrapper } from "@/components/shared";
import { IconCloud } from "@/components/ui/icon-cloud";
import { BlurFade } from "@/components/ui/blur-fade";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import Image from "next/image";
import { cn } from "@/lib/utils";

const techList = Object.entries(technologies);

// Get image URLs for IconCloud
const techImages = Object.values(technologies).map(tech => tech.image);

export function Tech() {
  return (
    <SectionWrapper id="tech" className="relative overflow-hidden">
      {/* Background */}
      <FlickeringGrid
        className="absolute inset-0 -z-10 opacity-30"
        squareSize={4}
        gridGap={6}
        color="#6366f1"
        maxOpacity={0.3}
        flickerChance={0.1}
      />

      <BlurFade delay={0.1}>
        <p className="section-subheading text-center">My Skills</p>
        <h2 className="section-heading mt-2 text-center">Technologies</h2>
      </BlurFade>

      <BlurFade delay={0.2}>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
          I work with a variety of technologies to build modern, scalable applications.
        </p>
      </BlurFade>

      <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Icon Cloud - Hidden on mobile */}
        <BlurFade delay={0.3} className="hidden lg:block">
          <div className="flex items-center justify-center">
            <div className="relative flex size-full max-w-md items-center justify-center overflow-hidden rounded-lg">
              <IconCloud images={techImages} />
            </div>
          </div>
        </BlurFade>

        {/* Tech Grid */}
        <BlurFade delay={0.4}>
          <div className="grid grid-cols-3 gap-2 xs:gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4">
            {techList.map(([name, tech]) => (
              <div
                key={name}
                className="group flex flex-col items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 p-2 transition-all hover:border-accent/50 hover:bg-white/10 sm:gap-2 sm:rounded-xl sm:p-3"
              >
                <div className="relative size-6 transition-transform group-hover:scale-110 sm:size-8">
                  <Image
                    src={tech.image}
                    alt={name}
                    fill
                    className={"object-contain"}
                    style={{
                      backgroundColor: tech.backgroundColor,
                    }}

                  />
                </div>
                <span className="line-clamp-1 text-center text-[10px] font-medium text-muted-foreground group-hover:text-white sm:text-xs">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </SectionWrapper>
  );
}
