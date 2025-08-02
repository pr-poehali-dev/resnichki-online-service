import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      category: "Наращивание ресниц",
      items: [
        { name: "Классика", price: "2000₽" },
        { name: "Полуторный объём", price: "2200₽" },
        { name: "Двойной объём", price: "2300₽" },
        { name: "Тройной объём", price: "2500₽" },
        { name: "Гиперобъём (4D)", price: "2700₽" },
        { name: "Гиперобъём (5-6D)", price: "2900₽" },
      ],
    },
    {
      category: "Уход за бровями",
      items: [
        { name: "Коррекция бровей", price: "700₽" },
        { name: "Коррекция и окрашивание", price: "1200₽" },
        { name: "Долговременная укладка", price: "1600₽" },
        { name: "Ламинирование ресниц", price: "1600₽" },
      ],
    },
    {
      category: "Перманентный макияж",
      items: [
        { name: "Перманентный макияж бровей", price: "7000₽" },
        { name: "Коррекция перманента", price: "3000₽" },
        { name: "Обновление перманента", price: "4000₽" },
        { name: "Перманентный макияж губ", price: "8000₽" },
      ],
    },
  ];

  const masters = [
    {
      name: "Марина Царёва",
      role: "Инструктор / Руководитель",
      specialty: "Лэшмейкер",
      isTop: true,
      photo:
        "https://cdn.poehali.dev/files/5ea1e500-ab39-46b8-b3fb-091fc5ced231.jpg",
      bookingUrl: "https://bumpix.net/marinatsaryova",
    },
    {
      name: "Анастасия Борисова",
      role: "Топ-мастер",
      specialty: "Лэшмейкер",
      isTop: true,
      photo:
        "https://cdn.poehali.dev/files/30492877-9183-4ac0-9522-29214ae53fae.jpg",
      bookingUrl: "https://bumpix.net/nastya.tkv",
    },
    {
      name: "Анна Журавлёва",
      role: "Топ-мастер",
      specialty: "Бровист",
      isTop: true,
      photo:
        "https://cdn.poehali.dev/files/678ee30a-4086-468e-88a2-fd01c96db65c.jpg",
      bookingUrl: "https://bumpix.net/annaresnichki",
    },
    {
      name: "Виктория Кундина",
      role: "Мастер-стажёр",
      specialty: "Лэшмейкер",
      isTop: false,
      photo:
        "https://cdn.poehali.dev/files/b2fa820c-7191-4374-a354-c0a28fec88a1.jpg",
      bookingUrl: "https://bumpix.net/victory.tk",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-open-sans">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 lg:py-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="text-xl lg:text-2xl font-montserrat font-bold text-black">
              Реснички
            </div>
            <div className="hidden md:flex space-x-4 lg:space-x-6 text-sm">
              <a
                href="#services"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Услуги
              </a>
              <a
                href="#masters"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Мастера
              </a>
              <a
                href="#gallery"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Галерея
              </a>
              <a
                href="https://vk.com/resnichki37"
                target="_blank"
                className="text-gray-600 hover:text-black transition-colors"
              >
                ВКонтакте
              </a>
              <a
                href="https://wa.me/79040409929?text=Добро%20пожаловать%20в%20Реснички37!%20Как%20дела?"
                target="_blank"
                className="text-gray-600 hover:text-black transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="https://instagram.com/resnichki37"
                target="_blank"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://t.me/resnichki_37"
                target="_blank"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Админ
              </a>
              <a
                href="https://t.me/Resnichki37_bot"
                target="_blank"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Telegram Bot
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Button 
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

      {/* Hero Section */}
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

      {/* Services Section */}
      <section id="services" className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-bold text-primary mb-4">
              Наши услуги
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг для создания безупречного образа
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {/* Наращивание ресниц - Инструктор */}
            <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://cdn.poehali.dev/files/825a0ea1-967f-4647-8fd8-31e6da0525c1.jpg"
                alt="Прайс-лист инструктора"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Наращивание ресниц - Топ-мастер */}
            <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://cdn.poehali.dev/files/82f75e31-527c-4894-ba50-e5533abc5e6d.jpg"
                alt="Прайс-лист топ-мастера"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Уход за бровями */}
            <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://cdn.poehali.dev/files/3502bc2f-a910-4758-b18a-d1300bb3fab5.jpg"
                alt="Прайс-лист уход за бровями"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Перманентный макияж */}
            <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://cdn.poehali.dev/files/5b72e427-75a6-4346-aa63-daf649281795.jpg"
                alt="Прайс-лист перманентный макияж"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Masters Section */}
      <section id="masters" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-primary mb-4">
              Наши мастера
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Команда профессионалов с многолетним опытом
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {masters.map((master, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-shadow bg-white"
              >
                <CardHeader className="text-center">
                  <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
                    <img
                      src={master.photo}
                      alt={master.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-primary font-montserrat">
                    {master.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {master.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-4">
                    <Badge
                      variant={master.isTop ? "default" : "secondary"}
                      className={
                        master.isTop ? "bg-primary text-primary-foreground" : ""
                      }
                    >
                      {master.specialty}
                    </Badge>
                    <Button
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                      onClick={() => window.open(master.bookingUrl, '_blank')}
                    >
                      <Icon name="Calendar" className="mr-2" size={16} />
                      Записаться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-primary mb-4">
              Контакты
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами удобным способом
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-primary">
                    Адрес
                  </h3>
                  <p className="text-foreground">
                    г. Тейково, ул. Молодежная, д. 4
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-primary">
                    Телефон
                  </h3>
                  <p className="text-foreground">+7 (920) 362-37-22</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-primary">
                    Режим работы
                  </h3>
                  <p className="text-foreground">ПН-СБ: 9:00-21:00</p>
                  <p className="text-foreground">ВС: выходной</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-montserrat font-semibold text-primary mb-6">
                Мы в социальных сетях
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="justify-start border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/resnichki.tsaryova?igsh=MWUzcnh3aGwzdDNhMw==",
                      "_blank",
                    )
                  }
                >
                  <Icon name="Instagram" className="mr-2" />
                  Instagram
                </Button>
                <Button
                  variant="outline"
                  className="justify-start border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() =>
                    window.open("https://t.me/resnichki_37", "_blank")
                  }
                >
                  <Icon name="MessageCircle" className="mr-2" />
                  Telegram
                </Button>
                <Button
                  variant="outline"
                  className="justify-start border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() =>
                    window.open(
                      "https://wa.me/79203623722?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82",
                      "_blank",
                    )
                  }
                >
                  <Icon name="MessageSquare" className="mr-2" />
                  WhatsApp
                </Button>
                <Button
                  variant="outline"
                  className="justify-start border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() =>
                    window.open("https://vk.com/sk.resnichki", "_blank")
                  }
                >
                  <Icon name="Users" className="mr-2" />
                  ВКонтакте
                </Button>
                <Button
                  variant="outline"
                  className="justify-start border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() =>
                    window.open("https://ok.ru/sk.resnichki37", "_blank")
                  }
                >
                  <Icon name="Users" className="mr-2" />
                  Одноклассники
                </Button>
                <Button
                  variant="outline"
                  className="justify-start border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  onClick={() =>
                    window.open("https://t.me/Resnichki37_bot", "_blank")
                  }
                >
                  <Icon name="Bot" className="mr-2" />
                  Telegram Bot
                </Button>
              </div>

              <div className="mt-8 p-6 bg-accent/10 rounded-lg">
                <h4 className="font-montserrat font-semibold text-primary mb-4">
                  Чат с администратором
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Есть вопросы? Напишите нам, и мы быстро ответим!
                </p>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mb-3"
                  onClick={() =>
                    window.open(
                      "https://t.me/resnichki_37",
                      "_blank",
                    )
                  }
                >
                  <Icon name="MessageCircle" className="mr-2" />
                  Начать чат
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  onClick={() =>
                    window.open(
                      "https://t.me/Resnichki37_bot",
                      "_blank",
                    )
                  }
                >
                  <Icon name="Bot" className="mr-2" />
                  Telegram Bot
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-montserrat font-bold mb-4">
              Реснички
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Студия красоты и наращивания ресниц в Тейково
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                @resnichki.tsaryova
              </a>
              <a
                href="tel:+79203623722"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                +7 (920) 362-37-22
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;