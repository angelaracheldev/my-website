import { Github, Linkedin, Instagram, PenTool } from 'lucide-react'

import ThemeToggle from "./ThemeToggle";

export default function SocialLinks() {
  return (
    <div className="flex justify-between items-center">
    <div className="flex space-x-4 py-4">
      <a
        href="https://github.com/angelaracheldev"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-ghost btn-circle text-base-content hover:text-primary"
      >
        <Github size={20} />
      </a>

      <a
        href="https://medium.com/@angelaracheldev"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-ghost btn-circle text-base-content hover:text-primary"
      >
        <PenTool size={20} />
      </a>

      <a
        href="https://www.instagram.com/gheleebee"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-ghost btn-circle text-base-content hover:text-primary"
      >
        <Instagram size={20} />
      </a>

      <a
        href="https://www.linkedin.com/in/angelaracheldev"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-ghost btn-circle text-base-content hover:text-primary"
      >
        <Linkedin size={20} />
      </a>
      </div>
     <ThemeToggle/>
    </div>
  )
}
