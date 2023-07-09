import App from "./App";
import Routers from "./components/routes/Routers";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
function Layout() {
    return (
        <div>

            <NavBar/>
            <Routers />
            <Footer />

        </div>

    );

}

export default Layout