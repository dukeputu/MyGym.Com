import React, { useState } from 'react';
import SideMenu from '../side-menu/SideMenu';
// import Navbar from '../Navbar/Navbar'

const Card = (props) => {

    const { workOutname, description, img, time } = props?.gym;

    // const [times, setTimes] = useState([]);
    // console.log(times);

    const minit=(min) => {
        // setTimes(min);
        console.log(min);
        // <SideMenu times={min}></SideMenu>
    }
    // <SideMenu time={times}></SideMenu>



    return (
        <div className="col-md-6 col-lg-4">
            <div className="card mb-4">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{workOutname}</h5>
                    <p className="card-text">{description.length > 100 ? description.slice(0, 100) + "..." : description}</p>
                    <h5>Time required : <span>{time}</span>min</h5>
                    <button onClick={()=>minit(time)} className="btn btn-primary w-100 mt-3 " >Add to list</button>
                </div>
            </div>

        </div>
    );
};

export default Card;