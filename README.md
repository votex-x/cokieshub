# Cokies Bots - Site de Documentação Profissional

Bem-vindo ao site de documentação oficial dos **Cokies Bots**: Modi (Moderação Automática) e Musicat (Busca e Download de Músicas).

## 📋 Sobre

Este é um site profissional de documentação desenvolvido com **HTML, CSS e JavaScript puros** (sem frameworks). O site oferece informações detalhadas sobre os dois bots Discord e permite que os usuários os convidem para seus servidores através de links diretos.

## 🎯 Funcionalidades

- **Página Inicial Atraente**: Apresentação dos bots com efeitos visuais profissionais.
- **Documentação Detalhada**: Páginas específicas para Modi e Musicat com funcionalidades e comandos.
- **Redirecionamento Inteligente**: URLs curtas (`/modi`, `/musicat`) que redirecionam para os links de convite.
- **Design Responsivo**: Interface que se adapta a diferentes tamanhos de tela.
- **Efeitos Visuais**: Animações suaves, gradientes, partículas flutuantes e transições.
- **Navegação Suave**: Transições de página sem recarregar (SPA - Single Page Application).

## 📁 Estrutura de Arquivos

```
cokieshub/
├── index.html          # Página principal (ponto de entrada)
├── .htaccess           # Configuração de redirecionamento (Apache)
├── README.md           # Este arquivo
├── css/
│   └── style.css       # Estilos CSS (tema escuro, animações, responsividade)
├── js/
│   └── script.js       # JavaScript (navegação, redirecionamento, efeitos)
└── assets/             # Pasta para ícones e imagens (vazia por padrão)
```

## 🚀 Como Usar

### 1. Configuração Local

Para testar o site localmente, você pode usar um servidor web simples:

```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (http-server)
npx http-server

# Com PHP
php -S localhost:8000
```

Depois, acesse `http://localhost:8000` no seu navegador.

### 2. Configuração dos Links de Convite

Os links de convite dos bots estão definidos no arquivo `js/script.js`. Você deve substituir os placeholders pelos links reais:

```javascript
const INVITE_LINKS = {
    modi: "https://discord.com/oauth2/authorize?client_id=MODI_CLIENT_ID&scope=bot%20applications.commands&permissions=8",
    musicat: "https://discord.com/oauth2/authorize?client_id=MUSICAT_CLIENT_ID&scope=bot%20applications.commands&permissions=8"
};
```

Substitua `MODI_CLIENT_ID` e `MUSICAT_CLIENT_ID` pelos IDs reais dos seus bots Discord.

### 3. Redirecionamento de URLs

O site suporta os seguintes redirecionamentos:

- **`/modi`** → Redireciona para o link de convite do Modi
- **`/musicat`** → Redireciona para o link de convite do Musicat
- **`/`** → Página inicial
- **`/?bot=modi`** → Página de documentação do Modi
- **`/?bot=musicat`** → Página de documentação do Musicat

## 🎨 Personalizações

### Cores

As cores do site estão definidas como variáveis CSS em `css/style.css`:

```css
:root {
    --color-dark-main: #1e1f22;
    --color-accent-purple: #5865f2;
    --color-accent-green: #57f287;
    /* ... mais cores */
}
```

Você pode modificar essas cores para personalizar o tema.

### Conteúdo

O conteúdo de cada página está definido no objeto `DOC_CONTENT` em `js/script.js`. Você pode editar o HTML de cada seção diretamente lá.

## 📱 Responsividade

O site é totalmente responsivo e se adapta a:

- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (até 767px)

## 🌐 Deploy

Para fazer deploy do site, você pode usar:

1. **GitHub Pages**: Faça push do repositório para o GitHub e ative o GitHub Pages.
2. **Vercel**: Conecte seu repositório e faça deploy automaticamente.
3. **Netlify**: Similar ao Vercel, com suporte a redirecionamentos automáticos.
4. **Servidor Web Tradicional**: Copie os arquivos para o servidor e configure o `.htaccess` (Apache) ou equivalente (Nginx).

## 🔧 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos, animações e responsividade
- **JavaScript Vanilla**: Navegação, redirecionamento e efeitos interativos
- **Google Fonts**: Tipografia (Poppins)

## 📝 Licença

Este projeto é fornecido como está. Sinta-se livre para modificar e distribuir conforme necessário.

## 💬 Suporte

Para dúvidas ou sugestões sobre o site, entre em contato com o desenvolvedor.

---

**Desenvolvido com ❤️ usando HTML, CSS e JavaScript Puros**
