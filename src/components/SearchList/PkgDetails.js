import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import user from "../../context/UserInfo";
import noprofile from "./../css/images/noprofile.jpg";
import "./SearchList.css";
import Swal from "sweetalert2";

function PkgDetails() {
  const handleBooking = async (e, id) => {
    e.preventDefault();
    if (user.IsLoggedIn()) {
      console.log(id);
      await axios
        .get("http://localhost:8080/api/package/" + id)
        .then((res) => {
          sessionStorage.setItem("booking", JSON.stringify(res.data));
          console.log(res.data);
          navigate("/bookingform");
        })
        .catch((err) => {
          console.log(err);
        });
      // sessionStorage.setItem('booking',)
      navigate("/bookingform");
    } else {
      Swal.fire({
        title: "You are not logged in..",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Login",
        denyButtonText: `Register As Tourist`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          navigate("/login");
          // Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
          navigate("/register1");
          // Swal.fire('Changes are not saved', '', 'info')
        }
      });
    }
  };
  const location = useLocation();
  const id2 = location.state.data;
  if (id2 == null || id2 == undefined) {
    console.log(" nulllllllllll");
    setDataimg(noprofile);
  }
  console.log(id2);
  // console.log(imgs)
  const URL = `http://localhost:8080/api/package/img/${id2}`;
  const requestData = () => fetch(URL).then((res) => res.json());
  const [dataimg, setDataimg] = useState([]);
  useEffect(() => {
    requestData().then((data) => setDataimg(data));
  }, []);
  console.log("-----", dataimg);
  if (!dataimg.length == 0) {
    var images = dataimg.map((p) => {
      var base64Image2 = `data:image/jpg;base64,${p.image}`;
      return  <img src={base64Image2} alt="img" style={{width:'300px', height:'300px', padding:'10px'}} />;
    });
  }

  const element = JSON.parse(sessionStorage.getItem("pkgdetail"));
 

  console.log(element);
  var base64Image = `data:image/jpg;base64,${element.images}`;

  //}

  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <img className="d-block" src={base64Image} style={{ width: "100%", height: "300px" }} />
      
      <div className="row">
        <div className="col-md-6">
        {images}
        </div>
        <div className="col-md-4">
          <br/><br />
        <h3 className="card-title">{element.pkgName}</h3>
                      <h5 className="card-title">
                        Agency: {element.agency.agencyName}
                      </h5>
                      <p className="card-text">{element.description}</p>
                      <p className="card-text">
                        <p>
                          Destination:{" "}
                          <span
                            style={{
                              color: "Green",
                              fontWeight: "bold",
                              fontSize: "20px",
                            }}
                          >
                            {element.destination}
                          </span>
                        </p>
                        <p>
                          Starting Point:{" "}
                          <span style={{ color: "orange" }}>
                            {element.startPoint}
                          </span>{" "}
                        </p>
                        <p>
                          Ticket: {element.ticketCost}, Discount:{" "}
                          {element.discount}%
                        </p>
                        <p>
                          Start Date: {element.startDate}, Duration:{" "}
                          {element.noOfDays} days, {element.noOfDays - 1} nights
                        </p>
                        <p>Available Seats: {element.emptySeats}</p>
                      </p>
                      <br />
                      <a
                  className="mt-auto btn btn-primary "
                  onClick={(e) => handleBooking(e, element.pkgId)}
                >
                  Book Now
                </a>
        </div>
      </div>

    </div>
  );
}

export default PkgDetails;

// export default function App() {
//   return (

//   );
// }
