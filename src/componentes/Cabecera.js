import { NavLink } from "react-router-dom";
export const Cabecera = () => 
{
    return (
        <header className="cabecera">
            <h1>Paginas</h1>
            <nav>
                <ul className="menu">
                    <li>
                        <NavLink to="/pagina-principal" activeClassName="actual">
                            Principal
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/lista" activeClassName="actual">
                            Lista
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/formulario" activeClassName="actual">
                            Formulario
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/acerca-de" activeClassName="actual">
                            Acerca de
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};