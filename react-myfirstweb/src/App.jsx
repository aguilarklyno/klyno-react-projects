import './App.css'
import Header from './components/Header';
import Home from './components/00_Home/Home';
import Service from './components/01_Service/Service';
import Cashless from './components/02_Cashless/Cashless';
import Custom from './components/03_Custom/Custom';
import Plan from './components/04_Plan/Plan';
import Simulation from './components/05_Simulation/Simulation';
import Colum from './components/06_Colum/Colum';
import News from './components/07_News/News';
import FAQ from './components/08_FAQ/FAQ';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      <div className="App">
       <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/cashless" element={<Cashless />} />
          <Route path="/custom" element={<Custom />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/simulation" element={<Simulation />} />
          <Route path="/colum" element={<Colum />} />
          <Route path="/news" element={<News />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
