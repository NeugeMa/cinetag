import Inicio from "./pages/Inicio/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
            <BrowserRouter> 
                <Routes> 
                    <Route path="/" element={<Inicio />}></Route>
                </Routes>
            </BrowserRouter>
    )
}

export default AppRoutes; 

// Explicação código Routes
// <BrowserRouter> está "avisando" que haverá algumas rotas dentro dele
// <Routes> funciona como se fosse um "roteador", pois será responsável pela troca de rotas.
    // Dentro de <Routes> estamos declarando quais rotas existirão dentro do projeto
        // Então a rota <Route> terá o caminho path apenas com "/", pois é a página inicial, e 
        // também declaramos qual elemento deverá imprimir quando entrarmos neste caminho, no caso a página de Inicio.