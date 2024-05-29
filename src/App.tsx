import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { UseContextHook } from "./contexts/UseContextHook";
import 'react-toastify/ReactToastify.css'


export default function App() {
    return (
        <>
            <UseContextHook>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </UseContextHook>
        </>
    )
}