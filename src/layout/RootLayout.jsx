import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    
      <div className="bg-gray-50">
        <Header/>
        <div className="min-h-[calc(100vh-428px)]">
          <Outlet/>
        </div>
        <Footer/>
      </div>
    
  );
};

export default RootLayout;
