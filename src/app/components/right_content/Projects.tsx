'use client'

export default function Projects() {
  const projects = [
    {
      name: "Portfolio Website",
      description: "A personal portfolio.",
      tech: ["Next.js", "Tailwind CSS", "DaisyUI"],
      url: "https://angelarachel.dev"
    },
    {
      name: "Portfolio Website",
      description: "A personal portfolio.",
      tech: ["Next.js", "Tailwind CSS", "DaisyUI"],
      url: "https://angelarachel.dev"
    },
    {
      name: "Portfolio Website",
      description: "A personal portfolio.",
      tech: ["Next.js", "Tailwind CSS", "DaisyUI"],
      url: "https://angelarachel.dev"
    },
    // {
    //   name: "P2P trading track earning and volume",
    //   description: "A tool that fetches data from the platform's API to accurately compute and visualize earnings ",
    //   tech: ["Python", "MySQL", "React"],
    //   url: "#"
    // },
    // {
    //   name: "Automated Chat Bot",
    //   description: "Using Webhook to listen and response",
    //   tech: ["Python", "MySQL", "React"],
    //   url: "#"
    // }
  ];

  return (
    <section id="projects" className="space-y-6 max-w-5xl mx-auto py-10 pb-0 lg:pt-24">
      <h2 className="text-2xl font-bold mb-2">Projects</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="mockup-code rounded-lg shadow-lg overflow-x-auto"
          >
            <pre data-prefix="1" className="text-info italic">
              <code># {project.name} Project</code>
            </pre>
            <pre data-prefix="2" className="">
              <code>
                <span className="text-primary">project{index + 1}</span>{" "}
                <span className="text-base-content">=</span>{" "}
                <span className="text-base-content">{"{"}</span>
              </code>
            </pre>
            <pre data-prefix="3" className="">
              <code>
                &nbsp;&nbsp;<span className="text-warning">&#34;name&#34;</span>:{" "}
                <span className="text-success">&#34;{project.name}&#34;</span>,
              </code>
            </pre>
            <pre data-prefix="4" className="">
              <code>
                &nbsp;&nbsp;<span className="text-warning">&#34;description&#34;</span>:{" "}
                <span className="text-success">&#34;{project.description}&#34;</span>,
              </code>
            </pre>
            <pre data-prefix="5" className="">
              <code>
                &nbsp;&nbsp;<span className="text-warning">&#34;tech&#34;</span>:{" "}
                <span className="text-success">[{project.tech.map((tech, i) => (
                  <span key={i}>
                    &#34;{tech}&#34;{i < project.tech.length - 1 && ", "}
                  </span>
                ))}]</span>,
              </code>
            </pre>
            <pre data-prefix="6" className="">
              <code>
                &nbsp;&nbsp;<span className="text-warning">&#34;url&#34;</span>:{" "}
                <a href={project.url} target="_blank"><span className="text-success">&#34;{project.url}&#34;</span></a>
              </code>
            </pre>
            <pre data-prefix="7" className="">
              <code>{"}"}</code>
            </pre>
          </div>
        ))}
      </div>
    </section>
  );
}
