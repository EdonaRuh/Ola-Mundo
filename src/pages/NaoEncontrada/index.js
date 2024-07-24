import BotaoPrincipal from "components/BotaoPrincipal";
import styles from "./NaoEncontrada.module.css";
import erro404 from "assets/erro_404.png";
import { useNavigate } from "react-router-dom";

export default function NaoEncontrada() {
  const navegar = useNavigate();

  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>

        <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>

        <p className={styles.paragrafo}>
          Tem certeza que era isso que você estava procurando?
        </p>
        <p className={styles.paragrafo}>
          Aguarde alguns instantes e recarregue a página, ou volte à pagina
          inicial.
        </p>

        <div className={styles.botaoContainer} onClick={() => navegar("/")}>
          <BotaoPrincipal text="Voltar" tamanho="lg" />
        </div>

        <img
          className={styles.imagemCachorro}
          src={erro404}
          alt="Cachorro do 404"
        />
      </div>

      <div className={styles.espacoEmBranco}></div>
    </>
  );
}
