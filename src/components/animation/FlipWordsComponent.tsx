import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = [
    "Dispositivo Oclusal Estabilizante",
    "Diseño de Sonrisa Digital",
    "Modelos",
    "Escaneado de modelos",
    "Escaneado intraoral",
    "Provisorios en resina o PMMA",
    "Guías quirúrgicas",
    "Coronas deseadas en zirconio o disilicato",
    "Incrustaciones fresadas (zirconio y disilicato)",
    "Cofias fresadas (zirconio y disilicato)",
    "Coronas sobre implantes (zirconio o disilicato)",
    "Carillas fresadas",
    "Encerado diagnóstico",
    "Placas de blanqueamiento",
    "Placas de contención",
    "Estampado de placas para alineadores"
  ];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-bold text-[#d5b997]">
        <FlipWords words={words} />
      </div>
    </div>
  );
}
