

# Correção de Identidade Visual — Comando Supremo V2

Documento analisado com precisão. São 7 correções cirúrgicas para eliminar azul onde não deve existir e padronizar a paleta.

---

## Resumo das Mudanças

Problema central: azul (#1565C0, #1E88E5, #0D47A1, #1a3a5c) está espalhado como cor principal em locais que deveriam usar laranja ou navy. Gradientes desnecessários em vários componentes.

---

## 1. index.css — Adicionar variáveis que faltam no :root

Adicionar após as variáveis existentes:
- `--pet-navy: #0D1B2A` (títulos de seção)
- `--pet-action: #F5851F` (cor de ação única)
- `--pet-action-dark: #E06B0A` (hover CTAs)
- `--pet-action-glow: rgba(245,133,31,0.30)` (sombra CTAs)
- `--pet-green-cta: #22A66E` (apenas hero slides)
- `--pet-topbar: #0D47A1` (apenas top bar)

## 2. Services.tsx — 3 correções

- **Botão CTA final** (linha 64): `#1565C0` → `var(--pet-action)`, sombra → `var(--pet-action-glow)`
- **Card Banho & Tosa** (linha 20): remover `linear-gradient(135deg, #F5851F, #E06B0A)` → `var(--pet-action)` sólido com sombra melhorada
- **Títulos h2** (linhas 14, 51): `#1a3a5c` → `var(--pet-navy)`

## 3. Header.tsx — 4 correções

- **Nome da marca** (linha 49): `color: "#0D47A1"` → `var(--pet-gray)`
- **Botão WhatsApp outline desktop** (linhas 62-65): `#1E88E5` → `var(--pet-action)` em border, color e hover
- **Ícones sidebar mobile** (linhas 142-149): `rgba(30,136,229,...)` → `rgba(245,133,31,...)` no wrapper, ícone `#1E88E5` → `var(--pet-action)`
- **Botão WhatsApp sidebar** (linhas 166-170): `rgba(30,136,229,0.9)` → `#25d366` (verde WhatsApp real)
- **Texto "Menu" sidebar** (linha 111): `#0D47A1` → `var(--pet-gray)`

## 4. CtaBanner.tsx — Trocar gradiente azul por navy sólido

- Linha 11: `linear-gradient(135deg, #0D47A1, #1565C0, #1E88E5)` → `var(--pet-navy)` sólido
- Botão AGENDAR já está correto — não mexer

## 5. PromoSection.tsx — Trocar gradiente por sólido

- Linha 11: `linear-gradient(135deg, #FFB300, #F5851F)` → `var(--pet-action)` sólido com sombra `0 20px 60px rgba(245,133,31,0.22)`

## 6. Testimonials.tsx — Cor do título

- Linha 22: `#1a3a5c` → `var(--pet-navy)` no h2
- Linha 36: `#1a3a5c` → `var(--pet-navy)` nos nomes dos depoimentos

---

## Arquivos Modificados

| Arquivo | Alterações |
|---------|-----------|
| `src/index.css` | +6 variáveis CSS |
| `src/components/petshop/Services.tsx` | 4 substituições de cor |
| `src/components/petshop/Header.tsx` | 6 substituições de cor |
| `src/components/petshop/CtaBanner.tsx` | 1 substituição (gradiente → sólido) |
| `src/components/petshop/PromoSection.tsx` | 1 substituição (gradiente → sólido) |
| `src/components/petshop/Testimonials.tsx` | 2 substituições de cor |

