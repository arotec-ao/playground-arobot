import Styles from './styles.module.css';
import PlaygroundContext from '@/components/contexts/PlaygroundContext';
import { useContext, useRef} from 'react';
import Image from 'next/image';


export default function Block({ block }) {

    const { niveis, addNivel, currentNivel, deleteBlock, moveBlock, runState } = useContext(PlaygroundContext);

    const idBlock = block.id;
    const indexBlock = niveis[currentNivel].blocks.findIndex((b) => {
        if (b.id == idBlock) return true;
        return false;
    })
    
    var inputsRef = [];

    const inputChange = (index, indexSequence) => {
        const inputRef = inputsRef[index];

        if (inputRef.current) {

            //para atualizar o estado com novos dados inputs dos blocos
            addNivel(niveis.map((nivel, x)=>{
                if(x == currentNivel){
                    return {
                        ...nivel, 
                        blocks:
                            nivel.blocks.map((block, y)=>{
                                if(y == indexBlock){
                                    return {
                                        ...block, 
                                        sequence: block.sequence.map((seq, z)=>{
                                            if( z == indexSequence){
                                                return {
                                                    ...seq, 
                                                    value: inputRef.current.value
                                                }
                                            }
                                            return seq;
                                        })
                                    }
                                }
                                return block;
                            })
                    }
                }
                
                return nivel;
                
            }));
       
           /* niveis[currentNivel].blocks[indexBlock].sequence[indexSequence].value =
                inputRef.current.value;
                */
        }

     
    }

    return (
        <div className={Styles.block}>
            <div className={Styles.blockContent}>
                {
                    block.sequence.map((sequence, indexSequence) => {

                        switch (sequence.type) {
                            case 'text':
                                return (<span key={indexSequence}>{sequence.content}</span>)
                            case 'input':
                                const inputRef = useRef(null);
                                inputsRef.push(inputRef);
                                const indexRef = inputsRef.length-1;

                                return (<input key={indexSequence} type={sequence.typeInput} defaultValue={sequence.value} ref={inputRef}
                                    onChange={() => { inputChange(indexRef, indexSequence) }} 
                                    disabled={runState =='run'? true: false}
                                    />)
                        }
                    })
                }

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
};