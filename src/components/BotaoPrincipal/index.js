import styles from "./BotaoPrincipal.module.css";

export default function BotaoPrincipal({ text, tamanho }) {
  return (
    <button className={`${styles.botaoPrincipal} ${styles[tamanho]}`}>
      {text}
    </button>
  );
}
