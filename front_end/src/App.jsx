import { BrowserRouter } from "react-router-dom";
import { Rotas } from "./routes/routes";

export function App() {
  return(
    <>
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </>
  );
}