import { Github, Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "../components/ui/button";
// import ProjectCard from "../ui/ProjectCard";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur mx-2">
        <div className="container flex h-14 items-center justify-between">
          <Link href="/" className="font-bold">
            AK
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              href="#about"
              className="text-sm hover:underline underline-offset-4"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-sm hover:underline underline-offset-4"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm hover:underline underline-offset-4"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-24 sm:py-32 space-y-8 md:space-y-16">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Ayush Kumar
            </h1>
            <p className="mt-6 max-w-[42rem] text-muted-foreground sm:text-xl">
              Frontend Wizard ⚡ | Cloud Explorer ☁️
            </p>
            <div className="mt-6 flex gap-4">
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://github.com/dev1ayush"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://www.linkedin.com/in/unfilteredayush/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="mailto:ayshsnghh@gmail.com">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* <section id="about" className="container py-12 md:py-24 border-t">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">About Me</h2>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                I'm a frontend developer with 5 years of experience building
                modern web applications. I specialize in React, TypeScript, and
                responsive design.
              </p>
              <p className="text-muted-foreground">
                My approach combines clean code with thoughtful user
                experiences. I'm passionate about creating interfaces that are
                both beautiful and functional.
              </p>
            </div>
          </div>
        </section> */}

        {/* <section id="projects" className="container py-12 md:py-24 border-t">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">
              Selected Projects
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="E-commerce Platform"
                description="A full-featured online store with cart, checkout, and payment integration."
                tags={["React", "Next.js", "Stripe"]}
              />
              <ProjectCard
                title="Dashboard UI"
                description="Analytics dashboard with data visualization and real-time updates."
                tags={["TypeScript", "D3.js", "Tailwind"]}
              />
              <ProjectCard
                title="Mobile App"
                description="Cross-platform mobile application for task management and productivity."
                tags={["React Native", "Firebase", "Redux"]}
              />
            </div>
          </div>
        </section> */}

        {/* <section id="contact" className="container py-12 md:py-24 border-t">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Get in Touch
              </h2>
              <p className="mt-4 text-muted-foreground">
                I'm currently available for freelance work and full-time
                positions.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <a href="mailto:hello@example.com" className="hover:underline">
                  hello@example.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="h-5 w-5 text-muted-foreground" />
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  linkedin.com/in/johndoe
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github className="h-5 w-5 text-muted-foreground" />
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  github.com/johndoe
                </a>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="flex justify-end mr-3">
          <p className="text-sm text-muted-foreground ">
            © {new Date().getFullYear()} Ayush Kumar. All rights reserved.
          </p>
          {/* <nav className="flex gap-4">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:underline"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:underline"
            >
              Terms
            </Link>
          </nav> */}
        </div>
      </footer>
    </div>
  );
}
