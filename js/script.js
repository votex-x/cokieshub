// Dados de Convite (Substituir pelos links reais do usuário)
const INVITE_LINKS = {
    modi: "https://discord.com/oauth2/authorize?client_id=1424226592858701896&permissions=11264&integration_type=0&scope=bot",
    musicat: "https://discord.com/oauth2/authorize?client_id=1430266604922601592&permissions=2147494912&integration_type=0&scope=bot+applications.commands"
};

// Conteúdo da Documentação (Estrutura básica)
const DOC_CONTENT = {
    home: `
        <section id="home-hero" class="hero-section">
            <div class="container">
                <h2>A Próxima Geração de Bots Discord</h2>
                <p>Modi e Musicat: Moderação Inteligente e Entretenimento de Alta Qualidade para o seu servidor.</p>
                <div class="bot-cards">
                    <div class="card" onclick="loadContent('modi')">
                        <h3>🤖 Modi</h3>
                        <p>Moderação Automática e Filtros Inteligentes. Mantenha seu chat limpo e focado.</p>
                        <a href="${INVITE_LINKS.modi}" target="_blank" class="btn-card-invite">Convidar Modi</a>
                    </div>
                    <div class="card" onclick="loadContent('musicat')">
                        <h3>🎵 Musicat</h3>
                        <p>Busca Avançada e Download de Músicas. O melhor entretenimento para o seu canal de voz.</p>
                        <a href="${INVITE_LINKS.musicat}" target="_blank" class="btn-card-invite">Convidar Musicat</a>
                    </div>
                </div>
            </div>
        </section>
    `,
    modi: `
        <section id="modi-doc" class="doc-section">
            <div class="container">
                <h2>🤖 Modi - Moderação Inteligente</h2>
                <p class="bot-tagline">O bot que pensa por você. Filtros avançados para um servidor organizado.</p>
                
                <h3>Funcionalidades Principais</h3>
                <ul>
                    <li><strong>Filtros Inteligentes</strong>: Configure canais para permitir apenas Mídia, Texto ou Links.</li>
                    <li><strong>Auto-Reação</strong>: Adicione reações automáticas para engajamento.</li>
                    <li><strong>Exceções por Cargo</strong>: Permita que a moderação ignore os filtros.</li>
                    <li><strong>Sistema Premium</strong>: Desbloqueie limites maiores de configuração.</li>
                </ul>

                <h3>Comandos Essenciais</h3>
                <table class="command-table">
                    <thead>
                        <tr><th>Comando</th><th>Descrição</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><code>/setup</code></td><td>Configuração rápida inicial.</td></tr>
                        <tr><td><code>/setfilter</code></td><td>Define o tipo de filtro para um canal.</td></tr>
                        <tr><td><code>/viewfilters</code></td><td>Lista todos os filtros ativos no servidor.</td></tr>
                        <tr><td><code>/filterinfo</code></td><td>Detalha os tipos de filtros disponíveis.</td></tr>
                    </tbody>
                </table>
                
                <a href="${INVITE_LINKS.modi}" target="_blank" class="btn-invite-large">Convidar Modi para seu Servidor</a>
            </div>
        </section>
    `,
    musicat: `
        <section id="musicat-doc" class="doc-section">
            <div class="container">
                <h2>🎵 Musicat - Busca Avançada e Download</h2>
                <p class="bot-tagline">O bot de música que realmente encontra o que você quer ouvir.</p>
                
                <h3>Funcionalidades Principais</h3>
                <ul>
                    <li><strong>Busca Aprimorada</strong>: Múltiplas estratégias de busca para encontrar a melhor versão.</li>
                    <li><strong>Download Direto (MP3)</strong>: Envia o arquivo de áudio diretamente no chat (limite de 25MB).</li>
                    <li><strong>Seleção por Botões</strong>: Escolha a versão desejada com botões interativos.</li>
                </ul>

                <h3>Comandos Essenciais</h3>
                <table class="command-table">
                    <thead>
                        <tr><th>Comando</th><th>Descrição</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><code>/play &lt;música&gt;</code></td><td>Busca e permite selecionar a versão para download.</td></tr>
                        <tr><td><code>/fast &lt;música&gt;</code></td><td>Download rápido da primeira versão encontrada.</td></tr>
                        <tr><td><code>/search &lt;música&gt;</code></td><td>Apenas busca e mostra os resultados.</td></tr>
                    </tbody>
                </table>
                
                <a href="${INVITE_LINKS.musicat}" target="_blank" class="btn-invite-large">Convidar Musicat para seu Servidor</a>
            </div>
        </section>
    `
};

