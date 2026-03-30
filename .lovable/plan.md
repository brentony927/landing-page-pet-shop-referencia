

# Dar Vida ao Site — Referências de Pet Shops Famosos

## Diagnóstico
O site tem estrutura boa mas falta MOVIMENTO, CONTRASTE e ESTÍMULOS VISUAIS. Sites de pet shop famosos (Petz, Cobasi, PetLove) usam: banners coloridos chamativos, CTAs enormes e pulsantes, hover effects agressivos, seções com fundos bem contrastados, badges animados, contadores visíveis, e muito uso de cor quente.

## Mudanças

### 1. Hero Carousel — Mais impacto
- Texto do título com palavra-chave em cor diferente (ex: "Seu pet merece o **melhor**" com "melhor" em amarelo/accent)
- CTAs maiores com animação de pulse sutil constante no botão principal
- Imagem do hero com animação de entrada mais dramática (scale + rotate)
- Stats no hero com ícones animados (float) e números em accent (amarelo)
- Fundo com partículas decorativas animadas (patinhas flutuando com CSS)

### 2. Seções com fundos CONTRASTADOS (alternância forte)
- AboutUs: fundo laranja claro (`bg-primary/8`) com texto escuro — quebra o branco morto
- Services: manter branco mas adicionar uma faixa de CTA colorida no final ("Agende agora" em bg laranja)
- FoodProducts: adicionar banner de promoção animado no topo da seção (fundo accent com texto "Frete grátis acima de R$150")
- WhyUs: fundo teal escuro (como o header) com texto claro — quebra completamente o padrão
- Testimonials: manter cream mas adicionar estrelas animadas flutuando
- Contact: fundo com padrão sutil de patinhas (CSS background-image com SVG)

### 3. Micro-interações e movimento constante
- **Cards (todos)**: hover com `scale(1.05)` + sombra colorida + borda colorida aparecendo. Transição 200ms
- **Botões CTA**: pulse keyframe sutil no botão principal do hero (chama atenção)
- **Badges "Destaque"/"Novo"**: animação de bounce leve infinito
- **Service cards**: ícone gira 360° no hover
- **Product cards**: botão "+" cresce e muda de cor no hover
- **Scroll indicator**: seta animada no hero apontando pra baixo
- **Brands marquee**: velocidade mais rápida (15s ao invés de 20s)
- **Números WhyUs**: efeito de glow pulsante depois de contar

### 4. Elementos decorativos vivos
- Patinhas flutuando no fundo de seções (CSS pseudo-elements com animação)
- Separadores coloridos entre seções (linhas com animação de largura ao entrar na viewport)
- Ícone de patinha girando no canto de seções
- Badge flutuante "PROMOÇÃO" no canto de cards populares (com bounce)

### 5. WhyUs com fundo escuro (alto contraste)
- Fundo teal escuro como header/footer
- Números em amarelo (accent) brilhante
- Ícones com glow
- Labels em branco
- Cria uma "quebra" visual forte no meio da página

### 6. CTA Strips entre seções
- Faixa laranja entre AboutUs e Services: "Agende o banho do seu pet agora → WhatsApp"
- Faixa verde entre Products e WhyUs: "Entrega grátis acima de R$150"
- Animação de slide-in ao entrar na viewport

### 7. CSS — Novos keyframes e utilidades
- `@keyframes bounceSmall` — bounce sutil para badges
- `@keyframes ctaPulse` — pulse no CTA principal
- `@keyframes patternFloat` — patinhas de fundo
- `@keyframes glowPulse` — glow nos números
- `@keyframes scrollDown` — seta no hero
- Background pattern de patinhas via CSS (repeating SVG data URI)

## Arquivos modificados
| Arquivo | Mudança |
|---------|---------|
| `index.css` | Novos keyframes, background patterns, utilidades de animação |
| `HeroCarousel.tsx` | Título com destaque colorido, CTA com pulse, scroll arrow, partículas |
| `AboutUs.tsx` | Fundo laranja claro, mais contraste |
| `Services.tsx` | CTA strip no final, hover com spin no ícone |
| `FoodProducts.tsx` | Banner de promoção animado, badges com bounce |
| `WhyUs.tsx` | Fundo teal escuro, números amarelos com glow |
| `Testimonials.tsx` | Estrelas decorativas flutuando |
| `Contact.tsx` | Background pattern de patinhas |
| `Brands.tsx` | Marquee mais rápido |
| `Footer.tsx` | Sem mudanças grandes |
| `Index.tsx` | Adicionar CTA strips entre seções |

