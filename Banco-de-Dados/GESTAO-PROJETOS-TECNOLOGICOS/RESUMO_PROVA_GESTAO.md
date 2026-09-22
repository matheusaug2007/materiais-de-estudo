# 📚 Guia Definitivo e Completo • Prova de Gestão de Projetos
## Prof. Cassiano Borim • Unicesumar (8º Semestre)
> **Reúne 100% dos conteúdos das Aulas 02 a 08 (PDFs oficiais) + as falas, analogias e pegadinhas de sala de aula.** Tudo em linguagem direta e didática.

---

# MÓDULO 1: Fundamentos de Projetos, TAP e Stakeholders
*(Aulas 02 e 06)*

### 1.1 O que é Projeto vs. Operação (Rotina)
* **Projeto:** Iniciativa **temporária** (tem começo, meio e fim cravados) que produz um **produto, serviço ou resultado exclusivo/único**.
  - Exemplo: Desenvolver um novo aplicativo de telemedicina.
* **Operação (Rotina):** Trabalho **contínuo e repetitivo** que mantém a empresa faturando e funcionando.
  - Exemplo: O suporte técnico atendendo chamados, ou a fábrica montando o mesmo carro todo dia.
* **Siglas importantes citadas em aula:**
  - **PMI:** *Project Management Institute* (maior instituto mundial de gestão de projetos, fundado em 1969).
  - **PMBOK:** O guia oficial de boas práticas publicado pelo PMI.
  - **PMO:** *Project Management Office* (Escritório de Projetos dentro da empresa).
  - **PMP / CAPM:** Certificações profissionais para gestores de projetos.

### 1.2 Quando o Projeto Termina? (As 4 Causas de Prova)
1. **Objetivos atingidos:** TODOS os objetivos combinados foram concluídos e entregues com sucesso.
2. **Inviabilidade técnica/financeira:** Ficou claro que os objetivos *não* poderão ser alcançados (custo estourou ou tecnologia falhou).
3. **Cancelamento pelo cliente ou Sponsor:** Quem paga mandou parar (mudança de estratégia ou corte de verba).
4. **A necessidade deixa de existir:** Uma lei mudou (ex: nova regra do Banco Central) ou surgiu uma tecnologia concorrente que tornou seu projeto inútil antes de terminar.

### 1.3 O Papel do Gerente de Projetos (GP)
* **O Elo:** É a ponte entre a **estratégia da diretoria** e o **time de desenvolvimento**.
* **90% do tempo:** É gasto exclusivamente com **COMUNICAÇÃO** (reuniões, conversas, alinhamentos, WhatsApp).
* **Habilidade Âncora:** **ESTABELECIMENTO DE CONFIANÇA**. Sem confiança da diretoria e do time, nenhuma outra habilidade (liderança, negociação) funciona.
* **Distinção importante de sala:**
  - **PO (Product Owner):** Foca no produto, no cliente e nas regras de negócio. **Não precisa saber código técnico** nem SQL!
  - **Scrum Master:** Líder servidor que **remove todos os impedimentos** do time para a Sprint rodar leve.

### 1.4 O Termo de Abertura do Projeto (TAP / Project Charter)
* É a **"certidão de nascimento"** formal do projeto. Dá autoridade ao GP para aplicar recursos da empresa.
* ⚠️ **Regra básica:** Não se gasta um centavo nem se monta equipe antes do TAP estar aprovado e assinado pelas partes interessadas!
* **Os 5 Blocos Essenciais do TAP:**
  1. **Objetivos e Justificativa de Negócio:** Qual dor da empresa esse projeto vai resolver?
  2. **Requisitos de Alto Nível:** O que o produto precisa ter em linhas gerais.
  3. **Entregas Principais (*Deliverables*):** O que vai ser entregue fisicamente/digitalmente (o app, o manual).
  4. **O que NÃO inclui (Limites de Escopo):** Tão importante quanto o que faz é deixar claro **o que NÃO vai ser feito** (ex: *"não inclui integração com maquininha física"*). Isso impede que o cliente exija coisas de graça depois.
  5. **Critérios de Aceitação:** O que precisa acontecer para o cliente dar o aceite e pagar.

### 1.5 Partes Interessadas (Stakeholders) & Matriz
* **Definição:** Qualquer pessoa, grupo ou organização que pode **impactar ou ser impactada** pelo projeto (usuários, diretoria, setor de compras, PROCON).
* ⚠️ **Pegadinha Clássica:** Seu concorrente **NÃO** é parte interessada do seu projeto!
* **Os 3 Tipos de Stakeholders:**
  - **Primários:** Diretamente afetados e beneficiários (ex: o usuário final do app).
  - **Secundários:** Indiretamente afetados ou que prestam apoio (compras, RH, financeiro, jurídico).
  - **Chave (*Key Stakeholders*):** Quem tem poder e decisão final. O maior exemplo é o **Sponsor (Patrocinador)**, que é quem põe o dinheiro e manda no projeto.
