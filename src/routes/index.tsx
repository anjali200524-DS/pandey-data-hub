import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import {
  About,
  Certificates,
  Education,
  Experience,
  Projects,
  Resume,
  Skills,
} from "@/components/portfolio/Sections";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { BackToTop } from "@/components/portfolio/BackToTop";

const title = "Anjali Pandey — Data Analyst & Data Science / AI Portfolio";
const description =
  "Portfolio of Anjali Pandey, BCA (Data Science & AI) student at Babu Banarasi Das University — projects in data analysis, Python, SQL and Power BI.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Anjali Pandey",
          jobTitle: "Data Analyst / Data Science & AI Professional",
          alumniOf: "Babu Banarasi Das University",
          knowsAbout: ["Python", "SQL", "Excel", "Power BI", "Data Analysis", "Machine Learning"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
