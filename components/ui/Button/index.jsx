
import buttonStyle from './styles.module.css';

export default function Button({ color, children, className = '' }) {

    var colorClass = '';

    switch (color) {
        case 'primary':
            colorClass = buttonStyle.btnPrimary;
            break;
        case 'secundary':
            colorClass = buttonStyle.btnSecundary;
            break;
    }

    return (
        <button className={buttonStyle.btn + ' ' + colorClass + ' ' + className}>{children}</button>
    );
}