

# Humanizar o Site + Adicionar "Personalizado" no Formulário

## Diagnóstico: O que parece "IA"
1. **Textos formulaicos** — Todas as seções seguem o mesmo padrão: título curto → subtítulo → grid. Falta quebra de ritmo
2. **Tudo muito simétrico e previsível** — Cards iguais, espaçamentos idênticos, sem surpresas visuais
3. **Copys genéricas** — "A gente cuida do seu pet como se fosse nosso", "Só o melhor vai pra tigela" — são frases que qualquer gerador escreve
4. **Placeholders vazios demais** — Os ImagePlaceholder são cinza morto com "Sua imagem aqui" — parecem wireframe
5. **Badges repetitivos** — "Destaque" em vários cards, todos com bounce igual
6. **Estrutura robótica** — Cada componente tem a mesma entrada (fade-in + translate-y), mesma duração

## Mudanças

### 1. Formulário de Contato — Adicionar "Personalizado"
`Contact.tsx` — adicionar `<option>Personalizado</option>` na lista de serviços

### 2. Copys reescritas com personalidade REAL
Trocar frases genéricas por texto que um dono de pet shop de verdade falaria:

- **Hero slide 1**: "Seu pet merece o melhor" → "Aqui o banho vem com carinho — e o biscoito é por nossa conta"
- **Hero slide 2**: "Banho & tosa que seu pet vai amar" → "Tosa na tesoura, secagem com paciência. Nada de pressa."
- **Hero slide 3**: "Ração boa de verdade" → "A gente prova? Não. Mas o rabo abanando já diz tudo."
- **AboutUs título**: "A gente cuida do seu pet como se fosse nosso" → "12 anos no bairro. Seu vizinho já trouxe o pet dele."
- **AboutUs texto**: Reescrever para soar como conversa de balcão, não como pitch de startup
- **Services título**: "Serviços pra deixar seu pet feliz" → "O que a gente faz de melhor"
- **FoodProducts título**: "Só o melhor vai pra tigela" → "Ração que seu pet come até o fundo"
- **WhyUs título**: "A gente não é de se gabar, mas..." → "Números que contam nossa história"
- **Testimonials título**: "Quem trouxe o pet, voltou!" → "O que nossos clientes dizem"
- **Contact título**: "Bora marcar? A gente te espera!" → "Fala com a gente — a resposta é rápida"

### 3. Quebrar a simetria visual
- **AboutUs**: Mover o botão "Conhecer mais" para DENTRO da borda lateral laranja, criar um visual mais editorial
- **Services**: Primeiro card (Banho & Tosa) maior que os outros (min-w-[340px]), criando hierarquia visual
- **FoodProducts**: Primeiro produto de cada categoria tem card maior (col-span-2 no grid)
- **Testimonials**: Adicionar rating com estrelas acima do texto (5 estrelas preenchidas)
- **Hero**: Stats com layout mais informal — sem ícones 3D nos stats, só o número bold + label simples

### 4. ImagePlaceholders mais vivos
Trocar o visual morto de wireframe por placeholders coloridos e convidativos:
- Fundo com cor mais forte (`/15` ao invés de `/8`)
- Ícone maior e com cor sólida
- Texto "Sua foto aqui" ao invés de "Sua imagem aqui" (mais informal)
- Borda sólida fina colorida ao invés de nenhuma

### 5. Micro-detalhes humanos
- **Service cards**: Adicionar um "Mais pedido" apenas no Banho & Tosa (badge estático, sem bounce)
- **Product cards**: Trocar badge "Destaque" por "Queridinho" (mais humano) — sem animação bounce (parece IA)
- **Remover `animate-bounce-small`** de todos os badges — badges estáticos parecem mais profissional
- **Stats do hero**: Remover ícones 3D, deixar só número + label — mais limpo e profissional
- **Floating decorations**: Reduzir quantidade de ícones flutuando (hero tem 4, testimonials tem 3 — muito). Deixar no máximo 1-2 por seção

### 6. Reduzir elementos decorativos excessivos
- **Hero**: Remover 2 dos 4 paw decorations (manter só 1 sutil)
- **Testimonials**: Remover estrelas flutuando no fundo (parecem clip art)
- **Contact**: O paw-pattern no fundo é sutil, manter
- **AboutUs**: Remover o Icon3D de PawPrint flutuando no canto da imagem

## Arquivos modificados
| Arquivo | Mudança |
|---------|---------|
| `Contact.tsx` | Adicionar "Personalizado", copy nova |
| `HeroCarousel.tsx` | Copys novas, stats simplificados, menos decorações |
| `AboutUs.tsx` | Copy humana, menos ícones decorativos |
| `Services.tsx` | Copy nova, badge "Mais pedido" estático no primeiro card |
| `FoodProducts.tsx` | Copy nova, badge "Queridinho", sem bounce |
| `WhyUs.tsx` | Copy nova |
| `Testimonials.tsx` | Copy nova, estrelas de rating, sem decorações flutuando |
| `ImagePlaceholder.tsx` | Visual mais colorido e convidativo |

