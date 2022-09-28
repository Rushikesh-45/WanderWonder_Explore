
import LoginForm from './components/LoginForm';
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import RegisterAs from './components/RegisterAs';
import Footer from './components/Footer';
import RegisterAgency from './components/RegisterAgency';
import SearchBar from './components/SearchBar';
import RegisterVehicle from './components/RegisterVehicle/RegisterVehicle';
import UserDashboard from './components/Dashboards/UserDashboard';
import Login from './components/Login';
import Home2 from './components/Home2';
import SearchList from './components/SearchList/SearchList';
import BookingForm from './components/BookingForm/BookingForm';
import Login3 from './components/Login3';
import SignOut from './components/SignOut';
import About from './components/About/About'
import SearchList2 from './components/SearchList/SearchList2';
import AgencyDashboard from './components/Dashboards/AgencyDashboard';
import AgencyPkgs from './components/AgencyLinks/AgencyPkgs';
import AddPkg from './components/AddPkg';
import AdminDashboard from './components/Dashboards/AdminDashboard';
import TouristTable from './components/Dashboards/TouristTable';
import AgencyTable from './components/Dashboards/AgencyTable';
import SideBar from './components/Dashboards/Sidebar';
import PackageTable from './components/Dashboards/PackageTable';
import VehiclesTable from './components/Dashboards/VehiclesTable';
import BookingsTable from './components/Dashboards/BookingsTable';
import VehicleCards from './components/SearchList/VehicleCards';

import UserBookingTable from './components/BookingForm/UserBookingTable';
import Upcoming from './components/BookingForm/Upcoming';
import CardsCluster from './components/CardsCluster';
import ImageUp from './components/ImageUpload/ImageUp';
import Vehicles from './components/AgencyLinks/Vehicles';
import PkgDetails from './components/SearchList/PkgDetails';
import user from './context/UserInfo'
import Categorypkg from './components/SearchList/Categorypkg';
import SegementVehicle from './components/SearchList/SegmentVehicle';
// import Navbar2 from './components/StripRET';
function App() {
  const ProtectedRoute1 = ({ children }) => {
    
    if (!user.IsLoggedIn()) {
      return <Navigate to="/login" />;
    } else if (user.IsAdmin()) {
      return children;
    } else {
      return <Navigate to="/" />;
    }
  };
  const ProtectedRoute2 = ({ children }) => {
    
    if (!user.IsLoggedIn()) {
      return <Navigate to="/login" />;
    } else if (user.IsTourist()) {
      return children;
    } else {
      return <Navigate to="/" />;
    }
  };
  const ProtectedRoute3 = ({ children }) => {
    
    if (!user.IsLoggedIn()) {
      return <Navigate to="/login" />;
    } else if (user.IsAgency()) {
      return children;
    } else {
      return <Navigate to="/" />;
    }
  };
  return (
    <>
      {/* <Navbar /> */}
    <Routes>
      {/* ---------------visitors------------------- */}
      <Route path='/home' element={<Home2/>}></Route>
      <Route path='/' element={<Home2/>}></Route>
      <Route path="/sample11" element={<ImageUp/>}> </Route>
      <Route path='/register' element={<RegisterAs/>}></Route>
      <Route path='/register1' element={<SignUp/>}></Route>
      <Route path='/register2' element={<RegisterAgency/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/search' element={<SearchBar/>}></Route>
     <Route path='/about' element={<About />}></Route>
     <Route path='/pkglist' element={<SearchList/>}></Route>
     <Route path='/pkgdetails' element={<PkgDetails/>}></Route>
      <Route path="/packages" element={<SearchList2/>}> </Route>
    <Route path='/categorypkg' element={<Categorypkg/>}> </Route>
    <Route path="/vehicles" element={<VehicleCards/>}> </Route>
    <Route path='/segmentveh' element={<SegementVehicle/>}></Route>



    {/*----------------------- admin---------------------- */}
      <Route path="/admin" element={<ProtectedRoute1><AdminDashboard /></ProtectedRoute1>}></Route>
      <Route path='/userbookings' element={<ProtectedRoute1><UserBookingTable/></ProtectedRoute1>}></Route>
      <Route path='/admintourist' element={<ProtectedRoute1><TouristTable/></ProtectedRoute1>}></Route>
      <Route path='/adminagencies' element={<ProtectedRoute1><AgencyTable/></ProtectedRoute1>}></Route>
      <Route path='/adminpkg' element={<ProtectedRoute1><PackageTable/></ProtectedRoute1>}></Route>
      <Route path='/adminvehicles' element={<ProtectedRoute1><VehiclesTable/></ProtectedRoute1>}></Route>
      <Route path='/adminbookings' element={<ProtectedRoute1><BookingsTable/></ProtectedRoute1>}></Route>

      
      {/* -------------------tourist------------------------- */}
      <Route path='/userdash' element={<ProtectedRoute2><UserDashboard/></ProtectedRoute2>}></Route>
      <Route path='/allpkgs' element={<ProtectedRoute2><SearchList2 /></ProtectedRoute2>}></Route>
      <Route path='/userupbookings' element={<ProtectedRoute2><Upcoming/></ProtectedRoute2>}></Route>
      <Route path='/bookingform' element={<ProtectedRoute2><BookingForm/></ProtectedRoute2>}></Route>


        {/* ------------------------agency---------------------- */}
      <Route path='/agencyvehicles' element={<ProtectedRoute3><Vehicles/></ProtectedRoute3>}> </Route>
      <Route path='/addvehicle' element={<ProtectedRoute3><RegisterVehicle/></ProtectedRoute3>}></Route>
      <Route path='/agencydash' element={<ProtectedRoute3><AgencyDashboard/></ProtectedRoute3>}></Route>
      <Route path='/agencypkg' element={<ProtectedRoute3><AgencyPkgs /></ProtectedRoute3>}></Route>
      <Route path='/addpkg' element={<ProtectedRoute3><AddPkg /></ProtectedRoute3>}></Route>

      <Route path='/logout' element={<SignOut/>}></Route>

      



      {/* <Route path="/sample2" element={<AdminDashboard />}> </Route>    */}
      {/* <Route path='/home2' element={<Home/>}></Route> */}
      {/* <Route path='/login' element={<LoginForm/>}></Route> */}
      {/* <Route path='/login2' element={<Login3/>}></Route> */}
      {/* <Route  path='/sl' element={<SearchList2/>}></Route> */}
    {/* <Route path='/addvehicle' element={<AddVehicle />}></Route> */}


    </Routes>
    <Footer/>
    </>
  );
}

export default App;
