const Footer = () => {
  return (
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
  );
};

export default Footer;