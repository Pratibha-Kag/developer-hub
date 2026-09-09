import { SocialIcon } from "react-social-icons";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Food Ordering Platform",
    description:
      "Full-stack restaurant ordering platform with secure authentication, cart management, Razorpay payments, order tracking, and an admin dashboard for managing menu items and customer orders.",
    image: "projects/project1.png",
    tags: ["React js", "Mongo DB", "Node js", "Express js"],
    link: "https://ramji-restaurant.vercel.app/",
    github: "#",
  },
  {
    title: "Music Streaming Platform",
    description:
      "A music platform connecting artists with listeners through seamless music streaming.An immersive digital experience built around art, neuroscience, and adaptive technology.",
    image: "/projects/project2.png",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    link: "https://www.altradar.com/",
    // github: "#",
  },
  {
    title: "Ametnes Cloud ",
    description:
      "Enterprise platform for securely deploying and managing open-source applications across private cloud and on-premise environments",
    image: "/projects/project2.png",
    tags: ["React.js ", "JavaScript", "Tailwind CSS", "REST APIs"],
    link: "https://cloud.ametnes.com/",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that{" "}
            <span className="font-serif italic font-normal text-white">
              make an impact.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Live Project */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary transition-all"
                  >
                    <SocialIcon
                      url={project.link}
                      network="github"
                      style={{ width: 24, height: 24 }}
                    />
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary transition-all"
                  >
                    <SocialIcon
                      url={project.github}
                      network="github"
                      style={{ width: 24, height: 24 }}
                    />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <SocialIcon
                    network="github"
                    style={{ width: 24, height: 24 }}
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <span className="text-xl font-bold text-white group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
              ↗
            </span>
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
