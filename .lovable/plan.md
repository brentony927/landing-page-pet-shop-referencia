

# Upgrade: Placeholders, Transparência, Elementos 3D e Paleta Verde/Laranja

## 1. Fotos reais → Placeholder "A SUA IMAGEM AQUI"
Onde existem URLs do Unsplash (HeroCarousel, AboutUs, Services, FoodProducts), substituir por divs estilizadas com texto "A SUA IMAGEM AQUI" em fundo claro com borda tracejada.

**Arquivos**: `HeroCarousel.tsx`, `AboutUs.tsx`, `Services.tsx`, `FoodProducts.tsx`

## 2. Header semi-transparente
Adicionar `bg-petshop-teal/90 backdrop-blur-md` no header para efeito de vidro fosco.

**Arquivo**: `Header.tsx`

## 3. Emojis → Elementos 3D animados (CSS)
Substituir todos os emojis por elementos visuais 3D feitos com CSS: esferas coloridas com sombras, ícones Lucide dentro de formas com `perspective`, `rotateX/Y` e animações de flutuação. Sem Three.js — apenas CSS transforms 3D com sombras e profundidade.

Exemplos:
- 🐾 → esfera verde com ícone PawPrint flutuante
- ❤️ → esfera laranja com ícone Heart pulsante
- 🛁 → cubo arredondado com ícone Droplets
- Patinhas decorativas → formas 3D com rotate e float

**Arquivos afetados**: `HeroCarousel.tsx`, `AboutUs.tsx`, `WhyUs.tsx`, `Testimonials.tsx`, `Footer.tsx`, `Contact.tsx`, `WhatsAppButton.tsx`, `FoodProducts.tsx`, `Brands.tsx`

## 4. Paleta mais clara, foco verde/laranja
- Background principal: mais claro (`#FAFDF8` — verde-claro quase branco)
- Reduzir uso de roxo/coral, focar em verde (`#2EC4B6` → `#22A66E` mais verde) e laranja (`#FF6B2C`)
- Teal do header/footer mantido mas levemente mais verde
- Seções alternando entre branco, verde-claro-claro e branco
- Accent amarelo mantido para badges
- SEM gradientes

**Arquivos**: `index.css` (variáveis CSS), `tailwind.config.ts`

## 5. Novo componente utilitário: `Icon3D`
Componente reutilizável que renderiza um ícone Lucide dentro de uma esfera/forma com CSS 3D (perspective, box-shadow inset, animação float).

**Novo arquivo**: `src/components/petshop/Icon3D.tsx`

## Resumo de arquivos
| Arquivo | Mudança |
|---------|---------|
| `index.css` | Variáveis de cor mais claras e verdes |
| `tailwind.config.ts` | Tokens atualizados |
| `Icon3D.tsx` | Novo componente 3D CSS |
| `Header.tsx` | Transparência + backdrop-blur |
| `HeroCarousel.tsx` | Placeholder imagem + Icon3D |
| `AboutUs.tsx` | Placeholder imagem + Icon3D |
| `Services.tsx` | Remover imagem bg + Icon3D |
| `FoodProducts.tsx` | Placeholder banner + Icon3D nas abas |
| `Testimonials.tsx` | Icon3D nos avatares |
| `WhyUs.tsx` | Icon3D nos stats |
| `Brands.tsx` | Icon3D nos logos |
| `Footer.tsx` | Icon3D no instagram grid |
| `Contact.tsx` | Icon3D no mapa e form |
| `WhatsAppButton.tsx` | Icon3D no botão |

