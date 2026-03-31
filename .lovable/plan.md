

# Corrigir Logos das Marcas + Clarear Cores do Site

## 1. Logos das Marcas — Não carregam
As URLs `logo.clearbit.com` estão falhando (retornando broken images). Solução: trocar para URLs de logos reais que funcionam, usando SVGs públicos de CDNs confiáveis ou logos hospedados diretamente. Como fallback, usar o nome da marca estilizado como texto bold colorido dentro de um card com fundo, criando um visual de "logo" sem depender de URLs externas que quebram.

**Abordagem**: Usar logos via `https://cdn.worldvectorlogo.com/logos/` ou similar para as marcas mais conhecidas (Royal Canin, Pedigree, Whiskas, Farmina). Para as que não tiverem logo público confiável, mostrar o nome estilizado com tipografia bold + cor da marca.

**Arquivo**: `Brands.tsx`

## 2. Cores mais claras e vivas — site "pesado"
O site está visualmente pesado por:
- `--petshop-teal: 155 55% 28%` — muito escuro no header/footer
- `WhyUs` com fundo teal escuro
- Muitas seções com fundos saturados/escuros demais

**Mudanças em `index.css`**:
- `--petshop-teal` → `155 60% 35%` (mais claro e vivo)
- `--petshop-teal-light` → `155 50% 42%`
- `--petshop-cream` → `45 100% 98%` (levemente mais branco)

**Mudanças nos componentes**:
- `Header.tsx`: bg do header com transparência maior (`bg-petshop-teal/85`)
- `WhyUs.tsx`: fundo teal mais claro ou trocar para branco com detalhes coloridos (menos peso)
- `Footer.tsx`: verde um tom mais claro
- Seções com `bg-secondary/18`, `bg-primary/8` etc.: reduzir opacidades para ficar mais leve

## Arquivos modificados
| Arquivo | Mudança |
|---------|---------|
| `Brands.tsx` | Trocar logos para URLs que funcionam ou fallback texto estilizado |
| `index.css` | Teal mais claro e vivo, cream mais leve |
| `Header.tsx` | Transparência maior |
| `WhyUs.tsx` | Fundo mais leve |
| `Footer.tsx` | Verde mais claro |
| `Contact.tsx` | Fundo verde menos pesado |
| `AboutUs.tsx` | Fundo laranja mais sutil |

