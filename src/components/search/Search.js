import React from 'react';
import './Search.scss';

export default function Landing(props) {

    const submit = e => {
        e.preventDefault();
        
        
    }

    const changeHandler = e => {
        let input = e.target.value;
        
        props.setName(input);
    }

    return(
        <>
            <form className='search' name='search-form' onSubmit={submit}>
                <fieldset>
                    {props.champion ? 
                    <>
                        <input type='text' value={props.name} id='name' placeholder='Enter a champion name...' onChange={changeHandler}/>
                    </> :
                    <>
                        <input type='text' value={props.name} id='name' placeholder='Enter a player name...' onChange={changeHandler}/>

                        <label htmlFor='region'>Region</label>
                        <select className='region' selected='NA' id='region' name='region'>
                            <option className='option' value='BR1'>BR</option>
                            <option className='option' value='EUN1'>EUN</option>
                            <option className='option' value='EUW1'>EUW</option>
                            <option className='option' value='JP1'>JP</option>
                            <option className='option' value='KR1'>KR</option>
                            <option className='option' value='LA1'>LA1</option>
                            <option className='option' value='LA2'>LA2</option>
                            <option className='option' value='NA1'>NA</option>
                            <option className='option' value='OC1'>OC</option>
                            <option className='option' value='TR1'>TR</option>
                            <option className='option' value='RU1'>RU</option>
                        </select>
                    </>}
                </fieldset>
                
                <button type='submit' onClick={submit} className='btn'>Search</button>
            </form>
        </>
    )
}