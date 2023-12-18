import { useState } from 'react'
import { IResult } from './interfaces/movie.interfaces';

export const App = () => {

    const url_base = 'https://api.themoviedb.org/3/search/movie';
    const url_img = 'https://image.tmdb.org/t/p/w200/';
    const API_KEY = 'acf5472e45e436d5026bfd4c5e792981';

    const [search, setSearch] = useState('');
    const [listMovies, setListMovies] = useState<IResult[]>([]);

    const onChangeSearchMovie = (e: React.ChangeEvent<HTMLInputElement>) => { 
        setSearch(e.target.value);
    }

    const onSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        getMovies(search);
        setSearch('');
    }

    const getMovies = async (search: string) => {
        try {
            const response = await fetch(`${url_base}?query=${search}&api_key=${API_KEY}`);
            const data = await response.json();
            setListMovies(data.results);
        } catch (error) {
            console.log('Se dio un error: ' + error);
        }
    }
        
    return (
        <div className='container'>
            <h1>Search Movies</h1>

            <form onSubmit={onSubmitSearch}>
                <input type="text" 
                        placeholder='Escribe aquí....'
                        value={search} 
                        onChange={onChangeSearchMovie}/>
            </form>
            <div className='movie-list'>
                {
                    listMovies.map((movie) => (
                        <div key={movie.id} className='movie-card'>
                            <img src={`${url_img}${ movie.poster_path }`} alt={movie.title} />
                            <h2>{ movie.title }</h2>
                            <p>{ movie.overview }</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
