import './App.css'
import Footer from './components/footer'
import Navbar from './components/navbar'
import About from './screens/about'
import Activities from './screens/activities'
import Attractions from './screens/attractions'
import Events from './screens/events'
import Gastronomy from './screens/gastronomy'
import Home from "./screens/home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Seasons from './screens/season'
import GastronomyInfo from './screens/gastronomy_info'
import Markets from './screens/markets'
import MarketInfo from './screens/market_infor'
import Menu from './screens/menu'
import Contact from './screens/Contact'
import NetWorkImprovement from './screens/network'
import MarketStrategy from './screens/markets_strategy'
import ActiviteInfo from './screens/activite_infor'
import SeasonInfo from './screens/season_info'


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className='mainlayout'>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/markets" element={<Markets />} />
            <Route path="/markets/info/:market" element={<MarketInfo/>} />
            <Route path="/gastronomy" element={<Gastronomy />} />
            <Route path="/gastronomy/:gastronomy" element={<GastronomyInfo />} />
            <Route path="/menus" element={<Menu />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/attractions" element={<Attractions />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/activite/infor/:title" element={<ActiviteInfo />} />
            <Route path="/seasons" element={<Seasons />} />
             <Route path="/season/:season" element={<SeasonInfo />} />
            <Route path="/network" element={<NetWorkImprovement />} />
            <Route path="/market-strategy" element={<MarketStrategy />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App