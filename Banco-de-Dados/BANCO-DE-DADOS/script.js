/**
 * PLATAFORMA DE ESTUDOS - BANCO DE DADOS 1º BIMESTRE
 * Lógica pura em JavaScript com explicações simples, diretas e fáceis de entender.
 */

// ==========================================================================
// 1. BANCO DE QUESTÕES (Linguagem simples e focada no que vai cair)
// ==========================================================================
const QUIZ_DATA = [
  // --- TÓPICO: MODELO RELACIONAL ---
  {
    id: 1,
    topic: 'modelo-relacional',
    topicLabel: 'Modelo Relacional',
    type: 'Nomes da Prova',
    question: 'O professor adora usar os nomes técnicos para coisas do dia a dia. Como ele chama "Tabela", "Linha" e "Coluna", nessa ordem?',
    options: [
      { text: 'Entidade, Campo e Registro', correct: false },
      { text: 'Relação, Tupla e Atributo', correct: true },
      { text: 'Arquivo, Dado e Chave', correct: false },
      { text: 'Domínio, Esquema e Instância', correct: false }
    ],
    explanation: 'É só lembrar da listinha: Tabela vira Relação, Linha vira Tupla e Coluna vira Atributo. O professor cobra muito essa troca de palavras na prova!'
  },
  {
    id: 2,
    topic: 'modelo-relacional',
    topicLabel: 'Modelo Relacional',
    type: 'Verdadeiro ou Falso',
    question: 'A Chave Primária (PK) é como se fosse o CPF daquela linha. Ela pode ter valores repetidos se a gente não souber o número?',
    options: [
      { text: 'Verdadeiro', correct: false },
      { text: 'Falso', correct: true }
    ],
    explanation: 'Falso! A Chave Primária tem duas regras sagradas: não pode se repetir de jeito nenhum e não pode ficar em branco (vazia).'
  },
  {
    id: 3,
    topic: 'modelo-relacional',
    topicLabel: 'Modelo Relacional',
    type: 'Situação Prática',
    question: 'Você tem a tabela de CLIENTES e a tabela de CIDADES. Se você tentar apagar a cidade de Maringá, mas ainda tiver clientes morando nela, o que o banco de dados faz por padrão?',
    options: [
      { text: 'Ele apaga a cidade e deleta todos os clientes juntos sem avisar.', correct: false },
      { text: 'Ele barra a exclusão e dá erro, para os clientes não ficarem sem cidade (órfãos).', correct: true },
      { text: 'Ele apaga e inventa o nome de outra cidade para colocar nos clientes.', correct: false },
      { text: 'Ele apaga a cidade e deixa o campo de cidade em branco em todos os clientes.', correct: false }
    ],
    explanation: 'Por padrão (regra chamada RESTRICT), o banco não deixa você apagar a cidade enquanto tiver clientes amarrados nela. Isso evita que os dados fiquem "órfãos" (sem pai).'
  },
  {
    id: 4,
    topic: 'modelo-relacional',
    topicLabel: 'Modelo Relacional',
    type: 'Conceito Direto',
    question: 'Para que serve a tal da "Integridade Referencial"?',
    options: [
      { text: 'Para fazer o banco de dados abrir mais rápido no computador.', correct: false },
      { text: 'Para garantir que os links entre as tabelas estejam sempre certos e ninguém aponte para o nada.', correct: true },
      { text: 'Para obrigar todas as tabelas a terem mais de 5 colunas.', correct: false },
      { text: 'Para colocar senha de acesso no banco.', correct: false }
    ],
    explanation: 'Integridade referencial é só o nome bonito para: "não deixe ninguém colocar um código de cliente ou cidade que não existe de verdade".'
  },

  // --- TÓPICO: CARDINALIDADE ---
  {
    id: 5,
    topic: 'cardinalidade',
    topicLabel: 'Cardinalidade',
    type: 'Regra de Ouro',
    question: 'Uma Cidade tem MUITOS Clientes. Mas cada Cliente mora em apenas UMA Cidade (relação 1:N). Em qual das duas tabelas você coloca o código da cidade?',
    options: [
      { text: 'Na tabela CIDADE.', correct: false },
      { text: 'Na tabela CLIENTE, porque a chave estrangeira SEMPRE vai no lado que tem "Muitos".', correct: true },
      { text: 'Em uma terceira tabela que tem que ser criada.', correct: false },
      { text: 'Tanto faz, pode colocar em qualquer uma das duas.', correct: false }
    ],
    explanation: 'Regra de ouro que não pode esquecer: a Chave Estrangeira (FK) SEMPRE vai na tabela do lado "Muitos" (N). Como uma cidade tem muitos clientes, o CIDADE_ID fica no CLIENTE.'
  },
  {
    id: 6,
    topic: 'cardinalidade',
    topicLabel: 'Cardinalidade',
    type: 'Situação Prática',
    question: 'Uma Venda pode ter vários Produtos. E um Produto pode ser vendido em várias Vendas diferentes (relação N:N). Como o banco de dados resolve isso?',
    options: [
      { text: 'Colocando o ID do produto direto na tabela da venda.', correct: false },
      { text: 'Criando uma tabelinha no meio (tabela associativa, tipo VENDA_ITENS) para ligar os dois.', correct: true },
      { text: 'Criando colunas chamadas Produto1, Produto2, Produto3 na tabela de vendas.', correct: false },
      { text: 'Não tem como resolver, o banco não aceita isso.', correct: false }
    ],
    explanation: 'Em relações Muitos para Muitos (N:N), é OBRIGATÓRIO criar uma tabela no meio (chamada de associativa ou intermediária), como a VENDA_ITENS.'
  },
  {
    id: 7,
    topic: 'cardinalidade',
    topicLabel: 'Cardinalidade',
    type: 'Pegadinha da Lista do Professor',
    question: 'Na tabela VENDA_ITENS, a chave primária é a junção de VENDA_ID + PRODUTO_ID. Se na venda 501 o cliente comprou 2 martelos (produto 10), e depois quiser mais 5 martelos na mesma venda, o sistema pode inserir uma linha nova com (501, 10)?',
    options: [
      { text: 'Sim, o sistema cria uma linha nova embaixo com a nova quantidade.', correct: false },
      { text: 'Não pode! O banco vai travar porque a chave (501, 10) já existe. O certo é alterar (dar UPDATE) na linha que já existe.', correct: true },
      { text: 'Sim, desde que o cliente pague no dinheiro.', correct: false },
      { text: 'Não, porque cada cliente só pode comprar um item por compra.', correct: false }
    ],
    explanation: 'Como a chave primária é a dupla (501, 10), ela não pode se repetir de jeito nenhum! Para adicionar mais martelos, você altera (UPDATE) a linha que já existe somando a quantidade (de 2 para 7).'
  },
  {
    id: 8,
    topic: 'cardinalidade',
    topicLabel: 'Cardinalidade',
    type: 'Verdadeiro ou Falso',
    question: 'Na tabelinha do meio VENDA_ITENS, os campos VENDA_ID e PRODUTO_ID funcionam como Chave Estrangeira e Chave Primária ao mesmo tempo.',
    options: [
      { text: 'Verdadeiro', correct: true },
      { text: 'Falso', correct: false }
    ],
    explanation: 'Verdadeiro! Cada um é Chave Estrangeira (porque aponta para a tabela de Venda e de Produto) e, quando estão juntos, formam a Chave Primária Composta dessa linha.'
  },

  // --- TÓPICO: NORMALIZAÇÃO ---
  {
    id: 9,
    topic: 'normalizacao',
    topicLabel: 'Normalização',
    type: 'Objetivo Principal',
    question: 'Para que serve a Normalização em palavras simples?',
    options: [
      { text: 'Para duplicar os dados de propósito e deixar o banco mais pesado.', correct: false },
      { text: 'Para organizar as gavetas do banco, evitando repetição à toa e evitando apagar ou atualizar coisas errado.', correct: true },
      { text: 'Para obrigar todo mundo a usar o mesmo tipo de letra nos textos.', correct: false },
      { text: 'Para diminuir a quantidade de tabelas do sistema.', correct: false }
    ],
    explanation: 'Normalização é basicamente organizar a casa: colocar cada dado na sua tabela certa para não ter informação repetida e não ter erro na hora de atualizar ou apagar.'
  },
  {
    id: 10,
    topic: 'normalizacao',
    topicLabel: 'Normalização',
    type: 'Problema Prático',
    question: 'O que é a "Anomalia de Inserção"?',
    options: [
      { text: 'Quando você quer cadastrar um dado novo, mas não consegue porque o sistema exige outro dado que você ainda não tem.', correct: true },
      { text: 'Quando você muda o preço de um produto e o sistema muda o preço de todos os outros.', correct: false },
      { text: 'Quando o computador desliga sozinho durante o cadastro.', correct: false },
      { text: 'Quando a senha do usuário fica gravada errada.', correct: false }
    ],
    explanation: 'Anomalia de inserção é ficar de mãos atadas: você quer cadastrar um curso novo na faculdade, mas o sistema não deixa porque ainda não tem nenhum aluno matriculado para preencher a linha.'
  },
  {
    id: 11,
    topic: 'normalizacao',
    topicLabel: 'Normalização',
    type: 'Primeira Forma Normal (1FN)',
    question: 'Na tabela de CLIENTES, o campo TELEFONE está preenchido assim: "44-9999-1111, 44-3222-0000" (dois números juntos com vírgula). Qual forma normal está sendo quebrada?',
    options: [
      { text: '3FN', correct: false },
      { text: '2FN', correct: false },
      { text: '1FN, porque a 1FN exige que cada campo tenha apenas um valor (seja atômico/indivisível).', correct: true },
      { text: 'Nenhuma, está tudo certo.', correct: false }
    ],
    explanation: 'A 1ª Forma Normal (1FN) proíbe colocar vários valores amontoados na mesma caixinha. Cada campo tem que ser atômico (um único valor por linha).'
  },
  {
    id: 12,
    topic: 'normalizacao',
    topicLabel: 'Normalização',
    type: 'Segunda Forma Normal (2FN)',
    question: 'Na tabela VENDA_ITENS (Venda_ID, Produto_ID, Preco, Quantidade), por que colocar o campo "Descricao_Produto" quebra a 2ª Forma Normal (2FN)?',
    options: [
      { text: 'Porque o nome do produto pertence ao Produto, e não depende da Venda.', correct: true },
      { text: 'Porque a palavra descrição é muito comprida para o banco.', correct: false },
      { text: 'Porque a tabela não tem chave primária.', correct: false },
      { text: 'Porque preços não podem ter vírgula.', correct: false }
    ],
    explanation: 'A 2FN diz que tudo na tabela tem que depender da chave inteira. A descrição do produto depende só do Produto_ID, e não da Venda! Por isso ela deve morar na tabela de PRODUTO.'
  },
  {
    id: 13,
    topic: 'normalizacao',
    topicLabel: 'Normalização',
    type: 'Terceira Forma Normal (3FN)',
    question: 'Por que a gente NÃO deve colocar o Nome da Cidade e o Estado dentro da tabela de CLIENTES (deixando apenas o CIDADE_ID)?',
    options: [
      { text: 'Por causa da 3FN: o Nome da Cidade depende da Cidade, e não do Cliente.', correct: true },
      { text: 'Porque o banco de dados não aceita nomes de cidades com acento.', correct: false },
      { text: 'Por causa da 1FN, que proíbe textos com mais de duas letras.', correct: false },
      { text: 'Porque clientes não podem morar em cidades diferentes.', correct: false }
    ],
    explanation: 'A 3FN diz: não misture dados que dependem de outro campo comum. Maringá é no Paraná por conta da própria cidade, não por conta do cliente João. Por isso criamos a tabela CIDADE separada.'
  },

  // --- TÓPICO: CREATE TABLE ---
  {
    id: 14,
    topic: 'create-table',
    topicLabel: 'Create Table',
    type: 'Sintaxe SQL',
    question: 'Qual é o comando SQL certinho para criar a tabela CIDADE com ID como chave primária, Nome e Estado (UF)?',
    options: [
      { text: 'CREATE TABLE CIDADE ( ID INT PRIMARY KEY, NOME VARCHAR(100), UF CHAR(2) );', correct: true },
      { text: 'CRIAR TABELA CIDADE ( ID NUMERO, NOME TEXTO, UF LETRAS );', correct: false },
      { text: 'NEW TABLE CIDADE ( ID INT, NOME VARCHAR, UF STRING );', correct: false },
      { text: 'MAKE CIDADE ( ID = 1, NOME = TEXT, UF = CHAR );', correct: false }
    ],
    explanation: 'A sintaxe padrão do SQL ensinada nas aulas é: CREATE TABLE NOME ( CAMPO TIPO RESTRICAO... ); usando INT, VARCHAR(100) para textos variáveis e CHAR(2) para texto fixo de 2 letras.'
  },
  {
    id: 15,
    topic: 'create-table',
    topicLabel: 'Create Table',
    type: 'Ordem de Criação',
    question: 'Você vai rodar os comandos no banco para criar CIDADE e CLIENTE. Sabendo que CLIENTE tem um campo que aponta para CIDADE, qual tabela você precisa criar PRIMEIRO?',
    options: [
      { text: 'Tanto faz a ordem, o banco descobre sozinho.', correct: false },
      { text: 'A tabela CIDADE primeiro, porque o cliente não pode apontar para uma tabela que ainda nem existe.', correct: true },
      { text: 'A tabela CLIENTE primeiro, porque o cliente é mais importante.', correct: false },
      { text: 'A tabela VENDA primeiro.', correct: false }
    ],
    explanation: 'Regra lógica simples: quem não depende de ninguém (a tabela pai, CIDADE) é criada primeiro. Quem depende (CLIENTE) é criada depois.'
  },
  {
    id: 16,
    topic: 'create-table',
    topicLabel: 'Create Table',
    type: 'Chave Dupla no Código',
    question: 'Como a gente escreve no SQL para avisar que a tabela tem uma Chave Primária Composta (dupla), juntando PRODUTO_ID e VENDA_ID?',
    options: [
      { text: 'PRODUTO_ID INT PRIMARY KEY, VENDA_ID INT PRIMARY KEY', correct: false },
      { text: 'PRIMARY KEY (PRODUTO_ID, VENDA_ID)', correct: true },
      { text: 'CHAVE DUPLA (PRODUTO_ID + VENDA_ID)', correct: false },
      { text: 'KEY = PRODUTO_ID AND VENDA_ID', correct: false }
    ],
    explanation: 'No SQL você não escreve PRIMARY KEY duas vezes. Você coloca uma linha no final do comando assim: PRIMARY KEY (campo1, campo2).'
  },
  {
    id: 17,
    topic: 'create-table',
    topicLabel: 'Create Table',
    type: 'Chave Estrangeira no Código',
    question: 'Qual pedacinho de código avisa que o campo CIDADE_ID na tabela CLIENTE aponta para o ID da tabela CIDADE?',
    options: [
      { text: 'LIGAR CIDADE_ID COM CIDADE(ID)', correct: false },
      { text: 'FOREIGN KEY(CIDADE_ID) REFERENCES CIDADE(ID)', correct: true },
      { text: 'APONTAR PARA CIDADE NA COLUNA ID', correct: false },
      { text: 'LINK (CIDADE_ID) -> CIDADE(ID)', correct: false }
    ],
    explanation: 'A frase exata em SQL é: FOREIGN KEY(campo_daqui) REFERENCES tabela_de_la(campo_de_la).'
  }
];

