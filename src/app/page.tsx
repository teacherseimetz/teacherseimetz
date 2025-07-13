import { About } from "../components/About";
import { Classes } from "../components/Classes";
import { Hero } from "../components/Hero";
import { Investment } from "../components/Investment";
import { Material } from "../components/Material";
import { Mission } from "../components/Mission";

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Classes />
      <Material />
      <Mission />
      <Investment />
    </main>
  );
}
