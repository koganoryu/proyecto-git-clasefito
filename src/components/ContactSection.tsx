import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, ArrowRight, CalendarCheck } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-5 bg-purple-600/20 text-purple-300 border-purple-500/30">
              Solo 20 plazas disponibles
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
              ¿Tienes dudas? Habla con{" "}
              <span className="bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
                Fran
              </span>
            </h2>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Fran es nuestro Talent & Career Advisor. Te ayudará a resolver todas tus dudas sobre el programa, financiación y encaje sin ningún compromiso.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-9 h-9 rounded-full bg-purple-600/20 border border-purple-500/30 flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4 text-purple-400" />
                </div>
                <span className="text-sm">+34 600 000 000</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-9 h-9 rounded-full bg-purple-600/20 border border-purple-500/30 flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4 text-purple-400" />
                </div>
                <span className="text-sm">hola@theherocamp.com</span>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-8 py-6 text-base shadow-lg shadow-purple-900/50 w-full sm:w-auto"
            >
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                <CalendarCheck className="mr-2 h-5 w-5" />
                Agenda una llamada con Fran
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="font-bold text-white text-xl mb-6">Reserva tu plaza ahora</h3>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-slate-300">Precio regular</span>
                <span className="text-slate-400 line-through">3.400€</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-slate-300">Descuento Early Bird (30%)</span>
                <span className="text-green-400 font-bold">-1.020€</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-white font-bold text-lg">Tu precio</span>
                <span className="text-white font-black text-2xl">2.380€</span>
              </div>
            </div>
            <p className="text-slate-400 text-xs mb-5 text-center">
              Descuento válido hasta el 31 de julio · Financiación disponible
            </p>
            <Button
              asChild
              size="lg"
              className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-6 text-base"
            >
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                RESERVA TU PLAZA
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <p className="text-slate-500 text-xs text-center mt-3">
              Sin compromiso · Plazas limitadas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
