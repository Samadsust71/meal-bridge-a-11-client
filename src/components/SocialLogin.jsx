
import { FcGoogle } from "react-icons/fc";

import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

// eslint-disable-next-line react/prop-types
const SocialLogin = ({title='in'}) => {
    const {signInWithGoogle,setLoading,loading} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const handleGoogleSignIn = ()=>{
        signInWithGoogle()
        .then(() => {
          setLoading(false)
          navigate(`${location?.state || "/"}`);
        })
        .catch((err) => {
          setLoading(false)
          toast.error(err.message)
        });
    }

  return (
    <div>
      <button disabled={loading} onClick={handleGoogleSignIn} className="flex items-center justify-center w-full p-3 mb-4 border rounded-lg shadow-sm hover:shadow-md hover:text-PrimaryBlue gap-1">
        <FcGoogle />
        <span>Sign {title} with Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;