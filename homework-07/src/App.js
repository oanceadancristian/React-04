import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomepageNoAccount from '../src/pages/HomepageNoAccount';
import Signin from '../src/pages/Signin';
import Signup from '../src/pages/Signup';
import AccessForbidden from './pages/AccessForbidden';
import Homepage from './pages/Homepage';
import CharacterList from './pages/CharacterList';
import EpisodeList from './pages/EpisodeList';
import LocationList from './pages/LocationList';
import RandomOrStaticCharacterProfile from './pages/RandomOrStaticCharacterProfile';
import EpisodeOrLocationCharacterProfile from './pages/EpisodeOrLocationCharacterProfile';
import PageNotFound from './pages/PageNotFound';
import './App.css';

function App() {
  const user = localStorage.getItem('token');

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {!user && (
            <>
              <Route path="/" element={<HomepageNoAccount />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<AccessForbidden />} />
            </>
          )}

          {user && (
            <>
              <Route path="/" element={<Homepage />} />
              <Route path="/signin" element={<Homepage />} />
              <Route path="/signup" element={<Homepage />} />
              <Route path="/homepage" element={<Homepage />} />
              <Route path="/characters" element={<CharacterList />} />
              <Route path="/episodes" element={<EpisodeList />} />
              <Route path="/locations" element={<LocationList />} />
              <Route
                path="/characters/:characterId"
                element={<RandomOrStaticCharacterProfile />}
              />
              <Route
                path="/characters/pages/:pageId"
                element={<CharacterList />}
              />
              <Route path="/episodes/:episodeId" element={<EpisodeList />} />
              <Route
                path="/episodes/:episodeId/characters/:characterId"
                element={<EpisodeOrLocationCharacterProfile />}
              />
              <Route path="/locations/:locationId" element={<LocationList />} />
              <Route
                path="/locations/:locationId/characters/:characterId"
                element={<EpisodeOrLocationCharacterProfile />}
              />
              <Route path="*" element={<PageNotFound />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
