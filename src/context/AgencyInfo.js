import userEvent from "@testing-library/user-event";

let IsLoggedIn=()=>sessionStorage.getItem("token")?true:false;
let IsAdmin=()=>sessionStorage.getItem("role")=="ADMIN";
let IsTourist=()=>sessionStorage.getItem("role")=="TOURIST";
let IsAgency=()=>sessionStorage.getItem("role")=="AGENCY";
let getId =()=>JSON.parse(sessionStorage.getItem("user")).agencyId;
let getName =()=>JSON.parse(sessionStorage.getItem("user")).agencyName;
let getEmail =()=>JSON.parse(sessionStorage.getItem("user")).email;
let getMobileNo =()=>JSON.parse(sessionStorage.getItem("user")).mobNumber;
let getRole =()=>JSON.parse(sessionStorage.getItem("user")).role;
let getLicenceNo =()=>JSON.parse(sessionStorage.getItem("user")).licenceNo;
let getLocation =()=>JSON.parse(sessionStorage.getItem("user")).city;
let getImg=()=>`data:image/jpg;base64,${JSON.parse(sessionStorage.getItem("user")).images}`;

// let getAgencyId =()=>JSON.parse(sessionStorage.getItem("user")).
export default {getEmail, getMobileNo, getLicenceNo, getName, getEmail, getId, IsAgency, getRole, getLocation, getImg}