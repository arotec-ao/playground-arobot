import Image from 'next/image'
import TooltipBlockButton from './Tooltip';

import Styles from './styles.module.css'
import PlaygroundContext from '@/components/contexts/PlaygroundContext';

import { useState, useContext } from 'react';

export default function BlockButtonMenu({ blockCategoria }) {

    const [tooltipShow, setTooltipShow] = useState(false);

    const { runState } = useContext(PlaygroundContext);

    const toogleTooltipShow = () => {
        //caso esteja executando não pode adicionar blocos
        if (runState == 'run') {
            return false;
        }

        setTooltipShow(!tooltipShow);
    }
    const blurBlockButton = () => {
        setTooltipShow(false);
    }

    return (
        <div className={Styles.btnBlockMenu} onClick={toogleTooltipShow} onBlur={blurBlockButton} tabIndex={'0'}>
            <Image src={blockCategoria.iconUrl} width='25' height='25' alt='' />

            {tooltipShow &&
                <TooltipBlockButton title={blockCategoria.title} description={blockCategoria.description} blocks={blockCategoria.blocks} />}
        </div>);
}