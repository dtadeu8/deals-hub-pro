import { Button } from "@/components/ui/button";
import { Instagram, Facebook } from "lucide-react";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export const SocialLinks = () => {
  const socialLinks: SocialLink[] = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/zapshop041/",
      icon: <Instagram className="w-5 h-5" />,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/17cfPpZhwh/",
      icon: <Facebook className="w-5 h-5" />,
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@zapshop041",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
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