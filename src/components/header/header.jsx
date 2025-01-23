import styles from "./Header.module.css";

function Header() {
    return (
        <div className={styles.header}>
            <h1>React flashcards</h1>
            <p>Expand your knowledge. One flashcard at a time.</p>
        </div>
    );
}

export default Header;