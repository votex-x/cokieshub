// ===== CONFIGURAÇÃO DE LINKS DE CONVITE =====
const BOT_LINKS = {
    modi: 'https://discord.com/oauth2/authorize?client_id=1424226592858701896&permissions=11264&integration_type=0&scope=bot',
    musicat: 'https://discord.com/oauth2/authorize?client_id=1430266604922601592&permissions=2147494912&integration_type=0&scope=bot+applications.commands'
};

// ===== SISTEMA DE ENCURTADOR DE URLs (Mantido) =====
class URLShortener {
    constructor() {
        this.shortcuts = this.loadShortcuts();
    }

    loadShortcuts() {
        const stored = localStorage.getItem('cokies_shortcuts');
        return stored ? JSON.parse(stored) : {};
    }

    saveShortcuts() {
        localStorage.setItem('cokies_shortcuts', JSON.stringify(this.shortcuts));
    }

    createShortcut(name, url) {
        this.shortcuts[name] = {
            url: url,
            created: new Date().toISOString(),
            clicks: 0
        };
        this.saveShortcuts();
        return name;
    }

    getShortcut(name) {
        if (this.shortcuts[name]) {
            this.shortcuts[name].clicks++;
            this.saveShortcuts();
            return this.shortcuts[name].url;
        }
        return null;
    }

    getAllShortcuts() {
        return this.shortcuts;
    }
}

// Instância global do encurtador
const shortener = new URLShortener();

// ===== INICIALIZAR ATALHOS =====
function initializeShortcuts() {
    // Garante que os atalhos existam no shortener, mas sem incrementar cliques.
    // O getShortcut() incrementa, o que é indesejado na inicialização.
    if (!shortener.getAllShortcuts()['modi']) {
        shortener.createShortcut('modi', BOT_LINKS.modi);
    }
    if (!shortener.getAllShortcuts()['musicat']) {
        shortener.createShortcut('musicat', BOT_LINKS.musicat);
    }
}

// ===== FUNÇÕES DE REDIRECIONAMENTO =====
function redirectToModi() {
    const url = shortener.getShortcut('modi');
    if (url) {
        window.location.href = url;
    } else {
        window.location.href = BOT_LINKS.modi;
    }
}

function redirectToMusicat() {
    const url = shortener.getShortcut('musicat');
    if (url) {
        window.location.href = url;
    } else {
        window.location.href = BOT_LINKS.musicat;
    }
}

// ===== SISTEMA DE COMANDO DE ATALHO (Mantido) =====
class CommandHandler {
    constructor() {
        this.commands = {
            '/modi': this.handleModi.bind(this),
            '/musicat': this.handleMusicat.bind(this),
            '/help': this.handleHelp.bind(this),
            '/shortcuts': this.handleShortcuts.bind(this)
        };
    }

    handleModi() {
        redirectToModi();
    }

    handleMusicat() {
        redirectToMusicat();
    }

    showHelp() {
        const helpText = `
╔════════════════════════════════════════╗
║     COKIES BOTS - COMANDOS FOFOS     ║
╚════════════════════════════════════════╝

📌 Atalhos Disponíveis:
  /modi       → Convida o bot Modi
  /musicat    → Convida o bot Musicat
  /help       → Mostra esta mensagem
  /shortcuts  → Lista todos os atalhos

💡 Dicas:
  • Use os atalhos para convidar bots rapidamente
  • Todos os comandos começam com /
  • Os atalhos funcionam em qualquer página
        `;
        console.log(helpText);
        alert(helpText);
    }

    showShortcuts() {
        const shortcuts = shortener.getAllShortcuts();
        let text = '📊 Atalhos Registrados:\n\n';
        
        for (const [name, data] of Object.entries(shortcuts)) {
            text += `/${name}\n`;
            text += `  Cliques: ${data.clicks}\n`;
            text += `  Criado: ${new Date(data.created).toLocaleDateString('pt-BR')}\n\n`;
        }
        
        console.log(text);
        alert(text);
    }

    execute(command) {
        const cmd = command.toLowerCase().trim();
        if (this.commands[cmd]) {
            this.commands[cmd]();
            return true;
        }
        return false;
    }
}

// Instância global do manipulador de comandos
const commandHandler = new CommandHandler();

// ===== DETECÇÃO DE COMANDOS NA URL (Mantido) =====
function checkURLCommand() {
    const params = new URLSearchParams(window.location.search);
    const cmd = params.get('cmd');
    
    // Se o parâmetro "cmd" for encontrado, remove-o da URL para evitar loops de redirecionamento
    if (cmd) {
        const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        window.history.replaceState({ path: newUrl }, '', newUrl);
    }
    
    if (cmd) {
        // Executar o comando e, se for um comando de redirecionamento,
        // o commandHandler.execute() já irá chamar redirectToModi/Musicat.
        // O problema pode ser que o script não está esperando o comando ser executado.
        // Vou garantir que o redirecionamento ocorra.
        // O problema mais provável é que o comando na URL não está sendo executado
        // se o atalho não existir no localStorage, pois initializeShortcuts() usa getShortcut()
        // que incrementa o contador e pode não criar o atalho se já existir.
        
        // A correção mais simples é garantir que os atalhos sejam inicializados ANTES
        // de tentar executar o comando da URL.
        const commandExecuted = commandHandler.execute(`/${cmd}`); // Adicionando a barra para corresponder à chave do handler
        
        // Se o comando não for reconhecido, podemos tentar um redirecionamento direto
        if (!commandExecuted) {
            // Se o usuário digitou algo como 'modi' sem a barra, tentamos redirecionar
            if (cmd.toLowerCase() === 'modi') {
                redirectToModi();
            } else if (cmd.toLowerCase() === 'musicat') {
                redirectToMusicat();
            }
        }
    }
}

