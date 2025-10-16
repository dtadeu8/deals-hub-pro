import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ProductCardProps {
  title: string;
  image: string;
  price: string;
  link: string;
  originalPrice?: string;
}

export const ProductCard = ({ title, image, price, link, originalPrice }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:scale-[1.02] cursor-pointer">
      <div className="aspect-square overflow-hidden bg-secondary">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 min-h-[3.5rem]">{title}</h3>
        <div className="flex items-center gap-2">
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">{originalPrice}</span>
          )}
          <span className="text-2xl font-bold text-primary">{price}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          variant="cta" 
          className="w-full" 
          onClick={() => window.open(link, '_blank')}
        >
          Ver Oferta
          <ExternalLink className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};