import Styles from './styles.module.css';

import Image from 'next/image';

export default function ItemBlockFluxo({ children, current = false }) {
    return (
        <div className={Styles.itemBlockArea}>
            <div className={Styles.itemBlock + ' ' + (current ? Styles.itemBlockCurrent : '')}>
                {children}
            </div>

            {!current && <Image src='/icons/next-flux.png' height='34' width='56' alt='' />}
        </div>

    );
}