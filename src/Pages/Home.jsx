import React from "react";
import './Home.css';
import Featured from "./Featured";
import Header from "./Header/Header";
function Home(){
     
    return (
        
        <>

          <Header/>
           <section className="banner-section">
               <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-8 banner-heading">
                                    <p className="discover_a">Discover a place you will love to live</p>
                                    <span>Connect with more than 75K renters looking for<br/> new homes using our
                                    comprehensive marketing <br/>platform.</span>
                                </div>
                                <div className="col-md-4">
                                    <img src="./ellipse.png" className="ellipse" alt="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-8">
                                    <form className="search-form">
                                    <div className="row">
                                        <div className="col-md-3 line-left">
                                            <select name="" className="select-city">
                                                <option value="">City</option>
                                                <option value="">Lucknow</option>
                                                <option value="">Hardoi</option>
                                                <option value="">Kanpur</option>
                                            </select>
                                        </div>
                                        <div className="col-md-9">
                                            <input
                                                type="text"
                                                className="colloge-name"
                                                id="your-surname"
                                                name="your-surname"
                                                placeholder="Enter college/Street name..."
                                                required=""
                                            />
                                        </div>
                                        <hr style={{marginTop: '0px', marginBottom: '0px'}}/>
                                        <div className="col-md-3 bullect-point">
                                            <input className="form-check-input" type="radio" />
                                                <label className="form-check-label full_house" htmlFor="disabledFieldsetCheck">
                                                Full House
                                                </label>
                                        </div>
                                        <div className="col-md-3 line-left bullect-point">
                                            <input className="form-check-input" type="radio" />
                                                <label className="form-check-label full_house" htmlFor="disabledFieldsetCheck">
                                                Pg/Hostel
                                                </label>
                                        </div>
                                        <div className="col-md-3 line-left">
                                            <select name="" className="budget">
                                                <option value="">₹ Budget</option>
                                                <option value="Lucknow">Lucknow</option>
                                                <option value="">Hardoi</option>
                                                <option value="">Kanpur</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3">
                                            <select name="" className="budget">
                                                <option value="">BHK Types</option>
                                                <option value="">Lucknow</option>
                                                <option value="">Hardoi</option>
                                                <option value="">Kanpur</option>
                                            </select>
                                        </div>
                                    </div>
                                    </form>
                                </div>
                                <div className="col-md-4">
                                    <form className="d-flex box-search">
                                       <input
                                        className="form-control me-2"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                        />
                                    </form>
                                </div>
                            </div>
                            <div className="row counter-row">
                                <div className="col-md-6">
                                    <div className="counter-item">
                                        <p>1500 + <span>Property Ready</span></p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="counter-item">
                                        <p>500 + <span>Happy Customers</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src="./banner-right.png" alt="" width="100%"
                            />
                        </div>
                    </div>
                </div>
           </section>

           <Featured/>

        </>
    );
}

export default Home;
