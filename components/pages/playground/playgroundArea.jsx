import Image from 'next/image';
import Styles from '@/styles/modules/playground/playgroundArea.module.css'

import PlaygroundContext from '@/components/contexts/PlaygroundContext';
import { useContext, useState } from 'react';
import ArobotPlayer from '@/components/ui/ArobotPlayer';

export default function PlaygroundArea() {
    const { niveis, runState, changeRunState, addNivel } = useContext(PlaygroundContext);
    const [showExportImportMenu, setShowExportImportMenu] = useState(false);
    const disable_buttons = {
        pause: false,
        play: false,
    };

    switch (runState) {
        case 'run':
            disable_buttons.play = true;
            disable_buttons.pause = false;
            break;
        case 'pause':
            disable_buttons.play = false;
            disable_buttons.pause = true;

    }

    const exportProject = () => {

        var nome_file = prompt('Qual será o nome do ficheiro: ');
        if (nome_file == '') nome_file = 'projecto_arobot_playground';

        const link = document.createElement('a');
        link.setAttribute('href', 'data:json/application;charset=utf-8,' + encodeURIComponent(
            JSON.stringify(niveis)
        ));
        link.setAttribute('download', nome_file + '.json');

        link.click();

    }


    const importProject = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.click();

        input.addEventListener('change', () => {
            if (input.files.length == 1) {
                const file = input.files[0];
                file.text().then((value) => {
                    try {

                        //pega o dados importado e tenta converter em json, 
                        //gera um erro caso está incompativel
                        const data = JSON.parse(value);

                        //é compativel
                        if (isFileDataCompatible(data)) {
                            addNivel([...data]);
                        }

                        else {
                            throw 'O ficheiro não é compatível com o Playground';
                        }
                    }
                    catch (e) {
                        alert('Houve um problema no arquivo que importaste!');
                    }
                });
            }
            else {
                alert('Selecione um ficheiro apenas.');
            }
        });

    }

    return (
        <div className={Styles.playgroundArea + ' ' + Styles.areaActive} >

            <div className={Styles.panelRunFunctions}>

                <button className={Styles.btnRunFunction} disabled={disable_buttons.play}
                    onClick={() => { changeRunState('play') }}>
                    <Image src='/icons/play.png' width='20' height='20' alt='' />
                </button>

                <button className={Styles.btnRunFunction} disabled={disable_buttons.pause}
                    onClick={() => { changeRunState('pause') }}>
                    <Image src='/icons/pause.png' width='20' height='20' alt='' />
                </button>
            </div>

            <button className={Styles.exportImportProject + ' ' +
                (showExportImportMenu ? Styles.exportImportProjectActive : '')}
                onClick={() => {
                    setShowExportImportMenu(!showExportImportMenu);
                }} onBlur={() => {
                    setShowExportImportMenu(false);
                }} >
                <Image src='/icons/settings.png' width='22' height='22' />

                {(showExportImportMenu &&
                    <div className={Styles.exportImportMenu} onClick={(ev) => {
                        ev.stopPropagation();
                    }}>
                        <div onClick={exportProject} className={Styles.exportProject}>Exportar Projecto</div>
                        <div onClick={importProject} className={Styles.importProject}>Importar Projecto</div>
                    </div>)}

            </button>


            <div className={Styles.boardPlayground} >
                <ArobotPlayer />
            </div>
        </div>

    )
}

function isFileDataCompatible(data){
     //verificando se o formato é realmente compátivel
     let isCompativel = false;

     //verifica se é lista
     if (typeof data.length !== undefined) {

         //n representa cada nivel
         for (const n of data) {

             //verifica se o nivel contem a proprieda bloco
             if (typeof n.blocks !== undefined) {

                 //verifica se é lista
                 if (typeof n.blocks.length !== undefined) {

                     //caso tenha 0 blocks
                     if (n.blocks.length == 0) {
                         isCompativel = true;
                         continue;
                     }

                     //pega cada bloco e verifica se contem todas 
                     //propriedades
                     for (const b of n.blocks) {
                         if (typeof b.sequence !== undefined
                             && typeof b.id !== undefined
                             && typeof b.title !== undefined
                             && typeof b.name !== undefined) {
                             isCompativel = true;
                         }
                         else {
                             isCompativel = false;
                             break;
                         }
                     }
                 }

                 else {
                     isCompativel = false;
                 }


                 if (isCompativel == false) {
                     break;
                 }
             }

             else {
                 isCompativel = false;
                 break;
             }
         }


     }

     else {
         isCompativel = false;
     }

     return isCompativel;
}