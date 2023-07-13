import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isLoaded, setLoaded] = useState(null)
  const [isError, setError] = useState(false)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
      //  setData(data)
      //  setLoaded(true)

        setError(true)
      })
      .catch( err => {
        setError(true)
      })
  }, [url])

  return [data, isLoaded, isError]
}

export default useFetch