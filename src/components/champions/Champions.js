import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Champions.scss';

export default function Champions(props) {

    const [champs, setChamps] = useState({});
    const [searched, setSearched] = useState([]);

    useEffect(() => {
        if(Object.keys(champs).length === 0) {
            axios.get('http://ddragon.leagueoflegends.com/cdn/10.23.1/data/en_US/champion.json')
                .then(res => {
                    setChamps(res.data.data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }, []);

    useEffect(() => {
        setSearched(Object.keys(champs).filter(champ => {
            return champ.includes(props.name);
        }));
    }, [props.name]);

    return(
        <div className='container'>
            {props.name.length > 0 ? 
            searched.map(champ => {
                return (
                    <div key={champ} className='champ'>
                        <img onClick={() => {
                        props.history.push(`/${champ}`)
                    }} src={process.env.PUBLIC_URL + `/10.23.1/img/champion/${champ}.png`}/>
                        <p className='champ-name' onClick={() => {
                        props.history.push(`/${champ}`)
                    }}>{champs[champ].name}</p>
                    </div>
                )
            }) : Object.keys(champs).map(champ => {
                return (
                    <div key={champ} className='champ'>
                        <img onClick={() => {
                        props.history.push(`/${champ}`)
                    }} src={process.env.PUBLIC_URL + `/10.23.1/img/champion/${champ}.png`}/>
                        <p className='champ-name' onClick={() => {
                        props.history.push(`/${champ}`)
                    }}>{champs[champ].name}</p>
                    </div>
                )
            })}
        </div>
    )
}