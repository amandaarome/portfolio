import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/25 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-accent/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/15 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-2 text-balance uppercase tracking-wide">
            Pricing
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Video Editing — Rate Card 2026</p>
        </div>

        {/* Short Form Videos */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative p-8 rounded-2xl border border-border bg-card/80 backdrop-blur-sm overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            
            <h3 className="text-2xl md:text-3xl font-bold mb-2 uppercase tracking-wide">Short Form Videos</h3>
            <p className="text-muted-foreground italic mb-6">Social media content — Reels, TikToks, Shorts, Stories</p>
            
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 mb-4 pb-2 border-b border-primary/30">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Duration</span>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Standard Edit</span>
              <span className="text-xs uppercase tracking-wider text-primary">+ Motion Graphics / Kinetic Text</span>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Turnaround</span>
            </div>
            
            {/* Table Rows */}
            <div className="space-y-3">
              <div className="grid grid-cols-4 gap-4 py-2 border-b border-border/50">
                <span className="font-medium">Up to 30s</span>
                <span className="text-foreground">$50</span>
                <span className="text-primary font-semibold">$80</span>
                <span className="text-muted-foreground">Within 24 hrs</span>
              </div>
              <div className="grid grid-cols-4 gap-4 py-2 border-b border-border/50">
                <span className="font-medium">31s — 60s</span>
                <span className="text-foreground">$65</span>
                <span className="text-primary font-semibold">$100</span>
                <span className="text-muted-foreground">Within 24 hrs</span>
              </div>
              <div className="grid grid-cols-4 gap-4 py-2 border-b border-border/50">
                <span className="font-medium">1 min — 1:30</span>
                <span className="text-foreground">$75</span>
                <span className="text-primary font-semibold">$120</span>
                <span className="text-muted-foreground">24 — 48 hrs</span>
              </div>
              <div className="grid grid-cols-4 gap-4 py-2">
                <span className="font-medium">1:30 — 2 mins</span>
                <span className="text-foreground">$90</span>
                <span className="text-primary font-semibold">$140</span>
                <span className="text-muted-foreground">24 — 48 hrs</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-primary/10 border-l-4 border-primary rounded-r-lg">
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-semibold">Motion Graphics & Kinetic Text</span> include animated captions, dynamic transitions, overlays, and custom motion effects. These require additional editing time of 2—3 extra hours and are priced accordingly.
              </p>
            </div>
          </div>
        </div>

        {/* Long Form Videos */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative p-8 rounded-2xl border border-border bg-card/80 backdrop-blur-sm overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
            
            <h3 className="text-2xl md:text-3xl font-bold mb-2 uppercase tracking-wide">Long Form Videos</h3>
            <p className="text-muted-foreground italic mb-6">YouTube, documentaries, brand films, podcast edits, vlogs</p>
            
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 mb-4 pb-2 border-b border-primary/30">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Duration</span>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Standard Edit</span>
              <span className="text-xs uppercase tracking-wider text-primary">Advanced Edit (Dynamic Transition, Motion Graphics, Kinetic Texts, Video Effects)</span>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Turnaround</span>
            </div>
            
            {/* Table Rows */}
            <div className="space-y-3">
              <div className="grid grid-cols-4 gap-4 py-2 border-b border-border/50">
                <span className="font-medium">3 — 5 mins</span>
                <span className="text-foreground">$80</span>
                <span className="text-primary font-semibold">$130</span>
                <span className="text-muted-foreground">1 — 2 days</span>
              </div>
              <div className="grid grid-cols-4 gap-4 py-2 border-b border-border/50">
                <span className="font-medium">6 — 8 mins</span>
                <span className="text-foreground">$110</span>
                <span className="text-primary font-semibold">$165</span>
                <span className="text-muted-foreground">1 — 2 days</span>
              </div>
              <div className="grid grid-cols-4 gap-4 py-2 border-b border-border/50">
                <span className="font-medium">9 — 12 mins</span>
                <span className="text-foreground">$140</span>
                <span className="text-primary font-semibold">$200</span>
                <span className="text-muted-foreground">2 — 3 days</span>
              </div>
              <div className="grid grid-cols-4 gap-4 py-2 border-b border-border/50">
                <span className="font-medium">13 — 15 mins</span>
                <span className="text-foreground">$175</span>
                <span className="text-primary font-semibold">$250</span>
                <span className="text-muted-foreground">2 — 3 days</span>
              </div>
              <div className="grid grid-cols-4 gap-4 py-2 border-b border-border/50">
                <span className="font-medium">16 — 20 mins</span>
                <span className="text-foreground">$220</span>
                <span className="text-primary font-semibold">$310</span>
                <span className="text-muted-foreground">3 — 4 days</span>
              </div>
              <div className="grid grid-cols-4 gap-4 py-2 border-b border-border/50">
                <span className="font-medium">21 — 30 mins</span>
                <span className="text-foreground">$280</span>
                <span className="text-primary font-semibold">$380</span>
                <span className="text-muted-foreground">4 — 5 days</span>
              </div>
              <div className="grid grid-cols-4 gap-4 py-2 border-b border-border/50">
                <span className="font-medium">31 — 45 mins</span>
                <span className="text-foreground">$340</span>
                <span className="text-primary font-semibold">$460</span>
                <span className="text-muted-foreground">5 — 6 days</span>
              </div>
              <div className="grid grid-cols-4 gap-4 py-2">
                <span className="font-medium">46 — 60 mins</span>
                <span className="text-foreground">$420</span>
                <span className="text-primary font-semibold">$580</span>
                <span className="text-muted-foreground">6 — 7 days</span>
              </div>
            </div>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 rounded-2xl border border-border bg-card/80 backdrop-blur-sm overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            
            <h3 className="text-xl md:text-2xl font-bold mb-6 uppercase tracking-wide text-primary">
              Terms & Conditions
            </h3>
            <p className="text-sm text-muted-foreground mb-6 italic">@specialll_a</p>
            
            <div className="space-y-6">
              {/* Agreement */}
              <div>
                <h4 className="font-semibold text-foreground mb-2">1. Agreement</h4>
                <p className="text-muted-foreground text-sm">
                  By commissioning my services, you agree to these Terms & Conditions in full. These apply to all project-based and retainer engagements.
                </p>
              </div>

              {/* Project Scope */}
              <div>
                <h4 className="font-semibold text-foreground mb-2">2. Project Scope</h4>
                <p className="text-muted-foreground text-sm">
                  All deliverables, formats, and deadlines will be outlined in a project brief or agreed upon in writing before work begins. Any requests that fall outside the original scope — including additional edits, new versions, format changes, or repurposing of footage — will be treated as a new request and billed separately. Scope changes must be approved in writing before I proceed.
                </p>
              </div>

              {/* Revisions */}
              <div>
                <h4 className="font-semibold text-foreground mb-2">3. Revisions</h4>
                <p className="text-muted-foreground text-sm">
                  Every project includes <span className="text-primary font-semibold">two (2) rounds of revisions</span>. A revision round is defined as a consolidated set of feedback submitted in one message or document. Additional rounds beyond the two included will be charged at my current hourly or per-revision rate. Revision requests must be submitted within <span className="text-primary font-semibold">5 business days</span> of delivery; after that, the project is considered approved.
                </p>
              </div>

              {/* Payment */}
              <div>
                <h4 className="font-semibold text-foreground mb-2">4. Payment</h4>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">—</span>
                    A <span className="text-primary font-semibold">50% non-refundable deposit</span> is required before any work begins.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">—</span>
                    The remaining 50% is due upon delivery of the final file(s).
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">—</span>
                    For retainer clients, payment is due on the agreed date each month. Late payment beyond <span className="text-primary font-semibold">3 days</span> may result in a pause of services.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">—</span>
                    Accepted payment methods: bank transfer, and any method agreed upon in writing.
                  </li>
                </ul>
              </div>

              {/* Retainer Agreements */}
              <div>
                <h4 className="font-semibold text-foreground mb-2">5. Retainer Agreements</h4>
                <p className="text-muted-foreground text-sm">
                  Retainer packages are billed monthly and cover a defined volume of videos per month, priced per video. Retainer clients receive a <span className="text-primary font-semibold">10% discount</span> on the standard per-video rate in recognition of the ongoing relationship. Unused videos within a month do not carry over to the following month — each billing cycle covers only that month&apos;s agreed scope. Retainers require a minimum of <span className="text-primary font-semibold">14 days&apos; written notice</span> to cancel or adjust.
                </p>
              </div>

              {/* Turnaround & Deadlines */}
              <div>
                <h4 className="font-semibold text-foreground mb-2">6. Turnaround & Deadlines</h4>
                <p className="text-muted-foreground text-sm">
                  Timelines are confirmed at the start of each project. Delays caused by late delivery of assets, footage, or feedback from the client may push the agreed deadline. I will communicate any changes on my end promptly.
                </p>
              </div>

              {/* File Delivery & Ownership */}
              <div>
                <h4 className="font-semibold text-foreground mb-2">7. File Delivery & Ownership</h4>
                <p className="text-muted-foreground text-sm">
                  Final edited files are delivered digitally upon receipt of full payment. Raw footage remains the property of the client. Edited footage, project files, and creative outputs produced by me remain my intellectual property unless a full buyout is explicitly agreed upon and priced accordingly. You may not resell or redistribute my edited work without written permission.
                </p>
              </div>

              {/* Credit */}
              <div>
                <h4 className="font-semibold text-foreground mb-2">8. Credit</h4>
                <p className="text-muted-foreground text-sm">
                  I reserve the right to include completed work in my portfolio and on my social media unless confidentiality is agreed in writing before the project begins.
                </p>
              </div>

              {/* Cancellations */}
              <div>
                <h4 className="font-semibold text-foreground mb-2">9. Cancellations</h4>
                <p className="text-muted-foreground text-sm">
                  If a client cancels a project after work has begun, the deposit is non-refundable.
                </p>
              </div>

              {/* Governing */}
              <div>
                <h4 className="font-semibold text-foreground mb-2">10. Governing</h4>
                <p className="text-muted-foreground text-sm">
                  These terms are governed in good faith between both parties. Any disputes will first be addressed through direct communication before any further action is taken.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border text-center">
              <p className="text-xs text-muted-foreground italic">Last updated: April 2026</p>
              <p className="text-sm text-muted-foreground tracking-wider mt-2">
                @SPECIALLL_A · AMANDAAROME@GMAIL.COM
              </p>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}
