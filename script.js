// Script.js - Interatividade e efeitos para o site Sakibites

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar efeitos e interatividades
    initNavigation();
    initButtons();
    initScrollAnimations();
});

/**
 * Inicializa a navegação com suporte a menu responsivo
 */
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            // Se for um link externo, abrir em nova aba
            if (href.startsWith('http')) {
                window.open(href, '_blank');
            } else {
                // Scroll suave para seções internas
                smoothScroll(href);
            }
        });
    });
}

/**
 * Inicializa eventos dos botões
 */
function initButtons() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Adicionar efeito de ripple
            addRippleEffect(this, e);
            
            const href = this.getAttribute('href');
            
            // Tratar diferentes tipos de links
            if (href === '#' || href === '') {
                // Placeholder - você pode adicionar lógica aqui
                console.log('Botão clicado:', this.textContent);
            } else if (href.startsWith('http')) {
                window.open(href, '_blank');
            } else {
                smoothScroll(href);
            }
        });
        
        // Adicionar efeito hover
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

/**
 * Adiciona efeito de ripple ao clicar em botões
 */
function addRippleEffect(element, event) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    // Remover ripple anterior se existir
    const existingRipple = element.querySelector('.ripple');
    if (existingRipple) {
        existingRipple.remove();
    }
    
    element.appendChild(ripple);
    
    // Remover ripple após animação
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

/**
 * Scroll suave para seções
 */
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/**
 * Inicializa animações ao scroll
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar cartões de recursos e bots
    document.querySelectorAll('.feature-card, .bot-card').forEach(card => {
        observer.observe(card);
    });
}

/**
 * Função para atualizar links dinâmicos
 */
function updateLinks(linksConfig) {
    // Exemplo: updateLinks({ discord: 'https://discord.gg/...', github: 'https://github.com/...' })
    
    if (linksConfig.discord) {
        document.querySelectorAll('a[href*="discord"]').forEach(link => {
            link.href = linksConfig.discord;
        });
    }
    
    if (linksConfig.github) {
        document.querySelectorAll('a[href*="github"]').forEach(link => {
            link.href = linksConfig.github;
        });
    }
    
    if (linksConfig.contact) {
        document.querySelectorAll('a[href*="contato"]').forEach(link => {
            link.href = 'mailto:' + linksConfig.contact;
        });
    }
}

/**
 * Função para adicionar efeito de parallax ao hero
 */
function initParallax() {
    const hero = document.querySelector('.hero');
    
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            hero.style.backgroundPosition = '0 ' + (scrollPosition * 0.5) + 'px';
        });
    }
}

// Inicializar parallax quando o documento estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initParallax);
} else {
    initParallax();
}

/**
 * Função para adicionar modo escuro/claro (opcional)
 */
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

/**
 * Carregar tema salvo
 */
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
}
