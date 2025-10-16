import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export const SocialLinks = () => {
  const socialLinks: SocialLink[] = [
    {
      name: "Instagram",
      url: "#",
      icon: <Instagram className="w-5 h-5" />,
    },
    {
      name: "Facebook",
      url: "#",
      icon: <Facebook className="w-5 h-5" />,
    },
    {
      name: "Youtube",
      url: "#",
      icon: <Youtube className="w-5 h-5" />,
    },
    {
      name: "Twitter",
      url: "#",
      icon: <Twitter className="w-5 h-5" />,
    },
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Siga Nossas Redes Sociais</h2>
          <p className="text-muted-foreground">Fique por dentro das melhores ofertas e novidades</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
          {socialLinks.map((social) => (
            <Button
              key={social.name}
              variant="social"
              size="lg"
              onClick={() => window.open(social.url, '_blank')}
              className="min-w-[150px]"
            >
              {social.icon}
              {social.name}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};