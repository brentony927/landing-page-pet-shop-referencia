

# Faixa Vermelha + Menos Arredondado + Tirar Aspecto de IA

## 1. Faixa do topo em VERMELHO
A barra com horário e telefone no Header passa de `bg-petshop-teal` para um vermelho vivo (`bg-red-600`). Texto branco.

**Arquivo**: `Header.tsx` — linha 19, trocar classe de bg

## 2. Reduzir arredondamento geral (menos "bolha")
O site usa `rounded-2xl` e `rounded-full` em excesso — visual de template.

- `--radius` de `0.75rem` → `0.5rem` (index.css)
- Cards: `rounded-2xl` → `rounded-lg` em todos os componentes
- Botões CTA: `rounded-full` → `rounded-lg` (mais profissional, menos infantil)
- Icon3D: `rounded-2xl` → `rounded-xl`
- ImagePlaceholder: `rounded-2xl` → `rounded-lg`
- Inputs e selects: `rounded-xl` → `rounded-lg`
- Carousel indicators e dots: manter `rounded-full` (são pequenos)
- Nav arrows: `rounded-full` → `rounded-lg`

## 3. Tirar aspecto de IA — ajustes finos
- **Remover "UPPERCASE" excessivo**: títulos de seção em capitalização normal (só CTAs ficam uppercase)
- **Remover "tracking-wider" dos títulos**: tracking excessivo = AI template
- **Variar espaçamento entre seções**: nem tudo `py-20`. Alternar entre `py-14`, `py-20`, `py-16`
- **Subtítulos genéricos**: remover labels "O que a gente faz", "Quem somos", "Depoimentos" — ir direto ao título
- **WhyUs**: remover o emoji 😉 que ficou (linha 60)
- **Stats do hero**: texto menos padronizado
- **Testimonials**: aspas menos "template" — remover o ícone Quote gigante decorativo
- **Contact**: frase do form mais natural
- **Footer**: copyright "2024" → "2025"

## Arquivos modificados
| Arquivo | Mudança |
|---------|---------|
| `index.css` | `--radius: 0.5rem` |
| `Header.tsx` | Faixa topo vermelha |
| `Icon3D.tsx` | `rounded-2xl` → `rounded-xl` |
| `ImagePlaceholder.tsx` | `rounded-2xl` → `rounded-lg` |
| `HeroCarousel.tsx` | Menos rounded, títulos sem uppercase forçado, arrows `rounded-lg` |
| `AboutUs.tsx` | Sem label genérico, rounded menor, título normal case |
| `Services.tsx` | Rounded menor, sem label, py variado |
| `FoodProducts.tsx` | Rounded menor, sem label, botões `rounded-lg` |
| `Testimonials.tsx` | Rounded menor, sem Quote decorativo, sem label |
| `WhyUs.tsx` | Sem emoji, título normal case |
| `Brands.tsx` | py diferente |
| `Contact.tsx` | Rounded menor, botão `rounded-lg`, frase natural |
| `Footer.tsx` | Copyright 2025, rounded menor |

