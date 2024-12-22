
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import errorImg from "../../assets/error.jpg"

const ErrorPage = () => {
  return (
    <div id="error-page" className="flex flex-col justify-center items-center py-10 my-auto space-y-4 min-h-screen">
    <Link to={'/'} className="text-gray-800 dark:text-gray-100 flex items-center gap-2"><FaArrowLeft /> Back to Home</Link>
    <img src={errorImg} alt="error image" className='object-cover rounded-lg' />
  </div>
  )
}

export default ErrorPage