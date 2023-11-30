import HomeStyle from '@/styles/modules/home.module.css'
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
              Para começares um projeto no playground, começa por adicionar
              blocos ao teu projeto através dos menus na barra lateral
              esquerda. Estes blocos são os elementos fundamentais do
              playground, pois definem a sequência de comportamentos que
              o teu AROBOT deve realizar durante a execução. Podes personalizar
              cada bloco ao alterar os seus valores, como no caso de "mover x passos",
              onde x é um valor que podes ajustar conforme necessário. Além disso, é
              fácil movimentar ou remover um bloco para personalizares o teu projeto da
              melhor maneira possível.
            </HowWorks>

            <HowWorks title="Execute e vê o resultado" srcImage="/images/hw-2.jpeg">
              Depois de organizares a ordem dos teus blocos conforme desejado, executa
              o teu projeto para verificar o resultado, identificar possíveis erros
              e encontrar oportunidades de melhoria. Demonstra às tuas amizades
              o teu talento ao programar um AROBOT desde o início.
            </HowWorks>
          </div>
        </div>

        {/* ARO-CODE */}
        <div className={HomeStyle.arocode}>
          <div className={HomeStyle.areaContainer}>
            <div className={HomeStyle.arocodeTitle}>ARO-CODE</div>
            <div className={HomeStyle.arocodeContent}>
              Se estiveres interessado em aprimorar as tuas habilidades de codificação
              além do uso de blocos,
              experimenta o Aro-Code, uma plataforma inovadora desenvolvida pela Arotec.
              O Aro-Code tem como
              foco permitir que os desenvolvedores construam seus algoritmos de forma
              totalmente online.
              Com o Aro-Code, terás a oportunidade de explorar uma variedade de linguagens
              de programação, desde as mais básicas até as mais avançadas. A interface intuitiva da plataforma facilita a criação e teste dos teus códigos em tempo real.
            </div>
            <Button className={HomeStyle.arocodeButton} color="primary"><Link href='https://dev.arotec.ao' target='_blank'>Teste já</Link></Button>
            <Image className={HomeStyle.arocodeImage} src='/images/aro-code.png' height='300' width='700' />
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
              <Link href='/documentacao'>Documentação</Link>
              <Link href='https://dev.arotec.ao' target="_blank">ARO-CODE</Link>
              <Link href='https://arotec.ao' target="_blank">AROTEC</Link>
            </div>
          </div>
        </div>

      </footer>
    </>

  )
}
