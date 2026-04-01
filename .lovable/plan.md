

# Responsividade Mobile + Performance + Melhorias Visuais

## Problemas identificados nas fotos

**Foto 1 (Contact):** Seção de contato funcional mas com espaçamento grande demais, formulário com borda laranja no topo fina, falta contraste visual.

**Foto 2 (WhyUs):** Números/stats com ícones no fundo verde — funcional mas os ícones ficam pequenos em mobile, espaçamento pode melhorar.

## Mudanças

### 1. Performance — Reduzir re-renders e carregamento
- **HeroCarousel**: Usar CSS `will-change: opacity, transform` no slide ativo, reduzir `setTimeout` de transição de 300ms para 200ms
- **useInView**: Adicionar `{ once: true }` para parar de observar após visível (evita recalcular)
- **Marquee (Brands)**: Adicionar `will-change: transform` na animação
- **FoodProducts tab transition**: Reduzir de 200ms para 150ms
- Remover keyframes não usados: `heroImage`, `float`, `countUp`, `patternFloat`

### 2. Responsividade Mobile
- **Header**: Menu mobile com links maiores (py-3), botão AGENDAR + WHATSAPP ambos visíveis
- **HeroCarousel**: `min-h-[400px]` no mobile (era 520px — muito alto), texto `text-2xl` no mobile, CTAs em coluna (`flex-col`) no mobile, arrows menores
- **Services**: Grid `grid-cols-1` no mobile, card featured sem `col-span-2` no mobile (já responsivo via `lg:col-span-2`)
- **FoodProducts**: Tabs com scroll horizontal no mobile (`overflow-x-auto flex-nowrap`), grid `grid-cols-2` no mobile (era 1)
- **WhyUs**: Stats empilham em coluna no mobile com separador horizontal em vez de vertical, ícones maiores
- **Contact**: Grid já é `grid-cols-1` no mobile — OK. Melhorar padding do form (`p-6` no mobile vs `p-8`)
- **Testimonials**: Cards com `min-h` menor no mobile

### 3. Melhorias visuais (fotos enviadas)
- **WhyUs**: Ícones com fundo mais visível e maior (`p-5`), números com `text-5xl md:text-6xl`, separadores mais visíveis, fundo verde um pouco mais saturado
- **Contact**: Form border-top mais grossa (`border-t-[6px]`), botão "Enviar" com mais destaque (py-6, text maior), info de horário e WhatsApp com cards individuais com fundo e borda left colorida (estilo editorial, não genérico)
- **Contact**: Localização card com fundo verde sutil e borda esquerda verde

## Arquivos modificados
| Arquivo | Mudança |
|---------|---------|
| `HeroCarousel.tsx` | Mobile: altura menor, texto menor, CTAs em coluna, arrows menores |
| `Header.tsx` | Menu mobile: links maiores, WhatsApp + Agendar |
| `Services.tsx` | Sem mudança grande (já responsivo) |
| `FoodProducts.tsx` | Tabs scroll horizontal mobile, grid 2 cols mobile |
| `WhyUs.tsx` | Ícones maiores, números maiores, layout mobile empilhado |
| `Contact.tsx` | Form padding mobile, border-top mais grossa, cards info com borda lateral |
| `Testimonials.tsx` | Altura menor mobile |
| `useInView.ts` | `once: true` para parar observação |
| `index.css` | Remover keyframes não usados, `will-change` no marquee |

