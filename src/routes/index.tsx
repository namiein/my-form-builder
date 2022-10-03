import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';

function Router() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </HashRouter>
    );
}
export default Router;