// ==========================================================================
// 2. GERENCIAMENTO DE ESTADO E LOCALSTORAGE
// ==========================================================================
const STORAGE_KEY = 'antigravity_bd_estudos_progress_v1';

let userProgress = {
  answers: {} // { [questionId]: { selectedIndex, isCorrect, answeredAt } }
};

function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      userProgress = JSON.parse(saved);
      if (!userProgress.answers) userProgress.answers = {};
    }
  } catch (e) {
    console.error('Erro ao carregar do localStorage:', e);
    userProgress = { answers: {} };
  }
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userProgress));
  } catch (e) {
    console.error('Erro ao salvar no localStorage:', e);
  }
}

// ==========================================================================
// 3. NAVEGAÇÃO ENTRE ABAS / TÓPICOS
// ==========================================================================
function initNavigation() {
  const navButtons = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.content-section');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');

  function switchTab(targetId) {
    navButtons.forEach(btn => {
      if (btn.getAttribute('data-target') === targetId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    sections.forEach(sec => {
      if (sec.id === targetId) {
        sec.classList.add('active');
      } else {
        sec.classList.remove('active');
      }
    });

    if (sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (targetId === 'desempenho') {
      renderPerformanceMetrics();
    }
  }

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      switchTab(target);
    });
  });

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('active');
    });
  }

  if (overlay) {
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
    });
  }
}

