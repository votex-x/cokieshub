# Sakibites Bot Links - Versão Minimalista

Este projeto serve como uma página de links curtos para os bots Discord **Modi** e **Musicat**.

## 📁 Estrutura do Projeto

```
sakibites_rebuild_v2/
├── index.html       # Página inicial com os links dos bots
├── style.css        # Estilos CSS minimalistas
├── CNAME            # Configuração do domínio (dev.sakibites.space)
├── .gitignore       # Arquivos a serem ignorados
├── Modi/
│   └── index.html   # Redirecionamento para o convite do Modi
└── Musicat/
    └── index.html   # Redirecionamento para o convite do Musicat
```

## 🚀 Como Funciona

A página principal (`index.html`) lista os dois bots. Ao clicar em "Convidar Modi" ou "Convidar Musicat", o usuário é levado para o caminho correspondente (ex: `dev.sakibites.space/Modi`).

Os arquivos dentro das pastas `Modi/` e `Musicat/` contêm um meta-refresh que redireciona imediatamente o usuário para o link de convite do Discord:

*   **Link Curto Modi:** `dev.sakibites.space/Modi` -> Redireciona para o link de convite do Modi.
*   **Link Curto Musicat:** `dev.sakibites.space/Musicat` -> Redireciona para o link de convite do Musicat.

## 🔗 Links de Convite

*   **Modi:** `https://discord.com/oauth2/authorize?client_id=1424226592858701896&permissions=11264&integration_type=0&scope=bot`
*   **Musicat:** `https://discord.com/oauth2/authorize?client_id=1430266604922601592&permissions=2147494912&integration_type=0&scope=bot+applications.commands`

## 🎯 Objetivo

Criar uma solução leve, rápida e elegante para fornecer links curtos e memoráveis para convidar os bots.

## 📄 Licença

Todos os direitos reservados © 2025 Sakibites.
