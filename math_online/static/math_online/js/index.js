document.addEventListener('DOMContentLoaded', function () {
    const iniciarButton = document.querySelector('.iniciar');
    const inicioSection = document.getElementById('inicio');
    const novaSecao = document.getElementById('nova-secao');

    iniciarButton.addEventListener('click', function () {
        // Ocultar a seção inicial
        inicioSection.style.display = 'none';

        var audio = document.getElementById('backgroundAudio');
            audio.play();
        // Exibir a nova seção
        novaSecao.style.display = 'block';

        // Criar o botão 'Fácil'
        const facil = document.createElement('button');
        facil.textContent = 'Fácil';
        facil.className = 'facil';

        // Criar o botão 'Médio'
        const medio = document.createElement('button');
        medio.textContent = 'Médio';
        medio.className = 'medio';

        // Criar o botão 'Difícil'
        const dificil = document.createElement('button');
        dificil.textContent = 'Difícil';
        dificil.className = 'dificil';

        // Criar o título
        const titulo = document.createElement('h1');
        titulo.textContent = 'JOGO DA MATEMÁTICA';
        titulo.className = 'titulo1';

        const escolha = document.createElement('h1');
        escolha.textContent = 'ESCOLHA A DIFICULDADE';
        escolha.className = 'escolha';

        // Adicionar os elementos à nova seção
        novaSecao.innerHTML = ''; 
        novaSecao.appendChild(titulo);
        novaSecao.appendChild(escolha);
        novaSecao.appendChild(facil);
        novaSecao.appendChild(medio);
        novaSecao.appendChild(dificil);

        document.addEventListener('DOMContentLoaded', function () {
    const iniciarButton = document.querySelector('.iniciar');
    const inicioSection = document.getElementById('inicio');
    const novaSecao = document.getElementById('nova-secao');

    iniciarButton.addEventListener('click', function () {
        // Ocultar a seção inicial
        inicioSection.style.display = 'none';

        var audio = document.getElementById('backgroundAudio');
        audio.play();

        // Exibir a nova seção
        novaSecao.style.display = 'block';

        // Limpar qualquer conteúdo anterior
        novaSecao.innerHTML = '';

        // Criar os botões de dificuldade
        const dificuldades = ['Fácil', 'Médio', 'Difícil'];
        const dificuldadeClasses = ['facil', 'medio', 'dificil'];

        const titulo = document.createElement('h1');
        titulo.textContent = 'JOGO DA MATEMÁTICA';
        titulo.className = 'titulo1';

        const escolha = document.createElement('h1');
        escolha.textContent = 'ESCOLHA A DIFICULDADE';
        escolha.className = 'escolha';

        novaSecao.appendChild(titulo);
        novaSecao.appendChild(escolha);

        dificuldades.forEach((dificuldade, index) => {
            const botaoDificuldade = document.createElement('button');
            botaoDificuldade.textContent = dificuldade;
            botaoDificuldade.className = dificuldadeClasses[index];
            novaSecao.appendChild(botaoDificuldade);

            botaoDificuldade.addEventListener('click', () => iniciarFase(dificuldade));
        });
    });

    function iniciarFase(dificuldade) {
        novaSecao.style.display = 'none'; // Ocultar a seção de escolha
        const faseContainer = document.createElement('div');
        faseContainer.className = 'fase_inicial';
        faseContainer.style.display = 'block';

        const tituloFase = document.createElement('h1');
        tituloFase.textContent = `Fase ${dificuldade}`;
        tituloFase.className = `titulo_${dificuldade.toLowerCase()}`;
        faseContainer.appendChild(tituloFase);

        document.body.appendChild(faseContainer);

        const perguntaH1 = document.createElement('h1');
        perguntaH1.className = 'pergunta';
        faseContainer.appendChild(perguntaH1);

        const resposta = document.createElement('input');
        resposta.type = 'text';
        resposta.className = 'enviar_resposta';
        faseContainer.appendChild(resposta);

        const enviarButton = document.createElement('button');
        enviarButton.textContent = 'Enviar';
        enviarButton.className = 'enviar_button';
        faseContainer.appendChild(enviarButton);

        const pontos_de_vida = document.createElement('h1');
        pontos_de_vida.className = 'vida';
        faseContainer.appendChild(pontos_de_vida);

        const pontos_de_acerto = document.createElement('h1');
        pontos_de_acerto.className = 'pontos';
        faseContainer.appendChild(pontos_de_acerto);

        let pontos = 0;
        let vida = 3;
        let resultadoAtual;

        function atualizarStatus() {
            pontos_de_vida.textContent = `❤️ ${vida}`;
            pontos_de_acerto.textContent = `🎮 ${pontos}`;
        }

        // Função para gerar perguntas de acordo com a dificuldade
        function gerarPergunta() {
            let numero_1 = Math.floor(Math.random() * 20) + 1;
            let numero_2 = Math.floor(Math.random() * 20) + 1;
            let operacao;
            let resultado;

            switch (dificuldade) {
                case 'Fácil':
                    operacao = Math.random() < 0.5 ? '+' : '-';
                    resultado = operacao === '+' ? numero_1 + numero_2 : numero_1 - numero_2;
                    break;
                case 'Médio':
                    operacao = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
                    if (operacao === '/') {
                        numero_1 = Math.floor(Math.random() * 100) + 10;
                        numero_2 = Math.floor(Math.random() * 10) + 1; // Garantir divisões simples
                        resultado = Math.floor(numero_1 / numero_2);
                    } else if (operacao === '*') {
                        resultado = numero_1 * numero_2;
                    } else {
                        resultado = operacao === '+' ? numero_1 + numero_2 : numero_1 - numero_2;
                    }
                    break;
                case 'Difícil':
                    operacao = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
                    if (operacao === '/') {
                        numero_1 = Math.floor(Math.random() * 200) + 50;
                        numero_2 = Math.floor(Math.random() * 20) + 1;
                        resultado = Math.floor(numero_1 / numero_2);
                    } else if (operacao === '*') {
                        resultado = numero_1 * numero_2;
                    } else {
                        resultado = operacao === '+' ? numero_1 + numero_2 : numero_1 - numero_2;
                    }
                    break;
            }

            perguntaH1.textContent = `${numero_1} ${operacao} ${numero_2} = ?`;
            resposta.value = ''; // Limpar campo de resposta
            return resultado;
        }

        // Inicializa a primeira pergunta
        resultadoAtual = gerarPergunta();
        atualizarStatus();

        enviarButton.addEventListener('click', function () {
            const userAnswer = parseInt(resposta.value);
            if (userAnswer === resultadoAtual) {
                alert('Resposta correta!');
                pontos += 10;
            } else {
                alert('Resposta incorreta. Tente novamente.');
                vida -= 1;
            }

            if (vida <= 0) {
                alert('Você perdeu todas as vidas. Fim de jogo.');
                window.location.reload(); // Reiniciar o jogo
            } else {
                resultadoAtual = gerarPergunta(); // Gera uma nova pergunta
                atualizarStatus(); // Atualizar status de vida e pontos
            }
        });
    }
});
dificil.addEventListener('click', function () {
    novaSecao.style.display = 'none';
    const dificil_fase = document.createElement('div');
    dificil_fase.className = 'fase_inicial';
    dificil_fase.style.display = 'block';

    const titulodificil = document.createElement('h1'); 
    titulodificil.textContent = 'Fase Difícil';
    titulodificil.className = 'titulo_facil';
    dificil_fase.appendChild(titulodificil);
    document.body.appendChild(dificil_fase);

    const perguntaH1 = document.createElement('h1');
    perguntaH1.className = 'pergunta_2';
    dificil_fase.appendChild(perguntaH1);

    const resposta = document.createElement('input');
    resposta.type = 'text'; // Campo de input para resposta
    resposta.className = 'enviar_resposta';
    dificil_fase.appendChild(resposta);

    const enviarButton = document.createElement('button');
    enviarButton.textContent = 'Enviar';
    enviarButton.className = 'enviar_button';
    dificil_fase.appendChild(enviarButton);

    // Função para gerar uma nova pergunta
    function gerarPergunta() {
        // Gerar números aleatórios
        let numero_1 = Math.floor(Math.random() * 300) + 1;
        let numero_2 = Math.floor(Math.random() * 300) + 1;
        let numero_3 = Math.floor(Math.random() * 10) + 1;
        let numero_4 = Math.floor(Math.random() * 10) + 1;  
        let dificil_sorte = Math.floor(Math.random() * 2) + 1;

        let pergunta;
        let resultado;

        if (dificil_sorte === 1) {
            resultado = numero_1 + numero_2 + (numero_3 * numero_4) - numero_1;
            pergunta = `${numero_1} + ${numero_2} + (${numero_3} * ${numero_4}) - ${numero_1} = ?`;
        } else {
            resultado = numero_1 - numero_2 + (numero_3 * numero_4) - numero_2;
            pergunta = `${numero_1} - ${numero_2} + (${numero_3} * ${numero_4}) - ${numero_2} = ?`;
        }

        perguntaH1.textContent = pergunta;
        resposta.value = ''; // Limpa a resposta do usuário
        return resultado;
        dificil_fase.appendChild(pontos_de_vida);
    }

    // Inicializa com a primeira pergunta
    let resultadoAtual = gerarPergunta();
    let pontos = 0;
    let vida = 3;
    
    const pontos_de_vida = document.createElement('h1');
    pontos_de_vida.textContent = `❤️ ${vida
    }` 
    pontos_de_vida.className = 'vida';
    dificil_fase.appendChild(pontos_de_vida);

    const pontos_de_acerto = document.createElement('h1');
    pontos_de_acerto.textContent = `🎮 ${pontos}`;
    pontos_de_acerto.className = 'pontos';
    dificil_fase.appendChild(pontos_de_acerto)


    // Evento de verificação de resposta
    enviarButton.addEventListener('click', function () {
        const userAnswer = parseInt(resposta.value);
        if (userAnswer === resultadoAtual) {
            alert('Resposta correta!');
            pontos += 10;
        } else {
            alert('Resposta incorreta. Tente novamente.');
            vida -= 1;
        }

        pontos_de_vida.textContent = `❤️ ${vida}`;
        pontos_de_acerto.textContent = `🎮 ${pontos}`;



        // Gera uma nova pergunta após a tentativa
        if (vida <= 0) {
            alert('Você perdeu todas as vidas. Fim de jogo.');
            window.location.reload(); // Reiniciar o jogo
        } else {
            // Gera uma nova pergunta após a tentativa
            resultadoAtual = gerarPergunta();
        }
    });
});

        facil.addEventListener('click', function () {
            novaSecao.style.display = 'none';
            const facil_fase = document.createElement('div');
            facil_fase.className = 'fase_inicial';
            facil_fase.style.display = 'block';

            const tituloFacil = document.createElement('h1'); 
            tituloFacil.textContent = 'Fase Fácil';
            tituloFacil.className = 'titulo_facil';
            facil_fase.appendChild(tituloFacil);
            document.body.appendChild(facil_fase);

            const perguntaH1 = document.createElement('h1');
            perguntaH1.className = 'pergunta_1';
            facil_fase.appendChild(perguntaH1);

            const resposta = document.createElement('input');
            resposta.type = 'text'; // Campo de input para resposta
            resposta.className = 'enviar_resposta';
            facil_fase.appendChild(resposta);

            const enviarButton = document.createElement('button');
            enviarButton.textContent = 'Enviar';
            enviarButton.className = 'enviar_button';
            facil_fase.appendChild(enviarButton);

            // Função para gerar uma nova pergunta
            function gerarPergunta() {
                // Gerar números aleatórios
                let numero_1 = Math.floor(Math.random() * 20) + 1;
                let numero_2 = Math.floor(Math.random() * 20) + 1; 
                let facil_sorte = Math.floor(Math.random() * 2) + 1;

                let pergunta;
                let resultado;

                if (facil_sorte === 1) {
                    resultado = numero_1 + numero_2;
                    pergunta = `${numero_1} + ${numero_2} = ?`;
                } else {
                    resultado = numero_1 - numero_2;
                    pergunta = `${numero_1} - ${numero_2} = ?`;
                }

                perguntaH1.textContent = pergunta;
                resposta.value = ''; // Limpa a resposta do usuário
                return resultado;
                facil_fase.appendChild(pontos_de_vida);
            }

            // Inicializa com a primeira pergunta
            let resultadoAtual = gerarPergunta();
            let pontos = 0;
            let vida = 3;
            
            const pontos_de_vida = document.createElement('h1');
            pontos_de_vida.textContent = `❤️ ${vida
            }` 
            pontos_de_vida.className = 'vida';
            facil_fase.appendChild(pontos_de_vida);

            const pontos_de_acerto = document.createElement('h1');
            pontos_de_acerto.textContent = `🎮 ${pontos}`;
            pontos_de_acerto.className = 'pontos';
            facil_fase.appendChild(pontos_de_acerto)


            // Evento de verificação de resposta
            enviarButton.addEventListener('click', function () {
                const userAnswer = parseInt(resposta.value);
                if (userAnswer === resultadoAtual) {
                    alert('Resposta correta!');
                    pontos += 10;
                } else {
                    alert('Resposta incorreta. Tente novamente.');
                    vida -= 1;
                }

                pontos_de_vida.textContent = `❤️ ${vida}`;
                pontos_de_acerto.textContent = `🎮 ${pontos}`;



                // Gera uma nova pergunta após a tentativa
                if (vida <= 0) {
                    alert('Você perdeu todas as vidas. Fim de jogo.');
                    window.location.reload(); // Reiniciar o jogo
                } else {
                    // Gera uma nova pergunta após a tentativa
                    resultadoAtual = gerarPergunta();
                }
            });
        });
        medio.addEventListener('click',function(){
            novaSecao.style.display = 'none';
            const medio_fase = document.createElement('div');
            medio_fase.className = 'fase_inicial';
            medio_fase.style.display = 'block';

            const tituloMedio = document.createElement('h1'); 
            tituloMedio.textContent = 'Fase Media';
            tituloMedio.className = 'titulo_facil';
            medio_fase.appendChild(tituloMedio);
            document.body.appendChild(medio_fase);

            const perguntaH1 = document.createElement('h1');
            perguntaH1.className = 'pergunta_1';
            medio_fase.appendChild(perguntaH1);

            const resposta = document.createElement('input');
            resposta.type = 'text'; // Campo de input para resposta
            resposta.className = 'enviar_resposta';
            medio_fase.appendChild(resposta);

            const enviarButton = document.createElement('button');
            enviarButton.textContent = 'Enviar';
            enviarButton.className = 'enviar_button';
            medio_fase.appendChild(enviarButton);

            // Função para gerar uma nova pergunta
            function gerarPergunta() {
                // Gerar números aleatórios
                let numero_1 = Math.floor(Math.random() * 20) + 1;
                let numero_2 = Math.floor(Math.random() * 20) + 1; 
                let medio_sorte = Math.floor(Math.random() * 4) + 1;

                let pergunta;
                let resultado;

                if (medio_sorte === 1) 
                {
                    resultado = numero_1 + numero_2;
                    pergunta = `${numero_1} + ${numero_2} = ?`;
                } 
                
                
                else if (medio_sorte === 2) 
                {
                    resultado = numero_1 * numero_2;
                    pergunta = `${numero_1} * ${numero_2} = ?`;
                } 

                else if (medio_sorte === 3) 
                {
                    let numero_1 = Math.floor(Math.random() * 10) + 1;
                    let numero_2 = Math.floor(Math.random() * 10) + 1;
                    if (numero_1<numero_2){
                        let numero_1 = Math.floor(Math.random() * 10) + 1;
                        let numero_2 = Math.floor(Math.random() * 10) + 1;
                    } 
                    resultado =Math.floor(numero_1 / numero_2);
                    pergunta = `${numero_1} / ${numero_2} = ?`;
                } 
                else {
                    resultado = numero_1 - numero_2;
                    pergunta = `${numero_1} - ${numero_2} = ?`;
                }

                perguntaH1.textContent = pergunta;
                resposta.value = ''; // Limpa a resposta do usuário
                return resultado;
                medio_fase.appendChild(pontos_de_vida);
            }

            // Inicializa com a primeira pergunta
            let resultadoAtual = gerarPergunta();
            let pontos = 0;
            let vida = 3;
            
            const pontos_de_vida = document.createElement('h1');
            pontos_de_vida.textContent = `❤️ ${vida
            }` 
            pontos_de_vida.className = 'vida';
            medio_fase.appendChild(pontos_de_vida);

            const pontos_de_acerto = document.createElement('h1');
            pontos_de_acerto.textContent = `🎮 ${pontos}`;
            pontos_de_acerto.className = 'pontos';
            medio_fase.appendChild(pontos_de_acerto)


            // Evento de verificação de resposta
            enviarButton.addEventListener('click', function () {
                const userAnswer = parseInt(resposta.value);
                if (userAnswer === resultadoAtual) {
                    alert('Resposta correta!');
                    pontos += 10;
                } else {
                    alert('Resposta incorreta. Tente novamente.');
                    vida -= 1;
                }

                pontos_de_vida.textContent = `❤️ ${vida}`;
                pontos_de_acerto.textContent = `🎮 ${pontos}`;



                // Gera uma nova pergunta após a tentativa
                if (vida <= 0) {
                    alert('Você perdeu todas as vidas. Fim de jogo.');
                    window.location.reload(); // Reiniciar o jogo
                } else {
                    // Gera uma nova pergunta após a tentativa
                    resultadoAtual = gerarPergunta();
                }
            });
        
        
        })
        
    });
});
