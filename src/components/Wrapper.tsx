type Props = React.HTMLAttributes<HTMLDivElement>;

export function Wrapper({ children, className, ...props }: Props) {
  const classNames = ["max-w-7xl", "px-10", "mx-auto"].concat(className ?? []).join(" ");

  return <div {...props} className={classNames}>{children}</div>;
}