* **Matriz Poder x Interesse (Como gerenciar cada um):**
  - *Alto Poder & Alto Interesse:* **Gerenciar de Perto** (o Dono / Sponsor / Diretor de TI).
  - *Alto Poder & Baixo Interesse:* **Manter Satisfeito** (Diretor Financeiro: relatórios executivos, sem cansar).
  - *Baixo Poder & Alto Interesse:* **Manter Informado** (Usuários finais e equipe de suporte).
  - *Baixo Poder & Baixo Interesse:* **Monitorar** (esforço mínimo).
* 🔒 **Por que o mapa de Stakeholders é CONFIDENCIAL?**
  - Porque contém diagnósticos sensíveis sobre quem é *Resistente*, *Neutro* ou *Apoiador*, além de jogos de influência política. Se vazar na empresa, gera crise interna grave!

---

# MÓDULO 2: Duplo Diamante & Matriz CSD
*(Aulas 03, 04 e 05)*

### 2.1 O Modelo do Duplo Diamante (Design Thinking)
Divide o desenvolvimento em 4 fases, alternando entre **divergir** (abrir o leque de ideias) e **convergir** (afunilar e tomar decisões):
1. **Descobrir (*Discover* - Divergir):** Pesquisar, ouvir usuários, entender as dores reais sem preconceito.
2. **Definir (*Define* - Convergir):** Filtrar o que foi descoberto e escolher exatamente **qual problema vale a pena resolver** (1º Diamante fechado = Problema certo!).
3. **Desenvolver (*Develop* - Divergir):** Brainstorming, desenhar protótipos de baixa e alta fidelidade, testar várias ideias de solução com o time.
4. **Entregar (*Deliver* - Convergir):** Testar protótipos com usuários finais, descartar o que não funcionou e lançar o produto pronto (2º Diamante fechado = Solução certa!).

### 2.2 Pesquisa de Mercado: Primária vs. Secundária
* **Pesquisa Primária:** Coletada **diretamente na fonte com os usuários** (entrevistas, questionários online, observação direta).
  - *Exige TCLE (Termo de Consentimento Livre e Esclarecido) para proteger a privacidade dos dados.*
* **Pesquisa Secundária (*Desk Research*):** Coletada de **fontes que já existem prontas** na internet ou em livros (dados do IBGE, artigos de mercado, benchmark de concorrentes).
* **Qualitativa vs. Quantitativa:**
  - *Qualitativa:* Entende sentimentos, motivos e dores (*"Por que você acha difícil usar esse botão?"*).
  - *Quantitativa:* Traz métricas e proporções (*"85% dos usuários abandonam o carrinho de compras"*).

### 2.3 Matriz CSD (Certezas, Suposições e Dúvidas)
Ferramenta visual em 3 colunas para alinhar a equipe no início do projeto e eliminar o "achismo":
* 🟢 **Certezas:** O que a equipe já sabe com segurança comprovada (dados, contratos).
* 🟡 **Suposições:** O que a equipe acha que é verdade, mas ainda não tem provas (hipóteses).
* 🔴 **Dúvidas:** O que a equipe não sabe e precisa descobrir com urgência.
* **Dinâmica na Prática:** A Matriz CSD é **viva**! As Dúvidas e Suposições guiam as pesquisas com usuários e, conforme são validadas, transformam-se em **Certezas** (ou são descartadas).

---

# MÓDULO 3: Escopo, Visão do Produto, Histórias e Bugs
*(Aulas 06, 07 e 08)*

### 3.1 O que é Escopo?
* Nas palavras literais do Prof. Cassiano: *"Escopo nada mais é do que uma **lista de requisitos**. Se alguém falar outra coisa, tá errado!"*
* Do escopo saem os requisitos, e dos requisitos saem as telas e funcionalidades.

### 3.2 Visão do Produto & A Lição de Peter Drucker
* **Visão do Produto:** Descreve o **estado futuro** que a equipe quer alcançar. É o horizonte estratégico.
  - *Analogia dos Thundercats:* "Espada Justiceira, dê-me a visão além do alcance!"
  - Se dois membros do time tiverem visões divergentes (ex: um acha que o app apoia o advogado e o outro acha que substitui), o projeto parte do mesmo ponto e vira um caos no final.
* **A Frase de Peter Drucker (Cai na Prova!):**
  > *"Não há nada tão inútil quanto fazer de forma eficiente o que não deveria ser feito."*
  - **80% das funções de sistemas:** Estudos mostram que até 80% das funcionalidades de softwares raramente ou nunca são utilizadas pelos usuários. Criar código lindo para algo inútil é queimar dinheiro.
  - **O Perigo do Retrabalho:** Retrabalho atrasa os próximos contratos da empresa, rouba horas da esteira inteira e quebra o faturamento.

