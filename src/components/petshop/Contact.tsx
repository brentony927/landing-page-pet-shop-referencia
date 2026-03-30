import { MapPin, Clock, Phone, PawPrint } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon3D from "./Icon3D";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-bold text-sm uppercase tracking-wider mb-2">Contato</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase">
            VENHA NOS VISITAR
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Icon3D icon={MapPin} size="md" color="teal" animate="none" />
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">Endereço</h3>
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
                <h3 className="font-heading font-bold text-foreground mb-1">Telefone</h3>
                <p className="text-muted-foreground text-sm">(11) 99999-1234</p>
              </div>
            </div>

            <div className="w-full h-48 rounded-2xl bg-secondary/10 border-2 border-dashed border-secondary/30 flex items-center justify-center gap-3">
              <Icon3D icon={MapPin} size="lg" color="green" animate="float" />
              <span className="font-heading font-bold text-secondary/50 text-sm">MAPA AQUI</span>
            </div>
          </div>

          <div className="bg-background rounded-2xl p-8 shadow-sm border border-border">
            <h3 className="font-heading text-xl font-bold text-foreground mb-6 uppercase flex items-center gap-2">
              Fale conosco <Icon3D icon={PawPrint} size="sm" color="green" animate="none" />
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">Nome</label>
                <Input placeholder="Seu nome" className="rounded-xl" />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">Telefone</label>
                <Input placeholder="(11) 99999-0000" className="rounded-xl" />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">Serviço desejado</label>
                <select className="w-full h-10 rounded-xl border border-input bg-background px-3 text-sm text-foreground">
                  <option>Banho & Tosa</option>
                  <option>Veterinário</option>
                  <option>Hotel Pet</option>
                  <option>Adestramento</option>
                  <option>Taxi Dog</option>
                  <option>Day Care</option>
                </select>
              </div>
              <Button className="w-full bg-petshop-teal text-primary-foreground font-bold rounded-full text-sm uppercase tracking-wider py-5 hover:bg-petshop-teal-light">
                ENVIAR MENSAGEM
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
