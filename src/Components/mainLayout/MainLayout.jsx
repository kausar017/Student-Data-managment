import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            {/* navnar */}
            <Navbar></Navbar>
            {/* outlet */}
            <div className='min-h-[calc(100vh-350px)]' >
                <Outlet ></Outlet>
            </div>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;