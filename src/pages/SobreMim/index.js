import styles from "./SobreMim.module.css";

import PostModel from "components/PostModel";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpeg";

export default function SobreMim() {
  return (
    <PostModel fotoCapa={fotoCapa} titulo="Sobre Mim">
      <h3 className="styles.subtitulo">Olá, meu nome é Rafael</h3>

      <img
        src={fotoSobreMim}
        alt="Foto do Rafael"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu
        nulla, placerat vitae faucibus vitae, hendrerit sed urna. Donec vel
        ligula in ligula pharetra porta. Phasellus consectetur finibus mauris
        vel pharetra. Ut laoreet suscipit metus, nec aliquam est pretium at.
        Cras pellentesque, nibh sit amet tincidunt sollicitudin, turpis justo
        pellentesque tellus, sit amet iaculis sapien arcu sed felis. In id nunc
        eu ante auctor egestas ac vel dui. Ut eu tempus arcu. Proin ac quam sit
        amet massa bibendum lobortis id eget nulla. Nam cursus magna ut nisl
        gravida, sed laoreet orci sagittis. Aliquam consequat finibus dolor,
        quis vehicula est dignissim in. Morbi scelerisque maximus tempor.
      </p>
      <p className={styles.paragrafo}>
        Donec in tellus finibus, hendrerit velit at, fermentum sapien. Proin eu
        massa venenatis, pulvinar lorem eleifend, pellentesque risus. Nunc eu
        porttitor purus. Nam tellus sapien, iaculis vitae finibus eu, venenatis
        sit amet elit. Vivamus a consequat turpis. Curabitur sagittis egestas
        urna, et fringilla nibh molestie sit amet. Phasellus at dui a tortor
        hendrerit consectetur.
      </p>
      <p className={styles.paragrafo}>
        Nam eu diam sed urna rhoncus bibendum id eu enim. Vestibulum non
        tincidunt nisl. Aenean nec imperdiet magna, vitae vehicula dolor.
        Aliquam hendrerit sapien et nibh vehicula dignissim. Etiam eget posuere
        ipsum. Duis euismod nunc nisl, ut volutpat nisl luctus vitae. Maecenas
        nibh lacus, imperdiet vitae est a, aliquet dictum est. Integer lacus
        ante, vulputate in nunc sed, finibus consequat ligula. Praesent tempus
        molestie eleifend.
      </p>
      <p className={styles.paragrafo}>
        Phasellus volutpat posuere ligula, posuere convallis erat laoreet non.
        Nulla vestibulum rhoncus erat, blandit lobortis risus lobortis quis. In
        hac habitasse platea dictumst. Phasellus eleifend eu lectus id vehicula.
        In molestie dui lorem, quis egestas nisl ornare non. Curabitur dignissim
        felis a neque mollis, id tincidunt nisi congue. Donec convallis, tortor
        ac ullamcorper tristique, orci risus viverra lorem, nec imperdiet lorem
        ex ut odio. Mauris vulputate pellentesque neque, quis ultricies augue
        accumsan euismod. Donec aliquam elementum magna, in congue odio feugiat
        vel.
      </p>
      <p className={styles.paragrafo}>
        Etiam maximus placerat facilisis. Aenean a est leo. Nunc molestie erat
        enim, sed rhoncus odio varius eget. Nam posuere lectus sit amet posuere
        laoreet. Sed id dignissim diam, vel malesuada neque. Suspendisse in
        libero erat. Vestibulum nulla nisl, convallis ac tellus vehicula, cursus
        rhoncus magna. Fusce congue, orci nec fringilla aliquet, dolor ligula
        molestie mi, ut sagittis lectus mi vel tellus. Proin egestas nibh nisl,
        at dapibus odio ullamcorper a. Phasellus venenatis placerat aliquam.
        Duis consectetur volutpat felis ut iaculis. Etiam sed sagittis lacus.
        Pellentesque metus diam, dignissim at lorem vel, vulputate suscipit
        nisl. Praesent pellentesque lorem eros, ac congue nulla lacinia vitae.
        Donec tempor fringilla erat, et varius augue consectetur nec. Donec
        posuere ornare lorem, et suscipit enim facilisis sit amet.
      </p>
    </PostModel>
  );
}
