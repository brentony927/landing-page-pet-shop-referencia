

# Redesign Pet Shop — Estilo da Referência

O objetivo é reformular a landing page para seguir o estilo visual da imagem de referência: hero escuro (verde-escuro/teal), tipografia bold uppercase, destaque em amarelo/laranja, seções com fundos alternados (escuro/claro/amarelo), cards com imagens de produtos, e layout mais sofisticado.

## Mudanças na Paleta e Tema

- **Hero/Header**: fundo escuro teal `#1A3C34` (como na referência)
- **Accent principal**: amarelo quente `#FFB800` para CTAs e badges
- **Laranja**: `#FF6B2C` mantido para destaques secundários
- **Seções alternadas**: fundo escuro, branco, amarelo claro `#FFF8E1`
- Atualizar variáveis CSS no `index.css`

## Componentes a Alterar

### 1. Header (`Header.tsx`)
- Fundo escuro teal, texto branco
- Links claros com hover amarelo
- Botão CTA "SHOP NOW" em preto sólido
- Adicionar ícones de busca e carrinho (decorativos)

### 2. Hero (`HeroCarousel.tsx`)
- Fundo escuro teal (não colorido vibrante)
- Tipografia grande, bold, uppercase — "ESTAMOS SEMPRE AQUI PARA A SAÚDE DO SEU PET"
- Botões "COMPRAR AGORA" (preto) + "Agendar ligação" (outline)
- Stats no hero: "200K+ Nutrição Completa", "R$4 Menor Preço", "97% Satisfação"
- Emojis de patinhas decorativos mantidos
- Slides com transição mais suave

### 3. Sobre Nós (nova seção `AboutUs.tsx`)
- Layout 2 colunas: imagem/emoji à esquerda, texto à direita
- Fundo amarelo claro
- Lista com checks coloridos: "Mais de 10 anos de experiência", "20 veterinários", "Produtos de alta qualidade"
- Botão "Saiba mais" em laranja arredondado

### 4. Serviços (`Services.tsx`)
- Redesenho como cards horizontais com preço e duração
- Ex: "Visita Pet Cão — R$ 99 — 1hr"
- Navegação com setas laterais
- Fundo branco

### 5. Rações / Top Categories (`FoodProducts.tsx`)
- Abas por tipo de animal: Coelho, Gato, **Cão**, Pássaro, Peixe
- Cards de produto com fundo laranja/coral, nome, preço, avaliação (estrelas)
- Carrossel horizontal com setas

### 6. Depoimentos (`Testimonials.tsx`)
- Fundo amarelo quente
- Card grande com aspas, foto, nome e descrição
- Setas de navegação laterais laranja/coral

### 7. Marcas Parceiras (nova seção `Brands.tsx`)
- Faixa com logos de marcas fictícias em fundo branco
- Layout horizontal scrollável

### 8. Footer (`Footer.tsx`)
- Fundo escuro teal (igual header)
- Logo, menu, contato, newsletter
- Seção Instagram com grid de fotos (emojis/placeholders)

## Arquivos Modificados
- `src/index.css` — novas variáveis de cor (teal escuro, amarelo claro)
- `tailwind.config.ts` — novos tokens de cor
- `src/components/petshop/Header.tsx` — redesign escuro
- `src/components/petshop/HeroCarousel.tsx` — hero escuro, uppercase, stats
- `src/components/petshop/Services.tsx` — cards horizontais com preço
- `src/components/petshop/FoodProducts.tsx` — abas por animal, cards com avaliação
- `src/components/petshop/WhyUs.tsx` — integrado no hero ou removido (stats vão pro hero)
- `src/components/petshop/Testimonials.tsx` — fundo amarelo, layout maior
- `src/components/petshop/Contact.tsx` — mantido com ajustes de cor
- `src/components/petshop/Footer.tsx` — fundo escuro teal, grid instagram
- **Novo**: `src/components/petshop/AboutUs.tsx` — seção sobre nós
- **Novo**: `src/components/petshop/Brands.tsx` — marcas parceiras
- `src/pages/Index.tsx` — adicionar novas seções na ordem correta

## Ordem das Seções
1. Header (escuro)
2. Hero com carrossel + stats (escuro)
3. Sobre Nós (amarelo claro)
4. Top Categories / Rações (branco)
5. Serviços (branco)
6. Depoimentos (amarelo)
7. Marcas Parceiras (branco)
8. Contato (branco)
9. Footer (escuro)

