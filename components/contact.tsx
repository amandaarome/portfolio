"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field"
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Linkedin } from "lucide-react"
import { Spinner } from "@/components/ui/spinner"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xjglyong"

const contactInfo = [
  { icon: Mail, label: "Email", value: "amandaarome@gmail.com", href: "mailto:amandaarome@gmail.com" },
  { icon: Phone, label: "Phone", value: "+234 9152 617 879", href: "tel:+2349152617879" },
  { icon: MapPin, label: "Location", value: "Rivers State, Nigeria", href: null },
]

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/specialll_a" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
]

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })

      if (res.ok) {
        setIsSubmitted(true)
        form.reset()
      } else {
        const data = await res.json().catch(() => null)
        const message =
          data?.errors?.map((err: { message: string }) => err.message).join(", ") ??
          "Something went wrong. Please try again."
        setError(message)
      }
    } catch {
      setError("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/25 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-accent/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/15 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Contact</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4 text-balance">Let&apos;s Work Together</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ready to bring your vision to life? Get in touch and let&apos;s discuss your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg backdrop-blur-sm">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-medium hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary/80 backdrop-blur-sm rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border">
              <h4 className="font-semibold mb-2">Quick Response Time</h4>
              <p className="text-sm text-muted-foreground">
                I typically respond to inquiries within 24 hours. For urgent projects, feel free to call or DM on Instagram @specialll_a.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">Thank you for reaching out. I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor="name">Name</FieldLabel>
                      <Input id="name" name="name" placeholder="Your name" required />
                    </Field>
                  </FieldGroup>
                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor="email">Email</FieldLabel>
                      <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                    </Field>
                  </FieldGroup>
                </div>

                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="project-type">Project Type</FieldLabel>
                    <Input id="project-type" name="project-type" placeholder="e.g., Short Form Edit, Long Form Edit, Mobile Videography" />
                  </Field>
                </FieldGroup>

                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="budget">Budget Range (Optional)</FieldLabel>
                    <Input id="budget" name="budget" placeholder="e.g., $100 - $200" />
                  </Field>
                </FieldGroup>

                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="message">Message</FieldLabel>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={4}
                      required
                    />
                  </Field>
                </FieldGroup>

                {error && (
                  <p className="text-sm text-destructive" role="alert">
                    {error}
                  </p>
                )}

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Spinner className="mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
