import React from 'react';

const Break = (props) => {
    
// console.log(props.break , props.breakTime);
    return (
        <li className={`${props.breakTime === props.break ? 'active' : ''}`} id={props.id} onClick={()=>{props.handelBreak(props.break, props.id)}}>{props.break}
             m
        </li>
    );
};

export default Break;