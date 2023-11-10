import Image from 'next/image';
import Styles from '@/styles/modules/playground/playgroundArea.module.css'

export default function PlaygroundArea() {
    return (
        <>
            {/* Area Background */}
            <div div className={Styles.playgroundArea + ' ' + Styles.areaActive} >

                <div className={Styles.panelRunFunctions}>
                    <button className={Styles.btnRunFunction}>
                        <Image src='/icons/pause.png' width='25' height='25' />
                    </button>

                    <button className={Styles.btnRunFunction}>
                        <Image src='/icons/play.png' width='25' height='25' />
                    </button>

                    <button className={Styles.btnRunFunction}>
                        <Image src='/icons/step.png' width='25' height='25' />
                    </button>
                </div>

                {/* Quadro */}
                <div className={Styles.boardPlayground}>
                    {/* Box */}
                    <div className={Styles.arobot}></div>

                </div>
            </div>
        </>
    )
}