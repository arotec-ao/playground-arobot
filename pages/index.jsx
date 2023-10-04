import HomeStyle from '@/styles/modules/Home.module.css'
import Button from '@/components/Button/Button'
import Link from 'next/link'
import Image from 'next/image'
import HowWorks from '@/components/HowWorks/HowWorks'
import LogoAP from '@/components/LogoAP/LogoAP'

export default function Home() {
  return (

    <>

      {/* Header */}
      <header className={HomeStyle.header}>
  
        {/* Cover */}
        <div className={HomeStyle.headerCover}>
              <img className={HomeStyle.headerCoverImage} src="/images/arobot-cover.jpg" />
              <div className={HomeStyle.headerGradient}></div>
        </div>

        <div className={HomeStyle.headerContainer+ ' ' +HomeStyle.areaContainer}>
        
          {/* Navbar */}
          <div className={HomeStyle.navbar}>

            <LogoAP />
            <div className={HomeStyle.navbarRight}>
              <Link  className={HomeStyle.headerLink} href={'/playground'}>Playground</Link>
              <Link className={HomeStyle.headerLink} href={'/#arobot'}>Conheça AROBOT</Link>
              <Link href="/register"><Button color="secundary">Registra-se</Button></Link>
            </div>
          </div>

          {/* Header Content */}
          <div className={HomeStyle.headerContent}>

            <div className={HomeStyle.headerAreaImage}>
              <Image className="image-box" />
            </div>

            <div className={HomeStyle.headerAreaText}>
              <div>
                <div className={HomeStyle.textHeader}>
                  Teste agora o <span>AROBOT</span> sem precisar de equipamento! <br />
                  Viva a experiência <span className={HomeStyle.textHeaderMark}>sem custo algum.</span> 
                </div>
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
            <HowWorks title="Crie suas etapas e instruções" srcImage="/">
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

            <HowWorks title="Execute e vê o resultado" srcImage="/">
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
              O AROBOT é um kit que permite que entusiastas em robótica, possam aprender a construir os seus primeiros robos
              e além tirar proveito de divervos conceitos de física, matemática, programação. Com esse principal foco o
              AROBOTPlayground te permitirá viver dessa mesma experiência sem a necessidade de possuir um AROBOT em si,
              como também serve como uma form a ferramenta para auxiliar quem por exemplo possui um kit de robótica.
            </div>

            <div className={HomeStyle.arobotSectionImagesContainer}>
              <Image className={HomeStyle.arobotSectionImage +' ' +"image-box"}/>
              <Image className={HomeStyle.arobotSectionImage +' ' +"image-box"} />
              <Image className={HomeStyle.arobotSectionImage +' ' +"image-box"} />
            </div>
          </div>

        </div>
      </div>

      {/*Footer */}

      <footer className={HomeStyle.footer }>
        <div className={HomeStyle.areaContainer}>
            <div className={HomeStyle.footerContent}>
              <div>@arobotplayground</div>
              <div className={HomeStyle.footerRight}>

                <Link href='/#'>Home</Link>
                <Link href='/playground'>Playground</Link>
                <a href='https://vercel.arotec.app' target="blank">AROTEC</a>
              </div> 
            </div> 
        </div>
       
      </footer>
    </>

  )
}
