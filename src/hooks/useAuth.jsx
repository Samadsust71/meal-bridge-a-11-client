
import { AuthContext } from "../context/AuthContext"
import AuthProvider from "../provider/AuthProvider"


const useAuth = () => {
  
    const context = AuthProvider(AuthContext)

  return context
}

export default useAuth
