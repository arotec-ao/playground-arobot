import Image from 'next/image'
import Button from '@/components/Button/Button'
import CardProject from '@/components/CardProject/CardProject'
import Styles from '@/styles/modules/Admin.module.css' 
import Link from 'next/link';

export default function Admin(){
    return (
        <>

            {/*Cabeçalho */}
                 
            <header className={Styles.header}>
                <div className={Styles.areaContainer+ ' '+ Styles.headerContainer}>
                    
                    {/* Elementos Cabeçalho Lado Esquerdo */}
                 
                    <div className={Styles.userData}>
                        <Image  className={'circle '+Styles.userImage} />
                        <div>
                            <div className={Styles.userFullName}>Sebastião Sukuakueche</div>
                            <div className={Styles.userName}>sukuasoft</div>
                        </div>
                    </div>

                    {/* Elementos Cabeçalho Lado Direito */}
                 
                    <div className={Styles.headerRight}>

                        <div className={Styles.search}>
                            <input className={Styles.searchInput} type="text"  placeholder="Pequise o teu projecto neste campo..." />
                            <Image className={Styles.searchIcon}  src="/icons/search.png" width='25' height='25' />
                        </div>     
                        <Link href='/'>
                            <Image className={Styles.headerIcon} src='/icons/settings.png' width='25' height='25'/>        
                        </Link>                                 
                        
                        <Link href='/'>
                            <Image className={Styles.headerIcon} src="/icons/help.png" width='25' height='25' />      
                        </Link>                                 
                    
                    </div>
                </div>
            </header>



                 
            <div className={Styles.areaContainer}>

                {/* Area Principal */}

                <div className={Styles.content}>
                    
                    <div className={Styles.projectsArea}>
                        <button className={Styles.btnCreateProject}>
                            <Image className={Styles.IconBtnCreateProject} src='/icons/plus-math.png' width='18' height='18' />Criar
                        </button>

                        <div className={Styles.projectsAreaTitle}>Projectos</div>
                    </div>

                    <div className={Styles.containerProjects}>
                        <CardProject />
                        <CardProject />
                    </div>
                </div>
             
            </div>
            
        </>
    );
}