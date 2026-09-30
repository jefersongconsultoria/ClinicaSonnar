# Clínica Sonnar — proposta de redesign

Projeto estático, responsivo e pronto para publicação no GitHub Pages.

## O que está incluído

- Página inicial moderna em formato one-page.
- Navegação responsiva para desktop e celular.
- Seções de exames, clínica, especialidades, convênios e unidades.
- Botão flutuante de WhatsApp usando **+55 77 9939-8686**.
- Chatbot flutuante integrado via iframe.
- CTAs de atendimento distribuídos pela página.
- SEO básico, acessibilidade e animações leves.
- Sem dependência de PHP ou banco de dados.

## Estrutura

```text
sonnar-site-proposta/
├── index.html
├── README.md
├── .nojekyll
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── main.js
    └── img/
        ├── sonnar-logo.png
        └── logo-source.png
```

## Publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todo o conteúdo desta pasta para a raiz do repositório.
3. Abra **Settings > Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/ (root)`.
6. Salve e aguarde a URL do GitHub Pages.

## Chatbot

O chatbot atual está configurado em `index.html` com:

```html
https://doctorbot.viewer.tangoservicos.com/sonnar-web-v2
```

Para trocar, basta localizar o `iframe` de `#chat-panel` no final do `index.html` e substituir o `src`.

## WhatsApp

O número configurado é:

```text
+55 77 9939-8686
```

Os links usam o padrão:

```text
https://wa.me/557799398686
```

## Observação sobre imagens

A proposta usa algumas imagens públicas já hospedadas no site atual da Clínica Sonnar, apenas para manter identidade visual na apresentação. Para uma versão definitiva, recomenda-se disponibilizar os arquivos originais e hospedá-los dentro do próprio projeto.

## Observação de conteúdo

Esta é uma versão conceito para apresentação. Antes da publicação oficial, convênios, especialidades, horários, contatos e textos clínicos devem ser revisados pela Clínica Sonnar.
