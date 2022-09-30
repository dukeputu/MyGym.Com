import React, { useState } from 'react';
import Swal from 'sweetalert2'

import Break from '../break/Break';

const SideMenu = (props) => {
    const timeArrya = props.min; 
    let workOutTime = 0;
    for (const time of timeArrya) {
        workOutTime = workOutTime + time.time;
    }
    const breaks = [1, 2, 3, 4, 5];
    const [breakTime, setbreakTime] = useState([]);
    const handelBreak = (mind, id) => {
      
        setbreakTime(mind)
        document.getElementById(id).style.cssText = "background: #0d6efd; color: #fff";

    }
 const toast=(toast)=>{
    
    Swal.fire(
        'Good job!',
       `<p>Your Work Time <b>${workOutTime}</b> Minutes</p>`,
        'success'
      )
    // alert('hello')
 }

    return (
        <div>
            <div className=" shadow-lg  pt-5 pb-5 rounded">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-4">
                            <img src="img/duke11.png" alt="" className='img-fluid border  rounded-circle shadow-sm' />
                        </div>
                        <div className="col-8 pt-4">
                            <h6>Pritam Sau</h6>
                            <p><small>Founder & CEO <b>mygym.com</b> </small></p>
                        </div>

                    </div>
                    <div className='text-center my-5 bg-light pt-4 shadow rounded'>
                        <div className="row">
                            <div className="col-4">
                                <h5>60 <sub>Kg</sub></h5>
                                <p><small>Weight</small></p>
                            </div>
                            <div className="col-4">
                                <h5>5.5 <sub>Ft</sub></h5>
                                <p><small>Height</small></p>
                            </div>
                            <div className="col-4">
                                <h5>25 <sub>Y</sub></h5>
                                <p><small>Age</small></p>
                            </div>
                        </div>
                    </div>
                    <h5>Add A Break</h5>

                    <div className='text-center my-5 bg-light pt-4 shadow rounded '>
                        <div className="row">
                            <div className="col-12">
                                <ul className='d-flex justify-content-evenly ul'>
                                    {
                                        breaks.map(breake =>
                                            <Break
                                                break={breake}
                                                key={breake}
                                                id={breake}
                                                handelBreak={handelBreak}
                                            ></Break>
                                        )
                                    }


                                </ul>
                            </div>

                        </div>
                    </div>
                    <h5>Exercise Details</h5>

                    <div className='text-center my-5 bg-light pt-4 shadow rounded '>
                        <div className="row">
                            <div className="col-6">
                                <h6>Exercise time</h6>
                            </div>
                            <div className="col-6">
                                <p><span>{workOutTime}</span>min </p>
                            </div>

                        </div>
                    </div>
                    <div className='text-center my-5 bg-light pt-4 shadow rounded '>
                        <div className="row">
                            <div className="col-6">
                                <h6>Break time</h6>
                            </div>
                            <div className="col-6">
                                <p><span>{breakTime.length === 0 ? breakTime.length : breakTime}</span>min </p>
                            </div>

                        </div>
                    </div>
                    <button onClick={toast} className='btn btn-primary w-100 mt-3'> Activity Completed</button>
                </div>


            </div>
        </div >
    );
};

export default SideMenu;