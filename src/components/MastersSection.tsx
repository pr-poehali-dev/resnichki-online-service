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

const MastersSection = () => {
  const masters = [
    {
      name: "Марина Царёва",
      role: "Инструктор / Руководитель",
      specialty: "Лэшмейкер",
      isTop: true,
      photo:
        "https://cdn.poehali.dev/files/5ea1e500-ab39-46b8-b3fb-091fc5ced231.jpg",
      bookingUrl: "https://bumpix.net/marinatsaryova",
      description: "С детства мечтала о собственном бизнесе. Экономист и художник-оформитель с пятилетним опытом менеджера-дизайнера. Основатель студии, где совмещает роли руководителя и мастера.",
      experience: "9+ лет",
      specialization: "Обучение, бизнес-процессы, объёмы"
    },
    {
      name: "Анастасия Борисова",
      role: "Топ-мастер",
      specialty: "Лэшмейкер",
      isTop: true,
      photo:
        "https://cdn.poehali.dev/files/30492877-9183-4ac0-9522-29214ae53fae.jpg",
      bookingUrl: "https://bumpix.net/nastiaboro",
      description: "Начала путь в 2019 году как клиентка, влюбилась в профессию и стала топовым мастером. Специализируется на сложных и нестандартных эффектах.",
      experience: "5+ лет",
      specialization: "Сложные эффекты, объёмы 2D-6D"
    },
    {
      name: "Ирина Медведева",
      role: "Мастер",
      specialty: "Лэшмейкер",
      isTop: false,
      photo:
        "https://cdn.poehali.dev/files/c4e8a02e-b1b3-4f0a-bf6e-3b6a2d9c5f8e.jpg",
      bookingUrl: "https://bumpix.net/irinmedvedeva",
      description: "Профессиональный мастер с внимательным подходом к каждому клиенту. Создаёт естественные и красивые образы.",
      experience: "3+ года",
      specialization: "Классическое наращивание, лёгкие объёмы"
    },
    {
      name: "Анна Журавлёва",
      role: "Мастер-бровист",
      specialty: "Бровист",
      isTop: false,
      photo:
        "https://cdn.poehali.dev/files/7dcb7349-afe9-494e-9a08-a4835421fca3.JPG",
      bookingUrl: "https://bumpix.net/annashmeleva",
      description: "Химик по образованию, 10 лет в бьюти-индустрии. Перфекционист, который учится у лучших мастеров мира. Каждая деталь должна быть безупречной.",
      experience: "10+ лет",
      specialization: "Архитектура бровей, долговременная укладка"
    },
  ];

  return (
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
                  <div className="flex flex-wrap gap-2 justify-center mb-3">
                    <Badge
                      variant={master.isTop ? "default" : "secondary"}
                      className={
                        master.isTop ? "bg-primary text-primary-foreground" : ""
                      }
                    >
                      {master.specialty}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {master.experience}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground text-left mb-3">
                    {master.description}
                  </p>
                  <div className="text-xs text-accent font-medium mb-3">
                    Специализация: {master.specialization}
                  </div>
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
  );
};

export default MastersSection;