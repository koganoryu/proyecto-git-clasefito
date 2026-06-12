import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Video, Star, ArrowRight, Download } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(258_90%_60%/0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(258_90%_40%/0.1),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30 hover:bg-purple-600/20">
              <Star className="h-3 w-3 mr-1 fill-purple-400 text-purple-400" />
              Próxima edición: 10 de septiembre
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Crea productos digitales con{" "}
              <span className="bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
                IA
              </span>{" "}
              y conviértete en el PM PRO 2026
            </h1>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Programa intensivo online con instructores activos en la industria, proyectos reales y mentoría 1:1 personalizada. Certifícate en AI Product Management.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { icon: Users, text: "20 plazas" },
                { icon: Video, text: "Online" },
                { icon: Clock, text: "70 horas" },
                { icon: Calendar, text: "Fines de semana" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-slate-300">
                  <Icon className="h-4 w-4 text-purple-400 shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                asChild
                size="lg"
                className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-8 py-6 text-base shadow-lg shadow-purple-900/50"
              >
                <a href="#contacto">
                  RESERVA TU PLAZA
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white bg-white/5 hover:bg-white/10 font-semibold px-8 py-6 text-base"
                asChild
              >
                <a href="#programa">
                  <Download className="mr-2 h-4 w-4" />
                  Ver programa
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-white">2.380€</span>
                  <span className="text-lg text-slate-400 line-through">3.400€</span>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                    30% Early Bird
                  </Badge>
                </div>
                <p className="text-xs text-slate-400 mt-1">Precio especial hasta el 31 de julio · Mentoría 1:1 incluida</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/50">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-900 to-slate-800 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-purple-600/30 border-2 border-purple-500/50 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">🤖</span>
                  </div>
                  <p className="text-white font-bold text-xl">AI Product Manager PRO</p>
                  <p className="text-purple-300 text-sm mt-2">Doble certificación incluida</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 font-bold text-sm">★ 9+</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-900">Instructores valorados</p>
                  <p className="text-xs text-gray-500">+9 de puntuación media</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
