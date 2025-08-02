import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-accent/20 to-secondary/30">
      <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/files/1921171c-d97f-4193-a6e8-651fc00ae84b.JPG')] bg-cover bg-center opacity-30 blur-sm"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-primary mb-4 lg:mb-6">
          Студия красоты
          <br />
          <span className="text-accent">Реснички</span>
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 lg:mb-8 max-w-2xl mx-auto">
          Более 2000 довольных клиентов за 9+ лет работы.
          <br className="hidden sm:block" />
          Профессиональное наращивание ресниц и уход за бровями.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
            onClick={() =>
              window.open("https://bumpix.net/marinatsaryova", "_blank")
            }
          >
            <Icon name="Calendar" className="mr-2" />
            Записаться онлайн
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto"
            onClick={() => window.open('https://t.me/resnichki_37', '_blank')}
          >
            <Icon name="MessageCircle" className="mr-2" />
            Чат с администратором
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground w-full sm:w-auto"
            onClick={() => window.open('https://t.me/Resnichki37_bot', '_blank')}
          >
            <Icon name="Bot" className="mr-2" />
            Telegram Bot
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;