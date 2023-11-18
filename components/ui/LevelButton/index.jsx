import Styles from './styles.module.css';

import PlaygroundContext from '@/components/contexts/PlaygroundContext';
import { useContext } from 'react';

export default function LevelButton({ level, active = false }) {
    const { setCurrentNivel } = useContext(PlaygroundContext);
    return (
        <button
            className={Styles.levelButton + ' ' +
                (active ? Styles.levelButtonActive : '')}
            onClick={() => { setCurrentNivel(level) }}

        >
            Nível {level + 1}
        </button>
    );
}