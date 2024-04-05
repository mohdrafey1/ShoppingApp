import ProductPage from './components/ProductPage';
import { Analytics } from '@vercel/analytics/react';

function App() {
    return (
        <>
            <ProductPage />
            <Analytics />
        </>
    );
}

export default App;
