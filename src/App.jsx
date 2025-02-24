
import Anasayfa from "./pages/anasayfa/anasayfa"
import Amore from "./pages/amore/amore"
import Kesfet from "./pages/kesfet/kesfet"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mesajlar from "./pages/mesajlar/mesajlar";
import Abonelik from "./pages/abonelik/abonelik";
import Odeme from "./pages/odeme/odeme";

function App() {


  return (
    <Router>
      <Routes>

        <Route path="/" element={<Amore />} />
        <Route path="/anasayfa" element={<Anasayfa />} />
        <Route path="/kesfet" element={<Kesfet />} />
        <Route path="/mesajlar" element={<Mesajlar />} />
        <Route path="/abonelik" element={<Abonelik />} />
        <Route path="/odeme" element={<Odeme />} />
        
      </Routes>

    </Router>
  )
}

export default App

/*
 <Amore />
*/