import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RickAndMortyApp from './components/RickAndMortyApp';
import CharacterList from './components/CharacterList';
import EpisodeList from './components/EpisodeList';
import LocationList from './components/LocationList';
import EpisodeDetails from './components/EpisodeDetails';
import EpisodeCharacterList from './components/EpisodeCharacterList';
import StaticCharacterProfile from './components/StaticCharacterProfile';
import LocationDetails from './components/LocationDetails';
import LocationResidentList from './components/LocationResidentList';
import StaticResidentProfile from './components/StaticResidentProfile';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RickAndMortyApp />} />
          <Route path="/characters" element={<CharacterList />} />
          <Route path="/episodes" element={<EpisodeList />} />
          <Route path="/locations" element={<LocationList />} />
          <Route path="/episodes/:episodeId" element={<EpisodeDetails />} />
          <Route
            path="/episodes/:episodeId/characters"
            element={<EpisodeCharacterList />}
          />
          <Route
            path="/episodes/:episodeId/characters/:characterId"
            element={<StaticCharacterProfile />}
          />
          <Route
            path="/characters/:characterId"
            element={<StaticCharacterProfile />}
          />
          <Route path="/locations/:locationId" element={<LocationDetails />} />
          <Route
            path="/locations/:locationId/residents"
            element={<LocationResidentList />}
          />
          <Route
            path="/locations/:locationId/residents/:residentId"
            element={<StaticResidentProfile />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
