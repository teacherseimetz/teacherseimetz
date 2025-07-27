import { ButtonLink } from "./ButtonLink";
import { Heading } from "./Heading";
import { Highlight } from "./Highlight";
import { Headphone } from "./icons/Headphone";
import { Lightning } from "./icons/Lightning";
import { Plane } from "./icons/Plane";
import { Suitcase } from "./icons/Suitcase";
import { Wrapper } from "./Wrapper";
import Image from "next/image";

export function Classes() {
  return (
    <section id="aulas">
      <Wrapper variant="small">
        <Heading>
          <h1>aulas de inglês</h1>
        </Heading>

        <ul className="flex flex-col md:grid grid-cols-2 gap-4 justify-center mb-10 text-teal">
          <li className="flex flex-row items-center gap-4">
            <span className="bg-lime p-2 rounded-2xl size-16 flex justify-center items-center">
              <Suitcase className="max-h-full fill-dark-green" />
            </span>
            material personalizado
          </li>
          <li className="flex flex-row items-center gap-4">
            <span className="bg-lime p-2 rounded-2xl size-16 flex justify-center items-center">
              <Plane className="max-h-full fill-dark-green" />
            </span>
            duração de 60 minutos
          </li>
          <li className="flex flex-row items-center gap-4">
            <span className="bg-lime p-2 rounded-2xl size-16 flex justify-center items-center">
              <Lightning className="max-h-full fill-dark-green" />
            </span>
            anotações e correções
          </li>
          <li className="flex flex-row items-center gap-4">
            <span className="bg-lime p-2 rounded-2xl size-16 flex justify-center items-center">
              <Headphone className="max-h-full fill-dark-green" />
            </span>
            Google Meet
          </li>
        </ul>

        <p className="mb-8">
          As aulas são elaboradas de acordo com as necessidades individuais de
          cada aluno.{" "}
          Minha abordagem pedagógica visa criar momentos de aprendizado que te
          ajudem a atingir seus objetivos, independentemente de quais sejam.
          Isso significa que não me concentro apenas em uma única habilidade!
          Sempre planejo aulas que possibilitam a prática de diversas
          competências de maneira fluida e contextualizada.
        </p>

        <p className="mb-8">
          Atualmente, meu foco está em alunos nos níveis{" "}
          intermediário e avançado que desejam aprender e aprimorar o
          inglês para o cotidiano.
        </p>

        <div className="flex justify-center mb-10">
          <ButtonLink href="https://teacherseimetz.notion.site/12ab3dba55da80508dd1eb23da886b42?pvs=105">
            Quero fazer aulas de inglês
          </ButtonLink>
        </div>

        <section className="flex flex-col md:flex-row items-center lg:items-start gap-10 mb-10">
          <div>
            <figure className="shrink-0 h-96 w-96 relative mb-10">
              <Image
                className="rounded-3xl"
                src="/teacherseimetz/images/smiling-2.jpg"
                alt="Foto da professora Amanda Seimetz sorrindo, com uma blusa verde e o fundo desfocado"
                objectFit="cover"
                fill
              />
            </figure>

            <div className="flex justify-center mb-10">
              <ButtonLink href="https://teacherseimetz.notion.site/12ab3dba55da80508dd1eb23da886b42?pvs=105">
                Quero fazer aulas de inglês
              </ButtonLink>
            </div>
          </div>

          <div>
            <Highlight className="mb-10">
              <p>
                O Investimento para aulas particulares é mensal. O valor é fixo
                mesmo em meses mais longos. O valor reduz apenas em caso de
                feriados nacionais e aumenta em caso de aulas adicionais serem
                agendadas.
              </p>
            </Highlight>

            <ul className="flex flex-col lg:flex-row gap-8">
              <li>
                <article className="flex flex-col gap-3 bg-lilac text-dark-green rounded-3xl p-8">
                  <h1 className="font-bold text-xl">
                    1 aula particular por semana
                  </h1>

                  <h2 className="font-bold text-3xl text-white text-shadow-lg">
                    R$ 490
                  </h2>

                  <p>inclui o planejamento, o material e acompanhamento.</p>
                </article>
              </li>
              <li>
                <article className="flex flex-col gap-3 bg-lilac text-dark-green rounded-3xl p-8">
                  <h1 className="font-bold text-xl">
                    2 aulas particulares por semana
                  </h1>

                  <h2 className="font-bold text-3xl text-white text-shadow-lg">
                    R$ 840
                  </h2>

                  <p>inclui o planejamento, o material e acompanhamento.</p>
                </article>
              </li>
            </ul>
          </div>
        </section>
      </Wrapper>
    </section>
  );
}
