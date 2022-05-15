import {Navigate, Route, Routes} from 'react-router-dom';
import {NotFound} from "./views/NotFound/NotFound";
import {SingleCharacterView} from "./views/SingleCharacterView/SingleCharacterView";
import {ErrorBoundary} from "./hoc/ErrorBoundary";
import {FavoriteCharactersView} from "./views/FavoriteCharactersView/FavoriteCharactersView";
import {Header} from "./components/Header/Header";
import {GlobalProvider} from "./context/GlobalState";

import './App.css';

import {CharactersView} from "./views/CharactersView/CharactersView";

export function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <ErrorBoundary>
          <Header/>
          <Routes>
            <Route path="/" element={<Navigate to="/characters" replace/>}/>
            <Route path="/characters" element={<CharactersView/>}/>
            <Route path="/characters/:id" element={<SingleCharacterView/>}/>
            <Route path="/favourite-characters" element={<FavoriteCharactersView/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </ErrorBoundary>
      </GlobalProvider>
    </div>
  );
}