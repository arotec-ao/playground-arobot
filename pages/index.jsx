import HomeStyle from '@/styles/modules/Home.module.css'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import Image from 'next/image'
import HowWorks from '@/components/pages/home/HowWorks'
import LogoAP from '@/components/ui/LogoAP'

import { useState } from 'react'

export default function Home() {

  const [showNavbarLinks, setShowNavbarLinks] = useState(false);

  return (

    <>

      {/* Header */}
      <header className={HomeStyle.header}>

        {/* Cover */}
        <div className={HomeStyle.headerCover}>
          <img className={HomeStyle.headerCoverImage} src="/images/arobot-cover.jpg" alt='' />
          <div className={HomeStyle.headerGradient}></div>
        </div>

        <div className={HomeStyle.headerContainer + ' ' + HomeStyle.areaContainer}>

          {/* Navbar */}
          <div className={HomeStyle.navbar}>

            <Link href={'/'}><LogoAP /></Link>
            <div className={HomeStyle.navbarRight}>
              <div type="button" className={HomeStyle.navbarLinks + ' ' + (showNavbarLinks ? HomeStyle.navbarLinksShow : '')}
              >
                <Link className={HomeStyle.headerLink} href={'/playground'}>Playground</Link>
                <Link className={HomeStyle.headerLink} href={'/#arobot'}>Conheça AROBOT</Link>
              </div>
              <button type='button' className={HomeStyle.menuButton} onClick={() => {
                setShowNavbarLinks(!showNavbarLinks);
              }}>
                <Image src='/icons/menu.png' width='20' height='20' alt='icon' />
              </button>
            </div>
          </div>

          {/* Header Content */}
          <div className={HomeStyle.headerContent}>

            <div className={HomeStyle.headerAreaImage}>
              <Image className={HomeStyle.headerImage} src={'/images/arobot.png'} alt='' width='500' height='400' />
            </div>

            <div className={HomeStyle.headerAreaText}>
              <div>
                <div className={HomeStyle.textHeader}>
                  Teste agora o <span>AROBOT</span> sem precisar de equipamento! <br />
                  Viva a experiência <span className={HomeStyle.textHeaderMark}>sem custo algum</span>
                  .</div>
                <div className={HomeStyle.shadowHeaderButton}>
                  <Link href="/playground"><Button color="primary">Teste já</Button></Link>
                </div>

              </div>
            </div>

          </div>
        </div>


      </header>

      {/* Main Content */}
      <div>
        {/* How Works */}
        <div className={HomeStyle.areaContainer + ' ' + HomeStyle.hwSection}>
          <div className={HomeStyle.hwTitleSection}>Como Funciona?</div>
          <div className={HomeStyle.hwStepsContainer}>
            <HowWorks title="Crie suas etapas e instruções" srcImage="/images/hw-1.jpeg">
              Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software l
              like Aldus PageMaker including versions of Lorem
            </HowWorks>

            <HowWorks title="Execute e vê o resultado" srcImage="/images/hw-2.jpeg">
              Lorem Ipsum is simply dummy text of the printing.
              and typesetting industry. Lorem Ipsum has been
              the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum
            </HowWorks>
          </div>
        </div>

        {/* AROBOT Section */}
        <div id="arobot" className={HomeStyle.arobotSection}>
          <div className={HomeStyle.areaContainer}>
            <div className={HomeStyle.arobotSectionTitle}>O que é o AROBOT afinal</div>
            <div className={HomeStyle.arobotSectionContent}>
              O AROBOT é um kit de robô educacional projetado para crianças aprenderem sobre robótica e programação. O kit inclui uma variedade de componentes, incluindo motores, sensores, controladores e outras peças eletrônicas que permitem que as crianças construam e programem seu próprio robô. Com esse principal foco o
              AROBOTPlayground te permitirá viver dessa mesma experiência sem a necessidade de possuir um AROBOT em si,
              como também serve como uma ferramenta para auxiliar quem por exemplo não  possui um kit de robótica.
            </div>

            <div className={HomeStyle.arobotSectionImagesContainer}>
              <Image src="/images/arobot-1.jpg" className={HomeStyle.arobotSectionImage} height='250' width='250' alt='' />
              <Image src="/images/arobot-2.jpg" className={HomeStyle.arobotSectionImage} height='250' width='250' alt='' />
              <Image src="/images/arobot-3.jpg" className={HomeStyle.arobotSectionImage} height='250' width='250' alt='' />
            </div>
          </div>

        </div>
      </div>

      {/*Footer */}

      <footer className={HomeStyle.footer}>
        <div className={HomeStyle.areaContainer}>
          <div className={HomeStyle.footerContent}>
            <div>@arobotplayground</div>
            <div className={HomeStyle.footerRight}>

              <Link href='/#'>Ínicio</Link>
              <Link href='/playground'>Playground</Link>
              <Link href='/docs'>Documentação</Link>
              <Link href='https://arotec.ao' target="_blank">AROTEC</Link>
            </div>
          </div>
        </div>

      </footer>
    </>

  )
}
