import styles from "./VisuallyHidden.module.css";

type Props = React.PropsWithChildren;

export const VisuallyHidden = ({ children }: Props) => {
  return <span className={styles.visuallyHidden}>{children}</span>;
};
