import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layout/DefaultLayout';
import { Checkout } from './pages/checkout/Checkout';
import { Home } from './pages/home/Home';
import { Success } from './pages/success/Success';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/success/:id' element={<Success />} />
            </Route>
        </Routes>
    );
}