// ==========================================================================
// 4. RENDERIZAÇÃO E INTERAÇÃO COM EXERCÍCIOS (TREINAR)
// ==========================================================================
function renderQuestions() {
  const container = document.getElementById('questionsContainer');
  const filter = document.getElementById('topicFilter').value;
  const countLabel = document.getElementById('quizCountLabel');

  if (!container) return;
  container.innerHTML = '';

  const filteredQuestions = QUIZ_DATA.filter(q => {
    if (filter === 'todos') return true;
    return q.topic === filter;
  });

  countLabel.textContent = `Mostrando ${filteredQuestions.length} questões para treinar`;

  filteredQuestions.forEach((q, index) => {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.id = `q-card-${q.id}`;

    const answeredData = userProgress.answers[q.id];
    const isAnswered = !!answeredData;

    const header = document.createElement('div');
    header.className = 'question-header';
    header.innerHTML = `
      <span class="q-topic-badge">${q.topicLabel}</span>
      <span class="q-type-badge">${q.type} • Questão ${index + 1} de ${filteredQuestions.length}</span>
    `;
    card.appendChild(header);

    const textEl = document.createElement('h3');
    textEl.className = 'question-text';
    textEl.textContent = q.question;
    card.appendChild(textEl);

    const optContainer = document.createElement('div');
    optContainer.className = 'options-container';

    q.options.forEach((opt, optIndex) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.type = 'button';

      const letter = String.fromCharCode(65 + optIndex);

      btn.innerHTML = `
        <span class="opt-letter">${letter}</span>
        <span class="opt-text">${opt.text}</span>
      `;

      if (isAnswered) {
        btn.disabled = true;
        if (opt.correct) {
          btn.classList.add('correct');
        } else if (answeredData.selectedIndex === optIndex) {
          btn.classList.add('incorrect');
        }
      } else {
        btn.addEventListener('click', () => handleAnswer(q.id, optIndex, card));
      }

      optContainer.appendChild(btn);
    });

    card.appendChild(optContainer);

    const feedbackBox = document.createElement('div');
    feedbackBox.className = 'question-feedback';
    feedbackBox.id = `feedback-${q.id}`;

    if (isAnswered) {
      feedbackBox.classList.add('show');
      if (answeredData.isCorrect) {
        feedbackBox.classList.add('feedback-correct');
        feedbackBox.innerHTML = `
          <div class="feedback-title">✅ Boa! Você acertou!</div>
          <p>${q.explanation}</p>
        `;
      } else {
        feedbackBox.classList.add('feedback-incorrect');
        feedbackBox.innerHTML = `
          <div class="feedback-title">❌ Quase lá! Não era essa.</div>
          <p>${q.explanation}</p>
        `;
      }
    }

    card.appendChild(feedbackBox);
    container.appendChild(card);
  });
}

