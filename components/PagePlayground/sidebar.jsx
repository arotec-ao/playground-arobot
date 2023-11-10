import ActionButtonMenu from '@/components/ActionButtonMenu/ActionButtonMenu'

import Styles from '@/styles/modules/playground/sidebar.module.css'

export default function Sidebar() {
    return (
        <>
            {/* Aside Functions */}
            <aside className={Styles.sidebar} >
                <div className={Styles.actionsContainer}>
                    <ActionButtonMenu type='robotic' />
                    <ActionButtonMenu type='condition' />
                </div>

            </aside>
        </>

    )
}