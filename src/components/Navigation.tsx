import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3 lg:py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">Р</span>
            </div>
            <h1 className="font-montserrat font-bold text-lg lg:text-xl text-primary">
              Реснички
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <a
              href="#services"
              className="text-foreground hover:text-primary transition-colors text-sm lg:text-base"
            >
              Услуги
            </a>
            <a
              href="#masters"
              className="text-foreground hover:text-primary transition-colors text-sm lg:text-base"
            >
              Мастера
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-colors text-sm lg:text-base"
            >
              Контакты
            </a>
          </div>

          <div className="flex items-center space-x-2 lg:space-x-3">
            <Button
              size="sm"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-sm px-3 lg:px-4"
              onClick={() => window.open('https://bumpix.net/marinatsaryova', '_blank')}
            >
              Записаться онлайн
            </Button>
            <Button 
              variant="outline"
              size="sm"
              className="md:hidden"
              onClick={() => window.open('https://t.me/Resnichki37_bot', '_blank')}
            >
              <Icon name="MessageCircle" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;