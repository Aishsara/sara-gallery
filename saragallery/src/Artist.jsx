// ArtistPage.jsx
import React from 'react';
import './Artist.css';
import NavigationBar from './Navbar';
const ArtistPage = () => {
  const artists = [
    {
      id: 1,
      name: 'Vincent van Gogh',
      bio: ' Dutch post-impressionist painter. He  is legendary for being mentally unstable ',
      exhibitions: ['Sunflowers', 'The Starry Night',' Cafe Terrace at Night.'],
      image: require('./Assets/Daily\ Paintworks\ -\ Original\ Fine\ Art\ ©\ Ken\ Faulks.jpg'),
    },
    {
      id: 2,
      name: 'Leonardo di ser Piero da Vinci ',
      bio: 'Renaissance painter, scientist, inventor .A talented draughtsman and architect',
      exhibitions: ['Virgin of the Rocks', 'Lady with an Ermine', 'The Last Supper'],
      image: require('./Assets/Courtside\ Market\ Claude\ Monet\ Nymphéas\ 16x20\ Canvas\ Wall\ Art.jpg')  ,
    },
    // Add more artists here
  ];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledArtists = shuffleArray(artists);

  return (
    <div className="artist-page">
        <NavigationBar/>
      {shuffledArtists.map((artist) => (
        <div className="artist-card" key={artist.id}>
          <div className="artist-info">
            <h2 className="artist-name">{artist.name}</h2>
            <div className="artist-bio">
              <h3 className="bio-heading">Biography</h3>
              <p className="bio-content">{artist.bio}</p>
            </div>
            <div className="artist-exhibitions">
              <h3 className="exhibitions-heading">Famous Paintings</h3>
              <ul className="exhibitions-list">
                {artist.exhibitions.map((exhibition) => (
                  <li className="exhibition-item" key={exhibition}>{exhibition}</li>
                ))}
              </ul>
            </div>
          </div>
          <img src={artist.image} alt={artist.name} className="artist-image" />
        </div>
      ))}
    </div>
  );
};

export default ArtistPage;