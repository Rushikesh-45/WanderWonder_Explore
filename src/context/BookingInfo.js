
{/* {"pkgId":1,"destination":"manali","agency":{"agencyId":1,"agencyName":"VRL","email":"vrl@gmail.com","city":"Banglore","mobNumber":"7525995257","licenceNo":"vrl123","password":"$2a$10$RpkEgh0ysSdOhmBlUZ0gv.yoBy80ARYg76tGqLW0PydxUtBiFVRYq","deleted":false},"startPoint":"Kolhapur","noOfDays":7,"totalSeats":50,"description":null,"ticketCost":5000,"emptySeats":50,"imagePath":"images\\lion1.jpg","images":null,"discount":10,"startDate":"2022-12-12","citiesToVisit":[],"categories":[]} */}
let getDate =()=>JSON.parse(sessionStorage.getItem("booking")).startDate;
let getDestination =()=>JSON.parse(sessionStorage.getItem("booking")).destination;
let getStart=()=>JSON.parse(sessionStorage.getItem("booking")).startPoint;
let getTicket =()=>JSON.parse(sessionStorage.getItem("booking")).ticketCost;
let getAgency=()=>JSON.parse(sessionStorage.getItem("booking")).agency.agencyName;
let getPkgId=()=>JSON.parse(sessionStorage.getItem("booking")).pkgId;
let getAgencyMob =()=>JSON.parse(sessionStorage.getItem("booking")).agency.mobNumber;
let getImg=()=>`data:image/jpg;base64,${JSON.parse(sessionStorage.getItem("booking")).images}`;
// let getImg=()=>JSON.parse(sessionStorage.getItem("booking")).images;

export default {getDate, getTicket, getAgency, getDestination, getStart, getAgencyMob, getPkgId, getImg}
