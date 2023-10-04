import Image from 'next/image'
import Button from '@/components/Button/Button'
import CardProject from '@/components/CardProject/CardProject'
import Styles from '@/styles/modules/Admin.module.css' 

export default function Admin(){
    return (
        <>
            <header className={Styles.header}>
                <div className={Styles.areaContainer+ ' '+ Styles.headerContainer}>
                    <div className={Styles.userData}>
                        <Image  className={'circle '+Styles.userImage} />
                        <div>
                            <div className={Styles.userFullName}>Sebastião Sukuakueche</div>
                            <div className={Styles.userName}>sukuasoft</div>
                        </div>
                    </div>

                    <div className={Styles.search}>
                        <input className={Styles.searchInput} type="text"  placeholder="Pequise o teu projecto neste campo..." />
                        <Image className={Styles.searchIcon} />
                    </div>

                    <div className={Styles.headerRight}>
                        <Image className={Styles.headerIcon} />
                        <Image className={Styles.headerIcon} />
                    </div>
                </div>
            </header>


            <div className={Styles.areaContainer}>
                <div className={Styles.content}>
                    
                    <div className={Styles.projectsArea}>
                        <button className={Styles.btnCreateProject}>
                            <Image className={Styles.IconBtnCreateProject} />Criar
                        </button>

                        <div className={Styles.projectsAreaTitle}>Projectos</div>
                    </div>

                    <div className={Styles.containerProjects}>
                    <CardProject />
                    <CardProject />
                    </div>
                </div>
                <footer className={Styles.footer}>
                    <div>@arobotplayground</div>
                </footer>
            </div>
            
        </>
    );
}