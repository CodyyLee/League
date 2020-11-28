import React from 'react';
import './Skills.scss';

export default function Skills(props) {

    return(
        <div className='skill-desc'>
            {/* name */}
            {props.info.length ?
            <h3>{props.info[0].name}</h3> :
            <h3>{props.info.name}</h3>
            }

            {/* range */}
            {props.info.length ? 
            <>
            <h3>Range</h3>
            <p>{props.info[0].rangeBurn}</p>
            {console.log(props.info[0].rangeBurn)}
            </> : null}
            {/* description */}
            {props.info.length ? 
            <>
                <p>{props.info[0].description}</p>
            </> : 
            <p>{props.info.description}</p>}
            {/* cooldown/level */}
            {props.info.length ? 
            <>
                <h3>Cooldown</h3>
                <p>{props.info[0].cooldownBurn}</p>
            </> : 
            null}
            {/* cost/level */}
            {props.info.length ? 
            <>
                <h3>Cost</h3>
                <p>{props.info[0].costBurn}</p>
            </> :
            null}
        </div>
    )
}