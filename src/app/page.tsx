import Landing from "@/components/landing/landing";
import Bubbles from "@/components/landing/bubbles";
import Projects from "@/components/landing/projects";

export default function Home() {
  return (
    <main className="block bg-gradient-to-br  from-red-700 to-blue-600">
      <Bubbles />
      <Landing />
      <Projects />
    </main>
  );
}
