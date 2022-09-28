import { Section } from "./style";
import styles from "./style.module.css";
export const SectionShow = ({ children, search, state }) => {
  return (
    <>
      <div className={styles.container}>
        <h2>
          {!state && "Resultados para:"} <span>{!state && search}</span>
        </h2>
      </div>
      <Section>{children}</Section>
    </>
  );
};
