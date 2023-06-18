import './App.css'
import { Route,Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Charts from './components/Charts/Charts';
import AreaCharts from './components/Charts/AreaCharts';
import BarCharts from './components/Charts/BarCharts';
import PieCharts from './components/Charts/PieCharts';
import Five from './components/pages/Five';
import Four from './components/pages/Four';
import FourNotFour from './components/pages/FourNotFour';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Tables from './components/pages/Tables';
import PasswordRecovery from './components/pages/PasswordRecovery';
import Navbar from './components/Navbar';
function App() {

  return (
    <div className="app relative">
      <Routes>
        <Route exact path='/' Component={Dashboard}></Route>
        <Route exact path='/dashboard' Component={Dashboard}></Route>
        <Route exact path='/charts' Component={Charts}></Route>
        <Route exact path='/areacharts' Component={AreaCharts}></Route>
        <Route exact path='/barcharts' Component={BarCharts}></Route>
        <Route exact path='/piechart' Component={PieCharts}></Route>
        <Route exact path='/five' Component={Five}></Route>
        <Route exact path='/four' Component={Four}></Route>
        <Route exact path='/fournotfour' Component={FourNotFour}></Route>
        <Route exact path='/login' Component={Login}></Route>
        <Route exact path='/recovery' Component={PasswordRecovery}></Route>
        <Route exact path='/register' Component={Register}></Route>
        <Route exact path='/tables' Component={Tables}></Route>



      </Routes>
      <Navbar/>
    </div>
  )
}

export default App
