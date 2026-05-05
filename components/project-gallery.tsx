const projects = [
  {
    id: 1,
    title: "Repurposed Podcast Edit",
    category: "Video Editing",
    description: "Raw conversation transformed into scroll-stopping content. This edit takes a long-form podcast episode and distills it into punchy, engaging clips built for pacing, strategic cuts, and captions that keep viewers hooked from start to finish.",
    vimeoId: "1184964499",
  },
  {
    id: 2,
    title: "Travel Video Edit",
    category: "Video Editing",
    description: "A journey told through intentional edits and immersive pacing. This travel piece blends transitions, atmospheric sound design, and visual flow to transport the viewer. Every cut chosen to evoke feeling, not just show footage.",
    vimeoId: "1185126815",
  },
  {
    id: 3,
    title: "Talking Head Edit",
    category: "Video Editing",
    description: "Clean, confident, and captivating. This talking head edit strips away the distractions and lets the message land — precise cuts, colour grading, and pacing that keeps the speaker compelling across every second.",
    vimeoId: "1185132580",
  },
  {
    id: 4,
    title: "Real Estate Edit",
    category: "Video Editing",
    description: "Property that sells before the viewing. This real estate edit combines smooth transitions and a deliberate visual rhythm to present the space at its best — making the lifestyle feel as tangible as the listing.",
    vimeoId: "1185133778",
  },
  {
    id: 5,
    title: "YouTube Podcast Edit",
    category: "Video Editing",
    description: "Long-form content built to retain. This YouTube podcast edit balances visual engagement with conversational authenticity — layered with B-roll, clean audio sync, and a structure that keeps viewers watching well past the first minute.",
    vimeoId: "1185141177",
  },
]

export function ProjectGallery() {
  return (
    <section id="work" className="py-20 md:py-32 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4 text-balance">Selected Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of my video editing projects across various industries and styles.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <iframe
                  src={`https://player.vimeo.com/video/${project.vimeoId}?h=0&badge=0&autopause=0&player_id=0&app_id=58479`}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  title={project.title}
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold mt-2 mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
