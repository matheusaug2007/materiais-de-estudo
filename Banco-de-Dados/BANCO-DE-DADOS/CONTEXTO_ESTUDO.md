# 📚 Guia de Contexto e Revisão - Prova de Banco de Dados

Este documento consolida as anotações de aula (Obsidian), os materiais e slides do professor (`1Bim`) e os exemplos práticos em SQL.

---

## 🎯 Conteúdos Oficiais da Prova
1. **Modelo Relacional**
2. **Cardinalidade**
3. **Normalização (1FN, 2FN, 3FN)**
4. **CREATE TABLE (DDL)**

---

## 1. Modelo Relacional

### 1.1 Conceito
Modelo de dados baseado na teoria matemática de conjuntos e relações. Todos os dados são organizados e visualizados sob a forma de **tabelas**.

### 1.2 Terminologia Técnica Essencial (Cai em Prova)
| Termo Comum | Termo Técnico (Relacional) | Significado |
| :--- | :--- | :--- |
| **Tabela** | **Relação** | Conjunto bidimensional composto por linhas e colunas. |
| **Linha / Registro** | **Tupla** | Uma ocorrência individual ou instância de dados na tabela. |
| **Coluna / Campo** | **Atributo** | Uma propriedade ou característica descritiva da entidade. |
| **Tipo de Dado** | **Domínio** | Conjunto de valores válidos permitidos para aquele atributo. |

---

### 1.3 Chave Primária (*Primary Key* - PK)
Atributo (ou conjunto de atributos) que identifica de maneira **única e inequívoca** cada tupla (linha) de uma relação.
* **Regra 1:** Não pode se repetir (`UNIQUE`).
* **Regra 2:** Não pode conter valor nulo (`NOT NULL`).
* **Tipos de PK:**
  * **Simples:** Formada por apenas uma coluna (ex: `ID INT`).
  * **Composta:** Formada por duas ou mais colunas atuando juntas como identificador único (muito comum em tabelas associativas N:N, ex: `PRIMARY KEY (VENDA_ID, PRODUTO_ID)`).

---

### 1.4 Chave Estrangeira (*Foreign Key* - FK)
Atributo em uma tabela que referencia e aponta para a **Chave Primária (PK)** de outra tabela (ou da mesma tabela).
* **Finalidade:** Estabelecer vínculos relacionais entre entidades e manter a consistência do banco.
* **Regra fundamental:** O valor gravado no campo da FK **deve existir previamente** na PK da tabela de destino (ou ser `NULL`, caso a regra de negócio permita).

---

### 1.5 Integridade Referencial
Conjunto de restrições que garante que os relacionamentos entre tabelas permaneçam sempre válidos e consistentes.
* **Problema dos registros órfãos:** Se pudéssemos excluir a cidade "Maringá (ID 1)" do banco enquanto ainda existem clientes com `CIDADE_ID = 1`, esses clientes se tornariam registros órfãos (apontando para o vazio).
* **Comportamentos do SGBD ao tentar excluir o registro pai:**
  1. **RESTRICT / NO ACTION (Padrão):** O banco bloqueia a exclusão do registro pai e retorna erro enquanto houver filhos vinculados.
  2. **CASCADE:** O banco apaga o registro pai e automaticamente apaga todos os registros filhos dependentes.
  3. **SET NULL:** O banco apaga o pai e altera o valor da FK dos filhos para `NULL`.

---

## 2. Cardinalidade

A cardinalidade define o número de ocorrências de uma entidade que podem estar associadas a ocorrências de outra entidade.

### 2.1 Um para Um (1 : 1)
* **Conceito:** Cada registro da Tabela A relaciona-se com no máximo um registro da Tabela B, e vice-versa.
* **Exemplo:** `USUARIO` e `CARRINHO_DE_COMPRAS_ATIVO`.
* **Regra de Chave:** A Chave Estrangeira pode ficar em qualquer uma das duas tabelas (geralmente colocada na entidade dependente).

### 2.2 Um para Muitos (1 : N)
* **Conceito:** Um registro da Tabela A relaciona-se com vários registros da Tabela B, mas cada registro de B só se relaciona com um de A.
* **Exemplo:** `CIDADE (1)` e `CLIENTE (N)`.
  * Uma cidade pode ter **vários** clientes.
  * Um cliente pertence a apenas **uma** cidade.
* ⚠️ **REGRA DE OURO:** A Chave Estrangeira **SEMPRE vai para a tabela do lado "MUITOS" (N)**.
  * O campo `CIDADE_ID (FK)` deve ficar dentro da tabela `CLIENTE`.

### 2.3 Muitos para Muitos (N : N)
* **Conceito:** Um registro da Tabela A relaciona-se com vários da Tabela B, e um registro da Tabela B relaciona-se com vários da Tabela A.
* **Exemplo:** `VENDA` e `PRODUTO`.
  * Uma venda pode conter **vários** produtos.
  * Um produto pode estar presente em **várias** vendas distintas.
* ⚠️ **REGRA OBRIGATÓRIA:** Em bancos relacionais, **NUNCA** se conecta um N:N diretamente. É **obrigatório criar uma Tabela Associativa (Intermediária)**.
  * Exemplo: `VENDA_ITENS`.
  * Essa tabela recebe a FK de Venda (`VENDA_ID`) e a FK de Produto (`PRODUTO_ID`).
  * As duas chaves estrangeiras atuam juntas formando a **Chave Primária Composta**:
    `PRIMARY KEY (VENDA_ID, PRODUTO_ID)`
  * Guarda também atributos próprios da transação (ex: `QUANTIDADE`, `VALOR_UNITARIO`, `VALOR_TOTAL`).

---

## 3. Normalização de Dados

