import {Navigate, Route, Routes} from 'react-router-dom';
import {ErrorBoundary} from "./hoc/ErrorBoundary";
import {NotFound} from "./views/NotFound/NotFound";
import {GlobalProvider} from "./context/GlobalState";
import {Header} from "./components/Header/Header";
import {CharactersList} from "./components/Characters/CharactersList/CharactersList";
import {FavoriteCharactersView} from "./views/FavoriteCharactersView/FavoriteCharactersView";
import {SingleCharacterView} from "./views/SingleCharacterView/SingleCharacterView";

import './App.css';

export function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <ErrorBoundary>
          <Header/>
          <Routes>
            <Route path="/" element={<Navigate to="/characters" replace/>}/>
            <Route path="/characters" element={<CharactersList/>}/>
            <Route path="/characters/:id" element={<SingleCharacterView/>}/>
            <Route path="/favourite-characters" element={<FavoriteCharactersView/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </ErrorBoundary>
      </GlobalProvider>
    </div>
  );
}