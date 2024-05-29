import { ToastContainer, Bounce } from "react-toastify";
import { Hero } from "./homeComponents/Hero";
import { OurCoffees } from "./homeComponents/OurCoffees";
import 'react-toastify/dist/ReactToastify.css';

export function Home() {
    return (
        <div>
            <div className="bg-home-background-image bg-cover back">
                <Hero />
            </div>
            <OurCoffees />
            <ToastContainer
                position="bottom-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </div>
    );
}