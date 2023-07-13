import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navigation from './pages/Navigation'
import Homepage from './pages/Homepage'
import Detailpage from './pages/Detailpage'


import ErrorContext from './context/ErrorContext'

const  App = () => {

  const [error, setError] = useState(false)

  return(
    <ErrorContext.Provider value={{error, setError}} >
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Navigation />}>
            <Route index element={<Homepage />} />
            <Route path={"/detail" } element={<Detailpage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorContext.Provider>
  )

}

export default App

