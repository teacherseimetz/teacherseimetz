import Image from "next/image";
import { Wrapper } from "./Wrapper";
import { Highlight } from "./Highlight";
import { Divider } from "./Divider";

export function About() {
  return (
    <Wrapper id="sobre">
      <section className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-10">
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
          <Highlight>
            <p>
              Oi! Meu nome é Amanda Seimetz. Eu sou natural de Farroupilha (RS)
              e atualmente moro em Porto Alegre (RS). Vivi em Dublin, Irlanda,
              por dois anos, uma experiência que enriqueceu minha vivência com a
              língua inglesa.
            </p>
            <p>
              <em>Ensino inglês desde 2016</em> e me{" "}
              <em>formei em Letras - Inglês</em> pela Unisinos em
              <em>2020</em>. Em <em>2022</em>, concluí minha{" "}
              <em>pós-graduação pela PUCRS</em> (Moderna Educação: Metodologias,
              Tendências E Foco No Aluno) consolidando ainda mais minha formação
              na área.
            </p>
          </Highlight>
        </div>
      </section>
      <Divider />
    </Wrapper>
  );
}
