import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/will_profile.jsx'

function App() {
    return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}>
                </Route>
                <Route path="/contact" element={<Home/>}>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
);
}
export default App;
