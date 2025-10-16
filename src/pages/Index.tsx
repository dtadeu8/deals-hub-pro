import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { SocialLinks } from "@/components/SocialLinks";
import { Sparkles } from "lucide-react";

const Index = () => {
  // Produtos de exemplo - você pode substituir com seus produtos reais
  const products = [
    {
      id: 1,
      title: "Produto em Destaque 1",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
      price: "R$ 89,90",
      originalPrice: "R$ 149,90",
      link: "#",
    },
    {
      id: 2,
      title: "Produto em Destaque 2",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
      price: "R$ 129,90",
      originalPrice: "R$ 199,90",
      link: "#",
    },
    {
      id: 3,
      title: "Produto em Destaque 3",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
      price: "R$ 79,90",
      originalPrice: "R$ 139,90",
      link: "#",
    },
    {
      id: 4,
      title: "Produto em Destaque 4",
      image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&h=500&fit=crop",
      price: "R$ 99,90",
      originalPrice: "R$ 159,90",
      link: "#",
    },
    {
      id: 5,
      title: "Produto em Destaque 5",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&h=500&fit=crop",
      price: "R$ 149,90",
      originalPrice: "R$ 229,90",
      link: "#",
    },
    {
      id: 6,
      title: "Produto em Destaque 6",
      image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&h=500&fit=crop",
      price: "R$ 119,90",
      originalPrice: "R$ 189,90",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Sparkles className="w-12 h-12" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            As Melhores Ofertas
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Produtos selecionados com os melhores preços e descontos exclusivos para você
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Produtos em Destaque</h2>
            <p className="text-muted-foreground text-lg">
              Ofertas imperdíveis com até 50% de desconto
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                originalPrice={product.originalPrice}
                link={product.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <SocialLinks />

      {/* Footer */}
      <footer className="py-8 border-t bg-secondary/20">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Infinity Deals. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">
            Participamos de programas de afiliados. Podemos receber comissão pelas compras realizadas.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;