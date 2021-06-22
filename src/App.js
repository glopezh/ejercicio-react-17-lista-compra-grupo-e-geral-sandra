import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { Cabecera } from "./componentes/Cabecera";
import { PaginaPrincipal } from "./paginas/PaginaPrincipal";
import { Lista } from "./paginas/Lista";
import { Formulario } from "./paginas/Formulario";
import { AcercaDe } from "./paginas/AcercaDe";


function App() {
  return (
    <>
      <Router>
        <Cabecera />
        <Switch>
          <Route path="/pagina-principal" exact>
            <PaginaPrincipal />
          </Route>
          <Route path="/lista" exact>
            <Lista />
          </Route>
          <Route path="/formulario" exact>
            <Formulario />
          </Route>
          <Route path="/acerca-de" exact>
            <AcercaDe />
          </Route>
          <Route path="/" exact>
            <Redirect to="/principal" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
