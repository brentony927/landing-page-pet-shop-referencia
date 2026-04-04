

# Redesign: Menos Verde/Laranja, Mais Limpo — Inspirado em Petlove/Petz

## Observações dos Sites de Referência

Petlove e Petz têm algo em comum: **fundo branco dominante**, navbar clara/branca, e cores usadas apenas em CTAs e badges. O site atual do Patinhas & Cia tem verde escuro pesado no header, hero, WhyUs e Contact — 4 seções com fundo escuro. Isso sufoca.

## Mudanças Principais

### 1. Header — De verde escuro para branco
- Navbar com fundo **branco** (como Petlove/Petz), texto escuro
- Logo com a patinha verde + nome em texto escuro
- Links da nav em cinza escuro, hover com underline verde
- Botão "WhatsApp" = outline verde, "Agendar" = botão verde sólido (não laranja)
- Barra de topo: verde vivo `#16a34a` (mantém, é pequena e dá identidade)

### 2. Hero — Fundo branco com acento
- Trocar `bg-petshop-teal` (verde escuro) por **fundo branco** com um shape decorativo verde claro sutil
- Textos em preto/cinza escuro, highlight em verde
- Botão CTA primário = verde (não laranja), secundário = outline
- Stats bar fica como está (já é fundo branco)

### 3. Seções — Alternância limpa
- **Services**: `bg-muted/50` → `bg-[#f8f9f5]` (quase branco) — OK como está
- **FoodProducts**: `bg-background` (branco) — OK
- **AboutUs**: `bg-background` (branco) — OK
- **WhyUs**: `bg-petshop-teal` → fundo **branco** com números em verde. Seção simples, sem fundo escuro
- **Testimonials**: `bg-[#f0fdf4]` (verde suave) — OK, é leve
- **Contact**: `bg-petshop-teal` → fundo `#f8f9f5` (neutro claro), cards com borda simples, texto escuro
- **Footer**: `bg-[#0f3d20]` → **mantém verde escuro** (footer escuro é padrão real)

### 4. Uso Estratégico das Cores
- **Verde** (`#16a34a`): apenas em CTAs principais, ícones de check, badges, barra de topo
- **Laranja** (`#f97316`): apenas em preços e badges "Queridinho" / "Mais pedido" — não em botões
- **Amarelo**: apenas na quote do AboutUs
- **Fundo**: 90% branco e quase-branco

### 5. Botões — Verde como CTA principal
- Todos os botões CTA: `bg-secondary` (verde) em vez de `bg-primary` (laranja)
- Laranja sai dos botões completamente — fica só em preços e badges de destaque

## Arquivos modificados
| Arquivo | Mudança |
|---------|---------|
| `Header.tsx` | Navbar branca, texto escuro, botões verdes |
| `HeroCarousel.tsx` | Fundo branco, textos escuros, CTA verde |
| `WhyUs.tsx` | Fundo branco, números verdes, ícones verdes |
| `Contact.tsx` | Fundo claro, cards com borda cinza, texto escuro |
| `Services.tsx` | Botão verde (se houver) |
| `FoodProducts.tsx` | Botão "Ver tudo" verde, preços em laranja (mantém) |
| `AboutUs.tsx` | Botão verde |
| `Testimonials.tsx` | Sem mudança significativa |
| `index.css` | Ajustar petshop-teal se necessário |

