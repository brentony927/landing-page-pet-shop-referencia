

# Performance + Vida Visual — Cores Vibrantes e Estímulos

## Problema
O site está lento (animações pesadas com RAF no carrossel, muitos re-renders) e visualmente "morto" — tudo cinza/neutro demais, falta cor e contraste nas seções.

## Mudanças

### 1. Performance — Site mais rápido
- **HeroCarousel**: Trocar o `requestAnimationFrame` loop (causa re-render contínuo ~60fps) por CSS animation puro no progress bar. Autoplay via `setInterval` simples
- **Brands marquee**: Usar CSS `animation` pura ao invés de JS
- **IntersectionObserver**: Criar hook reutilizável `useInView` para evitar repetição e garantir `disconnect` correto
- **Icon3D**: Adicionar `will-change: transform` para GPU acceleration nas animações

### 2. Cores VIVAS nas seções (sem gradiente)
Cada seção ganha identidade visual forte:

- **Hero**: Manter teal escuro, mas CTAs mais vibrantes (laranja saturado, hover com escala maior)
- **AboutUs** (`bg-petshop-cream`): Adicionar detalhes em **laranja** — borda lateral colorida, ícones de check em laranja ao invés de verde apagado
- **Services**: Cards com **fundo colorido sutil** por serviço (verde-claro, laranja-claro) ao invés de todos brancos iguais. Card hover com borda colorida
- **FoodProducts**: Tabs ativas com **laranja vibrante** ao invés de teal escuro. Cards com sombra colorida no hover
- **WhyUs**: Fundo com **bloco laranja** atrás dos números. Números em **laranja** ao invés de primary genérico
- **Testimonials**: Borda lateral **colorida** no card ativo (muda de cor por depoimento). Fundo levemente **creme**
- **Contact**: Fundo **verde-claro vibrante** ao invés de `secondary/5` quase invisível. Botão de envio **laranja**
- **Footer**: Adicionar faixa **laranja** fina no topo do footer como separador visual

### 3. Mais estímulos visuais e movimento
- **Botões CTA**: Adicionar `box-shadow` colorido (laranja glow) no hover
- **Cards**: Sombra colorida no hover (não cinza genérica)
- **Separadores entre seções**: Linhas finas coloridas (alternando verde/laranja)
- **Stats (WhyUs)**: Pulse sutil no ícone quando o número termina de contar
- **Service cards**: Ícone anima ao hover (`animate="float"` on hover)
- **Testimonials**: Transição mais rápida e suave

### 4. CSS — Novas variáveis e utilidades
- Adicionar sombras coloridas: `shadow-primary/20`, `shadow-secondary/20`
- Keyframe `glow` para botões hover
- Reduzir `transition-duration` global de 500ms para 300ms (tudo mais snappy)

## Arquivos modificados
| Arquivo | Mudança |
|---------|---------|
| `index.css` | Sombras coloridas, keyframe glow, transitions mais rápidas |
| `HeroCarousel.tsx` | RAF → CSS animation + setInterval, CTAs com glow |
| `AboutUs.tsx` | Mais cor nos detalhes, borda lateral |
| `Services.tsx` | Cards com bg colorido por serviço, hover animado |
| `FoodProducts.tsx` | Tabs laranja, sombras coloridas |
| `WhyUs.tsx` | Fundo colorido, números laranja, pulse no ícone |
| `Testimonials.tsx` | Borda colorida, fundo creme, transição rápida |
| `Contact.tsx` | Fundo verde vibrante, botão laranja |
| `Footer.tsx` | Faixa laranja no topo |
| `Icon3D.tsx` | `will-change: transform` para GPU |

