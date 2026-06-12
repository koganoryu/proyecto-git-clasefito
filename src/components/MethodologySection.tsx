import { Zap, Target, Rocket } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "Learning by Doing",
    description:
      "Cada concepto que aprendes lo aplicas de inmediato en tu proyecto real. No hay teoría sin práctica. Desde el día 1 construyes.",
    color: "text-yellow-500",
    bg: "bg-yellow-50",
  },
  {
    icon: Target,
    title: "AI-First, siempre",
    description:
      "La IA no es un complemento del programa: es el núcleo. Todo lo que aprendes está integrado con herramientas y flujos de trabajo de IA del momento.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Rocket,
    title: "Proyecto Real",
    description:
      "Al finalizar el curso tendrás un producto digital funcional que habrás construido con IA de principio a fin. Tu portfolio habla por sí solo.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
];

export function MethodologySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-purple-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Nuestra metodología
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            Así es como enseñamos
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Un enfoque probado que combina conocimiento profundo con aplicación inmediata en contextos reales de empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map(({ icon: Icon, title, description, color, bg }) => (
            <div key={title} className="text-center">
              <div className={`w-16 h-16 ${bg} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                <Icon className={`h-8 w-8 ${color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
