import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Accordion from '../accordion/Accordion';
import Card from '../card/Card';
import SideMenu from '../side-menu/SideMenu';
// import Navbar from '../Navbar/Navbar';

const MainContainer = () => {

    const [gyms, setGyms] = useState([]);
    const [min, setMin]=useState([]);


    useEffect(() => {
        fetch('my-data.json')
            .then(res => res.json())
            .then(data =>
                setGyms(data)
                // console.log(data)

            )
    }, [])

    const handelMinit=(mins)=>{
        // console.log(min);
        const newMin=[...min, mins];
        setMin(newMin);
    }



    return (
        <div >

            <div className="container-fluid">

                <div className="row">
                    <div className="col-md-9">
                        {/* <Navbar></Navbar> */}
                        <h4 className='py-4'>Select Your today’s exercise</h4>

                        <div className="row">

                            {
                                gyms.map(gym =>
                                    <Card
                                        key={gym.id}
                                        gym={gym}
                                        handelMinit={handelMinit}
                                    ></Card>
                                )
                            }

                        </div>
                        <Accordion />


                    </div>
                    <div className="col-md-3">
                        <SideMenu min={min}></SideMenu>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContainer;