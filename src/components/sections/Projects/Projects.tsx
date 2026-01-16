"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { projects } from "@/constants";
import { SectionWrapper } from "@/components/shared";
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShinyButton } from "@/components/ui/shiny-button";
import { BlurFade } from "@/components/ui/blur-fade";
import { HyperText } from "@/components/ui/hyper-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { stringToSolidColor, getInitials, getContrastColor } from "@/utils/colorUtils";
import { Github, ExternalLink, X } from "lucide-react";

type Project = (typeof projects)[number];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Lock body scroll and handle escape key when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setSelectedProject(null);
        }
      };
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("keydown", handleEscape);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedProject]);

  const closeModal = () => setSelectedProject(null);

  return (
    <SectionWrapper id="projects" className="relative">
      <BlurFade delay={0.1}>
        <p className="section-subheading">My Work</p>
        <h2 className="section-heading mt-2">Projects</h2>
      </BlurFade>

      <BlurFade delay={0.2}>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          Here are some of the projects I&apos;ve worked on. Each project showcases
          different skills and technologies I&apos;ve learned along the way.
        </p>
      </BlurFade>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          const bgColor = stringToSolidColor(project.name);
          const textColor = getContrastColor(bgColor);
          const initials = getInitials(project.name);

          return (
            <BlurFade key={project.name} delay={0.3 + index * 0.1}>
              <MagicCard
                className="group relative flex h-full cursor-pointer flex-col overflow-hidden p-0"
                gradientColor="rgba(120, 119, 198, 0.3)"
                onClick={() => setSelectedProject(project)}
              >
                <BorderBeam size={200} duration={12} delay={index * 3} />

                {/* Project Header with Initial */}
                <div
                  className="flex h-40 items-center justify-center"
                  style={{ backgroundColor: bgColor }}
                >
                  <span
                    className="text-5xl font-bold"
                    style={{ color: textColor }}
                  >
                    {initials}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-white">
                    <HyperText duration={800} className="text-xl font-bold">{project.name}</HyperText>
                  </h3>

                  <p className="mt-3 min-h-26 text-sm text-muted-foreground">
                    {project.description.join(". ")}.
                  </p>

                  {/* Tags - fixed height with overflow hidden */}
                  <div className="mt-4 flex h-8 flex-wrap gap-2 overflow-hidden">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="mt-auto flex gap-3 pt-4">
                    <a
                      href={project.source_code_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                    >
                      <Github className="size-4" />
                    </a>
                    <a
                      href={project.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                    >
                      <ExternalLink className="size-4" />
                    </a>
                  </div>
                </div>
              </MagicCard>
            </BlurFade>
          );
        })}
      </div>

      {/* Project Detail Modal - rendered via portal to avoid transform issues */}
      {selectedProject &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={closeModal}
          >
            <div
              className="relative flex max-h-[calc(100vh-2rem)] w-full max-w-2xl flex-col overflow-hidden rounded-xl border border-white/10 bg-black-100 sm:rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute right-2 top-2 z-10 rounded-full bg-white/10 p-1.5 text-white transition-colors hover:bg-white/20 sm:right-4 sm:top-4 sm:p-2"
              >
                <X className="size-4 sm:size-5" />
              </button>

              {/* Header */}
              <div
                className="flex h-32 shrink-0 items-center justify-center sm:h-48"
                style={{ backgroundColor: stringToSolidColor(selectedProject.name) }}
              >
                <span
                  className="text-5xl font-bold sm:text-7xl"
                  style={{ color: getContrastColor(stringToSolidColor(selectedProject.name)) }}
                >
                  {getInitials(selectedProject.name)}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-8">
                <h2 className="text-xl font-bold text-white sm:text-2xl">{selectedProject.name}</h2>

                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
                  {selectedProject.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                {/* All Tags */}
                <div className="mt-4 sm:mt-6">
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/60 sm:mb-3 sm:text-sm">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-accent/20 px-2.5 py-1 text-xs font-medium text-white sm:px-4 sm:py-1.5 sm:text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
                  <a
                    href={selectedProject.source_code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <ShimmerButton
                      className="w-full py-2.5 text-sm sm:py-3 sm:text-base"
                      background="rgba(255, 255, 255, 0.1)"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <Github className="size-4 sm:size-5" />
                        Source Code
                      </span>
                    </ShimmerButton>
                  </a>
                  <a
                    href={selectedProject.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <ShimmerButton
                      className="w-full py-2.5 text-sm sm:py-3 sm:text-base"
                      background="rgba(145, 94, 255, 0.8)"
                      shimmerColor="rgba(255, 255, 255, 0.5)"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <ExternalLink className="size-4 sm:size-5" />
                        Live Demo
                      </span>
                    </ShimmerButton>
                  </a>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </SectionWrapper>
  );
}
