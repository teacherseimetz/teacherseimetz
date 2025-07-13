type Props = React.HTMLAttributes<HTMLDivElement>;

export const Highlight = ({ children, className }: Props) => {
  const classNames = ["bg-lime", "color-dark-green", "rounded-3xl", "p-8"]
    .concat(className ?? [])
    .join(" ");

  return <div className={classNames}>{children}</div>;
};
