import ProductPage from './components/ProductPage';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
    return (
        <>
            <ProductPage />
            <Analytics />
            <SpeedInsights />
        </>
    );
}

export default App;
