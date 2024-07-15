import styles from "./Frase.module.css";

function Frase() {
  return (
    <div className={styles.fraseContainer}>
      <p>Com css container</p>
      <br></br>
      <p className={styles.fraseContent}>Este componentes pertence à frase!</p>
    </div>
  );
}
export default Frase;