function handleAnswer(questionId, selectedIndex, cardElement) {
  const question = QUIZ_DATA.find(q => q.id === questionId);
  if (!question) return;

  const isCorrect = question.options[selectedIndex].correct;

  userProgress.answers[questionId] = {
    selectedIndex,
    isCorrect,
    answeredAt: new Date().toISOString()
  };
  saveProgress();

  const buttons = cardElement.querySelectorAll('.option-btn');
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (question.options[idx].correct) {
      btn.classList.add('correct');
    } else if (idx === selectedIndex) {
      btn.classList.add('incorrect');
    }
  });

  const feedbackBox = cardElement.querySelector(`#feedback-${questionId}`);
  if (feedbackBox) {
    feedbackBox.classList.remove('feedback-correct', 'feedback-incorrect');
    if (isCorrect) {
      feedbackBox.classList.add('feedback-correct');
      feedbackBox.innerHTML = `
        <div class="feedback-title">✅ Boa! Você acertou!</div>
        <p>${question.explanation}</p>
      `;
    } else {
      feedbackBox.classList.add('feedback-incorrect');
      feedbackBox.innerHTML = `
        <div class="feedback-title">❌ Quase lá! Não era essa.</div>
        <p>${question.explanation}</p>
      `;
    }
    feedbackBox.classList.add('show');
  }

  updateGlobalStatsIndicators();
}

