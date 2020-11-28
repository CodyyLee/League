import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Champ.scss';
import { Link } from 'react-router-dom';

import Skills from './skills/Skills';

export default function Champ(props) {

    const [champ, setChamp] = useState();
    const [active, setActive] = useState('passive');
    const [spellInfo, setSpellInfo] = useState({});

    let uId = 0;

    useEffect(() => {
        axios.get(`http://ddragon.leagueoflegends.com/cdn/10.23.1/data/en_US/champion/${props.match.params.name}.json`)
            .then(res => {
                setChamp(res.data.data[`${props.match.params.name}`]);
                console.log(res.data.data[`${props.match.params.name}`])
            })
            .catch(err => {
                console.log(err);
            })
    }, [props.match.params.name]);

    const activity = e => {
        setActive(e.target.name);

        if(active === 'passive') {
            setSpellInfo(champ.passive);
        } else {
            setSpellInfo(champ.spells.filter(spell => {
                return spell.id === active;
            }));
        }

        console.log(spellInfo)
    }

    return (
        <div className='container'>
            <button id='back'><Link to='/'>Back</Link></button>
            {champ ?
            <>
                <div className='champ-header'>
                    <img src={process.env.PUBLIC_URL + `/10.23.1/img/champion/${champ.id}.png`} alt={champ.id}/>

                    <div className='name-container'>
                        <h1 className='champ-name'>{champ.id}</h1>
                        <h3 className='title'>{champ.title}</h3>

                        <div className='champ-tags'>
                            {champ.tags.map(tag => {
                                let id = uId;
                                uId++;

                                return <p className='tag' key={id}>{tag}</p>
                            })}
                        </div>
                    </div>

                    <p>{champ.lore}</p>
                </div>

                <div className='skills'>
                    <img src={process.env.PUBLIC_URL + `/10.23.1/img/passive/${champ.passive.image.full}`} alt={champ.passive.name} className='active' name='passive' onClick={activity}/>
                    
                    {champ.spells.map(spell => {
                        let id = uId;
                        uId++;

                        return <img src={process.env.PUBLIC_URL + `/10.23.1/img/spell/${spell.image.full}`} alt={spell.name} name={spell.id} key={id}  className='non-active' onClick={activity}/>
                    })}
                </div>

                <Skills active={active} info={spellInfo}/>
            </>
            : null}
        </div>
    )
}