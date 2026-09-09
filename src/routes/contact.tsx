import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Header } from "../components/Header";

import { FadeIn } from "../components/FadeIn";
import { useEffect } from "react";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background">
      <Header />

      <main className="flex-grow pt-24 pb-16 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <span className="text-sm font-bold uppercase tracking-widest text-primary mb-4 block">
                Get In Touch
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-6">
                Contact Us
              </h1>
              <p className="text-lg text-muted-foreground">
                Have a question, want to volunteer, or just want to share your
                thoughts? We'd love to hear from you. Fill out the form below or
                reach out directly.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2 space-y-8">
              <FadeIn delay={0.1}>
                <div className="bg-muted/30 p-8 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          Office Address
                        </h4>
                        <p className="text-muted-foreground">
                          <br />
                          Zangon Kataf, Kaduna State
                          <br />
                          Nigeria
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          Phone
                        </h4>
                        <p className="text-muted-foreground">
                          +234 (0) 800 000 0000
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          Email
                        </h4>
                        <p className="text-muted-foreground">
                          info@honamosmagaji.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-3">
              <FadeIn delay={0.2}>
                <div className="bg-white p-8 rounded-lg border border-border shadow-sm">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">
                    Send a Message{" "}
                    <span className="text-sm text-muted-foreground">
                      {" "}
                      (form is currently disabled)
                    </span>
                  </h3>
                  <form
                    className="space-y-6"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="firstName"
                          className="text-sm font-medium text-foreground"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                          placeholder="John"
                          disabled
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="lastName"
                          className="text-sm font-medium text-foreground"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                          placeholder="Doe"
                          disabled
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email Address
                      </label>
                      <input
                        disabled
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium text-foreground"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        disabled
                      >
                        <option value="general">General Inquiry</option>
                        <option value="volunteer">Volunteer Sign-up</option>
                        <option value="media">Media & Press</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-foreground"
                      >
                        Message
                      </label>
                      <textarea
                        disabled
                        id="message"
                        rows={5}
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full h-12 flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors shadow-sm"
                      disabled
                    >
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
