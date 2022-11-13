import './App.css';
import RickAndMortyApp from './components/RickAndMortyApp';
import EpisodeDetails from './components/EpisodeDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import StaticCharacterProfile from './components/StaticCharacterProfile';
import EpisodeList from './components/EpisodeList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RickAndMortyApp />} />
          <Route path="/episodes" element={<EpisodeList />} />
          <Route path="/episodes/:episodeId" element={<EpisodeDetails />} />
          <Route
            path="/episodes/:episodeId/characters"
            element={<CharacterList />}
          />
          <Route
            path="/episodes/:episodeId/characters/:characterId"
            element={<StaticCharacterProfile />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
