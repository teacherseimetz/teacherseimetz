import Image from "next/image";
import { Heading } from "./Heading";
import { Highlight } from "./Highlight";
import { Wrapper } from "./Wrapper";

export function Material() {
  return (
    <section id="material">
      <Heading>
        <h1>Material</h1>
      </Heading>

      <Wrapper>
        <Highlight className="mb-10">
          <p>
            Todo material será disponibilizado antes das aulas e sem cobrança
            adicional.
          </p>
        </Highlight>

        <ul className="flex flex-col md:flex-row gap-10 mb-10">
          <li className="flex w-full md:w-1/3">
            <article className="flex flex-col items-center gap-2">
              <figure className="relative size-48">
                <Image
                  src="/teacherseimetz/images/books.png"
                  alt="Imagem mostrando 4 edições do livro Grammar in Context"
                  objectFit="contain"
                  fill
                />
              </figure>

              <h1 className="font-bold text-2xl uppercase">Livros didáticos</h1>

              <p>
                6 opções de livros didáticos diferentes, como Speakout
                (Pearson), Grammar in Context (National Geographic) e English
                File (Oxford).
              </p>
            </article>
          </li>
          <li className="flex w-full md:w-1/3">
            <article className="flex flex-col items-center gap-2">
              <figure className="relative size-48">
                <Image
                  src="/teacherseimetz/images/material.png"
                  alt="Imagem mostrando 6 materiais de aula"
                  objectFit="cover"
                  fill
                />
              </figure>

              <h1 className="font-bold text-2xl uppercase">Material digital</h1>

              <p>
                Materiais novos e atualizados de sites que criam conteúdos
                especificamente para aulas de inglês, como ESL Brains e Lingua
                House.
              </p>
            </article>
          </li>
          <li className="flex w-full md:w-1/3">
            <article className="flex flex-col items-center gap-2">
              <figure className="relative size-48">
                <Image
                  src="/teacherseimetz/images/elli.png"
                  alt="Imagem mostrando o site elli em um computador"
                  objectFit="contain"
                  fill
                />
              </figure>

              <h1 className="font-bold text-2xl uppercase">elli + extra</h1>

              <p>
                Exercícios para fazer em casa e atividades complementares na
                plataforma do Elli
              </p>
            </article>
          </li>
        </ul>
      </Wrapper>
    </section>
  );
}
