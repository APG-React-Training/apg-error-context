import {useState, useEffect, useContext} from 'react'
import useFetch from '../hooks/useFetch'
import ErrorContext from '../context/ErrorContext'

const Detailpage = () => {

  const ctx = useContext(ErrorContext)
  const [data, isLoaded, isError] = useFetch('https://api.dev-master.ninja/reactjs/slow/')

  useEffect( () => {
    if(isError) ctx.setError(true)
  }, [isError])

  return(
    <div><p>
      { isLoaded && JSON.stringify(data) }
    </p></div>
  )

}

export default Detailpage