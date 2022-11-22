import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RickAndMortyApp from './components/RickAndMortyApp';
import CharacterList from './components/CharacterList';
import EpisodeList from './components/EpisodeList';
import LocationList from './components/LocationList';
import StaticCharacterProfile from './components/StaticCharacterProfile';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<RickAndMortyApp />} />
          <Route path="/characters" element={<CharacterList />} />
          <Route path="/episodes" element={<EpisodeList />} />
          <Route path="/locations" element={<LocationList />} />
          <Route
            path="/characters/:characterId"
            element={<StaticCharacterProfile />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
