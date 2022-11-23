import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from '../src/components/Homepage';
import Signin from '../src/components/Signin/';
import Signup from '../src/components/Signup/';
import RickAndMortyApp from './components/RickAndMortyApp';
import CharacterList from './components/CharacterList';
import EpisodeList from './components/EpisodeList';
import LocationList from './components/LocationList';
import StaticCharacterProfile from './components/StaticCharacterProfile';
import PageNotFound from './components/PageNotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<RickAndMortyApp />} />
          <Route path="/characters" element={<CharacterList />} />
          <Route path="/episodes" element={<EpisodeList />} />
          <Route path="/locations" element={<LocationList />} />
          <Route
            path="/characters/:characterId"
            element={<StaticCharacterProfile />}
          />
          <Route path="/episodes/:episodeId" element={<EpisodeList />} />
          <Route
            path="/episodes/:episodeId/characters/:characterId"
            element={<StaticCharacterProfile />}
          />
          <Route path="/locations/:locationId" element={<LocationList />} />
          <Route
            path="/locations/:locationId/characters/:characterId"
            element={<StaticCharacterProfile />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
