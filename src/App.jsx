import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home'
import Contest from './pages/Contest'
import { getContest, getGallery } from './utils/loaders/loader'
import Register from './pages/Register'
import ErrorPage from './pages/ErrorPage'
import Announcement from './pages/Announcement'
import { DataContextProvider, useData } from './context/DataContext'
import Gallery from './pages/Gallery'
import Error404 from './pages/Error404'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' errorElement={<Error404/>}>
      <Route index element={<Home />} />
      <Route path='contest/:id' element={<Contest/>} loader={getContest}/>
      <Route path='register/:id' element={<Register/>} loader={getContest}/>
      <Route path='announcements' element={<Announcement/>}/>
      <Route path="gallery" element={<Gallery/>} loader={getGallery}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Route>
  )
)

const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route index element={<Home/>}/>
    //     <Route path='/contest/:id' element={<Contest/>}/>
    //     <Route path='/register/:id' element={<Register/>}/>
    //     <Route path='/annonucements' element={<Announcement/>}/>
    //     <Route path='*' element={<ErrorPage/>}/>
    //   </Routes>
    // </BrowserRouter>
    <DataContextProvider>
      <RouterProvider router={router} />
    </DataContextProvider>
  )
}

export default App
