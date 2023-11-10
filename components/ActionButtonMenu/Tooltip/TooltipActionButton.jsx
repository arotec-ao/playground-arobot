
import Image from 'next/image'
import Styles from './TooltipActionButton.module.css'
import ActionButton from '../ActionButton/ActionButton';

export default function TooltipActionButton({title, description, actions}){
    const onClickTooltip = (event)=>{
        event.stopPropagation();
    }
    return (
        <div className={Styles.tooltip} onClick={onClickTooltip}>
            <div className={Styles.tooltipTitle}>{title}</div>
            <div className={Styles.tooltipDescription}>{description}</div>
            <div className={Styles.tooltipActions}>
                {
                    actions.map(
                        (value, index)=>(
                            <ActionButton key={index} actionClick={value.actionClick}>{value.title}</ActionButton>
                        )
                    )
                }
            </div>
        </div>
    );
}