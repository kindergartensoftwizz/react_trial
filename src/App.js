
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './pages/Login';
import AuthProvider from './pages/AuthProvider';
import AdminLayout from './pages/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import Enquiries from './pages/admin/Enquiries';
function App() {

  return (
  
    <BrowserRouter>
      <AuthProvider>
      <Routes>
      
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />          
        </Route>

        <Route path="dashboard" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          
          <Route path="enquiries" element={<Enquiries />} />
        </Route>
      </Routes>
      </AuthProvider>
    </BrowserRouter>
    
      );
}

export default App;
