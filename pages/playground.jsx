import PlaygroundContent from '@/components/pages/playground/content';
import PlaygroundContext from '@/components/contexts/PlaygroundContext';

import { useEffect, useState } from 'react';

var lastBlockId = 1;

export default function Playground() {
    const [niveis, addNivel] = useState([{ blocks: [] }]);
    const [currentNivel, setCurrentNivel] = useState(0);
    const [runState, setRunState] = useState('pause');
    const [fluxoMessages, setFluxoMessage] = useState([]);
    const [consoleMessages, setConsoleMessages] = useState([]);
    const [variaveis, setVariaveis] = useState([]);



    useEffect(()=>{
        const variaveis_temp = [];
        for (const b of niveis[currentNivel].blocks) {
            if (b.name == 'criar_variavel') {
                variaveis_temp.push({
                    nome: b.sequence[1].value,
                    valor: b.sequence[3].value,
                }
                );
            }
        }

        setVariaveis(variaveis_temp);
    }, [niveis]);


    
    var state = 'pause';

    //acionador do arobot
    const arobotTriggers = {
        andar: () => { },
        rotacionar: () => { },
        rotacionarExato: () => { },
        ligarFarol: () => { },
        desligarFarol: () => { }
    }

    //adiciona um bloco
    const addBlock = (block_data) => {

        //caso esteja executando não pode editar blocos
        if (runState == 'run') {
            return false;
        }

        addNivel(niveis.map((nivel, index) => {
            if (index == currentNivel) {
                //para forçar atualização do state
                const newBlocks = {
                    ...nivel, blocks: [...nivel.blocks, {
                        /*
                        Criar uma copia de dados de um bloco 
                        (para não se referenciar ao template)
                        */
                        ...block_data,
                        id: lastBlockId,
                        sequence: block_data.sequence.map((seq) => {
                            return { ...seq }
                        })
                    }]
                };

                lastBlockId++;
                return newBlocks;

            }
            return nivel
        }));

    }


    //apaga um bloco
    const deleteBlock = (idBlock) => {

        //caso esteja executando não pode editar blocos
        if (runState == 'run') {
            return false;
        }

        addNivel(niveis.map((nivel, index) => {
            if (index == currentNivel) {

                return {
                    ...nivel, blocks: nivel.blocks.filter((block) => {
                        if (block.id == idBlock) return false;
                        return true;
                    })
                }
            }
            return nivel
        }));
    }

    //move um bloco para cima ou para baixo
    const moveBlock = (indexBlock, dir) => {

        //caso esteja executando não pode editar blocos
        if (runState == 'run') {
            return false;
        }

        //para verificar se ele não está tentando mover para direções que não existem
        if (!(indexBlock + dir < niveis[currentNivel].blocks.length
            && indexBlock + dir >= 0)) {
            return false;
        }


        addNivel(niveis.map((nivel, nivelIndex) => {

            if (nivelIndex == currentNivel) {

                return {
                    ...nivel, blocks: nivel.blocks.map((block, index) => {
                        if (index == indexBlock) {
                            return {
                                ...nivel.blocks[indexBlock + dir], sequence: nivel.blocks[indexBlock + dir].sequence.map((seq) => {
                                    return { ...seq };
                                })
                            };
                        }
                        else if (index == indexBlock + dir) {
                            return {
                                ...nivel.blocks[indexBlock], sequence: nivel.blocks[indexBlock].sequence.map((seq) => {
                                    return { ...seq };
                                })
                            };
                        }
                        else {
                            return {
                                ...block, sequence: block.sequence.map((seq) => {
                                    return { ...seq };
                                })
                            };
                        }
                    })
                };

            }
            else {
                return nivel;
            }

        }))

    }

    //muda o modo de execucao (run e pause)
    const changeRunState = (type) => {
        if (type == 'play') {
            start();
        }

        else if (type == 'pause') {
            state = 'pause';
            setFluxoMessage([]);
            setRunState('pause');
        }
    }

    //Função para começar a execução do playground
    const start = () => {
        if (niveis[currentNivel].blocks.length > 0) {
            setRunState('run');
            state = 'run';

            const blocks = niveis[currentNivel].blocks;
            runBlocks(blocks);

        } else {
            alert('Precisa de inserir pelo menos 1 bloco');
        }

        async function runBlocks(blocks) {
            setConsoleMessages([]);
            const fxMensagens = [];
            const fxConsoleMensagens = [];
            for (const block of blocks) {

                if (state == 'pause') {
                    return;
                }

                var messageFluxo = '';

                for (const sequence of block.sequence) {
                    if (sequence.type == 'text') {
                        messageFluxo += sequence.content + ' ';
                    }
                    else if (sequence.type == 'input') {
                        messageFluxo += sequence.value + ' ';

                    }
                    else {
                        messageFluxo += ' ';

                    }
                }

                messageFluxo = messageFluxo.trim();

                setFluxoMessage([...fxMensagens, messageFluxo]);
                fxMensagens.push(messageFluxo);

                switch (block.name) {
                    case 'mover':
                        await arobotTriggers.andar(block.sequence[1].value);
                        break;
                    case 'rotate':
                        await arobotTriggers.rotacionar(block.sequence[1].value);
                        break;
                    case 'rotate-exact':
                        await arobotTriggers.rotacionarExato(block.sequence[1].value);
                        break;
                    case 'buzinar':
                        await new Promise((resolve, reject) => {
                            const som = document.createElement('audio');
                            som.src = '/sounds/buzina.mp3';
                            som.play();

                            som.onended = () => {
                                resolve();
                            }

                        });
                        break;
                    case 'esperar':
                        await new Promise((resolve, reject) => {
                            setTimeout(() => {
                                resolve();
                            }, parseInt(block.sequence[1].value) * 1000);
                        })
                        break;
                    case 'acender_luz':
                        arobotTriggers.ligarFarol();
                        break;
                    case 'apagar_luz':
                        arobotTriggers.desligarFarol();
                        break;
                    case 'avancar_nivel':
                        break;
                    case 'recuar_nivel':
                        break;
                    case 'nivel_especifico':
                        break;

                    case 'console_message':
                        var valor = block.getValue();

                        await new Promise((resolve, reject) => {
                            setTimeout(() => {
                                setConsoleMessages([...fxConsoleMensagens, valor]);
                                fxConsoleMensagens.push(valor);
                                resolve();
                            }, 200);
                        });

                        break;
                }
            }

            setFluxoMessage([]);
            setRunState('pause');
            state = 'pause';
        }
    }

    //valores do provider (Context Api)
    const provider_data = {
        niveis, addNivel, currentNivel,
        setCurrentNivel, addBlock, runState,
        changeRunState, arobotTriggers, fluxoMessages,
        deleteBlock, moveBlock,
        consoleMessages, variaveis
    }

    return (
        <PlaygroundContext.Provider value={provider_data}>
            <PlaygroundContent />
        </PlaygroundContext.Provider>
    );
}
