import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.jpeg";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá Mundo!</h1>

        <p className={styles.paragrafo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu
          nulla, placerat vitae faucibus vitae, hendrerit sed urna. Donec vel
          ligula in ligula pharetra porta. Phasellus consectetur finibus mauris
          vel pharetra. Ut laoreet suscipit metus, nec aliquam est pretium at.
          Cras pellentesque, nibh sit amet tincidunt sollicitudin, turpis justo
          pellentesque tellus, sit amet iaculis sapien arcu sed felis. In id
          nunc eu ante auctor egestas ac vel dui. Ut eu tempus arcu.
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
          alt=""
        />

        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="Foto de perfil"
        />
      </div>
    </div>
  );
}
