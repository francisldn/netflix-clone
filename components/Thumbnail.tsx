import {Movie} from '../typings';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '../atom/modalAtom';
import { DocumentData } from 'firebase/firestore';

interface ThumbnailProps {
    // movie: Movie | DocumentData
    movie: Movie | DocumentData
}

const Thumbnail = ({movie}:ThumbnailProps) => {
    const [showModal, setShowModal] = useRecoilState(modalState)
    const [currentMovie, setCurrentMovie] = useRecoilState(movieState)    
    return ( 
        <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
            <Image src={`https://image.tmdb.org/t/p/w500${
                movie.backdrop_path || movie.poster_path
            }`}
            layout="fill"
            className="rounded-sm object-cover md:rounded"
            onClick={() => {
                setCurrentMovie(movie)
                setShowModal(true)
            }}
            />
        </div>
    ); 
}

export default Thumbnail;