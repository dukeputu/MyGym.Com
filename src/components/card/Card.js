import React from 'react';
// import Navbar from '../Navbar/Navbar'

const Card = () => {
    return (
        <div className="col-md-6 col-lg-4">
          
            
                <div class="card mb-4">
                    <img src="https://www.muscleandfitness.com/wp-content/uploads/2019/06/man-shoulder-dips-1109.jpg?w=800&quality=86&strip=all" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <h5>Time required : <span>30</span>min</h5>
                        <button class="btn btn-primary w-100 mt-3" >Add to list</button>
                    </div>
                </div>
           
        </div>
    );
};

export default Card;