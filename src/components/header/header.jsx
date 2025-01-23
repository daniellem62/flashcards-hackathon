import styles from "./header.module.css";
import pngegg from "./pngegg.png";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <img src={pngegg} alt="testset" className={styles.logo} />
        <h1>React Flashcards</h1>
      </div>
      <p className={styles.paragraph}>
        Expand your knowledge. One flashcard at a time.
      </p>
    </div>
  );
}

export default Header;
