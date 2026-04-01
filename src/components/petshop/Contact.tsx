import { Clock, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon3D from "./Icon3D";

const Contact = () => {
  return (
    <section id="contato" className="py-16 bg-secondary/5">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
          Fala com a gente — a resposta é rápida
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="space-y-6">
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
                <a href="https://wa.me/5569992216764" className="text-primary font-semibold text-sm hover:underline">(69) 99221-6764</a>
              </div>
            </div>

            <div className="bg-secondary/10 rounded-lg p-6">
              <p className="text-foreground font-semibold text-sm mb-2">Localização</p>
              <p className="text-muted-foreground text-sm">Nos chame no WhatsApp que a gente manda a localização certinha.</p>
              <a href="https://wa.me/5569992216764" className="inline-block mt-3 text-primary font-bold text-sm hover:underline">
                Pedir localização →
              </a>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm border-t-4 border-t-primary">
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
