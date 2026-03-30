

# Tirar o Aspecto de IA — Site Mais Vivo e Claro

## Problema atual
O site tem cara de "template gerado por IA": todas as seções seguem o mesmo padrão (subtítulo + título + grid), textos genéricos, espaçamento uniforme demais, placeholders com borda tracejada fria, e tudo muito "certinho". Falta personalidade.

## Mudanças

### 1. Copys com personalidade (menos robô, mais humano)
Reescrever textos para soar como um pet shop real brasileiro — informal, carinhoso, com expressões naturais. Exemplos:
- "Cuidado completo pro seu melhor amigo" → "Seu pet merece o melhor, e a gente entrega!"
- "Números que falam por si" → "A gente não é de se gabar, mas..."
- "O que dizem sobre nós" → "Quem trouxe o pet, voltou!"
- Descrições dos serviços mais curtas e diretas

### 2. Fundo mais claro e limpo
- Background principal de `130 30% 98%` → `0 0% 100%` (branco puro)
- Seção cream de `130 30% 95%` → `45 100% 97%` (amarelo-claro bem sutil)
- Muted mais leve para cards e separadores
- Remover bordas desnecessárias dos cards — usar sombra suave

### 3. Quebrar a repetição visual
- **AboutUs**: Layout assimétrico — texto maior, imagem menor e deslocada
- **Services**: Cards com tamanhos variados (1 card featured maior)
- **Testimonials**: Fundo branco com aspas coloridas grandes ao invés de bg amarelo inteiro
- **Brands**: Marquee/scroll horizontal infinito ao invés de grid estático
- **WhyUs**: Layout horizontal (3 colunas lado a lado) com separadores visuais

### 4. ImagePlaceholder menos "template"
- Remover borda tracejada fria
- Fundo colorido sólido (verde-claro ou laranja-claro)
- Ícone maior e mais vibrante
- Texto menor e mais discreto

### 5. Mais cor e contraste
- Cards de produto com borda lateral colorida ao invés de borda cinza uniforme
- Badges mais vibrantes
- Botões com cores mais saturadas
- Seção de contato com fundo levemente verde ao invés de cinza

### 6. Micro-detalhes que tiram o aspecto de template
- Adicionar um "banner" ou faixa colorida entre seções (tipo uma barra laranja fina)
- Números de WhatsApp e telefone com formatação real
- Adicionar horário de funcionamento no header
- Footer menos simétrico

## Arquivos modificados
| Arquivo | Mudança |
|---------|---------|
| `index.css` | Fundo mais claro, muted mais suave |
| `ImagePlaceholder.tsx` | Visual mais quente, sem borda tracejada |
| `HeroCarousel.tsx` | Copys reescritas, layout ajustado |
| `AboutUs.tsx` | Copy humana, layout assimétrico |
| `Services.tsx` | Card featured, textos diretos |
| `FoodProducts.tsx` | Cards sem borda, mais cor |
| `Testimonials.tsx` | Fundo branco, aspas grandes coloridas |
| `WhyUs.tsx` | Layout horizontal, copy divertida |
| `Brands.tsx` | Scroll horizontal animado |
| `Contact.tsx` | Fundo levemente verde, copy informal |
| `Footer.tsx` | Mais personalidade no texto |

