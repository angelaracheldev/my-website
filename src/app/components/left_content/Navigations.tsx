"use client";
import { useEffect, useState } from "react";

const sections: string[] = ["About", "Experience", "Projects"];

export default function Navigations() {
  const [activeSection, setActiveSection] = useState<string>("About");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = "About";

      sections.forEach((section) => {
        const el = document.getElementById(section.toLowerCase());
        if (el && el.offsetTop <= scrollY + 100) {
          current = section;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    const el = document.getElementById(section.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="left-4 top-20 md:flex flex-row space-x-4 text-lg font-medium hidden p-1" >
      {sections.map((section) => (
        <a
          key={section}
          href={`#${section.toLowerCase()}`}
          onClick={(e) => handleClick(e, section)}
          className={`transition-colors cursor-pointer ${
            activeSection === section
              ? "text-primary font-semibold"
              : "text-base-content hover:text-primary"
          }`}
        >
          {section}
        </a>
      ))}
    </nav>
  );
}
