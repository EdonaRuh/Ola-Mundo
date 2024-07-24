import { Outlet } from "react-router-dom";
import Banner from "components/Banner";

export default function PaginaPadrao() {
  return (
    <main>
      <Banner />

      {/* \/ Renderizando conteudo referentes as rotas que foram passadas como filhas no arquivo routes.js */}
      <Outlet />
    </main>
  );
}
