import { CheckCircle2, XCircle } from "lucide-react";

const fits = [
  "Eres PM activo/a y quieres actualizar tus habilidades con IA",
  "Quieres integrar IA en tu flujo de trabajo diario como Product Manager",
  "Buscas construir y lanzar productos digitales de forma autónoma",
  "Quieres ganar profundidad técnica sin convertirte en developer",
  "Buscas avanzar en tu carrera hacia roles de liderazgo de producto",
  "Quieres unirte a una comunidad de PMs de alto nivel",
];

const notFits = [
  "Nunca has trabajado en un equipo de producto digital",
  "Buscas solo teoría sin proyecto práctico",
  "No puedes comprometerte con los fines de semana del programa",
];

export function ProfileSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-purple-600 font-semibold text-sm uppercase tracking-widest mb-3">
            ¿Es para mí?
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            Perfil del estudiante ideal
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-green-100 p-7 shadow-sm">
            <h3 className="font-bold text-gray-900 text-lg mb-5 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">✓</span>
              Este programa es para ti si...
            </h3>
            <ul className="space-y-3">
              {fits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-700 text-sm leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-red-100 p-7 shadow-sm">
            <h3 className="font-bold text-gray-900 text-lg mb-5 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center">✗</span>
              Quizás no es para ti si...
            </h3>
            <ul className="space-y-3">
              {notFits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-400 mt-0.5 shrink-0" />
                  <span className="text-gray-700 text-sm leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-purple-50 rounded-xl border border-purple-100">
              <p className="text-sm text-purple-800 font-medium">
                ¿Tienes dudas sobre si encajas? Habla con Fran, nuestro Talent Advisor, y te orientará sin compromiso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
