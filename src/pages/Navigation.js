import { Outlet, Link } from 'react-router-dom'
import Error from '../components/Error'
const Navigation = () => {

  return(
    <div>
      <Error />
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/detail"}>Detail</Link></li>
      </ul>

      <Outlet />
    </div>
  )


}

export default Navigation