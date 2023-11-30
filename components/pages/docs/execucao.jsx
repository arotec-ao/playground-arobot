export default function Execucao() {
    return (<>
        <p className="paragraph">
            A execução no AROBOT Playground ocorre de maneira sequencial,
            lendo cada bloco individualmente
            e concluindo no último bloco da sequência. A execução ocorre
            no nível atual onde estamos a trabalhar. Além disso, temos a flexibilidade
            de criar múltiplos níveis, permitindo ciclos isolados de execução.
            Essa capacidade proporciona uma abordagem mais modular e organizada,
            facilitando a gestão de diferentes partes do projeto de forma independente
        </p>
        <p className='paragraph'>
            Algo muito interessante é enquanto a execução está em curso, terás a capacidade de visualizar
            quais blocos estão a ser executados no momento
            através do fluxo de execução exibido na parte inferior do playground
        </p>
        <img className="image-docs image-center" src="/docs/execucao1.png" width={'450px'} alt="" />
    </>);
}