### 3.3 🚨 A Pergunta Oficial de Prova do Jira
* O Cassiano avisou em sala: ele vai colocar uma foto do Jira com 600 itens marcados como "Alta Prioridade" e perguntar se a empresa é ágil.
* **Como responder para ganhar NOTA 100:**
  1. *"NÃO É ÁGIL: Se tudo é prioridade, **nada é prioridade**."*
  2. *"NÃO É ÁGIL: Ter 600 tarefas paradas no Jira é apenas um backlog inchado sem refinamento, sem estimativa e sem entrega de incremento."*
  3. *"NÃO É ÁGIL: Ter ferramenta moderna não torna ninguém ágil. Agilidade está nas pessoas e nos ritos."*

### 3.4 Histórias de Usuário (User Stories)
* Descreve uma necessidade do ponto de vista de quem vai usar, com foco em **entregar valor real**.
* **Formato dos 3W's:**
  ```
  Como [tipo de usuário / persona],
  Eu quero [ação / funcionalidade],
  Para [benefício / valor gerado].
  ```
* **A Técnica dos 3C's (Ron Jeffries):**
  - **Cartão (*Card*):** A frase curta resumida no post-it ou cartão digital.
  - **Conversa (*Conversation*):** A reunião de alinhamento e tira-dúvidas entre PO, cliente e desenvolvedores.
  - **Confirmação (*Confirmation*):** Os **Critérios de Aceite** objetivos e testáveis que comprovam que a história está pronta.
* **O Filtro INVEST (Uma boa história deve ser):**
  - **I - Independent:** Não depende de outra história para ser feita.
  - **N - Negotiable:** Negociável entre time e PO (não é contrato engessado).
  - **V - Valuable:** Entrega valor perceptível ao usuário.
  - **E - Estimable:** O time consegue estimar tempo e esforço.
  - **S - Small:** Pequena o suficiente para caber na Sprint.
  - **T - Testable:** Possui critérios claros para ser testada.

### 3.5 Escala de Tempo & Onde Fica o Bug
* **A Escala de Tempo:**
  - Projeto = **Meses**
  - Épico = **Semanas**
  - História de Usuário = **Dias**
  - Tarefa (*Task*) = **Horas** (a atividade técnica do dev: fazer botão, criar rota na API).
* 🐛 **Onde o Bug DEVE ser associado? (Pegadinha Certa de Sala!):**
  - O bug deve ser associado diretamente à **TAREFA** técnica que originou o erro, e **NUNCA** solto na história inteira!
  - **Por quê?** Por causa da **RASTREABILIDADE**: permite saber qual tarefa causou o defeito, quem desenvolveu e medir o tempo de retrabalho.

---

# MÓDULO 4: Scrum, Cerimônias & Manifesto Ágil
*(Aula 08)*

### 4.1 "Kanban NÃO é Metodologia Ágil!"
* Frase categórica do Cassiano: **Kanban é uma ferramenta/método visual de gestão de fluxo de trabalho** (*A Fazer ➔ Fazendo ➔ Feito*).
* O **Scrum** é que é o framework ágil completo, com papéis, ritos e timeboxes.
* **A Analogia da Bicicleta do Cassiano:**
  - *"Se você aprendeu a andar de bicicleta, você anda numa de fibra de carbono ou numa Barra Forte velha. Na gestão de TI é igual: agilidade é processo, comunicação e valor entregue. A ferramenta (Jira, Notion, Trello, Azure) é secundária!"*
  - O Cassiano reprova quem é dependente cego de ferramentas.

### 4.2 O Ciclo do Scrum & As 4 Cerimônias
* O trabalho acontece em ciclos chamados **Sprints** (geralmente de 2 a 4 semanas), que geram um **Incremento de software funcionando**.
* Uma Sprint **não deve conter trabalho de Sprints anteriores** (se já está na Sprint 3, não se joga tarefa na Sprint 1).
* **As 4 Cerimônias Oficiais:**
  1. **Sprint Planning (Planejamento):** No 1º dia da Sprint. O PO apresenta as prioridades do Product Backlog e o time define o que cabe, gerando o **Sprint Backlog**.
  2. **Daily Scrum (Reunião Diária):** Todo dia, **máximo 15 minutos e feita EM PÉ** (para ninguém discursar nem enrolar). Três perguntas: 1) O que fiz ontem? 2) O que farei hoje? 3) Algum impedimento?
  3. **Sprint Review (Revisão):** No final da Sprint com clientes e stakeholders. Apresentação do **software funcionando na prática** (não é slide!).
  4. **Sprint Retrospective (Retrospectiva):** Reunião **MAIS INTERNA do time** (sem clientes). Foco em processos e pessoas: *O que deu certo? O que deu errado? O que melhorar na próxima?*

### 4.3 Os 4 Valores do Manifesto Ágil (2001)
1. **Indivíduos e interações** MAIS QUE *processos e ferramentas*.
2. **Software funcionando** MAIS QUE *documentação abrangente*.
3. **Colaboração com o cliente** MAIS QUE *negociação de contratos*.
4. **Responder a mudanças** MAIS QUE *seguir um plano engessado*.
* ⚠️ *O que a prova cobra:* Isso **NÃO** significa abandonar documentação, processos ou contratos. Significa apenas que os itens da esquerda têm **maior valor** para gerar resultado real!
