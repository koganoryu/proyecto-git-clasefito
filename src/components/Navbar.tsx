import { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const courses = [
  { label: "AI Product Manager PRO", href: "#programa", description: "Programa intensivo de 70h con doble certificación" },
  { label: "AI Product Maker", href: "#", description: "De idea a producto funcional con IA" },
  { label: "AI for Business Leaders", href: "#", description: "IA aplicada a la estrategia de negocio" },
];

const resources = [
  { label: "Blog", href: "#" },
  { label: "Guías gratuitas", href: "#" },
  { label: "Casos de éxito", href: "#testimonios" },
];

const moreInfo = [
  { label: "Equipo docente", href: "#instructores" },
  { label: "Preguntas frecuentes", href: "#" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xl font-black tracking-tight text-gray-900">
              ai<span className="text-purple-600">pm</span>pro
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-purple-600 hover:bg-gray-50 transition-colors outline-none">
                Nuestros cursos
                <ChevronDown className="h-3.5 w-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-72">
                {courses.map((course) => (
                  <DropdownMenuItem key={course.label} asChild>
                    <a href={course.href} className="flex flex-col items-start gap-0.5 py-2 cursor-pointer">
                      <span className="font-semibold text-gray-900">{course.label}</span>
                      <span className="text-xs text-gray-500">{course.description}</span>
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a
              href="#"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-purple-600 hover:bg-gray-50 transition-colors"
            >
              Eventos
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-purple-600 hover:bg-gray-50 transition-colors outline-none">
                Recursos
                <ChevronDown className="h-3.5 w-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {resources.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <a href={item.href} className="cursor-pointer">{item.label}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a
              href="#"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-purple-600 hover:bg-gray-50 transition-colors"
            >
              Empresas
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-purple-600 hover:bg-gray-50 transition-colors outline-none">
                Más información
                <ChevronDown className="h-3.5 w-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {moreInfo.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <a href={item.href} className="cursor-pointer">{item.label}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <div className="hidden md:flex items-center gap-2">
            {searchOpen ? (
              <input
                autoFocus
                type="search"
                placeholder="Buscar..."
                className="h-9 w-44 rounded-md border border-gray-200 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                onKeyDown={(e) => e.key === "Escape" && setSearchOpen(false)}
                onBlur={() => setSearchOpen(false)}
              />
            ) : (
              <button
                className="p-2 rounded-md text-gray-500 hover:text-purple-600 hover:bg-gray-50 transition-colors"
                onClick={() => setSearchOpen(true)}
                aria-label="Buscar"
              >
                <Search className="h-4 w-4" />
              </button>
            )}
            <Button
              asChild
              size="sm"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-5"
            >
              <a href="#contacto">Reserva tu plaza</a>
            </Button>
          </div>

          <button
            className="md:hidden p-2 rounded-md text-gray-600"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="cursos" className="border-b border-gray-100">
              <AccordionTrigger className="text-sm font-medium text-gray-700 py-3 hover:no-underline">
                Nuestros cursos
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-3 pb-3 pl-2">
                  {courses.map((course) => (
                    <a
                      key={course.label}
                      href={course.href}
                      className="text-sm text-gray-600"
                      onClick={() => setOpen(false)}
                    >
                      {course.label}
                    </a>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="recursos" className="border-b border-gray-100">
              <AccordionTrigger className="text-sm font-medium text-gray-700 py-3 hover:no-underline">
                Recursos
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-3 pb-3 pl-2">
                  {resources.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-sm text-gray-600"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="info" className="border-b border-gray-100">
              <AccordionTrigger className="text-sm font-medium text-gray-700 py-3 hover:no-underline">
                Más información
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-3 pb-3 pl-2">
                  {moreInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-sm text-gray-600"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <a
            href="#"
            className="block text-sm font-medium text-gray-700 py-3 border-b border-gray-100"
            onClick={() => setOpen(false)}
          >
            Eventos
          </a>
          <a
            href="#"
            className="block text-sm font-medium text-gray-700 py-3 border-b border-gray-100"
            onClick={() => setOpen(false)}
          >
            Empresas
          </a>

          <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold my-4">
            <a href="#contacto" onClick={() => setOpen(false)}>Reserva tu plaza</a>
          </Button>
        </div>
      )}
    </header>
  );
}
