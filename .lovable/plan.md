

# Remover Aspecto de IA — Humanização Final

## O que ainda parece IA

1. **Estrutura repetitiva**: toda seção é "título centralizado → subtítulo → grid de cards iguais". IA adora esse padrão.
2. **Elementos fake decorativos**: ícone de busca e carrinho no header que não funcionam, newsletter no footer sem backend, "Rua dos Pets Felizes, 123" como endereço — gritam template.
3. **ImagePlaceholder idêntico** em todo lugar — wireframe cinza com câmera. Sempre o mesmo.
4. **Icon3D usado em excesso** — 30+ vezes no site, sempre o mesmo cubo 3D rotacionado. Fica robótico.
5. **Espaçamento uniforme** — py-16, py-20 em todas as seções. Falta ritmo.
6. **2 CTA strips idênticas** (laranja e verde) entre seções — padrão de gerador.
7. **Instagram grid com ícones Lucide** no footer — ninguém faz isso.
8. **Testimonials genéricos** — nomes perfeitos, textos do mesmo tamanho, tudo igual.

## Mudanças

### 1. Header — Remover ícones fake
Tirar Search e ShoppingBag (não funcionam, parecem template). Manter só nav + botão AGENDAR + WhatsApp link.

**Arquivo**: `Header.tsx`

### 2. Hero — Layout mais editorial
- Remover ImagePlaceholder do lado direito (placeholder cinza no hero = IA)
- Usar o espaço para texto maior e mais impactante, layout full-width
- Stats ficam numa faixa separada abaixo com fundo diferente (accent/20)

**Arquivo**: `HeroCarousel.tsx`

### 3. AboutUs — Assimétrico de verdade
- Remover ImagePlaceholder (placeholder no "sobre nós" = wireframe)
- Layout full-text com uma borda lateral grossa colorida tipo editorial/revista
- Adicionar aspas grandes estilizadas do depoimento do dono

**Arquivo**: `AboutUs.tsx`

### 4. Services — Variar tamanhos dos cards
- Primeiro card (Banho & Tosa) ocupa 2 colunas no desktop, com layout horizontal
- Outros cards menores e verticais
- Remove uniformidade

**Arquivo**: `Services.tsx`

### 5. FoodProducts — Remover ImagePlaceholder do topo
- Tirar o placeholder de imagem ao lado do título (wireframe)
- Manter apenas título + tabs + grid de produtos
- Primeiro produto "popular" com card destacado (fundo colorido, maior)

**Arquivo**: `FoodProducts.tsx`

### 6. Remover CTA strips duplicadas
- Remover a CTA strip de "Entrega grátis" do `Index.tsx` (repetitiva com o banner de promo no FoodProducts)
- Manter apenas a CTA strip dentro de Services

**Arquivo**: `Index.tsx`

### 7. Footer — Tirar Instagram fake e Newsletter
- Remover grid de ícones do "Instagram" (ninguém mostra ícones Lucide como posts)
- Remover newsletter (sem backend, não funciona = template)
- Footer mais limpo: logo + info + links + contato. Simples.

**Arquivo**: `Footer.tsx`

### 8. Contact — Endereço menos fake
- Trocar "Rua dos Pets Felizes, 123" por algo neutro como "Nosso endereço completo no WhatsApp" ou deixar em branco com "Consulte localização"
- Remover o placeholder de mapa — colocar apenas texto "📍 Nos chame no WhatsApp para localização"

**Arquivo**: `Contact.tsx`

### 9. Testimonials — Quebrar uniformidade
- Variar tamanho dos textos dos depoimentos (uns curtos, uns longos)
- Um depoimento mais longo que os outros = mais real

**Arquivo**: `Testimonials.tsx`

### 10. Variar espaçamento entre seções
- AboutUs: py-12, Services: py-20, FoodProducts: py-14, WhyUs: py-10, Testimonials: py-16
- Sem padrão repetitivo

**Arquivos**: vários componentes

## Arquivos modificados
| Arquivo | Mudança |
|---------|---------|
| `Header.tsx` | Remover ícones Search/ShoppingBag fake |
| `HeroCarousel.tsx` | Remover placeholder, layout full-width, stats em faixa |
| `AboutUs.tsx` | Remover placeholder, layout editorial texto puro |
| `Services.tsx` | Primeiro card 2 colunas, layout variado |
| `FoodProducts.tsx` | Remover placeholder do topo, card destaque |
| `Index.tsx` | Remover CTA strip duplicada |
| `Footer.tsx` | Remover instagram icons e newsletter |
| `Contact.tsx` | Endereço genérico, remover mapa placeholder |
| `Testimonials.tsx` | Textos com tamanhos variados |

