import React, { useState } from 'react';
import './styles.css';
// Composant MovieCard

function MovieCard({ movie }) {
  const { title, description, posterURL, rating } = movie;

  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Rating: {rating}</p>
    </div>
  );
}

// Composant MovieList
function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  );
}

// Composant Filtre
function Filtre({ filterTitle, filterRating, handleTitleChange, handleRatingChange }) {
  return (
    <div className="filter">
      <input type="text" placeholder="Titre" value={filterTitle} onChange={handleTitleChange} />
      <input type="number" placeholder="Taux" value={filterRating} onChange={handleRatingChange} />
    </div>
  );
}

// Composant App
function App() {
  const [movies, setMovies] = useState([
    {
      title: 'Black panthere',
      description: 'Description du film 1',
      posterURL: 'https://www.jeuneafrique.com/cdn-cgi/image/q=100,f=auto,metadata=none,width=1256,height=628/https://www.jeuneafrique.com/medias/2018/02/20/bpppp.jpg',
      rating: 4.5
    },
    {
      title: 'Power',
      description: 'Power est une série télévisée américaine de 63 épisod',
      posterURL: 'https://th.bing.com/th/id/R.770f1b85d6e964b8766a43dd8990918f?rik=VUp7uylYm%2bPT4w&pid=ImgRaw&r=0',
      rating: 3.8
    },
    {
      title: 'Revenge',
      description: 'Amanda Clarke devient Emily Thorne pour venger le meurtre de son père David Clarke ayant été accusé à tort de terrorisme. ',
      posterURL: 'https://p9.storage.canalblog.com/98/99/158646/96434944_o.jpg',
      rating: 3.8
    },{
      title: 'Un Papa hors paire',
      description: 'Description du film 2',
      posterURL: 'https://www.inside-magazine.lu/wp-content/uploads/2021/07/film.jpg',
      rating: 3.8
    },{
      title: 'Oeil indiscret',
      description: 'Le moment le plus excitant de la journée pour Miranda ? Espionner sa voisine. Mais quand un petit service se transforme en dangereux mystère, tout bascule...',
      posterURL: 'https://th.bing.com/th/id/R.c41ea5cd7345c719968d38ad5a879a82?rik=2M6X3LcCZ%2fuZqg&pid=ImgRaw&r=0',
      rating: 3.8
    },{
      title: 'Avenger',
      description: 'Les Avengers ont commencé comme un groupe d’individus extraordinaires qui ont été assemblés pour vaincre Loki et son armée Chitauri à New York.',
      posterURL: 'https://3.bp.blogspot.com/-GIO14RmcbXc/T4byZ_THZcI/AAAAAAAAYHw/D2FhE96CoBU/s1600/Avengers%2BAssemble%2B1.jpg',
      rating: 3.8
    },{
      title: 'Anaconda',
      description: 'Une équipe de tournage de « National Geographic » est prise en otage par un chasseur fou, qui les force à capturer le plus grand - et le plus meurtrier - serpent du monde',
      posterURL: 'https://th.bing.com/th/id/R.41cf6a955bc5b4611f39e786a562bbd1?rik=JZYzkU9yWPp0yA&pid=ImgRaw&r=0',
      rating: 3.8
    },{
      title: 'La casa de Papel',
      description: 'La casa de papel (prononcé : [la casa de papɛl] ), ou La Maison de papier au Québec, est une série télévisée espagnole créée par Álex Pina et diffusée entre le 2 mai 2017 et le 23 novembre 2017 sur la chaîne Antena 3 en Espagne',
      posterURL: 'https://th.bing.com/th/id/OIP.bg_h4DNx5Pb_7C72e1_s1QHaEK?pid=ImgDet&rs=1',
      rating: 3.8
    },{
      title: 'Mercredi',
      description: 'A présent étudiante à la singulière Nevermore Academy, Wednesday Addams tente de sadapter auprès des autres élèves tout en enquêtant à la suite dune série de meurtres qui terrorise la ville...',
      posterURL: 'https://th.bing.com/th/id/R.0ae0493a7fe0ecc04183d7b11b189003?rik=1MNNk%2fRR%2f%2b4FPA&pid=ImgRaw&r=0',
      rating: 3.8
    },{
      title: 'Dark desir',
      description: 'Un week-end fatidique déchaîne les passions et se termine en tragédie pour une femme mariée qui finit par sinterroger sur son entourage.',
      posterURL: 'https://th.bing.com/th/id/OIP.Mre441C2Ibkmo38INZ5b5AHaEK?pid=ImgDet&rs=1',
      rating: 3.8
    },{
      title: 'viking',
      description: 'Les Avengers ont commencé comme un groupe d’individus extraordinaires qui ont été assemblés pour vaincre Loki et son armée Chitauri à New York.',
      posterURL: 'https://th.bing.com/th/id/OIP.n8_sPI5CfsDqBAN4NI9akAHaE7?pid=ImgDet&w=3200&h=2133&rs=1',
      rating: 3.8
    },
    {
      title: 'Case départ',
      description: 'une dispute de leurs filles respectives entraîne le déchirement de acte daffranchissement, et la panique des deux hommes. Fiche technique. Titre : Case départ; Réalisation : Lionel Steketee, Fabrice Éboué et Thomas ',
      posterURL: 'https://th.bing.com/th/id/OIP.n8_sPI5CfsDqBAN4NI9akAHaE7?pid=ImgDet&w=3200&h=2133&rs=1',
      rating: 3.8
    },
    // Ajoutez d'autres films ici
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const handleTitleChange = event => {
    setFilterTitle(event.target.value);
  };

  const handleRatingChange = event => {
    setFilterRating(event.target.value);
  };

  const handleAddMovie = () => {
    // Logique pour ajouter un nouveau film à la liste des films
    // Utilisez la fonction setMovies pour mettre à jour l'état des films
  };

  const filteredMovies = movies.filter(movie => {
    const titleMatch = movie.title.toLowerCase().includes(filterTitle.toLowerCase());
    const ratingMatch = movie.rating >= filterRating;
    return titleMatch && ratingMatch;
  });

  return (
    <div className="app">
      <h1>Ma Collection de Films</h1>
      <Filtre
        filterTitle={filterTitle}
        filterRating={filterRating}
        handleTitleChange={handleTitleChange}
        handleRatingChange={handleRatingChange}
      />
      <MovieList movies={filteredMovies} />
      <button onClick={handleAddMovie}>Ajouter un Film</button>
    </div>
  );
}

export default App;
