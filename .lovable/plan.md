

# Substituir Imagens Enviadas por Imagens Reais (Unsplash)

## O que muda

Remover as imagens `banho-tosa.png` e `racao-pet.png` de `src/assets/` e substituir por URLs de imagens reais do Unsplash que combinam com o tema do pet shop.

## Imagens escolhidas (Unsplash, gratuitas)

| Uso | Imagem | URL |
|-----|--------|-----|
| Slide 2 (Banho & Tosa) + AboutUs + Services bg | Cachorro tomando banho / grooming | `https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800` |
| Slide 3 (Rações) + FoodProducts banner | Golden retriever feliz | `https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800` |
| Slide 1 (Hero principal) | Cachorro fofo sorrindo | `https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800` |

## Arquivos modificados

### 1. Deletar assets
- Remover `src/assets/banho-tosa.png` e `src/assets/racao-pet.png`

### 2. `HeroCarousel.tsx`
- Remover imports de assets locais
- Usar URLs do Unsplash diretamente nos slides
- Cada slide com imagem real relevante

### 3. `AboutUs.tsx`
- Remover import do asset
- Usar URL Unsplash de cachorro fofo/grooming

### 4. `Services.tsx`
- Remover import do asset
- Usar URL Unsplash como imagem decorativa de fundo

### 5. `FoodProducts.tsx`
- Remover import do asset
- Usar URL Unsplash do golden retriever no banner

Todas as imagens terão `object-cover` e tamanhos adequados para carregamento rápido (parâmetro `?w=800` na URL).

