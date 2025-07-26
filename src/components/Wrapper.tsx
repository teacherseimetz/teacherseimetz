type Props = React.HTMLAttributes<HTMLDivElement>;

export function Wrapper({ children, className, ...props }: Props) {
  const classNames = ["max-w-5xl", "px-10", "mx-auto", "z-1"].concat(className ?? []).join(" ");

  return <div {...props} className={classNames}>{children}</div>;
}
