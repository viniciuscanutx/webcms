import Pagina from "./components/template/Page";
import Title from "./components/template/Title";
import { IconHome } from "@tabler/icons-react";

export default function Home() {
  return (
    <Pagina>
      <Title icone={IconHome} principal="Home" secundario="Resumo Geral"/>
    </Pagina>
  );
}
