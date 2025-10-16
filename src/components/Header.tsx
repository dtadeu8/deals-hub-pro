import { ShoppingBag } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-6 h-6 text-primary" />
          <span className="text-xl font-bold">Infinity Deals</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#produtos" className="transition-colors hover:text-primary">
            Produtos
          </a>
          <a href="#sobre" className="transition-colors hover:text-primary">
            Sobre
          </a>
          <a href="#contato" className="transition-colors hover:text-primary">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};