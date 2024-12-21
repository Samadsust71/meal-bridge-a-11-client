import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    
      <div>
        <Header/>
        <div className="min-h-[calc(100vh-576px)]">
          <Outlet/>
        </div>
        <Footer/>
      </div>
    
  );
};

export default RootLayout;
