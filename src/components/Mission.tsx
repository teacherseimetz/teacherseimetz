import Image from "next/image";
import { Heading } from "./Heading";
import { Wrapper } from "./Wrapper";
import { Highlight } from "./Highlight";

export function Mission() {
  return (
    <section id="missao">
      <Heading>
        <h1>Missão</h1>
      </Heading>

      <Wrapper>
        <div className="flex flex-col md:flex-row gap-10 items-center mb-10">
          <figure className="shrink-0 h-96 w-96 relative">
            <Image
              className="rounded-3xl"
              src="/images/student.jpg"
              alt="Imagem de uma estudante de inglês tomando uma xícara de café enquanto utiliza um notebook no seu colo"
              objectFit="cover"
              fill
            />
          </figure>

          <div>
            <Highlight>
              <p>
                Capacitar falantes de português brasileiro a{" "}
                <em>melhorar suas habilidades em inglês</em>. Meu objetivo é{" "}
                <em>criar e dar aulas personalizadas</em> que ofereçam
                oportunidades para uso prático da língua em diversos cenários do
                mundo real e abram novas portas para a comunicação.
              </p>
            </Highlight>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