// ==========================================================================
// 5. CÁLCULO E RENDERIZAÇÃO DAS MÉTRICAS DE DESEMPENHO
// ==========================================================================
function calculateStats() {
  const totalAvailable = QUIZ_DATA.length;
  const answeredIds = Object.keys(userProgress.answers);
  const totalAnswered = answeredIds.length;

  let correctCount = 0;
  answeredIds.forEach(id => {
    if (userProgress.answers[id] && userProgress.answers[id].isCorrect) {
      correctCount++;
    }
  });

  const incorrectCount = totalAnswered - correctCount;
  const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;
  const completionPercentage = Math.round((totalAnswered / totalAvailable) * 100);

  return {
    totalAvailable,
    totalAnswered,
    correctCount,
    incorrectCount,
    accuracy,
    completionPercentage
  };
}

function updateGlobalStatsIndicators() {
  const stats = calculateStats();

  const sbAccuracy = document.getElementById('sidebarAccuracy');
  const sbFill = document.getElementById('sidebarProgressFill');
  const sbCount = document.getElementById('sidebarQuestionsCount');
  const miniStats = document.getElementById('miniStats');

  if (sbAccuracy) sbAccuracy.textContent = `${stats.accuracy}%`;
  if (sbFill) sbFill.style.width = `${stats.accuracy}%`;
  if (sbCount) sbCount.textContent = `${stats.totalAnswered} de ${stats.totalAvailable} respondidas`;

  if (miniStats) {
    miniStats.innerHTML = `<span class="mini-score">${stats.accuracy}% (${stats.totalAnswered}/${stats.totalAvailable})</span>`;
  }
}

