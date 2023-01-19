
import { useAuth0 } from "@auth0/auth0-react"
function LogoutButton() {
    const {logout} = useAuth0()
  return (
    <div><button onClick={()=>logout()} className="btn btn-primary ">Logout</button></div>
  )
}

export default LogoutButton