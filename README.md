# Calculadora Web com Flask

>   Este projeto oferece uma interface amigável para executar operações e visualizar resultados em tempo real.

Uma aplicação web interativa para realizar cálculos matemáticos básicos de forma eficiente e intuitiva.

<a href="https://python-calculadora.onrender.com/"><img src="https://img.shields.io/badge/-Calculadora%20Python-000000?style=for-the-badge" alt="Python-Calculadora">

![Tela do sistema](https://github.com/vitoriapguimaraes/Python-Calculadora/blob/main/results/calculate.gif)

## Funcionalidades Principais:

-   Realiza operações de adição, subtração, multiplicação, divisão e porcentagem.
-   Validação de entrada para garantir que apenas números válidos sejam utilizados.
-   Tratamento de erros para evitar divisão por zero e operações inválidas.
-   Interface dinâmica que atualiza os resultados instantaneamente.

## Tecnologias Utilizadas:

-   Python
-   Flask
-   JavaScript
-   HTML
-   CSS

## Como Executar:

1.  Clone o repositório.
2.  Navegue até o diretório do projeto.
3.  Crie um ambiente virtual (recomendado):

    ```bash
    python3 -m venv venv
    ```

4.  Ative o ambiente virtual:

    -   No Linux/macOS:

        ```bash
        source venv/bin/activate
        ```

    -   No Windows:

        ```bash
        .\venv\Scripts\activate
        ```

5.  Instale  as dependências:

    ```bash
    pip install -r requirements.txt
    ```

6.  Execute a aplicação:

    ```bash
    python app.py
    ```

7.  Abra o navegador e acesse `http://127.0.0.1:5000/`

## Como Usar:

1.  Insira o primeiro número no campo correspondente.
2.  Selecione a operação desejada (+, -, *, /, %).
3.  Insira o segundo número.
4.  O resultado será exibido automaticamente na tela.
5.  Utilize os botões "C" para limpar o cálculo atual ou "AC" para limpar o histórico.

## Estrutura de Diretórios:

```
/Python-Calculadora
├── app.py                  # Arquivo principal da aplicação Flask
├── templates/
│   └── index.html          # Página HTML da calculadora
├── static/
│   ├── style.css           # Estilos CSS
│   └── script.js           # Lógica JavaScript da calculadora
├── venv/                   # Ambiente virtual do Python
├── file-scripts-versions   # Primeiras versões do projeto
├── results/                # Software print and gif
└── README.md               # Documentação do projeto
```

## Status:

✅ Concluído

> Melhorias que podem ser incluídas:
> - Implementar mais testes unitários.
> - Adicionar histórico de cálculos.
> - Adicionar funcionalidade de salvar cálculos em um arquivo.

## Mais Sobre Mim

Acesse os arquivos disponíveis na [Pasta Documentos](https://github.com/vitoriapguimaraes/vitoriapguimaraes/tree/main/DOCUMENTOS) para mais informações sobre minhas qualificações e certificações.