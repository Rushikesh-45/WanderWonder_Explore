import React from 'react'
import Sidebar from './Sidebar'
import axios from 'axios'
import './admin.css'
import BarChart01 from './BarChart01';
// import LineChart01 from './LineChart01';
import Pie1 from './Pie1';
import MasterC from './MasterC';
// import { LineChart } from 'recharts';
var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["red", "green", "blue", "orange", "brown"];


function AdminDashboard() {
    return (
        <>
            <Sidebar />
            <br /><br />
            <p style={{ marginLeft: '550px', fontSize: '2.5rem', color: 'navy' }}>Past One Month Data</p>
            <br />
            <div className="row" style={{ width: '80%', marginLeft: '180px' }}>
                <div className="col-lg-3 col-6" >
                    <div className="small-box bg-info" style={{ borderRadius: '10px' }}>
                        <div className="inner, boxesa">
                            <h3>150</h3>
                            <p>New Tourists</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-bag" />
                        </div>
                        <a href="#" className="small-box-footer, boxesa">
                            More info <i className="fas fa-arrow-circle-right" />
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="small-box bg-success" style={{ borderRadius: '10px' }}>
                        <div className="inner, boxesa">
                            <h3>
                                53<sup style={{ fontSize: 20 }}>%</sup>
                            </h3>
                            <p>New Travel Agencies</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-stats-bars" />
                        </div>
                        <a href="#" className="small-box-footer, boxesa">
                            More info <i className="fas fa-arrow-circle-right" />
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="small-box bg-warning" style={{ borderRadius: '10px' }}>
                        <div className="inner, boxesa">
                            <h3>44</h3>
                            <p>Bookings</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-person-add" />
                        </div>
                        <a href="#" className="small-box-footer, boxesa">
                            More info <i className="fas fa-arrow-circle-right" />
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="small-box bg-danger" style={{ borderRadius: '10px' }}>
                        <div className="inner, boxesa">
                            <h3>65</h3>
                            <p>Visitors</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-pie-graph" />
                        </div>
                        <a href="#" className="small-box-footer, boxesa">
                            More info <i className="fas fa-arrow-circle-right" />
                        </a>
                    </div>
                </div>
            </div>
            <hr /><br />
            <div className="container">
                <div className="row">
                    <div className="col-md-6"><MasterC /></div>
                    <div className="col-md-6"><BarChart01 /></div>
                    <div className="col-md-6"><Pie1 /></div>
                </div>
            </div>
        </>
    )
}

export default AdminDashboard