function renderPerformanceMetrics() {
  const stats = calculateStats();

  const elAnswered = document.getElementById('statTotalAnswered');
  const elAvailable = document.getElementById('statTotalAvailable');
  const elCorrect = document.getElementById('statCorrect');
  const elIncorrect = document.getElementById('statIncorrect');
  const elAccuracy = document.getElementById('statAccuracy');
  const elFeedbackMsg = document.getElementById('statFeedbackMsg');
  const elMainProgress = document.getElementById('mainProgressFill');
  const elProgressText = document.getElementById('progressPercentageText');

  if (elAnswered) elAnswered.textContent = stats.totalAnswered;
  if (elAvailable) elAvailable.textContent = stats.totalAvailable;
  if (elCorrect) elCorrect.textContent = stats.correctCount;
  if (elIncorrect) elIncorrect.textContent = stats.incorrectCount;
  if (elAccuracy) elAccuracy.textContent = `${stats.accuracy}%`;

  if (elMainProgress) elMainProgress.style.width = `${stats.completionPercentage}%`;
  if (elProgressText) elProgressText.textContent = `${stats.completionPercentage}% concluído`;

  if (elFeedbackMsg) {
    if (stats.totalAnswered === 0) {
      elFeedbackMsg.textContent = 'Comece a treinar!';
    } else if (stats.accuracy >= 80) {
      elFeedbackMsg.textContent = '🔥 Tá mandando muito bem! Quase lá na prova!';
    } else if (stats.accuracy >= 60) {
      elFeedbackMsg.textContent = '👍 Bom ritmo! Dá uma olhada nas que você errou.';
    } else {
      elFeedbackMsg.textContent = '💡 Vale a pena dar uma lida de 5 minutinhos no resumo antes de continuar.';
    }
  }

  const topicList = document.getElementById('topicStatsList');
  if (topicList) {
    topicList.innerHTML = '';

    const topics = [
      { key: 'modelo-relacional', title: 'Modelo Relacional' },
      { key: 'cardinalidade', title: 'Cardinalidade' },
      { key: 'normalizacao', title: 'Normalização' },
      { key: 'create-table', title: 'Create Table' }
    ];

    topics.forEach(t => {
      const topicQuestions = QUIZ_DATA.filter(q => q.topic === t.key);
      const totalTopic = topicQuestions.length;

      let answeredTopic = 0;
      let correctTopic = 0;

      topicQuestions.forEach(q => {
        const a = userProgress.answers[q.id];
        if (a) {
          answeredTopic++;
          if (a.isCorrect) correctTopic++;
        }
      });

      const topicAcc = answeredTopic > 0 ? Math.round((correctTopic / answeredTopic) * 100) : 0;

      const item = document.createElement('div');
      item.className = 'topic-stat-item';
      item.innerHTML = `
        <div class="topic-stat-header">
          <span class="topic-stat-name">${t.title}</span>
          <span class="topic-stat-score">${correctTopic}/${answeredTopic} corretas (${topicAcc}%)</span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" style="width: ${topicAcc}%;"></div>
        </div>
      `;
      topicList.appendChild(item);
    });
  }

  updateGlobalStatsIndicators();
}

