

# Verde Vivo no Topo + Remover Spin + Número Real + Logos Oficiais + Cores Vivas

## 1. Verde mais vivo no topo (Header)
O `--petshop-teal` atual é `155 45% 18%` — muito escuro e morto. Trocar para um verde mais vibrante e saturado: `155 55% 28%` (mais claro e vivo). O `--petshop-teal-light` também sobe: `155 45% 34%`.

**Arquivo**: `index.css` — linhas 44-45

## 2. Remover animação de spin nos ícones dos serviços
O wrapper `animate-spin-icon` que gira 360° no hover será removido dos cards de serviço.

**Arquivo**: `Services.tsx` — remover div com classe `animate-spin-icon` (linha 60-62)

## 3. Número de contato: 69992216764
Trocar `(11) 99999-1234` e `wa.me/5511999991234` pelo número real em todos os arquivos:
- Display: `(69) 99221-6764`
- WhatsApp link: `https://wa.me/5569992216764`

**Arquivos**: `Header.tsx`, `WhatsAppButton.tsx`, `Contact.tsx`, `Footer.tsx`

## 4. Logos oficiais das marcas (Brands.tsx)
Substituir os ícones Lucide por `<img>` com as logos oficiais das marcas via URLs públicas de logos (logos hospedados em CDNs públicas como logo.clearbit.com ou logos diretos):

| Marca | Logo URL |
|-------|----------|
| PremieRpet | `https://logo.clearbit.com/premierpet.com.br` |
| Royal Canin | `https://logo.clearbit.com/royalcanin.com` |
| GranPlus | `https://logo.clearbit.com/granplus.com.br` |
| Golden | `https://logo.clearbit.com/goldenpet.com.br` |
| Pedigree | `https://logo.clearbit.com/pedigree.com` |
| Whiskas | `https://logo.clearbit.com/whiskas.com` |
| Farmina | `https://logo.clearbit.com/farmina.com` |
| Guabi | `https://logo.clearbit.com/guabi.com.br` |

Cada logo em `<img>` com `h-10 object-contain grayscale hover:grayscale-0 transition-all` para efeito de "ativar cor" no hover.

## 5. Dar mais vida às cores no site (sem mudar a paleta, só saturar)
O site está "morto" porque os tons aplicados são muito diluídos (`/10`, `/12`, `/5`). Aumentar a presença das cores:

- **Services cards**: `bg-secondary/10` → `bg-secondary/15`, hover border mais forte
- **AboutUs**: adicionar borda lateral laranja mais grossa (`border-l-4 border-primary`)
- **FoodProducts**: tabs e botões com laranja mais saturado no estado ativo
- **Testimonials**: borda lateral do card ativo mais grossa e colorida
- **Contact**: fundo verde mais presente (`bg-secondary/18` ao invés de `/12`)
- **CTA strips**: laranja mais vibrante com texto maior
- **Hero stats**: números em accent com `text-shadow` sutil para "brilhar"
- **Footer**: faixa laranja do topo mais grossa (h-1.5 ao invés de h-1)

## Arquivos modificados
| Arquivo | Mudança |
|---------|---------|
| `index.css` | `--petshop-teal` e `--petshop-teal-light` mais vivos |
| `Header.tsx` | Número real |
| `WhatsAppButton.tsx` | Link WhatsApp real |
| `Contact.tsx` | Número real, fundo mais saturado |
| `Footer.tsx` | Número real, faixa laranja maior |
| `Services.tsx` | Remover spin icon, cards mais coloridos |
| `Brands.tsx` | Logos oficiais via img + grayscale hover |
| `HeroCarousel.tsx` | Stats com text-shadow |
| `AboutUs.tsx` | Borda lateral mais forte |
| `Testimonials.tsx` | Borda card mais visível |
| `FoodProducts.tsx` | Tabs mais saturadas |

