import { Clock, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contato" className="py-16 bg-secondary/5">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-10">
          Fala com a gente — a resposta é rápida
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-start gap-4 bg-card rounded-lg p-4 border-l-4 border-l-secondary">
              <div className="bg-secondary/15 rounded-lg p-3 flex-shrink-0">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">Horário</h3>
                <p className="text-muted-foreground text-sm">Seg a Sex: 8h às 19h</p>
                <p className="text-muted-foreground text-sm">Sábado: 8h às 16h</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-card rounded-lg p-4 border-l-4 border-l-primary">
              <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">WhatsApp</h3>
                <a href="https://wa.me/5569992216764" className="text-primary font-semibold text-sm hover:underline">(69) 99221-6764</a>
              </div>
            </div>

            <div className="bg-secondary/8 rounded-lg p-5 md:p-6 border-l-4 border-l-secondary">
              <p className="text-foreground font-semibold text-sm mb-2">Localização</p>
              <p className="text-muted-foreground text-sm">Nos chame no WhatsApp que a gente manda a localização certinha.</p>
              <a href="https://wa.me/5569992216764" className="inline-block mt-3 text-primary font-bold text-sm hover:underline">
                Pedir localização →
              </a>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 md:p-8 shadow-sm border-t-[6px] border-t-primary">
            <h3 className="font-heading text-xl font-bold text-foreground mb-6">
              Fale com a gente
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">Nome</label>
                <Input placeholder="Seu nome" className="rounded-lg" />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">Telefone</label>
                <Input placeholder="(69) 99999-0000" className="rounded-lg" />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">Serviço desejado</label>
                <select className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm text-foreground">
                  <option>Banho & Tosa</option>
                  <option>Veterinário</option>
                  <option>Hotel Pet</option>
                  <option>Adestramento</option>
                  <option>Taxi Dog</option>
                  <option>Day Care</option>
                  <option>Personalizado</option>
                </select>
              </div>
              <Button className="w-full bg-primary text-primary-foreground font-bold rounded-lg text-sm md:text-base uppercase tracking-wider py-5 md:py-6 hover:bg-primary/90 glow-orange">
                Enviar mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
