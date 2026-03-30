

# Upgrade Profissional — Imagens + Animações + Carrossel

## O que muda

### 1. Adicionar as imagens no site
- **image-2.png** (Banho & Tosa, roxo/laranja com cachorro) → Usada no slide 2 do carrossel (Banho & Tosa) como imagem de fundo/destaque
- **image-3.png** (Ração, teal/amarelo com golden) → Usada na seção de Rações (`FoodProducts.tsx`) como banner visual ao lado do título, ou no slide 3 do carrossel (Rações)

Copiar ambas para `src/assets/` e importar nos componentes.

### 2. Melhorar o Carrossel (`HeroCarousel.tsx`)
- Substituir emojis por imagens reais nos slides (image-2 para banho, image-3 para rações)
- Adicionar transição com fade/slide animado entre slides (CSS transitions com opacity + transform)
- Layout split: texto à esquerda, imagem à direita no desktop
- Adicionar progress bar animada nos indicadores (barra que preenche durante os 5s de autoplay)
- Melhorar tipografia: texto com text-shadow sutil para profundidade
- Adicionar efeito parallax leve nos elementos decorativos

### 3. Animações mais profissionais
- **Staggered fade-in**: cards e seções aparecem com delay escalonado ao entrar na viewport
- **Slide-in lateral**: seção AboutUs com imagem entrando da esquerda e texto da direita
- **Scale-up suave** nos cards de produto ao hover (já existe, refinar)
- **Floating animation**: elementos decorativos (patinhas) com animação flutuante contínua ao invés de estáticos
- **Smooth number count**: melhorar animação dos números na seção stats
- Adicionar novas keyframes no `index.css`: `float`, `slideInLeft`, `slideInRight`, `progressBar`

### 4. Toques profissionais
- Adicionar sombras mais elaboradas nos cards (shadow com cor)
- Botões com micro-interação: slight translateY no hover
- Indicadores do carrossel com barra de progresso ao invés de bolinhas simples
- Seção de serviços: adicionar uma imagem decorativa (image-2) como background sutil

## Arquivos modificados
- `src/assets/banho-tosa.png` — copiar image-2.png
- `src/assets/racao-pet.png` — copiar image-3.png
- `src/components/petshop/HeroCarousel.tsx` — layout split com imagens, fade transitions, progress indicators
- `src/components/petshop/FoodProducts.tsx` — adicionar image-3 como visual na seção
- `src/components/petshop/Services.tsx` — animações staggered melhoradas
- `src/components/petshop/AboutUs.tsx` — slide-in animations
- `src/components/petshop/Testimonials.tsx` — transição fade entre depoimentos
- `src/index.css` — novas keyframes (float, slideIn, progressBar)
- `tailwind.config.ts` — registrar novas animações

