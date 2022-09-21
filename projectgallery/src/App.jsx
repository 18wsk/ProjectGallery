import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/will_profile.jsx'
import Contact from './pages/contact.jsx'

function App() {
    return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    </div>
);
}
export default App;
