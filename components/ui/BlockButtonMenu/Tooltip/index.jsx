import Styles from './styles.module.css'
import BlockButton from '../BlockButton';

export default function TooltipBlockButton({ title, description, blocks }) {
    const onClickTooltip = (event) => {
        event.stopPropagation();
    }
    return (
        <div className={Styles.tooltip}>
            <div className={Styles.tooltipTitle} onClick={onClickTooltip}>{title}</div>
            <div className={Styles.tooltipDescription} onClick={onClickTooltip}>{description}</div>
            <div className={Styles.tooltipBlocks}>
                {
                    blocks.map(
                        (block, index) => (
                            <BlockButton key={index} block_data={block}>{block.title}</BlockButton>
                        )
                    )
                }
            </div>
        </div>
    );
}