import { CheckCircle2 } from "lucide-react";

const outcomes = [
  "Crear productos digitales reales integrando IA en cada fase del ciclo de vida",
  "Utilizar herramientas de IA para multiplicar tu productividad como PM",
  "Ganar profundidad técnica para trabajar codo con codo con equipos de ingeniería",
  "Prototipas de forma autónoma sin depender de equipos de desarrollo",
  "Dominar AI Product Management con frameworks y metodologías actuales",
  "Obtener doble certificación reconocida por empresas tech líderes",
];

export function ValueSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-purple-600 font-semibold text-sm uppercase tracking-widest mb-3">
              ¿Qué vas a conseguir?
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
              Al terminar el curso serás capaz de...
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Un programa diseñado por y para Product Managers que quieren liderar en la era de la IA. Aprendizaje aplicado desde el primer día.
            </p>
          </div>

          <div className="space-y-4">
            {outcomes.map((outcome, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 shrink-0" />
                <p className="text-gray-700 font-medium leading-snug">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
