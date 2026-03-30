import { MapPin, Clock, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-4xl mb-3 block">📍</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Venha nos visitar
          </h2>
          <p className="text-muted-foreground text-lg">Estamos esperando você e seu pet</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">Endereço</h3>
                <p className="text-muted-foreground text-sm">Rua dos Pets Felizes, 123 — Centro, São Paulo - SP</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">Horário</h3>
                <p className="text-muted-foreground text-sm">Seg a Sex: 8h às 19h</p>
                <p className="text-muted-foreground text-sm">Sábado: 8h às 16h</p>
                <p className="text-muted-foreground text-sm">Domingo: Fechado</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-petshop-purple flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">Telefone</h3>
                <p className="text-muted-foreground text-sm">(11) 99999-1234</p>
              </div>
            </div>

            {/* Stylized map placeholder */}
            <div className="w-full h-48 rounded-2xl bg-muted border border-border flex items-center justify-center">
              <span className="text-6xl">🗺️</span>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <h3 className="font-heading text-xl font-bold text-foreground mb-6">
              Fale conosco 🐾
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
              <Button className="w-full bg-primary text-primary-foreground font-bold rounded-full text-base py-5">
                Enviar mensagem 🐾
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
