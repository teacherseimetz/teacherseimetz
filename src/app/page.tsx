import { About } from "../components/About";
import { Classes } from "../components/Classes";
import { Events } from "../components/Events";
import { Hero } from "../components/Hero";
import { LessonPlans } from "../components/LessonPlans";

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Classes />
      <LessonPlans />
      <Events />
    </main>
  );
}
