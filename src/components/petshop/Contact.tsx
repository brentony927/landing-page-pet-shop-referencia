import { MapPin, Clock, Phone, PawPrint } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon3D from "./Icon3D";

const Contact = () => {
  return (
    <section id="contato" className="py-16 bg-secondary/10 paw-pattern paw-pattern-animated relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Fala com a gente — a resposta é rápida
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Icon3D icon={MapPin} size="md" color="teal" animate="none" />
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">Onde estamos</h3>
                <p className="text-muted-foreground text-sm">Rua dos Pets Felizes, 123 — Centro, São Paulo - SP</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Icon3D icon={Clock} size="md" color="yellow" animate="none" />
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">Horário</h3>
                <p className="text-muted-foreground text-sm">Seg a Sex: 8h às 19h</p>
                <p className="text-muted-foreground text-sm">Sábado: 8h às 16h</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Icon3D icon={Phone} size="md" color="orange" animate="none" />
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">WhatsApp</h3>
                <p className="text-muted-foreground text-sm">(69) 99221-6764</p>
              </div>
            </div>

            <div className="w-full h-48 rounded-lg bg-secondary/15 flex items-center justify-center gap-3">
              <Icon3D icon={MapPin} size="lg" color="green" animate="float" />
              <span className="font-heading font-bold text-secondary/60 text-sm">MAPA AQUI</span>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm border-t-4 border-t-primary">
            <h3 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              Fale com a gente <Icon3D icon={PawPrint} size="sm" color="green" animate="none" />
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">Nome</label>
                <Input placeholder="Seu nome" className="rounded-lg" />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">Telefone</label>
                <Input placeholder="(11) 99999-0000" className="rounded-lg" />
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
              <Button className="w-full bg-primary text-primary-foreground font-bold rounded-lg text-sm uppercase tracking-wider py-5 hover:bg-primary/90 glow-orange">
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