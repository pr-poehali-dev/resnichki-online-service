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
    },
    {
      name: "Анастасия Борисова",
      role: "Топ-мастер",
      specialty: "Лэшмейкер",
      isTop: true,
      photo:
        "https://cdn.poehali.dev/files/30492877-9183-4ac0-9522-29214ae53fae.jpg",
      bookingUrl: "https://bumpix.net/nastiaboro",
    },
    {
      name: "Ирина Медведева",
      role: "Мастер",
      specialty: "Лэшмейкер",
      isTop: false,
      photo:
        "https://cdn.poehali.dev/files/c4e8a02e-b1b3-4f0a-bf6e-3b6a2d9c5f8e.jpg",
      bookingUrl: "https://bumpix.net/irinmedvedeva",
    },
    {
      name: "Анна Шмелёва",
      role: "Мастер",
      specialty: "Бровист",
      isTop: false,
      photo:
        "https://cdn.poehali.dev/files/d8f5a92e-4c1b-4e0a-9f2e-8b3a7d6c2f1e.jpg",
      bookingUrl: "https://bumpix.net/annashmeleva",
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
  );
};

export default MastersSection;