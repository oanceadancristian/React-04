import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomepageNoAccount from '../src/Pages/HomepageNoAccount';
import Signin from '../src/Pages/Signin';
import Signup from '../src/Pages/Signup';
import AccessForbidden from './Pages/AccessForbidden';
import Homepage from './Pages/Homepage';
import CharacterList from './Pages/CharacterList';
import EpisodeList from './Pages/EpisodeList';
import LocationList from './Pages/LocationList';
import RandomCharacterProfile from './Pages/RandomCharacterProfile';
import EpisodeOrLocationCharacterProfile from './Pages/EpisodeOrLocationCharacterProfile';
import PageNotFound from './Pages/PageNotFound';
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