// ==========================================================================
// 6. INICIALIZAÇÃO
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  loadProgress();
  initNavigation();
  renderQuestions();
  updateGlobalStatsIndicators();

  const filterSelect = document.getElementById('topicFilter');
  if (filterSelect) {
    filterSelect.addEventListener('change', () => {
      renderQuestions();
    });
  }

  const resetQuizBtn = document.getElementById('resetQuizStateBtn');
  if (resetQuizBtn) {
    resetQuizBtn.addEventListener('click', () => {
      const filter = document.getElementById('topicFilter').value;
      const targetQuestions = QUIZ_DATA.filter(q => filter === 'todos' || q.topic === filter);

      if (confirm(`Quer tentar de novo as questões desse tema (${targetQuestions.length} questões)?`)) {
        targetQuestions.forEach(q => {
          delete userProgress.answers[q.id];
        });
        saveProgress();
        renderQuestions();
        updateGlobalStatsIndicators();
      }
    });
  }

  const clearBtn = document.getElementById('clearStorageBtn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (confirm('Quer apagar todo o seu histórico para fazer o simulado do zero?')) {
        userProgress = { answers: {} };
        saveProgress();
        renderQuestions();
        renderPerformanceMetrics();
        alert('Pronto! Tudo zerado para você começar de novo.');
      }
    });
  }
});
