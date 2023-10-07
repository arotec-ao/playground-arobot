import Styles from './ActionButtonMenu.module.css'
import Image from 'next/image'
import TooltipActionButton from './Tooltip/TooltipActionButton';
import { actionMenuTypes } from './ActionMenuTypes';

export default function ActionButtonMenu({type}){

    const typeMenu = actionMenuTypes[type];
    const tooltipShow=false;


   return (
    <div className={Styles.btnActionMenu}>
        <Image src={typeMenu.iconUrl} width='25' height='25' />

        {tooltipShow &&      
         <TooltipActionButton title={typeMenu.title} description={typeMenu.description}   actions={typeMenu.actions}/>     }
    </div>);
}