/**
 * Função principal para carregar o conteúdo na área principal.
 */
function loadContent(contentKey) {
    const contentArea = document.getElementById('content-area');
    const content = DOC_CONTENT[contentKey] || DOC_CONTENT.home;
    
    // Animação de transição suave
    contentArea.style.opacity = 0;
    contentArea.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        contentArea.innerHTML = content;
        contentArea.style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out';
        contentArea.style.opacity = 1;
        contentArea.style.transform = 'translateY(0)';
        
        // Scroll para o topo com animação suave
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Atualiza a URL para permitir compartilhamento
        const newPath = contentKey === 'home' ? '/' : '/' + contentKey;
        history.pushState({ page: contentKey }, null, newPath);
        
        // Atualiza o link de convite do header
        updateHeaderInviteLink(contentKey);
        
    }, 200);
}

/**
 * Atualiza o link "Convidar" no header dependendo da página.
 */
function updateHeaderInviteLink(currentKey) {
    const inviteButton = document.querySelector('.btn-invite');
    if (currentKey === 'modi') {
        inviteButton.href = INVITE_LINKS.modi;
        inviteButton.textContent = "Convidar Modi";
    } else if (currentKey === 'musicat') {
        inviteButton.href = INVITE_LINKS.musicat;
        inviteButton.textContent = "Convidar Musicat";
    } else {
        inviteButton.href = "#invite";
        inviteButton.textContent = "Convidar";
    }
    inviteButton.target = "_blank";
}

/**
 * Lógica de Redirecionamento e Carregamento Inicial
 */
function handleInitialLoad() {
    const path = window.location.pathname.toLowerCase();
    const query = new URLSearchParams(window.location.search);
    
    // 1. Lógica de Redirecionamento (para URLs curtas /Modi, /Musicat)
    if (path === '/modi' || path.endsWith('/modi')) {
        window.location.replace(INVITE_LINKS.modi);
        return;
    }
    if (path === '/musicat' || path.endsWith('/musicat')) {
        window.location.replace(INVITE_LINKS.musicat);
        return;
    }

    // 2. Lógica de Carregamento de Conteúdo
    let contentToLoad = 'home';
    
    if (query.has('bot')) {
        contentToLoad = query.get('bot');
    } else if (path.includes('/modi')) {
        contentToLoad = 'modi';
    } else if (path.includes('/musicat')) {
        contentToLoad = 'musicat';
    }
    
    loadContent(contentToLoad);
}

/**
 * Efeito de Partículas Flutuantes
 */
function initParticles() {
    const particleCount = 15;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 4 + 2;
        particle.style.cssText = `
            position: fixed;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, rgba(88, 101, 242, 0.8), rgba(87, 242, 135, 0.4));
            border-radius: 50%;
            pointer-events: none;
            z-index: 0;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: float ${Math.random() * 20 + 10}s infinite linear;
            opacity: ${Math.random() * 0.5 + 0.2};
        `;
        document.body.insertBefore(particle, document.body.firstChild);
    }

    // Adiciona a animação de flutuação ao CSS dinamicamente
    if (!document.querySelector('style[data-particles]')) {
        const style = document.createElement('style');
        style.setAttribute('data-particles', 'true');
        style.textContent = `
            @keyframes float {
                0% {
                    transform: translateY(0px) translateX(0px);
                }
                25% {
                    transform: translateY(-20px) translateX(10px);
                }
                50% {
                    transform: translateY(-40px) translateX(-10px);
                }
                75% {
                    transform: translateY(-20px) translateX(10px);
                }
                100% {
                    transform: translateY(0px) translateX(0px);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

/**
 * Efeito de Scroll Suave
 */
function initSmoothScroll() {
    document.documentElement.style.scrollBehavior = 'smooth';
}

// Escuta o evento de navegação do histórico
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.page) {
        loadContent(event.state.page);
    } else {
        handleInitialLoad();
    }
});

// Inicializa o carregamento do conteúdo
document.addEventListener('DOMContentLoaded', () => {
    handleInitialLoad();
    initParticles();
    initSmoothScroll();
});
