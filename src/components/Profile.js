import { useAuth0 } from "@auth0/auth0-react"

const  Profile = ()=> {
    const {user,isAuthenticated} = useAuth0();
    console.log(JSON.stringify(useAuth0()))
  return (
      isAuthenticated &&(
        <div>
         <img src={user.picture} alt={user.name} className="mt-3"/>
         <h2>{user.name}</h2>
         <p>{user.email}</p>

         
       </div>
      )
    
       
       
  
  )
}

export default Profile