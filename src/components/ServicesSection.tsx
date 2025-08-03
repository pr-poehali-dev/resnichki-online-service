import { useState } from 'react';
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  const [currentServiceImage, setCurrentServiceImage] = useState(0);

  const serviceImages = [
    {
      id: 1,
      src: "https://cdn.poehali.dev/files/825a0ea1-967f-4647-8fd8-31e6da0525c1.jpg",
      alt: "Прайс-лист инструктора",
      title: "Наращивание ресниц - Инструктор"
    },
    {
      id: 2,
      src: "https://cdn.poehali.dev/files/82f75e31-527c-4894-ba50-e5533abc5e6d.jpg",
      alt: "Прайс-лист топ-мастера",
      title: "Наращивание ресниц - Топ-мастер"
    },
    {
      id: 3,
      src: "https://cdn.poehali.dev/files/3502bc2f-a910-4758-b18a-d1300bb3fab5.jpg",
      alt: "Прайс-лист уход за бровями",
      title: "Уход за бровями"
    },
    {
      id: 4,
      src: "https://cdn.poehali.dev/files/5b72e427-75a6-4346-aa63-daf649281795.jpg",
      alt: "Прайс-лист перманентный макияж",
      title: "Перманентный макияж"
    }
  ];

  const nextServiceImage = () => {
    setCurrentServiceImage((prev) => (prev + 1) % serviceImages.length);
  };

  const prevServiceImage = () => {
    setCurrentServiceImage((prev) => (prev - 1 + serviceImages.length) % serviceImages.length);
  };

  return (
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

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Image Display */}
          <div className="relative rounded-lg overflow-hidden shadow-xl mb-6">
            <img
              src={serviceImages[currentServiceImage].src}
              alt={serviceImages[currentServiceImage].alt}
              className="w-full h-auto object-cover transition-opacity duration-300"
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={prevServiceImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-primary rounded-full p-3 shadow-lg transition-all"
            >
              <Icon name="ChevronLeft" size={24} />
            </button>
            
            <button
              onClick={nextServiceImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-primary rounded-full p-3 shadow-lg transition-all"
            >
              <Icon name="ChevronRight" size={24} />
            </button>
            
            {/* Image Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <h3 className="text-white font-montserrat font-semibold text-lg lg:text-xl">
                {serviceImages[currentServiceImage].title}
              </h3>
            </div>
          </div>
          
          {/* Thumbnail Navigation */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {serviceImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setCurrentServiceImage(index)}
                className={`relative rounded-lg overflow-hidden transition-all ${
                  index === currentServiceImage
                    ? 'ring-4 ring-primary shadow-xl scale-105'
                    : 'shadow-md hover:shadow-lg hover:scale-102'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-24 lg:h-32 object-cover"
                />
                <div className={`absolute inset-0 transition-all ${
                  index === currentServiceImage
                    ? 'bg-primary/20'
                    : 'bg-black/20 hover:bg-black/10'
                }`} />
              </button>
            ))}
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {serviceImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentServiceImage(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentServiceImage
                    ? 'bg-primary scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;