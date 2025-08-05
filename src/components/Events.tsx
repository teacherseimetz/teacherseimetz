import { ButtonLink } from "./ButtonLink";
import { Heading } from "./Heading";
import { Wrapper } from "./Wrapper";
import Image from "next/image";

export const Events = () => {
  return (
    <section id="eventos">
      <Wrapper variant="small">
        <Heading>
          <h1>eventos</h1>
        </Heading>

        <section className="flex flex-col lg:grid grid-cols-2 gap-4">
          <section className="flex overflow-x-auto lg:grid lg:grid-cols-2 lg:grid-flow-row gap-4">
            <figure className="shrink-0 h-48 w-48 relative">
              <Image
                className="rounded-3xl"
                src="/teacherseimetz/images/events-1.jpg"
                alt="Foto da professora Amanda Seimetz sorrindo, com uma blusa verde e o fundo desfocado"
                objectFit="cover"
                fill
              />
            </figure>
            <figure className="shrink-0 h-48 w-48 relative">
              <Image
                className="rounded-3xl"
                src="/teacherseimetz/images/events-2.jpg"
                alt="Foto da professora Amanda Seimetz sorrindo, com uma blusa verde e o fundo desfocado"
                objectFit="cover"
                fill
              />
            </figure>
            <figure className="shrink-0 h-48 w-48 relative">
              <Image
                className="rounded-3xl"
                src="/teacherseimetz/images/events-3.jpg"
                alt="Foto da professora Amanda Seimetz sorrindo, com uma blusa verde e o fundo desfocado"
                objectFit="cover"
                fill
              />
            </figure>
            <figure className="shrink-0 h-48 w-48 relative">
              <Image
                className="rounded-3xl"
                src="/teacherseimetz/images/events-4.jpg"
                alt="Foto da professora Amanda Seimetz sorrindo, com uma blusa verde e o fundo desfocado"
                objectFit="cover"
                fill
              />
            </figure>
            <figure className="shrink-0 h-48 w-48 relative">
              <Image
                className="rounded-3xl"
                src="/teacherseimetz/images/events-5.jpg"
                alt="Foto da professora Amanda Seimetz sorrindo, com uma blusa verde e o fundo desfocado"
                objectFit="cover"
                fill
              />
            </figure>
            <figure className="shrink-0 h-48 w-48 relative">
              <Image
                className="rounded-3xl"
                src="/teacherseimetz/images/events-6.jpg"
                alt="Foto da professora Amanda Seimetz sorrindo, com uma blusa verde e o fundo desfocado"
                objectFit="cover"
                fill
              />
            </figure>
          </section>
          <section>
            <p className="pt-8 mb-8">
              Além de aulas e conteúdo para professores, também organizo eventos
              presenciais para promover a prática do inglês. Atualmente os
              eventos acontecem apenas em Porto Alegre - RS.
            </p>

            <div className="mb-8">
              <ButtonLink>Próximos eventos</ButtonLink>
            </div>

            <h1 className="font-bold">Como participar?</h1>
            <p>
              Preencha o formulário abaixo e vou te convidar para próxima
              edição!
            </p>
          </section>
        </section>
      </Wrapper>
    </section>
  );
};
