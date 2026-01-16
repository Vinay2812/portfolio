"use client";

import { cn } from "@/lib/utils";
import { experiences } from "@/constants";
import { SectionWrapper } from "@/components/shared";
import { ImageWithFallback } from "@/components/shared";
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { TextHighlighter } from "@/components/ui/text-highlighter";

function highlightMetrics(text: string, baseDelay: number = 0) {
  // Pattern to match metrics: percentages, dollar amounts, revenue, days, numbers with +
  const pattern = /(\$[\d,]+\+?|\d+[-–]\d+%|\d+%|\d+\+?\s*(?:million|days|INR)|\d+\+)/gi;

  const parts = text.split(pattern);
  let matchIndex = 0;

  return parts.map((part, index) => {
    if (pattern.test(part)) {
      pattern.lastIndex = 0; // Reset regex
      return (
        <TextHighlighter key={index} delay={baseDelay + matchIndex++ * 0.1}>
          {part}
        </TextHighlighter>
      );
    }
    return part;
  });
}

export function Experience() {
  return (
    <SectionWrapper id="work" className="relative">
      {/* Background Pattern */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className="absolute inset-0 -z-10 opacity-50"
      />

      <BlurFade delay={0.1}>
        <p className="section-subheading">What I have done so far</p>
        <h2 className="section-heading mt-2">Work Experience</h2>
      </BlurFade>

      <div className="relative mt-12">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-white/10 md:block" />

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <BlurFade key={index} delay={0.2 + index * 0.15}>
              <div className="relative md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 hidden size-4 rounded-full border-2 border-white/50 bg-background md:block" />

                <MagicCard
                  className="relative overflow-hidden p-0"
                  gradientColor="rgba(120, 119, 198, 0.3)"
                >
                  <BorderBeam size={300} duration={15} delay={index * 2} />

                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                      {/* Company Logo */}
                      <div className="flex-shrink-0">
                        <ImageWithFallback
                          src={experience.icon}
                          alt={experience.company_name}
                          fallbackText={experience.company_name}
                          width={64}
                          height={64}
                          className="rounded-xl"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <h3 className="text-xl font-bold text-white">
                              {experience.title}
                            </h3>
                            <p className="text-base font-medium text-muted-foreground">
                              {experience.company_name}
                            </p>
                          </div>
                          <span className="text-sm font-medium text-muted-foreground">
                            {experience.date}
                          </span>
                        </div>

                        {/* Points */}
                        <ul className="mt-4 space-y-3">
                          {experience.points.map((point, pointIndex) => (
                            <li
                              key={pointIndex}
                              className="flex items-start gap-3 text-sm text-muted-foreground"
                            >
                              <span className="mt-1.5 size-1.5 flex-shrink-0 rounded-full bg-white/50" />
                              <span>{highlightMetrics(point, 0.3 + pointIndex * 0.1)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </MagicCard>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
