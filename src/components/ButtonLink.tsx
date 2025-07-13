import styles from "./ButtonLink.module.css";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  inverse?: boolean;
};

export const ButtonLink = ({ children, inverse, ...props }: Props) => {
  const classNames = [styles.button]
    .concat(inverse ? styles.inverse : [])
    .join(" ");

  return (
    <a className={classNames} {...props}>
      {children}
    </a>
  );
};
