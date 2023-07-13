import { useContext } from 'react'
import ErrorContext from '../context/ErrorContext'

const Error = () => {

  const ctx = useContext(ErrorContext)
  return(
    <div onClick={ () => ctx.setError(false)}>
      {
        ctx.error && <div style={{backgroundColor: "#F00"}}>ERROR</div>
       }
    </div>
  )

}

export default Error