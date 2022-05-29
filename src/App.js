/* require('dotenv').config(); */
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Notfound from './pages/Notfound';
import {GithubProvider} from './context/github/GithubContext'
import {Alertprovider} from './context/alert/AlertContext'
import Alert from './components/layout/Alert';
import User from './pages/User';
function App() {
  return (
    <GithubProvider>
    <Alertprovider>
    <Router>
    <div className='flex flex-col justify-between h-screen'>
      <Navbar/>
      <main className='container mx-auto px-3 pb-12'>
      <Alert/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/user/:login' element={<User/>} />
          <Route path='/notfound' element={<Notfound/>} />
          <Route path='/*' element={<Notfound/>} />
        </Routes>
      </main>
      <Footer/>
    </div>


  </Router>
  </Alertprovider>
  </GithubProvider>

  );
}

export default App;
