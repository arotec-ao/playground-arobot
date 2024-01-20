import { useEffect, useState, useContext, useRef } from 'react';
import PlaygroundContext from '@/components/contexts/PlaygroundContext';
import Styles from './styles.module.css';

import Image from 'next/image';

export default function BlockInsideConstante({ block }) {

    const { niveis, currentNivel, runState } = useContext(PlaygroundContext);

    const inputRef = useRef(null);


    block.getValue = () => {
        if(inputRef.current){
            return inputRef.current.value;
        }
        else
        {
            return '';
        }
    }



    return (<div className={Styles.blockInside} onClick={(ev)=>{
        ev.stopPropagation();
    }}>
        <input type='text' ref={inputRef}
            disabled={runState == 'run' ? true : false}
        />
        <Image onClick={() => {
            block.clearInside();
        }} src='/icons/add.png' width='16' height='16' className={Styles.delete} alt='' />
    </div>);
}