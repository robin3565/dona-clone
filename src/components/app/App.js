import { createGlobalStyle } from "styled-components";
import { CategoryProvider } from "../../contexts/CategoryContext";
import { TodoProvider } from "../../contexts/TodoConext";
import { UserProvider } from "../../contexts/UserContext";
import { PathStateProvider } from '../../contexts/PathContext'
import Routers from "./routers";

function App() {
  return (
    <>
      <TodoProvider>
        <UserProvider>
          <CategoryProvider>
            <PathStateProvider>
              <Routers />
            </PathStateProvider>
          </CategoryProvider>
        </UserProvider>
      </TodoProvider>
    </>
  );
}

export default App;
