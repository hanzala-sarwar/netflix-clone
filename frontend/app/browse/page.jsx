"use client"

import React, { useEffect } from 'react'
import Header from '@/components/Header';
import { useSelector} from "react-redux";
import MainContainer from '@/components/MainContainer';
import MovieContainer from '@/components/MovieContainer';
import useNowPlayingMovies from '@/hooks/useNowPlayingMovies';
import usePopularMovies from '@/hooks/usePopularMovies';
import useTopRatedMovies from '@/hooks/useTopRatedMovies';
import useUpcomingMovies from '@/hooks/useUpcomingMovies';
import SearchMovie from '@/components/SearchMovie';
import { useRouter } from 'next/navigation';
 

const Browse = () => {
    const user = useSelector(store => store.app.user);
    const toggle = useSelector(store => store.movie.toggle);
    
    const router = useRouter()

    // my custom hooks
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    useEffect(() => {
        if (!user) {
            router.push("/");
        }
    }, []);
    return (
        <div >
            <Header />
            <div>
                {
                    toggle ? <SearchMovie /> : (
                        <>
                            <MainContainer />
                            <MovieContainer />
                        </>

                    )
                }

            </div>
        </div>
    )
}

export default Browse