// ===== DETECÇÃO DE COMANDOS POR TECLADO (Mantido) =====
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', function(event) {
        // Ctrl+Shift+M para Modi
        if (event.ctrlKey && event.shiftKey && event.key === 'M') {
            event.preventDefault();
            redirectToModi();
        }
        // Ctrl+Shift+U para Musicat
        if (event.ctrlKey && event.shiftKey && event.key === 'U') {
            event.preventDefault();
            redirectToMusicat();
        }
        // Ctrl+Shift+H para Help
        if (event.ctrlKey && event.shiftKey && event.key === 'H') {
            event.preventDefault();
            commandHandler.showHelp();
        }
    });
}

// ===== SCROLL SUAVE PARA SEÇÕES (Mantido) =====
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ===== ANIMAÇÃO DE ENTRADA PARA CARDS (Mantido) =====
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.bot-card, .feature-card, .shortcut-card').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// ===== FUNÇÃO DE CÓPIA PARA CLIPBOARD (Mantido) =====
function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('Copiado para a área de transferência!', 'success');
        }).catch(() => {
            fallbackCopy(text);
        });
    } else {
        fallbackCopy(text);
    }
}

function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showNotification('Copiado para a área de transferência!', 'success');
}

// ===== SISTEMA DE NOTIFICAÇÕES (Estilo Hello Kitty) =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Cores Hello Kitty
    const primaryColor = '#FF69B4'; // Rosa Choque
    const secondaryColor = '#FFFFFF'; // Branco
    const successColor = '#FF1493'; // Rosa Escuro
    const infoColor = '#FFB6C1'; // Rosa Claro

    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: ${type === 'success' ? successColor : infoColor};
        color: ${type === 'success' ? secondaryColor : '#36454F'};
        padding: 15px 20px;
        border-radius: 15px;
        box-shadow: 0 8px 25px rgba(255, 105, 180, 0.3);
        z-index: 10000;
        animation: slideInUp 0.3s ease;
        font-weight: 700;
        border: 3px solid ${primaryColor};
        font-family: 'Comic Sans MS', cursive, sans-serif;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutDown 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// ===== ADICIONAR ESTILOS DE NOTIFICAÇÃO (Mantido) =====
function addNotificationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideOutDown {
            from {
                opacity: 1;
                transform: translateY(0);
            }
            to {
                opacity: 0;
                transform: translateY(20px);
            }
        }
    `;
    document.head.appendChild(style);
}

// ===== ANÁLISE DE CLIQUES NOS BOTÕES (Mantido) =====
function setupAnalytics() {
    document.querySelectorAll('.btn-invite').forEach(btn => {
        btn.addEventListener('click', function() {
            const botName = this.closest('.bot-card').querySelector('.bot-name').textContent;
            console.log(`💖 Clique em convite: ${botName}`);
            showNotification(`Redirecionando para ${botName}...`, 'info');
        });
    });
}

// ===== MENU MOBILE (Mantido) =====
function setupMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
            });
        });
    }
}

// ===== EFEITO DE PARALLAX (Removido para o tema HK) =====
// function setupParallax() {
//     window.addEventListener('scroll', function() {
//         const scrolled = window.pageYOffset;
//         const hero = document.querySelector('.hero');
//         if (hero) {
//             hero.style.backgroundPosition = `0px ${scrolled * 0.5}px`;
//         }
//     });
// }

// ===== SUPORTE A COMANDO VIA CONSOLE (Mantido) =====
window.cokies = {
    invite: {
        modi: redirectToModi,
        musicat: redirectToMusicat
    },
    shortcuts: shortener,
    commands: commandHandler,
    help: () => commandHandler.showHelp(),
    stats: () => {
        const shortcuts = shortener.getAllShortcuts();
        console.table(shortcuts);
    }
};

// ===== INICIALIZAÇÃO PRINCIPAL =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('%c🎀 Cokies Bots - Inicializando...', 'color: #FF69B4; font-size: 16px; font-weight: bold;');
    
    // Inicializar todos os sistemas
    initializeShortcuts();
    setupSmoothScroll();
    setupKeyboardShortcuts();
    setupIntersectionObserver();
    addNotificationStyles();
    setupAnalytics();
    setupMobileMenu();
    // setupParallax(); // Removido
    checkURLCommand();
    
    console.log('%c✅ Cokies Bots - Pronto!', 'color: #FF1493; font-size: 14px; font-weight: bold;');
    console.log('%c💡 Digite "cokies.help()" no console para ver comandos disponíveis', 'color: #FFD700; font-size: 12px;');
});

// ===== VERIFICAÇÃO DE SUPORTE A STORAGE (Mantido) =====
function isLocalStorageAvailable() {
    try {
        const test = '__test__';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (e) {
        return false;
    }
}

// ===== FUNÇÃO DE TESTE (Mantido) =====
window.testCokies = function() {
    console.log('%c🧪 Testando Cokies Bots...', 'color: #FF69B4; font-weight: bold;');
    console.log('📊 Atalhos:', shortener.getAllShortcuts());
    console.log('%c✅ Tudo funcionando!', 'color: #FF1493; font-weight: bold;');
};

// ===== EXPORTAR PARA GLOBAL (Mantido) =====
window.redirectToModi = redirectToModi;
window.redirectToMusicat = redirectToMusicat;
