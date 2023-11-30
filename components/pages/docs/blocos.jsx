export default function Blocos() {
    return (<>
        <p className="paragraph">
            Como mencionado anteriormente, o
            AROBOT Playground opera com base na lógica de blocos,
            onde todas as ações e comportamentos são executados de
            acordo com a ordem sequencial dos blocos inseridos no
            nosso projeto. Nesta plataforma, há uma variedade de
            blocos disponíveis, e podes facilmente adicioná-los
            ao teu projeto através dos botões localizados na secção lateral esquerda.
            Cada botão representa uma categoria específica de blocos.
        </p>

        <p className="paragraph">
            <img className="image-docs image-center" src="/docs/blocos1.png" alt="" />
        </p>

        <p className="paragraph">
            A seguir, exploraremos todos os blocos disponíveis, destacando suas
            respectivas ações e funcionalidades.
        </p>

        <h3>Movimentação</h3>
        <p className="paragraph">Os blocos de movimentação são a espinha dorsal do AROBOT,
            oferecendo funcionalidades fundamentais para a sua operação.
            Estes blocos incluem comandos simples, mas essenciais, como mover-se
            numa direção específica e rotacionar (uma ação que, essencialmente, altera
            a direção do AROBOT). Não é surpresa
            que esses blocos sejam os mais utilizados, formando a base para a criação de
            movimentos fluidos e direcionados.</p>
        <ul>
            <li><strong>Mover: </strong>Move o AROBOT numa direção específica no plano</li>
            <br />
            <li><strong>Girar: </strong>Altera a direção do AROBOT, permitindo ajustes na orientação.</li>
            <br />

            <li><strong>Girar Exato: </strong>Realiza uma rotação precisa do AROBOT com base no plano, assegurando uma mudança precisa na direção.</li>
        </ul>

        <h3>Sons</h3>
        <p className="paragraph">
            Atualmente, a categoria de Sons consiste em um bloco
            singular denominado "buzinar", que possibilita
            a emissão do som característico de uma buzina
            durante a execução do projecto. No entanto, é evidente que,
            à medida que o AROBOT evolui, esta categoria
            se enriquecerá com uma variedade de blocos sonoros,
            oferecendo um leque mais amplo de opções para a
            expressão acústica nas tuas criações. Este é apenas
            o início da jornada auditiva no AROBOT Playground, onde
            o potencial para sons criativos é vasto e emocionante.
        </p>
        <h3>Recursos</h3>
        <p className="paragraph">
            Atualmente, a categoria de "Recursos Extras" apresenta uma diversidade
            crescente de blocos para enriquecer as funcionalidades do teu AROBOT.
            Um destaque notável é os blocos "Ligar luz" e "Desligar luz",
            que permite ligar e desligar a luz dos farois do AROBOT durante a execução
            do projecto.
        </p>

        <ul>
            <li><strong>Acender Luz: </strong>Permite ligar o farol do AROBOT.</li> <br />
            <li><strong>Apagar Luz: </strong>Permite desligar o farol do AROBOT.</li><br />
            <li><strong>Esperar: </strong>Utiliza esta funcionalidade para introduzir atrasos estratégicos,
             permitindo uma temporização precisa nas ações do AROBOT.</li>
        </ul>

        <p className="paragraph">Como já notaste a execução é feito de forma sequencial e quando é executado o úlitmo bloco, ela para. Em alguns casos pode ser indesejado para logo a execução então o bloco 
        "Esperar" é bastante útil para pausar a execução por um momento</p>

    </>);
}