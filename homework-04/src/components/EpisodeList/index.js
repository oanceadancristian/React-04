import React from 'react';
import EpisodeItem from '../EpisodeItem';
import './EpisodeList.css';

const EpisodeList = (props) => {
  const { episodeList } = props;

  return (
    <>
      <header>
        <h1>The Rick and Morty API</h1>
      </header>
      <main>
        <ul>
          {episodeList.map((episode) => {
            const { id, name, episode: episodeNr, characters } = episode;
            return (
              <EpisodeItem
                key={episode.id}
                id={id}
                name={name}
                episode={episodeNr}
                characters={characters}
              />
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default EpisodeList;
