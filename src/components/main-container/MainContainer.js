import React from 'react';
import Card from '../card/Card';
import SideMenu from '../side-menu/SideMenu';
import Navbar from '../Navbar/Navbar';

const mainContainer = () => {
    return (
        <div >

            <div className="container-fluid">

                <div className="row">
                    <div className="col-md-9">
                        {/* <Navbar></Navbar> */}
                        <h4 className='py-4'>Select Your today’s exercise</h4>

                        <div className="row">
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <SideMenu></SideMenu>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default mainContainer;