### 3.1 O que é e por que fazer?
Normalização é uma técnica formal de engenharia de dados que organiza os campos e tabelas de um banco com o objetivo de:
* Eliminar **redundâncias** desnecessárias;
* Evitar as **3 grandes anomalias**:
  * **Anomalia de Inserção:** Impossibilidade de cadastrar um dado sem que outro (não relacionado) também seja inserido.
  * **Anomalia de Atualização:** Modificar um dado em um local e esquecer de atualizar em outros registros duplicados (inconsistência).
  * **Anomalia de Exclusão:** Perder informações cruciais ao excluir um registro secundário.

---

### 3.2 As Três Formas Normais (1FN, 2FN e 3FN)

### 🥇 1ª Forma Normal (1FN)
Uma tabela está na 1FN quando:
1. Todos os atributos são **atômicos** (indivisíveis, valor único por linha/coluna).
2. Não existem **campos multivalorados** (ex: campo `TELEFONES` contendo `"44-9999, 44-8888"`).
3. Não existem **grupos repetitivos de colunas** (ex: `FONE_1`, `FONE_2`, `FONE_3`).
4. Possui uma **Chave Primária** formalmente definida.

---

### 🥈 2ª Forma Normal (2FN)
Uma tabela está na 2FN quando:
1. Já está obrigatoriamente na **1FN**.
2. **Dependência Funcional Total:** Todos os atributos não-chave devem depender da **chave primária inteira**, e não de apenas parte dela.
* 💡 **Ponto de Atenção para Prova:**
  * Se a tabela tiver uma Chave Primária **Simples** (composta por apenas 1 coluna, como `ID`), ao estar na 1FN ela **já estará automaticamente na 2FN**.
  * A 2FN só se torna um problema em tabelas com **Chave Primária Composta** (como tabelas associativas N:N).
  * *Exemplo:* Na tabela `VENDA_ITENS (VENDA_ID, PRODUTO_ID, DESCRICAO_PRODUTO, QT, VL_UNIT)`:
    * A `DESCRICAO_PRODUTO` depende exclusivamente de `PRODUTO_ID`, e não da venda! Por isso, ela viola a 2FN e deve ser transferida para a tabela `PRODUTO`.

---

### 🥉 3ª Forma Normal (3FN)
Uma tabela está na 3FN quando:
1. Já está obrigatoriamente na **2FN**.
2. **Sem Dependência Transitiva:** Nenhum atributo não-chave pode depender de **outro atributo não-chave**.
* Todos os atributos não-chave devem depender direta e exclusivamente da Chave Primária.
* *Exemplo clássico:* Na tabela `CLIENTE (ID, NOME, CIDADE_ID, NOME_CIDADE, UF)`:
  * `NOME_CIDADE` e `UF` não dependem do `ID` do cliente, dependem do `CIDADE_ID` (outro campo comum).
  * Viola a 3FN. Solução: Manter apenas `CIDADE_ID` em Cliente e criar a tabela separada `CIDADE (ID, NOME, UF)`.

---

## 4. CREATE TABLE (Linguagem DDL)

A sintaxe padrão cobrada pelo professor utiliza os seguintes tipos de dados e comandos:

### 4.1 Principais Tipos de Dados
* `INT`: Números inteiros (IDs, quantidades).
* `VARCHAR(tamanho)`: Texto de comprimento variável (nomes, endereços).
* `CHAR(tamanho)`: Texto de comprimento fixo (ex: `UF CHAR(2)`).
* `DECIMAL(precisão, casas_decimais)`: Números decimais exatos para moedas e medidas (ex: `DECIMAL(10,2)`).
* `DATE`: Datas no formato `'AAAA-MM-DD'`.

---

### 4.2 Modelos Práticos de Scripts SQL

#### Modelo A: Tabela Básica com PK Simples
```sql
CREATE TABLE CIDADE (
    ID INT NOT NULL PRIMARY KEY,
    NOME VARCHAR(100) NOT NULL,
    UF CHAR(2) NOT NULL
);
```

#### Modelo B: Tabela com Chave Estrangeira (FK)
```sql
CREATE TABLE CLIENTE (
    ID INT NOT NULL PRIMARY KEY,
    CIDADE_ID INT NOT NULL,
    NOME VARCHAR(100) NOT NULL,
    ENDERECO VARCHAR(150),
    FONE VARCHAR(20),
    DATA_NASC DATE,
    FOREIGN KEY (CIDADE_ID) REFERENCES CIDADE(ID)
);
```

#### Modelo C: Tabela Associativa N:N com Chave Composta e FKs
```sql
CREATE TABLE VENDA_ITENS (
    VENDA_ID INT NOT NULL,
    PRODUTO_ID INT NOT NULL,
    VL_UNIT DECIMAL(10,2) NOT NULL,
    QT INT NOT NULL,
    VL_TOTAL DECIMAL(10,2),
    PRIMARY KEY (VENDA_ID, PRODUTO_ID),
    FOREIGN KEY (VENDA_ID) REFERENCES VENDA(ID),
    FOREIGN KEY (PRODUTO_ID) REFERENCES PRODUTO(ID)
);
```

#### Modelo D: Adicionando Chave Estrangeira via ALTER TABLE
Caso o professor peça para criar as tabelas primeiro e adicionar as restrições depois:
```sql
ALTER TABLE VENDA_ITENS 
ADD CONSTRAINT FK_VENDA_ITENS_VENDA 
FOREIGN KEY (VENDA_ID) REFERENCES VENDA(ID);

ALTER TABLE VENDA_ITENS 
ADD CONSTRAINT FK_VENDA_ITENS_PRODUTO 
FOREIGN KEY (PRODUTO_ID) REFERENCES PRODUTO(ID);
```
