# Sakibites Bot Portfolio - Versão Reconstruída

Este é o site portfolio dos bots Discord Sakibites, completamente reconstruído em **HTML, CSS e JavaScript puros**, sem dependências de frameworks como React.

## 📁 Estrutura do Projeto

```
sakibites_rebuild/
├── index.html       # Arquivo HTML principal
├── style.css        # Estilos CSS
├── script.js        # Interatividade em JavaScript
├── README.md        # Este arquivo
└── CNAME            # Arquivo de configuração do domínio (dev.sakibites.space)
```

## 🎨 Características

- **Design Moderno e Responsivo**: Layout que se adapta a diferentes tamanhos de tela
- **Sem Dependências Externas**: Apenas HTML, CSS e JavaScript puros
- **Performance Otimizada**: Carregamento rápido e eficiente
- **Acessibilidade**: Semântica HTML adequada e contraste de cores
- **Interatividade**: Efeitos suaves, animações ao scroll e feedback visual

## 🎯 Seções do Site

1. **Navegação**: Menu simples e intuitivo
2. **Hero**: Seção de boas-vindas com chamada para ação
3. **Recursos**: Três cartões destacando recursos principais
4. **Nossos Bots**: Detalhes sobre Modi e Musicat
5. **Call to Action**: Seção de convite para se juntar ao Discord
6. **Rodapé**: Links e informações de contato

## 🚀 Como Usar

### Localmente

1. Clone o repositório ou baixe os arquivos
2. Abra `index.html` no seu navegador
3. O site será exibido com todos os estilos e interatividades

### Em Produção

1. Faça upload dos arquivos para seu servidor web
2. Certifique-se de que o arquivo `CNAME` está configurado para `dev.sakibites.space`
3. Configure seu DNS para apontar para o servidor

## 🔧 Personalização

### Alterar Cores

Edite as variáveis CSS em `style.css`:

```css
:root {
    --color-primary: #6366f1;      /* Cor primária */
    --color-secondary: #a78bfa;    /* Cor secundária */
    --color-background: #0f172a;   /* Fundo */
    /* ... outras cores */
}
```

### Atualizar Links

Atualize os links de Discord, GitHub e contato nos arquivos HTML ou use a função JavaScript:

```javascript
updateLinks({
    discord: 'https://discord.gg/seu-servidor',
    github: 'https://github.com/seu-usuario',
    contact: 'seu-email@exemplo.com'
});
```

### Adicionar Imagens dos Bots

Substitua as URLs das imagens placeholder pelos URLs reais dos avatares dos bots:

```html
<img src="caminho/para/imagem/modi.png" alt="Avatar do Bot Modi">
<img src="caminho/para/imagem/musicat.png" alt="Avatar do Bot Musicat">
```

## 📱 Responsividade

O site é totalmente responsivo e funciona bem em:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## ♿ Acessibilidade

- Semântica HTML apropriada
- Atributos `alt` em imagens
- Contraste de cores adequado
- Navegação por teclado suportada

## 📄 Licença

Este projeto é parte do portfólio Sakibites. Todos os direitos reservados © 2025 Sakibites.

## 📞 Contato

- Email: contato@sakibites.space
- Discord: [Junte-se ao servidor]
- GitHub: [Visite nosso repositório]

---

**Desenvolvido com ❤️ em HTML, CSS e JavaScript puros**
