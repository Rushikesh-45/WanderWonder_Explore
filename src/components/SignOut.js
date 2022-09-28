import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 
// import swal from "sweetalert2";
import Swal from "sweetalert2";
import Home2 from "./Home2";
const SignOut = () => {
  let navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.length !== 0)
      // alert("You have logged out successfully!!!");
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Log Out!'
      }).then((result) => {
        if (result.isConfirmed) {
          sessionStorage.clear();
          navigate("/home");
          Swal.fire(
            'Sign Out!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
      // alert("You have logged out successfully!!!", "", "success");
      // window.location.reload(false);
    
  }, []);

  return <div>
    <Home2/>
  </div>;
};

export default SignOut;
