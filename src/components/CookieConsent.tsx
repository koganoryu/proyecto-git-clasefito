import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const STORAGE_KEY = "cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [prefsOpen, setPrefsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  const save = (consent: { analytics: boolean; marketing: boolean }) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ necessary: true, ...consent, savedAt: new Date().toISOString() }),
    );
    setVisible(false);
    setPrefsOpen(false);
  };

  if (!visible) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-[60] bg-slate-900 text-slate-200 border-t border-slate-700 px-4 py-4 sm:px-6 shadow-2xl">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center gap-4">
          <p className="text-sm text-slate-300 flex-1">
            Usamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico de la web y
            personalizar el contenido. Puedes aceptar todas las cookies, rechazarlas o configurar tus preferencias.
          </p>
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <Button
              variant="outline"
              size="sm"
              className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
              onClick={() => setPrefsOpen(true)}
            >
              Preferencias
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
              onClick={() => save({ analytics: false, marketing: false })}
            >
              Rechazar
            </Button>
            <Button
              size="sm"
              className="bg-purple-600 hover:bg-purple-500 text-white font-semibold"
              onClick={() => save({ analytics: true, marketing: true })}
            >
              Aceptar todas
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={prefsOpen} onOpenChange={setPrefsOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Preferencias de cookies</DialogTitle>
            <DialogDescription>
              Configura qué tipo de cookies quieres permitir. Puedes cambiar estas preferencias cuando quieras.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4 p-4 rounded-lg border border-gray-200">
              <div>
                <p className="font-semibold text-sm text-gray-900">Cookies estrictamente necesarias</p>
                <p className="text-sm text-gray-500 mt-1">
                  Imprescindibles para el funcionamiento básico de la web. No se pueden desactivar.
                </p>
              </div>
              <Switch checked disabled onCheckedChange={() => {}} />
            </div>

            <div className="flex items-start justify-between gap-4 p-4 rounded-lg border border-gray-200">
              <div>
                <p className="font-semibold text-sm text-gray-900">Cookies analíticas</p>
                <p className="text-sm text-gray-500 mt-1">
                  Nos ayudan a entender cómo navegas por la web para poder mejorarla.
                </p>
              </div>
              <Switch checked={analytics} onCheckedChange={setAnalytics} />
            </div>

            <div className="flex items-start justify-between gap-4 p-4 rounded-lg border border-gray-200">
              <div>
                <p className="font-semibold text-sm text-gray-900">Cookies de marketing</p>
                <p className="text-sm text-gray-500 mt-1">
                  Utilizadas para mostrarte contenido y anuncios relevantes para ti.
                </p>
              </div>
              <Switch checked={marketing} onCheckedChange={setMarketing} />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => save({ analytics: false, marketing: false })}>
              Rechazar todas
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-500 text-white" onClick={() => save({ analytics, marketing })}>
              Guardar preferencias
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
