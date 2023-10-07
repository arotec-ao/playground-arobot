
import Image from 'next/image'
import Styles from './TooltipActionButton.module.css'
import ActionButton from '../ActionButton/ActionButton';

export default function TooltipActionButton({title, description, actions}){
    return (
        <div className={Styles.tooltip}>
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