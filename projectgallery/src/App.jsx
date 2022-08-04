import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Counter from './components/counter.jsx'
import Homepage from './pages/homepage.jsx'
import Willprofile from './pages/will_profile.jsx'

function App() {
    return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage/>}>
                </Route>
                <Route path="/willprofile" element={<Willprofile/>}>
                </Route>
                <Route path="/counter" element={<Counter/>}>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
);
}

export default App;