import BlockButtonMenu from '@/components/ui/BlockButtonMenu'
import { allBlockTypes } from '@/components/contexts/PlaygroundContext'

import Styles from '@/styles/modules/playground/sidebar.module.css'

export default function Sidebar() {

    return (

        <aside className={Styles.sidebar} >
            <div className={Styles.blocksMenuContainer}>
                {
                    Object.keys(allBlockTypes).map((category, index) => {
                        return (<BlockButtonMenu key={index} blockCategoria={allBlockTypes[category]} />)
                    })
                }
            </div>

        </aside>


    )
}