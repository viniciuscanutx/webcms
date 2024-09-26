import Pagina from "./components/template/Page";
import Title from "./components/template/Title";
import { IconMovie } from "@tabler/icons-react";

export default function Home() {
  return (
    <Pagina>
      <Title icone={IconMovie} principal="Home" secundario="Resumo Geral"/>
    </Pagina>
  );
}
