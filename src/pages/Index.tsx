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
      experience: "9+ лет",
      isTop: true,
      photo:
        "https://cdn.poehali.dev/files/5ea1e500-ab39-46b8-b3fb-091fc5ced231.jpg",
    },
    {
      name: "Анастасия Борисова",
      role: "Топ-мастер",
      specialty: "Лэшмейкер",
      experience: "5+ лет",
      isTop: true,
      photo:
        "https://cdn.poehali.dev/files/30492877-9183-4ac0-9522-29214ae53fae.jpg",
    },
    {
      name: "Владлена Рябцева",
      role: "Топ-мастер",
      specialty: "Лэшмейкер",
      experience: "4+ года",
      isTop: true,
      photo:
        "https://cdn.poehali.dev/files/6cd87c57-29ba-4326-8521-9bc0bccf4299.jpg",
    },
    {
      name: "Анна Журавлёва",
      role: "Топ-мастер",
      specialty: "Бровист",
      experience: "3+ года",
      isTop: true,
      photo:
        "https://cdn.poehali.dev/files/678ee30a-4086-468e-88a2-fd01c96db65c.jpg",
    },
    {
      name: "Виктория Кундина",
      role: "Мастер-стажёр",
      specialty: "Лэшмейкер",
      experience: "1+ год",
      isTop: false,
      photo:
        "https://cdn.poehali.dev/files/b2fa820c-7191-4374-a354-c0a28fec88a1.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-open-sans">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-montserrat font-bold text-primary">
              Реснички
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-foreground hover:text-primary transition-colors"
              >
                Услуги
              </a>
              <a
                href="#masters"
                className="text-foreground hover:text-primary transition-colors"
              >
                Мастера
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors"
              >
                Контакты
              </a>
            </div>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Записаться онлайн
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-accent/20 to-secondary/30">
        <div className="absolute inset-0 bg-[url('/img/e25999d9-f417-4bdf-857c-7c2ebcd81fe6.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-primary mb-6">
            Студия красоты
            <br />
            <span className="text-accent">Реснички</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Более 2000 довольных клиентов за 9+ лет работы.
            <br />
            Профессиональное наращивание ресниц и уход за бровями.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Icon name="Calendar" className="mr-2" />
              Записаться онлайн
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Icon name="Phone" className="mr-2" />
              +7 (920) 362-37-22
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-primary mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг для создания безупречного образа
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-shadow"
              >
                <CardHeader className="bg-gradient-to-r from-accent/20 to-secondary/20">
                  <CardTitle className="text-primary font-montserrat">
                    {service.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex justify-between items-center"
                      >
                        <span className="text-foreground">{item.name}</span>
                        <span className="font-semibold text-primary">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
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
                  <div className="space-y-2">
                    <Badge
                      variant={master.isTop ? "default" : "secondary"}
                      className={
                        master.isTop ? "bg-primary text-primary-foreground" : ""
                      }
                    >
                      {master.specialty}
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      Опыт работы: {master.experience}
                    </p>
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
                >
                  <Icon name="Instagram" className="mr-2" />
                  Instagram
                </Button>
                <Button
                  variant="outline"
                  className="justify-start border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon name="MessageCircle" className="mr-2" />
                  Telegram
                </Button>
                <Button
                  variant="outline"
                  className="justify-start border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon name="MessageSquare" className="mr-2" />
                  WhatsApp
                </Button>
                <Button
                  variant="outline"
                  className="justify-start border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon name="Users" className="mr-2" />
                  ВКонтакте
                </Button>
                <Button
                  variant="outline"
                  className="justify-start border-primary text-primary hover:bg-primary hover:text-primary-foreground col-span-2"
                >
                  <Icon name="Users" className="mr-2" />
                  Одноклассники
                </Button>
              </div>

              <div className="mt-8 p-6 bg-accent/10 rounded-lg">
                <h4 className="font-montserrat font-semibold text-primary mb-4">
                  Чат с администратором
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Есть вопросы? Напишите нам, и мы быстро ответим!
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Icon name="MessageCircle" className="mr-2" />
                  Начать чат
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
