export default function Experience() {
  const experiences = [
    // {
    //   role: "Technical Virtual Assistant",
    //   company: "Solo Client Project",
    //   date: "January 2024 – February 2025",
    //   description: `Built an automated chat system for a P2P trading platform to streamline trade communications\n Developed tools to track earnings and generate monthly statistics.\n Created custom applications to assist the client in her trading workflow\nSupported decision-making by delivering tailored features and improvements based on trading needs`,
    //   tools: ["Python", "React", "API", "Webhook"],
    // },
    {
      role: "Software Engineer",
      company: "CRM Online Philippines",
      date: "August 2019 – January 2021",
      description: `Maintained and extended SugarCRM systems, ensuring performance and stability for ongoing client needs. \n Built APIs with PHP (Lumen) and worked on frontend development for a hybrid mobile app using Ionic-Angular.`,
      tools: ["PHP (Lumen)", "React", "Node.js", "Ionic", "Angular", "SugarCRM"],
    },
    {
      role: "Software Engineer / Tech Lead",
      company: "Business Switch Inc",
      date: "June 2016 – August 2019",
      description: `Worked on development and optimization of CRM modules, including a core REST API router and modular architecture refactoring. \n Supported system migration to AWS, leveraging services like EC2 and S3, and resolved production issues with minimal downtime. \n Facilitated daily scrums, delegated tasks, and collaborated with QA and leadership during UAT and planning sessions.`,
      tools: ["PHP", "Zend", "AWS", "MySQL", "Git", "Docker"],
    },
    {
      role: "Web Developer",
      company: "BrightIdeas Technology Corp",
      date: "June 2014 – June 2016",
      description: `Developed and maintained Digital Portfolio web application.\nRedeveloped the portfolio as a Chrome app for Chromebook users.\nCollaborated with clients to gather requirements and provided ongoing technical support and training.`,
      tools: ["HTML", "CSS", "JavaScript", "Chrome Apps", "PHP"],
    },
  ];

  return (
    <section id="experience" className="space-y-6 max-w-5xl mx-auto pt-10 lg:pt-24">
       <h2 className="text-2xl font-bold mb-2">Journey So Far</h2>
      {experiences.map(({ role, company, date, description, tools }, idx) => (
        <div key={idx} className="p-4 bg-base rounded-lg">
          <div className="font-mono text-sm mb-1">{date}</div>
          <h3 className="text-xl font-semibold mb-1">{role}</h3>
          <p className="italic mb-3">{company}</p>
          <ul className="list-disc list-inside text-sm space-y-1 mb-4">
            {description.split("\n").map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, i) => (
              <span
                key={i}
                className="badge badge-primary badge-outline text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
