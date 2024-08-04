import { Movie } from "@/app/types/movie"
import StarRating from "../StarRating"

export interface Props {
    movie: Movie
}

export default function MovieCard(props: Props) {
    const movie = props.movie
    return (
        <li  className='movie-card'>
            <div className="movie-card">
                <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                />
            </div>
            <div className="movie-infos">
                <p className="movie-title"> 
                    {movie.title} 
                </p>

                <StarRating 
                    rating={movie.vote_average}
                />
                
                <div className="hidden-content">
                    <p className='description'> 
                        {movie.overview}
                    </p>
                </div>

            </div>

           

            <p>
                {movie.vote_average}
            </p>
        </li>
            
    )
}