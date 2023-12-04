import { BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from './components/home/home';
import Destination from "./components/destination/destination";
import Report from "./components/report/report";
import Italy from "./components/italy/italy";
import Tokyo from "./components/tokyo/tokyo";
import Bali from "./components/bali/bali";
import Rome from "./components/rome/rome";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route exact path="/destination" element={<Destination/>}/>
        <Route exact path="/report" element={<Report/>} />
        <Route exact path="/italy" element={<Italy/>} />
        <Route exact path="/tokyo" element={<Tokyo/>}/>
        <Route exact path="/bali" element={<Bali/>}/>
        <Route exact path="/rome" element={<Rome/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
