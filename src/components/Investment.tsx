import Image from "next/image";
import { ButtonLink } from "./ButtonLink";
import { Heading } from "./Heading";
import { Wrapper } from "./Wrapper";
import { Highlight } from "./Highlight";

export function Investment() {
  return (
    <section id="investimento">
      <Heading>
        <h1>Investimento</h1>
      </Heading>

      <Wrapper>
        <section className="flex flex-col md:flex-row items-center gap-10 mb-10">
          <figure className="shrink-0 h-96 w-96 relative">
            <Image
              className="rounded-3xl"
              src="/teacherseimetz/images/smiling.png"
              alt="Foto da professora Amanda Seimetz sorrindo, com uma blusa verde e o fundo desfocado"
              objectFit="cover"
              fill
            />
          </figure>

          <div>
            <Highlight className="mb-10">
              <p>
                O Investimento para aulas particulares é <em>mensal</em>. O
                valor é <em>fixo mesmo em meses mais longos</em>. O valor reduz
                apenas em caso de feriados nacionais e aumenta em caso de aulas
                adicionais serem agendadas.
              </p>
            </Highlight>

            <ul className="flex flex-col lg:flex-row gap-8">
              <li>
                <article className="flex flex-col gap-3 bg-teal text-white rounded-3xl p-8">
                  <h1 className="font-bold text-xl">
                    1 aula particular por semana
                  </h1>

                  <h2 className="font-bold text-3xl">R$ 490</h2>

                  <p>inclui o planejamento, o material e acompanhamento.</p>
                </article>
              </li>
              <li>
                <article className="flex flex-col gap-3 bg-teal text-white rounded-3xl p-8">
                  <h1 className="font-bold text-xl">
                    2 aulas particular por semana
                  </h1>

                  <h2 className="font-bold text-3xl">R$ 840</h2>

                  <p>inclui o planejamento, o material e acompanhamento.</p>
                </article>
              </li>
            </ul>
          </div>
        </section>
        <div className="flex justify-center mb-10">
          <ButtonLink href="#TODO">Quero fazer aulas de inglês</ButtonLink>
        </div>
      </Wrapper>
    </section>
  );
}
