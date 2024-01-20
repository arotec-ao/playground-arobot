import Styles from '@/styles/modules/playground/fluxoControl.module.css'

import Block from '@/components/ui/Block'
import BlockConsole from '@/components/ui/Block/custom/BlockConsole';


import PlaygroundContext from '@/components/contexts/PlaygroundContext'
import { useContext, useEffect } from 'react'

export default function FluxoControl() {
  const { niveis, currentNivel } = useContext(PlaygroundContext);

  return (

    <div className={Styles.FluxoControl} >
      <div className={Styles.BlocksContainer}>
        {
          niveis[currentNivel].blocks.map((block) => {

            switch(block.name){
              case 'console_message':
                 return (<BlockConsole key={block.id} block={block} />);
              default:
                return (<Block key={block.id} block={block} />)
            }
          })

        }
      </div>


    </div>

  )
}