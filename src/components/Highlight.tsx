type Props = React.HTMLAttributes<HTMLDivElement>;

export const Highlight = ({ children, className }: Props) => {
  const classNames = [
    "color-dark-green",
    "rounded-3xl",
    "p-8",
    "border",
    "border-dark-green/60",
  ]
    .concat(className ?? [])
    .join(" ");

  return <div className={classNames}>{children}</div>;
};
