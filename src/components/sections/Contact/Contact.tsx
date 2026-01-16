"use client";

import { useState, useRef } from "react";
import { SectionWrapper } from "@/components/shared";
import { MagicCard } from "@/components/ui/magic-card";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Confetti, ConfettiRef } from "@/components/ui/confetti";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send } from "lucide-react";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const confettiRef = useRef<ConfettiRef>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          from_name: form.name,
          to_name: "Vinay",
          from_email: form.email,
          to_email: "vinaysarda2812@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );

      setSuccess(true);
      confettiRef.current?.fire({});
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper id="contact" className="relative pb-32">
      <Confetti
        ref={confettiRef}
        className="pointer-events-none absolute left-0 top-0 z-50 size-full"
      />

      <BlurFade delay={0.1}>
        <p className="section-subheading text-center">Get in touch</p>
        <h2 className="section-heading mt-2 text-center">Contact Me</h2>
      </BlurFade>

      <BlurFade delay={0.2}>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>
      </BlurFade>

      <div className="mt-12 grid gap-8 lg:grid-cols-5">
        {/* Contact Info */}
        <div className="space-y-6 lg:col-span-2">
          <BlurFade delay={0.3}>
            <MagicCard
              className="p-6"
              gradientColor="rgba(120, 119, 198, 0.3)"
            >
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-accent/20">
                  <Mail className="size-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <a
                    href="mailto:vinaysarda2812@gmail.com"
                    className="mt-1 text-sm text-muted-foreground transition-colors hover:text-white"
                  >
                    vinaysarda2812@gmail.com
                  </a>
                </div>
              </div>
            </MagicCard>
          </BlurFade>

          <BlurFade delay={0.4}>
            <MagicCard
              className="p-6"
              gradientColor="rgba(120, 119, 198, 0.3)"
            >
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-accent/20">
                  <MapPin className="size-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Location</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    India
                  </p>
                </div>
              </div>
            </MagicCard>
          </BlurFade>

          <BlurFade delay={0.5}>
            <MagicCard
              className="p-6"
              gradientColor="rgba(120, 119, 198, 0.3)"
            >
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-accent/20">
                  <Send className="size-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Let&apos;s Talk</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Available for freelance projects and full-time opportunities
                  </p>
                </div>
              </div>
            </MagicCard>
          </BlurFade>
        </div>

        {/* Contact Form */}
        <BlurFade delay={0.3} className="lg:col-span-3 overflow-hidden">
          <BorderBeam size={300} duration={15} />
          <MagicCard
            className="relative overflow-hidden p-4 sm:p-6 lg:p-8"
            gradientColor="rgba(120, 119, 198, 0.3)"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="mt-2 w-full rounded-lg border-2 border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="mt-2 w-full rounded-lg border-2 border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="mt-2 w-full resize-none rounded-lg border-2 border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                />
              </div>

              <ShimmerButton
                type="submit"
                className="w-full py-3"
                background="rgba(145, 94, 255, 0.8)"
                shimmerColor="rgba(255, 255, 255, 0.5)"
                disabled={loading}
              >
                {loading ? "Sending..." : success ? "Message Sent!" : "Send Message"}
              </ShimmerButton>

              {success && (
                <p className="text-center text-sm text-green-400">
                  Thank you! I&apos;ll get back to you soon.
                </p>
              )}
            </form>
          </MagicCard>
        </BlurFade>
      </div>
    </SectionWrapper>
  );
}
