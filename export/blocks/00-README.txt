============================================
ZAP SHOP - BLOCOS HTML PARA GOOGLE SITES
============================================

📦 CONTEÚDO DOS ARQUIVOS:
- 01-header.html     → Cabeçalho fixo com navegação
- 02-hero.html       → Banner principal animado
- 03-categories.html → Categorias/Nichos com cores
- 04-products.html   → Grid de produtos
- 05-footer.html     → Rodapé completo com redes sociais

============================================
🎨 PALETA DE CORES DO ZAP SHOP:
============================================

Principal:
- Vermelho: #DC2626 (Destaque, botões, promoções)
- Azul: #2563EB (Links, categorias)
- Gradiente: linear-gradient(135deg, #DC2626, #2563EB)

Neutros:
- Texto escuro: #1F2937
- Texto médio: #6B7280
- Cinza claro: #F9FAFB
- Branco: #FFFFFF

Cores por Categoria:
- Eletrônicos: #2563EB (Azul)
- Moda: #DB2777 (Rosa)
- Casa: #059669 (Verde)
- Esportes: #DC2626 (Vermelho)
- Beleza: #9333EA (Roxo)
- Livros: #EA580C (Laranja)

============================================
📝 COMO USAR NO GOOGLE SITES:
============================================

MÉTODO 1 - INCORPORAR (Recomendado):
1. Abra seu Google Sites
2. Clique em "Inserir" → "Incorporar"
3. Cole o código HTML do bloco desejado
4. Clique em "Incorporar"
5. Ajuste o tamanho conforme necessário

MÉTODO 2 - CÓDIGO HTML PERSONALIZADO:
1. No Google Sites, clique em "Inserir"
2. Selecione "Incorporar" → "Incorporar código"
3. Cole o HTML completo do bloco
4. Salve e visualize

ORDEM RECOMENDADA:
1. Header (sempre no topo)
2. Hero (banner principal)
3. Categories (nichos/categorias)
4. Products (produtos - pode repetir)
5. Footer (sempre no final)

============================================
✏️ COMO ADICIONAR PRODUTOS:
============================================

No arquivo 04-products.html:

1. COPIE o bloco entre:
   <!-- PRODUTO 1 --> até <!-- FIM PRODUTO 1 -->

2. EDITE as seguintes informações:
   - Badge de desconto (ex: -40% OFF)
   - URL da imagem do produto
   - Nome/título do produto
   - Categoria
   - Descrição
   - Preço original
   - Preço com desconto
   - Parcelamento
   - Link de compra/afiliado

3. COLE o novo bloco dentro da div:
   <div class="zap-products-grid">
   
   <!-- Cole aqui os novos produtos -->
   
   </div>

============================================
✏️ COMO ADICIONAR CATEGORIAS:
============================================

No arquivo 03-categories.html:

1. COPIE um bloco .zap-category-card

2. EDITE:
   - Emoji/ícone
   - Título da categoria
   - Descrição
   - Contagem de produtos
   - Classe de cor (ex: category-games)

3. ADICIONE CSS para a nova cor:
   .category-suacategoria {
       --category-color: #COR-PRINCIPAL;
       --category-bg: #COR-CLARA;
   }

4. COLE dentro de .zap-categories-grid

============================================
🔗 PERSONALIZAÇÃO DE LINKS:
============================================

REDES SOCIAIS (05-footer.html):
- Instagram: Linha ~124
- Facebook: Linha ~129
- TikTok: Linha ~134

NAVEGAÇÃO (01-header.html):
- Ajuste os links #inicio, #produtos, etc
- Adicione mais itens de menu se necessário

PRODUTOS (04-products.html):
- Substitua "SEU_LINK_AQUI" pelo link de afiliado
- Mantenha o onclick="window.open(..., '_blank')"

============================================
📱 DESIGN RESPONSIVO:
============================================

Todos os blocos são 100% responsivos:
✓ Desktop (1920px+)
✓ Laptop (1024px - 1920px)
✓ Tablet (768px - 1024px)
✓ Mobile (< 768px)

Teste em diferentes dispositivos após adicionar!

============================================
🎯 DICAS DE OTIMIZAÇÃO:
============================================

1. IMAGENS:
   - Use imagens de boa qualidade (mínimo 800x800px)
   - Otimize o tamanho (máximo 200KB por imagem)
   - Prefira formato WebP ou JPEG otimizado
   - Use Unsplash, Pexels ou suas próprias fotos

2. PERFORMANCE:
   - Não adicione mais de 20 produtos por página
   - Comprima imagens antes de usar
   - Teste a velocidade no Google PageSpeed Insights

3. SEO:
   - Preencha os atributos "alt" das imagens
   - Use títulos descritivos
   - Adicione meta descriptions

4. CONVERSÃO:
   - Destaque os descontos
   - Use verbos de ação (Comprar, Ver Oferta, Aproveitar)
   - Adicione senso de urgência quando possível

============================================
❓ PROBLEMAS COMUNS:
============================================

P: O CSS não está funcionando
R: Certifique-se de incluir as tags <style> junto com o HTML

P: As imagens não aparecem
R: Verifique se as URLs das imagens estão corretas e acessíveis

P: O layout quebrou no mobile
R: Teste o código isoladamente primeiro, pode haver conflito com CSS do Google Sites

P: Os links não funcionam
R: Verifique se você substituiu "SEU_LINK_AQUI" pelos links reais

============================================
📞 SUPORTE:
============================================

Para dúvidas ou customizações adicionais:
- Instagram: @zapshop041
- Facebook: /zapshop041
- TikTok: @zapshop041

============================================
🚀 BOA SORTE COM SEU SITE!
============================================

Criado com ❤️ para ZAP SHOP
Versão: 1.0
Data: Janeiro 2025
