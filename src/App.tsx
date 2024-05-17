import './App.css'
import {BrowserRouter as Router,Routes, Route}  from  'react-router-dom';
import Login from './pages/Auth/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Layout from './components/layout/Layout';

function App() {

  return (
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
          </Routes>
        </Layout>
      </Router>
  )
}

export default App
