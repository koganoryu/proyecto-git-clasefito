import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const modules = [
  {
    number: "01",
    title: "Apertura del Curso",
    hours: "4h",
    description:
      "Sesión de bienvenida, alineamiento de expectativas y presentación del proyecto real que desarrollarás a lo largo del programa. Conoce a tus compañeros y mentores.",
    topics: ["Kickoff y networking", "Presentación del proyecto", "Mindset AI-First", "Metodología del curso"],
  },
  {
    number: "02",
    title: "Fundamentos de AI Product Management",
    hours: "14h",
    description:
      "Comprende cómo funcionan los sistemas de IA, sus capacidades y limitaciones, y cómo impactan en la estrategia de producto. Frameworks y herramientas clave.",
    topics: ["Cómo funciona la IA (sin tecnicismos)", "Modelos de lenguaje y su aplicación en producto", "AI Product Strategy", "Casos de uso y oportunidades reales"],
  },
  {
    number: "03",
    title: "IA como Herramienta de Productividad para PMs",
    hours: "14h",
    description:
      "Transforma tu flujo de trabajo con IA. Aprende a utilizarla para investigación, redacción de PRDs, análisis de datos, presentaciones y comunicación con stakeholders.",
    topics: ["Prompting avanzado para PMs", "Automatización de tareas repetitivas", "IA para user research y análisis", "Copilot para PRDs y roadmaps"],
  },
  {
    number: "04",
    title: "Tech PM: Profundidad Técnica Práctica",
    hours: "14h",
    description:
      "Domina los conceptos técnicos esenciales que todo PM debe conocer para trabajar eficazmente con ingeniería y arquitectura de sistemas.",
    topics: ["APIs, webhooks y arquitecturas", "Bases de datos y modelos de datos", "Conceptos de ML e integración de modelos", "Métricas de rendimiento y evaluación"],
  },
  {
    number: "05",
    title: "AI Product Maker: Construye tu Producto",
    hours: "24h",
    description:
      "El módulo estrella. Construirás un producto real con IA desde cero: ideación, prototipado, desarrollo con herramientas no-code/low-code y lanzamiento.",
    topics: ["Ideación y validación con IA", "Prototipado rápido con Cursor/v0/Bolt", "Desarrollo y lanzamiento del MVP", "Pitch y presentación final"],
  },
];

export function ProgramSection() {
  return (
    <section id="programa" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-purple-600 font-semibold text-sm uppercase tracking-widest mb-3">
            El programa
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            70 horas de formación intensiva
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            5 módulos diseñados para llevarte de PM tradicional a AI Product Manager en pocas semanas.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {modules.map((mod) => (
            <AccordionItem
              key={mod.number}
              value={mod.number}
              className="border border-gray-200 rounded-xl overflow-hidden data-[state=open]:border-purple-300 data-[state=open]:shadow-md data-[state=open]:shadow-purple-50 transition-all"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 data-[state=open]:bg-purple-50">
                <div className="flex items-center gap-4 text-left w-full">
                  <span className="text-2xl font-black text-purple-200 w-8 shrink-0">{mod.number}</span>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900">{mod.title}</p>
                  </div>
                  <Badge variant="secondary" className="shrink-0 ml-2 text-purple-700 bg-purple-100">
                    {mod.hours}
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5">
                <p className="text-gray-600 mb-4 leading-relaxed">{mod.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {mod.topics.map((topic) => (
                    <li key={topic} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
