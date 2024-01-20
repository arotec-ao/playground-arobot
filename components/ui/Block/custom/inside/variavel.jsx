import { useEffect, useState, useContext, useRef } from 'react';
import PlaygroundContext from '@/components/contexts/PlaygroundContext';
import Styles from './styles.module.css';

import Image from 'next/image';

export default function BlockInsideVariavel({ block }) {

    const { niveis, currentNivel,variaveis,  runState } = useContext(PlaygroundContext);

    const selectRef = useRef(null);


    block.getValue = () => {
        return variaveis[selectRef.current.selectedIndex].valor;
    }


    return (<div className={Styles.blockInside} onClick={(ev)=>{
        ev.stopPropagation();
    }}>
        <select ref={selectRef} disabled={runState == 'run' ? true : false} >
            {
                variaveis.map((variavel, index) => {
                    return (<option key={index}>{variavel.nome}</option>)
                })
            }

        </select>
        <Image onClick={()=>{
            block.clearInside();
        }} src='/icons/add.png' width='16' height='16' className={Styles.delete} alt='' />
    </div>);
}