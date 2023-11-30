export default function Tutorial() {
    return (<>
        <p className="paragraph">
            No universo do AROBOT Playground, a construção do teu projeto começa
            com o fascinante mundo dos blocos.
            Essencialmente, cada ação e comando são representados por blocos.
        </p>
        <p className="paragraph">
            Esta plataforma te oferece um grande variadade de blocos, deves explorar para
            conhecer cada uma delas. Nesta tutorial vamos conhecer 3 três principais que consideramos
            de uso frequente:
        </p>

        <p className="paragraph">
            <ul>
                <li>Mover</li>
                <li>Girar</li>
                <li>Esperar</li>
            </ul>
        </p>

        <p className="paragraph">
            Cada bloco pode ter ou não ter campos para preencher dados, estes dados são
            utilizados pelo Playground como variáveis para definir o comportamento final da acção.
            Neste tutorial, colocaremos 4 blocos, onde:
            <ul>
                <li><strong>Mover</strong> - Move 50 passos</li>
                <li><strong>Girar</strong> - Gire 90 graus</li>
                <li><strong>Mover</strong> - Move 100 passos</li>
                <li><strong>Esperar</strong> - Espere 2 segundo(s)</li>
            </ul>
        </p>

        <img className="image-docs image-center" src="/docs/tutorial1.png" alt="" />
        <p className="paragraph">

            Assim que adicionares estes blocos, terás a oportunidade de
            visualizar o resultado imediatamente. Podes fazer isso
            executando-o através do botão 'play', convenientemente
            localizado no centro da parte superior. Logo abaixo, encontrarás um
            vídeo ilustrativo que demonstra o resultado esperado.
            <br />
            <br />

            <img className="image-docs border-box image-center" src="/docs/tutorial2.gif" alt="" />
        </p>
        <br />

        <p className="paragraph">
            Parabéns, chegámos ao fim deste tutorial! Espero sinceramente que
            tenhas apreciado e compreendido o conteúdo apresentado. No entanto,
            não te sintas obrigado a limitar-te a este tutorial, pois os próximos
            tópicos abordarão conceitos que aprofundarão ainda mais o teu entendimento
            sobre o funcionamento do AROBOT Playground. E, claro, não subestimes
            a importância da prática constante. Continua a experimentar e a
            desenvolver as tuas habilidades para tirares o máximo proveito desta
            incrível plataforma. Boa sorte e diverte-te a explorar o mundo fascinante
            da programação de AROBOTs!
        </p>
    </>);
}