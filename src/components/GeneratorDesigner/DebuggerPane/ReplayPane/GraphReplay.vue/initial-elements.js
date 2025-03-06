const position = { x: 0, y: 0 };
const nodeType = "process";
const edgeType = "animation";

export const initialNodes = [
  {
    id: "1",
    position,
    type: "event",
    label: "Autorenwerkzeug ist geöffnet",
  },
  {
    id: "2",
    position,
    type: "function",
    label: "Komposition eines Aufgabengenerators",
  },
  {
    id: "3",
    position,
    type: "event",
    label: "Generator wurde komponiert",
  },
  {
    id: "4",
    position,
    type: "gate",
    label: "OR",
  },
  {
    id: "5",
    position,
    type: "function",
    label: "Generator wird konfiguriert und ausgeführt",
  },
  {
    id: "6",
    position,
    type: "event",
    label: "Generatorergebniss liegt vor",
  },
  {
    id: "7",
    position,
    type: "function",
    label: "Betrachtung des Ergebniss im Debugging-Werkzeug",
  },
  {
    id: "8",
    position,
    type: "gate",
    label: "XOR",
  },
  {
    id: "9",
    position,
    type: "event",
    label: "Generator benötigt Überarbeitung",
  },
  {
    id: "10",
    position,
    type: "event",
    label: "Generator benötigt keine Überarbeitung",
  },
];

export const initialEdges = [
  { id: "1-2", source: "1", target: "2", type: "smoothstep" },
  { id: "2-3", source: "2", target: "3", type: "smoothstep" },
  { id: "3-4", source: "3", target: "4", type: "smoothstep" },
  { id: "4-5", source: "4", target: "5", type: "smoothstep" },
  { id: "5-6", source: "5", target: "6", type: "smoothstep" },
  { id: "6-7", source: "6", target: "7", type: "smoothstep" },
  { id: "7-8", source: "7", target: "8", type: "smoothstep" },
  { id: "8-9", source: "8", target: "9", type: "smoothstep" },
  { id: "9-4", source: "9", target: "4", type: "smoothstep" },
  { id: "8-10", source: "8", target: "10", type: "smoothstep" },
];
