# Sakibites Bot Portfolio - Build Estático

Este é o build pronto para produção do portfólio dos bots Discord Modi e Musicat.

## Conteúdo

- `index.html` - Arquivo HTML principal (contém toda a aplicação)
- `assets/` - Diretório com CSS e JavaScript compilados
  - `index-ZeTkMOr7.css` - Estilos CSS minificados
  - `index-Bs1hw_pw.js` - JavaScript minificado
- `bots_data.json` - Dados dos bots (Modi e Musicat)

## Como Hospedar

### Opção 1: GitHub Pages

1. Crie um repositório no GitHub chamado `sakibites-portfolio`
2. Clone o repositório e copie todos os arquivos deste build para a raiz
3. Faça commit e push:
   ```bash
   git add .
   git commit -m "Deploy build"
   git push origin main
   ```
4. Vá para Settings → Pages e selecione "main branch" como source

### Opção 2: Netlify

1. Acesse https://netlify.com
2. Clique em "New site from Git"
3. Conecte seu repositório GitHub
4. Configure: Build command (deixe em branco), Publish directory: `.`
5. Deploy!

### Opção 3: Vercel

1. Acesse https://vercel.com
2. Clique em "New Project"
3. Importe seu repositório GitHub
4. Configure: Framework: Other, Build Command (deixe em branco)
5. Deploy!

### Opção 4: Servidor Web Tradicional

Copie todos os arquivos para o diretório raiz do seu servidor e configure o servidor para servir `index.html` como fallback.

#### Nginx

```nginx
server {
    listen 80;
    server_name sakibites.space;
    root /var/www/sakibites-portfolio;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

#### Apache

```apache
<Directory /var/www/sakibites-portfolio>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</Directory>
```

## Rotas Disponíveis

- `/` - Página inicial com lista de bots
- `/p/Modi` - Portfólio do bot Modi
- `/p/Musicat` - Portfólio do bot Musicat

## Configuração de Domínio Customizado

### GitHub Pages

1. Crie um arquivo `CNAME` na raiz com o conteúdo:
   ```
   sakibites.space
   ```
2. Configure o DNS do seu domínio para apontar para GitHub Pages
3. Vá para Settings → Pages e configure o domínio customizado

## Customizações

### Alterar Dados dos Bots

Edite o arquivo `bots_data.json` com as informações dos seus bots.

## Estrutura de Arquivos

```
.
├── index.html              # Arquivo principal
├── bots_data.json         # Dados dos bots
├── assets/
│   ├── index-Bs1hw_pw.js  # JavaScript compilado
│   └── index-ZeTkMOr7.css # CSS compilado
└── README.md              # Este arquivo
```

## Performance

- Build minificado e otimizado
- CSS e JS compilados
- Gzip compression recomendado
- Cache busting via hash de arquivo

## Segurança

- Sem tokens ou dados sensíveis
- Todos os dados são públicos
- HTTPS recomendado em produção

---

Desenvolvido com ❤️ para a comunidade Sakibites
