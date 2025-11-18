import { useState, useEffect, useRef } from "react";
import { Header } from "./Header";

const sectionIds = [
  "the-big-fix",
  "meet-o-mama",
  "whats-inside",
  "quick-answers",
];

const Section = ({ id, title }: { id: string; title: string }) => (
  <section id={id} className="flex h-screen items-center justify-center border-b">
    <h2 className="text-4xl font-bold">{title}</h2>
  </section>
);

export function HomePage() {
  const [activeSection, setActiveSection] = useState("");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        // Find the entry that is most visible within the viewport, biased towards the top.
        const intersectingEntries = entries.filter((entry) => entry.isIntersecting);

        if (intersectingEntries.length > 0) {
          // Of the sections that are intersecting, find the one that is highest on the page.
          const topEntry = intersectingEntries.reduce((prev, current) => {
            return prev.boundingClientRect.top < current.boundingClientRect.top ? prev : current;
          });
          setActiveSection(topEntry.target.id);
        }
      },
      {
        // The rootMargin is set to -85px at the top to account for the navbar.
        // The bottom margin is set to -40% to ensure the active link changes
        // before the next section is halfway up the screen.
        rootMargin: "-150px 0px -40% 0px",
        // A threshold of 0 ensures the callback fires as soon as any part
        // of the element enters the intersection area.
        threshold: 0,
      }
    );

    const currentObserver = observer.current;

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        currentObserver.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          currentObserver.unobserve(element);
        }
      });
    };
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const id = window.location.hash.substring(1); // Remove the '#'
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, []);


  return (
    <>
      <Header activeSection={activeSection} />
      <main>
        {sectionIds.map((id) => (
          <Section key={id} id={id} title={id.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())} />
        ))}
      </main>
    </>
  );
}