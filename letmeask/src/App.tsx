import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from './pages/Room';
import { AdminRoom } from './pages/AdminRoom';

import { AuthContextProvider } from './contexts/AuthContext'

function App() { //o app e uma funcao e trabalha com components
  //componets sao pedacosisolados de codigos que quando juntos formam uma funcao
  return (
    <BrowserRouter>
    <AuthContextProvider>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
        <Route path="/rooms/:id" component={Room} />

        <Route path="/admin/rooms/:id" component={AdminRoom} />
      </Switch>
    </AuthContextProvider>
  </BrowserRouter>
);
}
//no switch Route o exact vai ir para aquela pagina quando a roda for exatamente esta
//se nao for ele vai para new ou :id opcional
//ou seja o switch nao deixa que duas rotas sejam chamadas ao mesmo tempo
export default App;
//tudo na tela sao pedacos de components que juntos formam a tela do SPA e cada pedaço que vejo na tela
//no discord a parte dos chats, hearder, message
//app e uma funcao pois components sao funcoes
//nao escrever em class mas sim funcoes porque atualmente e mais compativel com as novas apis e tudo no geral