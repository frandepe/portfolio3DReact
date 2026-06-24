import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Button from "../Button/Button";
import FormSteps from "../FormSteps/FormSteps";
import LoaderOne from "@/utils/Loading";

type ContactPath = "budget" | "advisory" | null;

export function ContactPathSelector() {
  const [selectedPath, setSelectedPath] = useState<ContactPath>(null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const selectedContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!selectedPath || !selectedContentRef.current) return;

    selectedContentRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [selectedPath]);

  const handleAdvisorySubmit = async () => {
    if (submitted || loading) return;

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      toast.error("Ingresá tu email para poder contactarte.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          request_type: "advisory",
          email: trimmedEmail,
          message: "No completo cuestionario. Solicita contacto personalizado.",
        }),
      });

      if (!response.ok) {
        throw new Error("Advisory request failed");
      }

      toast.success(
        "Gracias. Me voy a poner en contacto para ayudarte a definir el mejor camino para tu proyecto."
      );
      setSubmitted(true);
    } catch {
      toast.error(
        "No se pudo enviar tu solicitud. Intentá otra vez o escribime a frandepaulo23@gmail.com"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <ToastContainer position="bottom-center" limit={1} />

      <div className="mb-8 grid gap-4 md:grid-cols-2">
        <button
          type="button"
          onClick={() => setSelectedPath("budget")}
          className={`border p-5 text-left transition duration-300 ${
            selectedPath === "budget"
              ? "border-[var(--tertiary)] bg-white/[0.06]"
              : "border-white/10 bg-white/[0.03] hover:border-white/30"
          }`}
        >
          <span className="text-xs uppercase tracking-[0.22em] text-slate-500">
            Opcion 1
          </span>
          <h3 className="mt-3 text-xl font-semibold text-slate-100">
            Solicitar presupuesto
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            Respondé el cuestionario completo para recibir una propuesta más
            precisa según tu proyecto.
          </p>
        </button>

        <button
          type="button"
          onClick={() => setSelectedPath("advisory")}
          className={`border p-5 text-left transition duration-300 ${
            selectedPath === "advisory"
              ? "border-[var(--tertiary)] bg-white/[0.06]"
              : "border-white/10 bg-white/[0.03] hover:border-white/30"
          }`}
        >
          <span className="text-xs uppercase tracking-[0.22em] text-slate-500">
            Opcion 2
          </span>
          <h3 className="mt-3 text-xl font-semibold text-slate-100">
            Quiero asesoramiento
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            Si todavía no sabés qué necesitás, dejá tu email y lo definimos
            juntos.
          </p>
        </button>
      </div>

      {selectedPath && (
        <div ref={selectedContentRef} className="scroll-mt-24">
          {selectedPath === "budget" && <FormSteps />}

          {selectedPath === "advisory" && (
        <div className="w-full md:w-[500px] min-h-[320px] mx-auto p-6 border-[0.5px] border-gray-500 bg-white/[0.02] flex flex-col justify-center">
          {submitted ? (
            <div className="text-center">
              <h2 className="text-lg font-bold mb-4">
                Gracias por tu interés
              </h2>
              <p className="text-gray-400">
                Me pondré en contacto para ayudarte a definir el mejor camino
                para tu proyecto.
              </p>
            </div>
          ) : loading ? (
            <div className="flex flex-col items-center text-center">
              <h2 className="text-lg font-bold mb-4 flex items-end gap-1">
                Enviando{" "}
                <div className="mb-1.5">
                  <LoaderOne />
                </div>
              </h2>
              <p className="text-gray-400">Por favor, espera un momento.</p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-semibold text-slate-100">
                ¿No estás seguro de lo que necesitás?
              </h2>
              <p className="mt-3 text-gray-400">
                Dejá tu email y me pondré en contacto para ayudarte a definir el
                mejor camino para tu proyecto.
              </p>
              <input
                type="email"
                className="mt-6 w-full bg-transparent placeholder:text-slate-400 text-slate-300 border border-slate-300 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <div className="mt-6">
                <Button
                  variant="default"
                  title="Quiero asesoramiento"
                  onClick={handleAdvisorySubmit}
                  disabled={loading || submitted}
                />
              </div>
            </>
          )}
        </div>
      )}
        </div>
      )}
    </div>
  );
}
