# 🍪 Cokies Bots

Bem-vindo ao **Cokies Bots** - Um site profissional apresentando dois bots Discord incríveis: **Modi** e **Musicat**.

## 📋 Sobre

Cokies Bots é um site 100% em HTML, CSS e JavaScript puro (sem frameworks) que apresenta dois bots Discord poderosos:

- **Modi** - Bot de Moderação com filtros inteligentes e sistema premium
- **Musicat** - Bot de Música com busca avançada no SoundCloud

## 🎯 Recursos Principais

### 🌐 Website
- Design profissional com tema avermelhado
- Totalmente responsivo (mobile, tablet, desktop)
- Navegação suave e intuitiva
- Seções organizadas por funcionalidade

### 🤖 Modi Bot
- Configuração rápida do servidor
- Filtros de moderação (Mídia, Texto, Links)
- Auto-reações automáticas
- Sistema Premium com limites expandidos
- Gerenciamento de permissões

### 🎵 Musicat Bot
- Busca avançada no SoundCloud
- Múltiplas estratégias de busca
- Download de MP3 até 25MB
- Detecção automática de versões (Slow, Speed, Remix, etc.)
- Ordenação por popularidade

### ⚡ Sistema de Atalhos
- `/modi` - Redireciona para convite do Modi
- `/musicat` - Redireciona para convite do Musicat
- Atalhos de teclado (Ctrl+Shift+M, Ctrl+Shift+U)
- Rastreamento de cliques e estatísticas

## 🚀 Como Usar

### Convidar Bots
1. **Modi**: Clique em "Convidar Modi" ou use `/modi`
2. **Musicat**: Clique em "Convidar Musicat" ou use `/musicat`

### Atalhos de Teclado
- `Ctrl+Shift+M` - Convidar Modi
- `Ctrl+Shift+U` - Convidar Musicat
- `Ctrl+Shift+H` - Ver ajuda

### Console (DevTools)
```javascript
// Ver comandos disponíveis
cokies.help()

// Convidar bots
cokies.invite.modi()
cokies.invite.musicat()

// Ver estatísticas
cokies.stats()

// Testar sistema
testCokies()
```

## 📁 Estrutura de Arquivos

```
cokieshub/
├── index.html          # Página principal
├── styles.css          # Estilos e tema
├── script.js           # Funcionalidades e atalhos
├── README.md           # Este arquivo
└── CNAME               # Configuração de domínio
```

## 🎨 Tema e Design

- **Cor Primária**: Vermelho (#c41e3a)
- **Cor Secundária**: Azul Escuro (#2c3e50)
- **Cor de Destaque**: Vermelho Claro (#dc143c)
- **Fonte**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif

## 🔧 Funcionalidades Técnicas

### Sistema de Encurtador de URLs
- Armazena atalhos em localStorage
- Rastreia número de cliques
- Suporta criação dinâmica de atalhos

### Detecção de Comandos
- Parâmetro URL: `?cmd=/modi` ou `?cmd=/musicat`
- Atalhos de teclado globais
- Suporte a console JavaScript

### Animações
- Entrada suave de elementos
- Transições de hover
- Efeitos de scroll suave

### Responsividade
- Mobile-first design
- Breakpoints: 768px e 480px
- Grid layout adaptativo

## 📊 Estatísticas

O sistema rastreia:
- Número de cliques em cada atalho
- Data de criação dos atalhos
- Histórico de uso

## 🌍 Links dos Bots

### Modi
```
https://discord.com/oauth2/authorize?client_id=1424226592858701896&permissions=11264&integration_type=0&scope=bot
```

### Musicat
```
https://discord.com/oauth2/authorize?client_id=1430266604922601592&permissions=2147494912&integration_type=0&scope=bot+applications.commands
```

## 💻 Compatibilidade

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera
- ✅ Navegadores móveis

## 🔐 Segurança

- Sem dependências externas
- Sem rastreamento de terceiros
- Dados armazenados localmente apenas
- HTTPS recomendado

## 📝 Licença

© 2024 Cokies Bots. Todos os direitos reservados.

## 🤝 Suporte

Para dúvidas ou sugestões:
- Discord: [Servidor Cokies](https://discord.gg/cokies)
- GitHub: [Repositório](https://github.com)

## 🎉 Agradecimentos

Desenvolvido com ❤️ para a comunidade Discord.

---

**Última atualização**: Outubro 2024
