import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RickAndMortyApp from './components/RickAndMortyApp';
import EpisodeList from './components/EpisodeList';
import EpisodeDetails from './components/EpisodeDetails';
import CharacterList from './components/CharacterList';
import StaticCharacterProfile from './components/StaticCharacterProfile';
import LocationDetails from './components/LocationDetails';
import LocationResidentList from './components/LocationResidentList';
import './App.css';

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
          <Route path="/locations/:locationId" element={<LocationDetails />} />
          <Route
            path="/locations/:locationId/residents"
            element={<LocationResidentList />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
