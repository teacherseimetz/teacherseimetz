import { Wrapper } from "./Wrapper";
import styles from "./Heading.module.css";

type Props = React.PropsWithChildren;

export const Heading = ({ children }: Props) => {
  return (
    <div className={styles.heading}>
      <Wrapper>{children}</Wrapper>
    </div>
  );
};
