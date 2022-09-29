import React from 'react';

const Break = (props) => {
    
// console.log(props.break);
    return (
        <li id={props.id} onClick={()=>{props.handelBreak(props.break, props.id)}}>{props.break}
             m
        </li>
    );
};

export default Break;