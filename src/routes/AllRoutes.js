import { Routes, Route } from 'react-router-dom';

import React from 'react'
import { MovieDetail, MovieList, PageNotFound, Search } from '../pages';

export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
        <Routes>
            <Route path='' element={<MovieList apiPath="movies" title="Home"/>}/>
            <Route path='movie/:id' element={<MovieDetail apiPath="movies"/>}/>
            <Route path='movies/popular' element={<MovieList apiPath="movies?sort=boxOffice&order=desc" title="Popular"/>}/>
            <Route path='movies/top' element={<MovieList apiPath="movies?sort=rating&order=desc" title="Top Rated"/>}/>
            <Route path='search' element={<Search apiPath="movies"/>}/>
            <Route path='*' element={<PageNotFound  title="Page Not Found"/>}/>
        </Routes>
    </div>
  )
}
