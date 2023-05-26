import './App.css';
import MainMenu from "./Components/Navbar/Navbar";
import Home from './Components/Home/Home';
import BasicTable from './Components/Booking/BasicTable';
import VariantButtonMenu from './Components/Booking/VariantButtonMenu';
import DaysButtonMenu from './Components/Booking/DaysButtonMenu';
import { Filter } from '@mui/icons-material';


function App() {
  return (
    <div className="App">
      <MainMenu/>
      <Home/>
      <DaysButtonMenu/>
<Filter/>
      <VariantButtonMenu/>
<BasicTable/> 
   </div>
  );
}

export default App;
