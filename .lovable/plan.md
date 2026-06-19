## O que vou fazer

### 1. Ícones "feitos à mão" no lugar dos genéricos
O componente `Icon3D.tsx` existe mas **não é usado em lugar nenhum** (código morto). Vou:
- Substituí-lo por um novo componente `HandDrawnIcon.tsx` com SVGs desenhados à mão (traço irregular, preenchimento imperfeito, estilo rabisco/marker).
- Catálogo inicial de ícones hand-drawn: pata, banho/chuveiro, tesoura, osso, caminhão, casinha, estrela, coração, balão de mensagem, ração — todos como SVG inline com `stroke-linecap="round"`, paths levemente trêmulos e cor herdada via `currentColor`.
- Aplicar nos pontos onde os ícones têm peso visual e parecem "stock de IA":
  - **WhyUs**: trocar `Bath`, `Home`, `Star` pelos hand-drawn equivalentes.
  - **Services**: trocar `Bath`, `Scissors`, `Bone`, `Truck` (mantém ícones pequenos de UI como `ArrowRight`, `MessageCircle` que não parecem genéricos).
  - **BeforeAfter**: trocar `Camera` e `ImagePlus` por um ícone "câmera desenhada" único.
- Deletar `Icon3D.tsx` (órfão).

Ícones pequenos de interface (setas, X, menu, telefone) **continuam Lucide** — trocar tudo deixaria o site inconsistente.

### 2. Correção de erros e bugs

**Bug em `Header.tsx`:**
- Link "Serviços" aponta para `/#servicos` ✅ e "Produtos" para `/#produtos` — mas **não existe seção com id="produtos"** em nenhum lugar. Vou adicionar `id="produtos"` no `ProductsShowcase` (ou `FoodProducts`) para o link funcionar.
- Menu tem dois itens com ícone `Scissors` (Serviços e Preços) e dois com `ShoppingBag` (Produtos e Catálogo) — visual confuso no mobile. Vou diferenciar (`Tag` para Preços, `BookOpen` para Catálogo).

**Console warnings React Router v7:** adicionar `future={{ v7_startTransition: true, v7_relativeSplatPath: true }}` no `BrowserRouter` em `App.tsx` para silenciar os 2 avisos.

**Acessibilidade rápida:**
- Botões só de ícone sem `aria-label` (botão fechar sidebar, dots do BeforeAfter já tem, social do Footer não tem) — adicionar.
- `<a>` de redes sociais no Footer apontando todos para WhatsApp — adicionar `aria-label` por rede.

**SEO/links órfãos:** verificar `/privacidade` e `/termos` (Footer aponta para eles) — confirmar rotas em `App.tsx` e ajustar se faltarem.

### 3. Melhorias de experiência mobile

**Seções pesadas (foco principal):**
- **HeroCarousel**: reduzir altura no mobile, swipe nativo mais responsivo (touch-action), indicadores maiores (tap target 44px).
- **Brands** (carrossel infinito): garantir que a animação pause no `prefers-reduced-motion` e suavizar velocidade no mobile.
- **BeforeAfter**: aumentar área tocável dos thumbnails (Thor/Luna/Bob) — hoje são 32px de altura, levar pra 40px+; trocar os dots redundantes pelo título do pet só.
- **ProductsShowcase / FoodProducts**: confirmar scroll horizontal com `snap-x snap-mandatory` e `scrollbar-hide`, padding lateral consistente, e cards com `min-height` igual pra não ficar pulando.
- **Testimonials**: cards já são scroll-x — adicionar dots indicadores embaixo para sinalizar que há mais.

**Polimento geral mobile:**
- Padding lateral consistente (16px) entre todas as seções — hoje algumas usam 20px, outras 16px.
- `MobileBottomBar` fica em cima do `WhatsAppButton` flutuante quando ambos aparecem — reposicionar o WhatsAppButton mais alto ou esconder no mobile quando o bottom bar aparece.
- Espaçamento entre seções menor no mobile (`py-10` ao invés de `py-12`).
- Aumentar `font-size` de textos secundários que ficaram pequenos demais (`text-[10px]`, `text-[11px]`) para mínimo `text-xs` (12px) em legendas críticas.

### 4. Validação
- Build automático do harness.
- Playwright mobile (390x844): testar scroll, clique nos links do header, swipe no BeforeAfter e Brands, capturar screenshots de antes/depois.

## Arquivos afetados
- Novo: `src/components/petshop/HandDrawnIcon.tsx`
- Deletar: `src/components/petshop/Icon3D.tsx`
- Editar: `WhyUs.tsx`, `Services.tsx`, `BeforeAfter.tsx`, `Header.tsx`, `Footer.tsx`, `App.tsx`, `ProductsShowcase.tsx` (ou `FoodProducts.tsx` para `id="produtos"`), `HeroCarousel.tsx`, `Brands.tsx`, `Testimonials.tsx`, `MobileBottomBar.tsx`, `WhatsAppButton.tsx`, `index.css` (padding consistente se necessário).

## Fora do escopo
- Não vou trocar ícones de UI (setas, X, telefone, menu) por hand-drawn — ficaria inconsistente.
- Não vou mexer em conteúdo de texto nem em cores da paleta.
- Não vou adicionar backend nem novas páginas.