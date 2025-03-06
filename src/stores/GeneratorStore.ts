import { ref } from "vue";
import { defineStore } from "pinia";
import type { Props as ComplexNode } from "@/components/GeneratorDesigner/WorkflowDesigner/Nodes/NodeTypes/ComplexNode/ComplexNode";
import { Position } from "@vue-flow/core";

export const useGeneratorStore = defineStore("generator", () => {
  const elements = ref<{ nodes: Array<any>; edges: Array<any> }>({
    nodes: [
      {
        id: "n1",
        type: "loop",
        data: { label: "Loop" },
        position: { x: 400, y: 200 },
        selected: false,
        height: 150,
        width: 700,
      },
      {
        id: "n2",
        type: "complex",
        data: { label: "EPK-Generator", type: "GRS" },
        position: { x: 50, y: 50 },
        selected: false,
        extent: "parent",
        parentNode: "n1",
      },
      {
        id: "n3",
        type: "complex",
        data: { label: "EPK-Beschrifter", type: "LLM" },
        position: { x: 250, y: 50 },
        selected: false,
        extent: "parent",
        parentNode: "n1",
      },
      {
        id: "n4",
        type: "complex",
        data: { label: "EPK-Beschreiber", type: "TTE" },
        position: { x: 450, y: 50 },
        selected: false,
        extent: "parent",
        parentNode: "n1",
      },
    ],
    edges: [
      {
        id: "n2->n3",
        source: "n2",
        target: "n3",
      },
      {
        id: "n3->n4",
        source: "n3",
        target: "n4",
      },
    ],
  });

  return { elements };
});
