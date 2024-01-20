import Styles from './style.module.css';

export default function ItemConsoleMessage({
    children
}){
    return (
        <div className={Styles.itemConsole}>
            <div className={Styles.symbol}>
                &#62;
            </div>

            <div className={Styles.message}>
                {children}
            </div>
        </div>
    );
}