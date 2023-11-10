'use client';


import Styles from './ActionButtonMenu.module.css'
import Image from 'next/image'
import TooltipActionButton from './Tooltip/TooltipActionButton';
import { actionMenuTypes } from './ActionMenuTypes';

import { useState } from 'react';

export default function ActionButtonMenu({type}){

    const typeMenu = actionMenuTypes[type];
    const [tooltipShow, setTooltipShow]= useState(false);

    const toogleTooltipShow = ()=>{
        setTooltipShow(!tooltipShow);
    }
    const blurActionButton = ()=>{
        setTooltipShow(false);
    }

   return (
    <div className={Styles.btnActionMenu} onClick={toogleTooltipShow} onBlur={blurActionButton} tabIndex={'0'}>
        <Image src={typeMenu.iconUrl} width='25' height='25' />

        {tooltipShow &&      
         <TooltipActionButton title={typeMenu.title} description={typeMenu.description}   actions={typeMenu.actions}/>     }
    </div>);
}