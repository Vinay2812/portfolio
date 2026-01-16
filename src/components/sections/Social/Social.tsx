"use client";

import { cn } from "@/lib/utils";
import { socialLinks } from "@/constants";
import { SectionWrapper } from "@/components/shared";
import { ImageWithFallback } from "@/components/shared";
import { MagicCard } from "@/components/ui/magic-card";
import { Terminal } from "@/components/ui/terminal";
import { Globe } from "@/components/ui/globe";
import { BlurFade } from "@/components/ui/blur-fade";
import { DotPattern } from "@/components/ui/dot-pattern";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { ExternalLink } from "lucide-react";

export function Social() {
  return (
    <SectionWrapper id="social" className="relative overflow-hidden">
      {/* Background */}
      <DotPattern className="absolute inset-0 -z-10 opacity-20" />

      <BlurFade delay={0.1}>
        <p className="section-subheading text-center">Connect With Me</p>
        <h2 className="section-heading mt-2 text-center">Social Profiles</h2>
      </BlurFade>

      <BlurFade delay={0.2}>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
          Find me on various platforms. Let&apos;s connect and collaborate!
        </p>
      </BlurFade>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {/* Social Cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {socialLinks.map((social, index) => (
            <BlurFade key={social.id} delay={0.3 + index * 0.1}>
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <MagicCard
                  className="group h-full cursor-pointer p-6 transition-transform hover:scale-[1.02]"
                  gradientColor="rgba(120, 119, 198, 0.3)"
                >
                  <div className="flex items-start gap-4">
                    <ImageWithFallback
                      src={social.image}
                      alt={social.name}
                      fallbackText={social.name}
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <AnimatedShinyText className="text-lg font-semibold">
                          {social.name}
                        </AnimatedShinyText>
                        <ExternalLink className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {social.description}
                      </p>
                    </div>
                  </div>
                </MagicCard>
              </a>
            </BlurFade>
          ))}
        </div>

        {/* Globe */}
        <BlurFade delay={0.5}>
          <div className="relative flex h-80 items-center justify-center lg:h-full">
            <Globe className="top-0" />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">Global</p>
                <p className="text-sm text-muted-foreground">Available Worldwide</p>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>

      {/* Terminal */}
      <BlurFade delay={0.6}>
        <div className="mt-12">
          <Terminal>
            <div className="font-mono text-sm">
              <p className="text-muted-foreground">$ whoami</p>
              <p className="mt-1 text-white">Vinay Sarda - Full Stack Developer</p>
              <p className="mt-3 text-muted-foreground">$ cat skills.txt</p>
              <p className="mt-1 text-white">
                React, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB, AWS, GCP, Docker
              </p>
              <p className="mt-3 text-muted-foreground">$ cat achievements.txt</p>
              <p className="mt-1 text-white">850+ DSA Problems | 3+ Years Experience | 10+ Projects</p>
              <p className="mt-3 text-muted-foreground">$ echo &quot;Let&apos;s connect!&quot;</p>
              <p className="mt-1 text-green-400">Let&apos;s connect!</p>
            </div>
          </Terminal>
        </div>
      </BlurFade>
    </SectionWrapper>
  );
}
