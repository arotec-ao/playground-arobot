import PlaygroundContext from '@/components/contexts/PlaygroundContext';
import Styles from './console.module.css';
import { useEffect, useState, useContext } from 'react';
import PopoverBlocks from '../popover';
import PopoverItem from '../popover/popoverItem';
import BlockInside from './inside';

import Image from 'next/image';



export default function BlockConsole({ block }) {

    const { niveis, currentNivel, deleteBlock, moveBlock, runState } = useContext(PlaygroundContext);

    const [insideBlock, setInsideBlock] = useState(null);

     const idBlock = block.id;
    const indexBlock = niveis[currentNivel].blocks.findIndex((b) => {
        if (b.id == idBlock) return true;
        return false;
    })

    const [showMenu, setShowMenu] = useState(false);
    function onClickAdd(ev) {
        ev.stopPropagation();

        if (insideBlock != null) {
            return;
        }

        console.log('hello!');
        setShowMenu(true);
    }
    function leaveButton(ev) {
        ev.stopPropagation();

        if (insideBlock != null) {
            return;
        }
        setShowMenu(false);
    }

    const addInsideBlock = (type) => {
        setInsideBlock({
            type,
            getValue: () => { },
            clearInside: () => {
                setInsideBlock(null);

            }
        });
        setShowMenu(false);
    }
    
    block.getValue = ()=>{
        if (insideBlock == null) {
            return '';
        }
        else {
            return insideBlock.getValue();
        }
    }

    return (
        <div className={Styles.blockConsole}>
            <div className={Styles.blockConsoleContent}>
                Emitir
                <button disabled={runState == 'run' ? true : false} className={(insideBlock != null ?
                    Styles.blockAddInseded : Styles.blockAdd)} onClick={onClickAdd} onBlur={leaveButton} type='button' >
                    {
                        insideBlock != null ? (<BlockInside block={insideBlock} />) : ''
                    }
                    {showMenu ? (<PopoverBlocks>
                        <PopoverItem action={() => {
                            addInsideBlock('variavel')
                        }}>Variavel</PopoverItem>
                        <PopoverItem action={() => { addInsideBlock('constante') }}>Constante</PopoverItem>
                        <PopoverItem action={() => { addInsideBlock('somar') }}>Somar</PopoverItem>
                        <PopoverItem action={() => { addInsideBlock('subtrair') }}>Subtrair</PopoverItem>
                        <PopoverItem action={() => { addInsideBlock('multiplicar') }}>Multiplicar</PopoverItem>
                        <PopoverItem action={() => { addInsideBlock('dividir') }}>Dividir</PopoverItem>
                        <PopoverItem action={() => { addInsideBlock('modulo') }}>Módulo</PopoverItem>
                        <PopoverItem action={() => { addInsideBlock('maior') }}>Maior</PopoverItem>
                        <PopoverItem action={() => { addInsideBlock('menor') }}>Menor</PopoverItem>
                        <PopoverItem action={() => { addInsideBlock('maior_igual') }}>Maior ou igual</PopoverItem>
                        <PopoverItem action={() => { addInsideBlock('menor_igual') }}>Menor ou igual</PopoverItem>
                        <PopoverItem action={() => { addInsideBlock('igual') }}>Igual</PopoverItem>
                        <PopoverItem action={() => { addInsideBlock('e') }}>E</PopoverItem>
                        <PopoverItem action={() => { addInsideBlock('ou') }}>Ou</PopoverItem>
                        <PopoverItem action={() => { addInsideBlock('nao') }}>Não</PopoverItem>
                    </PopoverBlocks>) : ''}
                </button>
                no console


                <Image onClick={() => { deleteBlock(idBlock) }} src='/icons/add.png' width='18' height='18' className={Styles.delete} alt='' />
            </div>

            <div className={Styles.blockArrows}>
                {/* Para poder ocultar em situações que ele é o primeiro bloco */}
                {indexBlock > 0 && <Image onClick={() => { moveBlock(indexBlock, -1) }} className={Styles.arrowUp} src='/icons/arrow-down.png' width='16' height='16' alt='' />}

                {/* Para poder ocultar em situações que ele é o ultimo bloco */}
                {indexBlock < niveis[currentNivel].blocks.length - 1 && <Image onClick={() => { moveBlock(indexBlock, 1) }} className={Styles.arrowDown} src='/icons/arrow-down.png' width='16' height='16' alt='' />}

            </div>

        </div>
    );
}