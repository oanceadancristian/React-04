import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomepageNoAccount from '../src/components/HomepageNoAccount';
import Signin from '../src/components/Signin/';
import Signup from '../src/components/Signup/';
import AccessForbidden from './components/AccessForbidden';
import Homepage from './components/Homepage';
import CharacterList from './components/CharacterList';
import EpisodeList from './components/EpisodeList';
import LocationList from './components/LocationList';
import RandomCharacterProfile from './components/RandomCharacterProfile';
import EpisodeOrLocationCharacterProfile from './components/EpisodeOrLocationCharacterProfile';
import PageNotFound from './components/PageNotFound';
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
                element={<RandomCharacterProfile />}
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
