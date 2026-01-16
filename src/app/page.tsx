import {
  Navbar,
  Hero,
  Experience,
  Projects,
  Tech,
  Social,
  Contact,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="relative bg-primary">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Tech />
      <Social />
      <Contact />

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-6 text-center sm:px-16">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Vinay Sarda. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
