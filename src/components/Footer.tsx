export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="text-xl font-black tracking-tight text-white">
              ai<span className="text-purple-500">pm</span>pro
            </span>
            <p className="mt-3 text-sm leading-relaxed">
              La escuela de referencia para Product Managers que quieren liderar en la era de la inteligencia artificial.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Nuestros cursos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#programa" className="hover:text-purple-400 transition-colors">AI Product Manager PRO</a></li>
              <li><a href="#programa" className="hover:text-purple-400 transition-colors">Plan de estudios</a></li>
              <li><a href="#instructores" className="hover:text-purple-400 transition-colors">Equipo docente</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Eventos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Guías gratuitas</a></li>
              <li><a href="#testimonios" className="hover:text-purple-400 transition-colors">Casos de éxito</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Preguntas frecuentes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Empresas</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Formación para equipos</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Sobre The Hero Camp</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Trabaja con nosotros</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>hola@theherocamp.com</li>
              <li>+34 600 000 000</li>
              <li className="pt-2">
                <a href="#contacto" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors">
                  → Agenda una llamada
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs">© 2024 The Hero Camp. Todos los derechos reservados.</p>
          <div className="flex gap-4 text-xs">
            <a href="#" className="hover:text-purple-400 transition-colors">Política de privacidad</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Cookies</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Aviso legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
