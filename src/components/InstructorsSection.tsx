import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const instructors = [
  {
    name: "Álvaro Mattos",
    role: "Head of Product",
    company: "Fintech startup",
    rating: "9.4",
    bio: "Líder de producto con 10+ años de experiencia construyendo productos financieros con IA.",
    emoji: "👨‍💻",
  },
  {
    name: "Isabel Garate",
    role: "Senior PM",
    company: "Scale-up europea",
    rating: "9.6",
    bio: "Especialista en AI-first products y estrategia de dato. Profesora con impacto real.",
    emoji: "👩‍🎓",
  },
  {
    name: "Dani Diestre",
    role: "VP of Product",
    company: "SaaS B2B",
    rating: "9.2",
    bio: "Construye y lidera equipos de producto en empresas de alto crecimiento con IA.",
    emoji: "🚀",
  },
  {
    name: "Jose Tomas",
    role: "AI Product Lead",
    company: "Empresa tecnológica",
    rating: "9.5",
    bio: "Pionero en integración de modelos de lenguaje en productos de consumo masivo.",
    emoji: "🤖",
  },
  {
    name: "Ramón Andrío",
    role: "Product Director",
    company: "Corporación digital",
    rating: "9.3",
    bio: "Transforma organizaciones tradicionales en digital-first con metodologías ágiles e IA.",
    emoji: "⚡",
  },
  {
    name: "Cristina Santamarina",
    role: "CPO & Co-founder",
    company: "AI startup",
    rating: "9.7",
    bio: "Fundadora de startups de IA. Experta en go-to-market y product-led growth.",
    emoji: "💡",
  },
];

const team = [
  { name: "Maribel Fernández", role: "Directora del Programa", emoji: "🎯" },
  { name: "María Berrio", role: "Teaching Assistant & Mentora", emoji: "🌟" },
];

export function InstructorsSection() {
  return (
    <section id="instructores" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-3">
            El equipo docente
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Aprende de quienes lo hacen cada día
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Todos nuestros instructores son líderes de producto activos que construyen con IA ahora mismo, no ex-profesionales del pasado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {instructors.map((instructor) => (
            <div
              key={instructor.name}
              className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-full bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-2xl">
                  {instructor.emoji}
                </div>
                <div className="flex items-center gap-1 bg-slate-700 rounded-full px-2 py-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-bold text-yellow-400">{instructor.rating}</span>
                </div>
              </div>
              <h3 className="font-bold text-white text-lg mb-1">{instructor.name}</h3>
              <p className="text-purple-400 text-sm font-medium mb-1">{instructor.role}</p>
              <p className="text-slate-500 text-xs mb-3">{instructor.company}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{instructor.bio}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-700 pt-10">
          <p className="text-center text-slate-400 text-sm mb-6 font-medium uppercase tracking-widest">
            Coordinación del programa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="flex-1 bg-slate-800 rounded-xl p-5 border border-slate-700 text-center">
                <div className="w-12 h-12 rounded-full bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-xl mx-auto mb-3">
                  {member.emoji}
                </div>
                <p className="font-semibold text-white">{member.name}</p>
                <p className="text-purple-400 text-sm mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
