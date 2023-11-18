import Styles from '@/styles/modules/playground/fluxoControl.module.css'
import Block from '@/components/ui/Block'

import PlaygroundContext from '@/components/contexts/PlaygroundContext'
import { useContext } from 'react'

export default function FluxoControl() {
  const { niveis, currentNivel } = useContext(PlaygroundContext);
  return (

    <div className={Styles.FluxoControl} >
      <div className={Styles.BlocksContainer}>
        {
          niveis[currentNivel].blocks.map((block) => {
            return (<Block key={block.id} block={block} />)
          })

        }
      </div>


    </div>

  )
}