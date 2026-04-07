

# Landing Page de Alta Conversão — Foco em WhatsApp

## Resumo

Transformar a página atual em uma landing page focada 100% em conversão para WhatsApp. Remover seções que distraem, reordenar componentes, melhorar copy e adicionar CTAs a cada 1-2 seções.

---

## 1. Reordenar e Limpar — `Index.tsx`

**Remover:** PetTips, Brands, FoodProducts, FeaturedProducts, Categories, AnimatedStrip
**Nova ordem:**
```
Header → HeroCarousel → WhyUs → Services → PromoSection (novo) → Gallery (3 fotos) → Testimonials → CtaBanner → FAQ (3 perguntas) → Contact → Footer → WhatsAppButton
```

---

## 2. Hero — `HeroCarousel.tsx`

- Reduzir para 1 slide fixo (sem carousel) para foco total
- Headline: **"Banho e tosa com qualidade profissional por preço justo"**
- Sub: **"Deixe seu pet limpo, cheiroso e bem cuidado em menos de 1 hora"**
- CTA primário: botão amarelo `#FFC107` com ícone WhatsApp (MessageCircle) — "Agendar agora no WhatsApp"
- Link pre-filled: `?text=Oi, quero agendar um banho pro meu pet`
- Trust badges embaixo: "500+ pets atendidos" · "Nota 5.0 no Google" · "12 anos no bairro"
- Manter imagem do pet à direita

---

## 3. WhyUs — `WhyUs.tsx`

- Manter como está (números animados). Sem mudanças significativas.

---

## 4. Services — `Services.tsx`

- Reescrever copy para foco em benefícios:
  - Banho & Tosa: "Seu pet sai cheiroso em menos de 1 hora" — a partir de R$35
  - Tosa Higiênica: "Áreas sensíveis limpas com cuidado" — a partir de R$20
  - Entrega de ração: "Chega na sua porta no mesmo dia"
- Todos os botões amarelos (#FFC107) com link WhatsApp pre-filled
- Adicionar CTA ao final: "Agende pelo WhatsApp agora"

---

## 5. Novo Componente — `PromoSection.tsx`

- Fundo amarelo (#FFC107)
- Título: **"Promoção da semana: Banho + Tosa com desconto"**
- Urgência: **"Vagas limitadas hoje"**
- Botão laranja grande com ícone WhatsApp
- Seção simples, compacta, alto impacto

---

## 6. Gallery — `Gallery.tsx`

- Reduzir de 6 para 3 fotos (Antes, Depois, Nossa loja)
- Adicionar CTA abaixo: "Quer ver seu pet assim? Agende agora"

---

## 7. Testimonials — `Testimonials.tsx`

- Manter 3 depoimentos, reescrever para ser mais emocional:
  - Maria: "Meu Bob chega puxando a coleira de tanta vontade de entrar. Nunca vi ele tão feliz em outro lugar."
  - João: "O Mingau é difícil, mas aqui eles têm paciência. Voltou ronronando. Não troco por nada."
  - Renata: "Testei 3 pet shops antes. Aqui a Luna volta feliz e cheirosa. Virei cliente fiel."
- Todas com 5 estrelas
- CTA após seção: "Quer o mesmo resultado? Agende agora"

---

## 8. CtaBanner — `CtaBanner.tsx`

- Manter estrutura, trocar botões para amarelo (#FFC107)
- Copy: "Agende hoje e ganhe 10% off no próximo serviço"

---

## 9. FAQ — `FAQ.tsx`

- Reduzir de 6 para 3 perguntas:
  1. "Preciso agendar com antecedência?" 
  2. "Aceitam Pix e cartão?"
  3. "Vocês entregam ração?"

---

## 10. WhatsAppButton — `WhatsAppButton.tsx`

- Aumentar tamanho: w-16 h-16
- Link com mensagem pre-filled
- Bubble aparece após 15s (não 30s)
- Texto: "Agende agora pelo WhatsApp!"

---

## 11. Estilos Globais

- Botões CTA: background `#FFC107`, hover `#FFB300`, texto escuro (#333)
- Mais border-radius (rounded-3xl nos cards)
- Soft shadows nos cards: `0 8px 32px rgba(0,0,0,0.06)`
- Mais espaçamento entre seções

---

## Arquivos Modificados

| Arquivo | Ação |
|---------|------|
| `Index.tsx` | Remover 5 imports, reordenar, adicionar PromoSection |
| `HeroCarousel.tsx` | Reescrever para hero fixo focado em conversão |
| `Services.tsx` | Reescrever copy, botões amarelos |
| `PromoSection.tsx` | **Criar novo** — banner de promoção amarelo |
| `Gallery.tsx` | Reduzir para 3 fotos + CTA |
| `Testimonials.tsx` | Reescrever depoimentos, todas 5 estrelas, CTA |
| `FAQ.tsx` | Reduzir para 3 perguntas |
| `WhatsAppButton.tsx` | Maior, mais visível, bubble mais rápida |
| `CtaBanner.tsx` | Botões amarelos |

