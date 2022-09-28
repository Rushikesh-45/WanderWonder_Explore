import userEvent from "@testing-library/user-event";

let IsLoggedIn=()=>sessionStorage.getItem("token")?true:false;
// let IsAdmin=()=>JSON.parse(sessionStorage.getItem("user")).role=="ADMIN";
let IsAdmin=()=>sessionStorage.getItem("role")=="ADMIN";
let IsTourist=()=>sessionStorage.getItem("role")=="TOURIST";
let IsAgency=()=>sessionStorage.getItem("role")=="AGENCY";
let getAddress=()=>JSON.parse(sessionStorage.getItem("address"));
let getRole=()=>JSON.parse(sessionStorage.getItem("user")).role;
let getLocation=()=>JSON.parse(sessionStorage.getItem("user")).location;
let getEmail=()=>JSON.parse(sessionStorage.getItem("user")).email;
let getId=()=>JSON.parse(sessionStorage.getItem("user")).userId;
let getGender=()=>JSON.parse(sessionStorage.getItem("user")).gender;
let getDob=()=>JSON.parse(sessionStorage.getItem("user")).dob;
let getName=()=>JSON.parse(sessionStorage.getItem("user")).fullName;
let getMobileNo=()=>JSON.parse(sessionStorage.getItem("user")).mobNumber
let getImg=()=>`data:image/jpg;base64,${JSON.parse(sessionStorage.getItem("user")).images}`;


// {"fullName":"Rushikesh","email":"rushi@gmail.com","dob":"1997-12-28","gender":"MALE","password":"$2a$10$FaMUEcfuJgyRp5CVav5Mb.S7GN1tmPyFMFoxeM/kY15CTr2FBytB2","confirmPassword":null,"mobNumber":"9890219798","role":"TOURIST"}
export default {IsLoggedIn ,getImg, IsAdmin, getAddress, getEmail, getName, getId,getMobileNo, IsAgency, IsTourist, getGender, getDob, getRole, getLocation};