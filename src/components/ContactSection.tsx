import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;