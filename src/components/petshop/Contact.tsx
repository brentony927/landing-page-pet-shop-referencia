import { Clock, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";

const Contact = () => {
  return (
    <section id="contato" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-foreground mb-10">
          Fala com a gente — a resposta é rápida
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
          <div className="space-y-4 md:space-y-5">
            <div className="bg-background border border-border rounded-lg p-5 flex items-start gap-4 transition-all duration-200 hover:border-secondary/40 hover:shadow-sm">
              <div className="bg-secondary/10 rounded-lg p-3 flex-shrink-0">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Horário</h3>
                <p className="text-muted-foreground text-sm">Seg a Sex: 8h às 19h</p>
                <p className="text-muted-foreground text-sm">Sábado: 8h às 16h</p>
              </div>
            </div>

            <div className="bg-background border border-border rounded-lg p-5 flex items-start gap-4 transition-all duration-200 hover:border-secondary/40 hover:shadow-sm">
              <div className="bg-secondary/10 rounded-lg p-3 flex-shrink-0">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">WhatsApp</h3>
                <a href="https://wa.me/5569992216764" className="text-secondary font-semibold text-sm hover:underline">(69) 99221-6764</a>
              </div>
            </div>

            <div className="bg-background border border-border rounded-lg p-5 flex items-start gap-4 transition-all duration-200 hover:border-secondary/40 hover:shadow-sm">
              <div className="bg-secondary/10 rounded-lg p-3 flex-shrink-0">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Localização</h3>
                <p className="text-muted-foreground text-sm">Nos chame no WhatsApp que a gente manda a localização certinha.</p>
                <a href="https://wa.me/5569992216764" className="inline-block mt-2 text-secondary font-bold text-sm hover:underline">
                  Pedir localização →
                </a>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-lg p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Fale com a gente
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">Nome</label>
                <Input placeholder="Seu nome" className="rounded-md border-border focus-visible:ring-secondary focus-visible:border-secondary" />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">Telefone</label>
                <Input placeholder="(69) 99999-0000" className="rounded-md border-border focus-visible:ring-secondary focus-visible:border-secondary" />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">Serviço desejado</label>
                <select className="w-full h-10 rounded-md border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all">
                  <option>Banho & Tosa</option>
                  <option>Veterinário</option>
                  <option>Hotel Pet</option>
                  <option>Adestramento</option>
                  <option>Taxi Dog</option>
                  <option>Day Care</option>
                  <option>Personalizado</option>
                </select>
              </div>
              <button className="w-full bg-secondary text-secondary-foreground font-bold rounded-md text-sm md:text-base uppercase tracking-wider py-3.5 md:py-4 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_hsl(142_72%_37%/0.3)] transition-all duration-200">
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
