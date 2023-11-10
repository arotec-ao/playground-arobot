import Styles from '@/styles/modules/playground/switchArea.module.css';

export default function SwitchArea() {
    return (
        <>
            {/* Switch Area em Mobile Styles */}
            <div div className={Styles.switchArea} >
                <button className={Styles.btnSwitchArea}>
                    Estrutura
                </button>

                <button className={Styles.btnSwitchArea + ' ' + Styles.btnSwitchAreaCurrent}>
                    Execução
                </button>
            </div>
        </>
    );
}