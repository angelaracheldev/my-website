import About from './right_content/About';
import Experience from './right_content/Experience';
import Footer from './right_content/Footer';
import Projects from './right_content/Projects';
import ScrollToTop from "./ScrollToTop";

export default function RightContent() {
  return (
    <main className="pt-10 lg:pt-0 lg:w-[60%]">
      <About />
      <Experience />
      <Projects />
      <Footer />
      <ScrollToTop />
    </main>
  );
}