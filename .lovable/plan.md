

# Corrigir Animações + Remover Aspecto de IA

## Problema 1: Animações ficando na tela

Os ícones animados no Header e Categories usam `position: fixed` e são adicionados a um array que **nunca limpa**. Eles ficam flutuando para sempre na tela.

**Correção:** Trocar para animações que desaparecem após 800ms usando `setTimeout` para remover do array. Os ícones devem aparecer, pular e sumir — não ficar fixos na tela.

## Problema 2: Aspecto de IA — O que ainda grita "template"

### Copy genérica (frases que qualquer IA escreve)
- "Serviços que o seu pet merece" → trocar por algo direto
- "Pets felizes. Donos mais felizes ainda." → clichê
- "Cuidar bem começa com informação" → frase de coaching
- "Produtos que estão saindo rápido" → forçado
- "Números que contam nossa história" → template puro
- "A resposta é rápida." → vago
- "Dúvidas? A gente responde." → todo site de IA tem isso

### Estrutura repetitiva
Toda seção segue exatamente: `<p verde uppercase>Label</p>` → `<h2 Fraunces bold>Título</h2>` → `<p cinza>Subtítulo</p>` → grid de cards idênticos. São 8 seções seguindo esse padrão exato.

### Visual repetitivo
- Todos os cards têm o mesmo hover: `translateY(-4px)` + `border-color verde` + `shadow verde`
- Todos os ícones estão dentro de `div rounded-lg bg-verde-bg` (quadradinho verde claro)
- Badges amarelos aparecem em Services, FeaturedProducts, PetTips — sempre iguais
- "Consulte" como preço em tudo

## Plano de Correção

### 1. Animações (Header.tsx + Categories.tsx)
- Trocar `animalBounceStay` por animação que termina com `opacity: 0`
- Adicionar `setTimeout` de 800ms que remove o ícone do array
- Limitar a 3 ícones simultâneos máximo

### 2. Copy — Reescrever títulos e subtítulos
| Seção | Antes (IA) | Depois (humano) |
|-------|-----------|-----------------|
| Services | "Serviços que o seu pet merece" | "Banho, tosa e ração" |
| Services sub | "Atendimento personalizado. Sem pressa, sem franquia." | remover |
| Testimonials | "Pets felizes. Donos mais felizes ainda." | "Quem já veio, voltou" |
| FeaturedProducts | "Produtos que estão saindo rápido" | "Destaques da semana" |
| PetTips | "Cuidar bem começa com informação" | "Dicas rápidas" |
| WhyUs | "Números que contam nossa história" | "Em números" |
| Contact | "A resposta é rápida." | "Fale com a gente" |
| FAQ | "Dúvidas? A gente responde." | "Perguntas frequentes" |

### 3. Quebrar o padrão visual das seções
- **Remover o label verde uppercase** de metade das seções (deixar só em 3-4, não em todas)
- **Remover subtítulo** de seções que não precisam (Services, FeaturedProducts, PetTips)
- **Variar o hover dos cards**: nem todos precisam de translateY + borda verde. Alguns podem ter só mudança de background, outros só underline no título
- **Remover badges amarelos** de PetTips (tags como "Cuidados", "Dica" são filler)
- **Variar backgrounds dos ícones**: nem todos verde-bg. Usar cinza neutro em algumas seções

### 4. Simplificar seções infladas
- **WhyUs**: remover ícones em quadradinhos, deixar só números grandes + label. Sem "div bg-secondary/10 rounded-lg p-5" em volta dos ícones
- **FeaturedProducts**: remover link "Consultar preço →" genérico, trocar por "Pergunte no WhatsApp"
- **PetTips**: remover completamente os tags/badges, simplificar os cards
- **Footer**: atualizar ano de 2024 para 2025

### 5. Limpar CSS (index.css)
- Remover keyframe `animalBounceStay` e substituir por animação que some
- Adicionar nova keyframe `animalBounce` com fade-out no final

## Arquivos alterados

| Arquivo | Mudança |
|---------|---------|
| `Header.tsx` | Animação some após 800ms |
| `Categories.tsx` | Animação some após 800ms |
| `Services.tsx` | Copy direta, remover label/sub, hover variado |
| `Testimonials.tsx` | Título direto |
| `FeaturedProducts.tsx` | Título direto, remover sub, simplificar |
| `PetTips.tsx` | Remover tags, título direto, hover diferente |
| `WhyUs.tsx` | Simplificar, remover ícone-em-caixa |
| `Contact.tsx` | Título direto |
| `FAQ.tsx` | Título direto |
| `AboutUs.tsx` | Sem label uppercase |
| `Footer.tsx` | Ano 2025 |
| `index.css` | Trocar keyframe animalBounceStay por animalBounce com fade-out |

