import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "El programa superó todas mis expectativas. La variedad de instructores y la accesibilidad que tienen para resolver dudas es algo que no había visto antes en ningún otro curso online.",
    author: "Ruth Ballestín",
    role: "Lead Product Designer",
    company: "Empresa SaaS",
    emoji: "👩‍🎨",
  },
  {
    text: "Gracias al programa conseguí mi siguiente posición. Los responsables de contratación reconocen el sello de The Hero Camp como garantía de calidad. Es una inversión que se amortiza sola.",
    author: "Carlos Jiménez",
    role: "VP of Product",
    company: "Scale-up tecnológica",
    emoji: "🚀",
  },
  {
    text: "Las dinámicas de grupo y el aprendizaje entre pares es lo que más me sorprendió. Aprendes tanto de tus compañeros como de los instructores. Salí con una red de contactos increíble.",
    author: "José Rodríguez",
    role: "Product Owner",
    company: "Consultora digital",
    emoji: "🤝",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-purple-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Lo que dicen nuestros alumni
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            Ellos ya lo hicieron
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Más de 500 Product Managers han pasado por nuestros programas. Aquí tienes su opinión.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-slate-50 rounded-2xl p-7 border border-gray-100 flex flex-col"
            >
              <Quote className="h-7 w-7 text-purple-300 mb-4" />
              <p className="text-gray-700 leading-relaxed flex-1 mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-11 h-11 rounded-full bg-purple-100 flex items-center justify-center text-xl shrink-0">
                  {t.emoji}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.author}</p>
                  <p className="text-gray-500 text-xs">{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
