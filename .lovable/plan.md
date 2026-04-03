

# Efeitos de Scroll — Animações ao rolar a página

## O que será feito
Adicionar animações de scroll suaves em todas as seções do site. Cada seção aparece com um efeito diferente ao entrar na tela — fade up, slide lateral, scale — criando ritmo visual e vida ao rolar.

## Detalhes técnicos

### 1. Atualizar `useInView.ts` para suportar direção
Adicionar parâmetro opcional de direção (`up`, `left`, `right`, `scale`) para variar os efeitos entre seções.

### 2. Criar classes CSS de scroll em `index.css`
- `scroll-fade-up`: translateY(30px) → 0, opacity 0→1
- `scroll-slide-left`: translateX(-40px) → 0
- `scroll-slide-right`: translateX(40px) → 0
- `scroll-scale`: scale(0.95) → 1
- Todas com `transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1)` (ease-out suave)

### 3. Aplicar efeitos variados por seção
| Seção | Efeito | Delay |
|-------|--------|-------|
| AboutUs | fade-up | 0ms |
| Services | slide-right (cards staggered 100ms cada) | stagger |
| FoodProducts | fade-up | 0ms |
| WhyUs | scale (números com stagger) | stagger |
| Testimonials | slide-left | 0ms |
| Contact | fade-up | 0ms |
| Brands | já tem marquee | — |

### 4. Stagger nos cards (Services, WhyUs, FoodProducts)
Cada card recebe `transition-delay` incrementando 100ms (0ms, 100ms, 200ms...) para aparecerem em sequência.

### 5. Header parallax sutil
Barra do topo com `backdrop-blur` que fica mais opaca conforme scroll (usando CSS `scroll()` ou evento leve).

## Arquivos modificados
| Arquivo | Mudança |
|---------|---------|
| `index.css` | Novas classes de scroll animation |
| `AboutUs.tsx` | Efeito fade-up |
| `Services.tsx` | Cards com stagger slide-right |
| `FoodProducts.tsx` | Fade-up + cards stagger |
| `WhyUs.tsx` | Scale-in + números stagger |
| `Testimonials.tsx` | Slide-left |
| `Contact.tsx` | Fade-up |

