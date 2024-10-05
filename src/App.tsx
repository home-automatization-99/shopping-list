import { RadioButton } from "@gravity-ui/uikit";
import { useLocalStorage } from "react-use";

import "./App.css";
import Lists from "./components/Lists";
import Menu from "./components/Menu";
import { daysMenu } from "./days";
import { lists } from "./lists";
import Dishes from "./components/Dishes";

const enum Page {
  Menu = "menu",
  Lists = "lists",
  Dishes = "dishes",
}

function App() {
  const [page, setPage] = useLocalStorage("page", Page.Menu);
  return (
    <>
      <RadioButton
        size="xl"
        value={page}
        options={[
          {
            value: Page.Menu,
            content: "Меню",
          },
          {
            value: Page.Lists,
            content: "Списки",
          },
          {
            value: Page.Dishes,
            content: "Рецепты",
          },
        ]}
        onUpdate={setPage}
        style={{ marginBottom: "16px" }}
      />
      {page === Page.Menu && <Menu daysMenu={daysMenu} />}
      {page === Page.Lists && <Lists lists={lists} daysMenu={daysMenu} />}
      {page === Page.Dishes && <Dishes />}
    </>
  );
}

export default App;
