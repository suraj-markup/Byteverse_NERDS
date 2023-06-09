import React from 'react';
import pic1 from './patient.jpg';
import './Header.css';
import pic2 from "./art.png"
import doct from "./doctor.png"

const Header = () => {
    return (
        <div className='main'>



            <div className='left-div'>
            <button style={{ top: "13px", left: "10px" }} class="cta">
                    <span style={{ color: "black" }}><a href="/checkreports" class="a2">CHECK REPORTS</a></span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>

                <button style={{ top: "73px", left: "10px" }} class="cta">
                    <span style={{ color: "black" }}><a href="/prescribedmedicine" class="a2">PRESCRIBED MEDICINE</a></span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>

                <button style={{ top: "133px", left: "10px" }} class="cta">
                    <span style={{ color: "black" }}><a href="/ambulance" class="a2">AMBULANCE</a></span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>

                <button style={{ top: "193px", left: "10px" }} class="cta">
                    <span style={{ color: "black" }}><a href="/findmydoctor" class="a2">FIND MY DOCTOR</a></span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>
                <img className="b-tech" src={doct} alt="doc" />


            </div>


            <div className="right-div">
                <div className="Report"><h4>CHECK REPORTS</h4></div>
                    <div className="suraj">
                        <article class="card">
                            <div class="temporary_text">
                                <img className="picture" alt="profile-photo" src={pic1} />
                            </div>
                            <div class="card_content">
                                <h3 class="card_title">Mitali Dwivedi</h3>
                                <span class="card_subtitle">.</span>

                                <p className="up"> Age-20</p>
                                <p className="m"> Gender-Female</p>
                                <p className="m"> Weight-50kg</p>
                                <p className="m"> Height-5'6</p>
                                <p className="m"> E-mail Id - loremipsum@ipsum.lo</p>

                                <p className="down"> Blood Group-A+</p>
                            </div>
                        </article>


                      
                    </div>

                    <div className='medicine'>
                    <div className="tables1">
                    <table>
                        <tr>
                            <th style={{width:"20%"}}>Name</th>
                            <th style={{width:"20%"}}>Date</th>
                            <th style={{width:"20%" }}>Reffered By</th>
                            <th style={{width:"20%" }}>Laboratory</th>

                        </tr>
                        <tr>
                            <td><img src={pic2} style={{margin:"5px"}} alt="art"></img><a href="https://drive.google.com/file/d/1f-wWCyGtpawV6pYccmsyBOrBqgb4uu7N/view?usp=sharing">X-Ray(Leg)</a></td>
                            <td>14/09/2023</td>
                            <td>Dr. Ramesh</td>
                            <td>Lab. ABC</td>
                        </tr>
                        <tr>
                        <td><img src={pic2} style={{margin:"5px"}} alt="art"></img><a href="https://drive.google.com/file/d/1f-wWCyGtpawV6pYccmsyBOrBqgb4uu7N/view?usp=sharing">Blood Tests</a></td>
                            <td>14/09/2023</td>
                            <td>Dr. Mahesh</td>
                            <td>Lab. ABC</td>
                        </tr>
                        <tr>
                        <td><img src={pic2} style={{margin:"5px"}} alt="art"></img><a href="https://drive.google.com/file/d/1f-wWCyGtpawV6pYccmsyBOrBqgb4uu7N/view?usp=sharing">ECG </a></td>
                            <td>14/09/2023</td>
                            <td>Dr. Ramu</td>
                            <td>Lab. ABC</td>
                        </tr>
                        <tr>
                        <td><img src={pic2} style={{margin:"5px"}} alt="art"></img><a href="https://drive.google.com/file/d/1f-wWCyGtpawV6pYccmsyBOrBqgb4uu7N/view?usp=sharing">Gastroscopy</a></td>
                            <td>14/09/2023</td>
                            <td>Dr. Sindhu</td>
                            <td>Lab. ABC</td>
                        </tr>
                        <tr>
                        <td><img src={pic2} style={{margin:"5px"}} alt="art"></img><a href="https://drive.google.com/file/d/1f-wWCyGtpawV6pYccmsyBOrBqgb4uu7N/view?usp=sharing">Colonoscopy</a></td>
                            <td>14/09/2023</td>
                            <td>Dr. Mitali Singh</td>
                            <td>Lab. ABC</td>
                        </tr>
                        <tr>
                        <td><img src={pic2} style={{margin:"5px"}} alt="art"></img><a href="https://drive.google.com/file/d/1f-wWCyGtpawV6pYccmsyBOrBqgb4uu7N/view?usp=sharing">MRI scan</a></td>
                            <td>14/09/2023</td>
                            <td>Dr. Saizal</td>
                            <td>Lab. ABC</td>
                        </tr>
                        <tr>
                        <td><img src={pic2} style={{margin:"5px"}} alt="art"></img><a href="https://drive.google.com/file/d/1f-wWCyGtpawV6pYccmsyBOrBqgb4uu7N/view?usp=sharing">Rabies Tests</a></td>
                            <td>14/09/2023</td>
                            <td>Dr. Alok</td>
                            <td>Lab. ABC</td>
                        </tr>
                        
                        <tr>
                        <td><img src={pic2} style={{margin:"5px"}} alt="art"></img><a href="https://drive.google.com/file/d/1f-wWCyGtpawV6pYccmsyBOrBqgb4uu7N/view?usp=sharing">Ultrasound</a></td>
                            <td>14/09/2023</td>
                            <td>Dr.Namita</td>
                            <td>Lab. ABC</td>
                        </tr>
                        <tr>
                        <td><img src={pic2} style={{margin:"5px"}} alt="art"></img><a href="https://drive.google.com/file/d/1f-wWCyGtpawV6pYccmsyBOrBqgb4uu7N/view?usp=sharing">Gastroscopy</a></td>
                            <td>14/09/2023</td>
                            <td>Dr. Harirame</td>
                            <td>Lab. ABC</td>
                        </tr>
                        <tr>
                        <td><img src={pic2} style={{margin:"5px"}} alt="art"></img><a href="https://drive.google.com/file/d/1f-wWCyGtpawV6pYccmsyBOrBqgb4uu7N/view?usp=sharing">CT Scan</a></td>
                            <td>14/09/2023</td>
                            <td>Dr. Sumita</td>
                            <td>Lab. ABC</td>
                        </tr>
                        <tr>
                        <td><img src={pic2} style={{margin:"5px"}} alt="art"></img><a href="https://drive.google.com/file/d/1f-wWCyGtpawV6pYccmsyBOrBqgb4uu7N/view?usp=sharing">Biospy</a></td>
                            <td>14/09/2023</td>
                            <td>Dr. Tripti</td>
                            <td>Lab. ABC</td>
                        </tr>
                           
                    </table>
                </div>

                    </div>

            </div>

        </div>


    )
}

export default Header


