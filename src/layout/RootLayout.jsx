import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    
      <div className="bg-[#EBF1FC]">
        <Header/>
        <div className="min-h-[calc(100vh-576px)] w-11/12 mx-auto">
          <Outlet/>
        </div>
        <Footer/>
      </div>
    
  );
};

export default RootLayout;
