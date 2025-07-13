import { ButtonLink } from "./ButtonLink";
import { Heading } from "./Heading";
import { Highlight } from "./Highlight";
import { Wrapper } from "./Wrapper";
import Image from "next/image";

export function Classes() {
  return (
    <section id="aulas">
      <Heading>
        <h1>Aulas</h1>
      </Heading>

      <Wrapper>
        <Highlight className="mb-10">
          <p>
            As aulas são elaboradas de acordo com as necessidades individuais de
            cada aluno.{" "}
            <em>
              Minha abordagem pedagógica visa criar momentos de aprendizado que
              te ajudem a atingir seus objetivos, independentemente de quais
              sejam.
            </em>{" "}
            Isso significa que não me concentro apenas em uma única habilidade!
            Sempre planejo aulas que possibilitam a prática de diversas
            competências de maneira fluida e contextualizada.
          </p>

          <p>
            Atualmente, meu foco está em alunos nos níveis{" "}
            <em>intermediário e avançado</em>
            que desejam aprender e aprimorar o inglês para o <em>cotidiano</em>.
            No entanto, também ofereço aulas de inglês voltadas para o ambiente
            profissional (Business English),{" "}
            <em>especialmente na área de TI.</em>
          </p>

          <p>As aulas têm duração de 60 minutos e ocorrem semanalmente.</p>
        </Highlight>

        <ul className="flex flex-col sm:flex-row gap-10 justify-center mb-10">
          <li className="flex flex-col items-center gap-2">
            <figure className="relative size-16">
              <Image
                src="/images/calendar.png"
                alt="Imagem de um calendário"
                objectFit="contain"
                fill
              />
            </figure>
            duração de 60 minutos
          </li>
          <li className="flex flex-col items-center gap-2">
            <figure className="relative size-16">
              <Image
                src="/images/microphone.png"
                alt="Imagem de um microfone"
                objectFit="contain"
                fill
              />
            </figure>
            Google Meet ou Whereby
          </li>
          <li className="flex flex-col items-center gap-2">
            <figure className="relative size-16">
              <Image
                src="/images/notes.png"
                alt="Imagem de um bloco de notas"
                objectFit="contain"
                fill
              />
            </figure>
            anotações e correções
          </li>
          <li className="flex flex-col items-center gap-2">
            <figure className="relative size-16">
              <Image
                src="/images/user-star.png"
                alt="Imagem de um avatar de uma pessoa, com uma estrela ao lado direito"
                objectFit="contain"
                fill
              />
            </figure>
            material personalizado
          </li>
        </ul>

        <div className="flex justify-center mb-10">
          <ButtonLink href="#TODO">Quero fazer aulas de inglês</ButtonLink>
        </div>
      </Wrapper>
    </section>
  );
}
