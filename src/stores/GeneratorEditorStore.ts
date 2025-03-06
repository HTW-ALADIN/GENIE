import { ref } from "vue";
import { defineStore } from "pinia";

export const useGeneratorEditorStore = defineStore("generatorEditor", () => {
  const generatorListWidth = ref(250);
  const editorPaneWidth = ref(20);
  const debuggerPaneHeight = ref(20);

  // TODO: Dynamically load from DB / Docker Repository
  const sections = ref([
    {
      label: "Workflow Control",
      nodes: [
        {
          label: "Loop",
          type: "loop",
          tooltip: "stuffsssssssssssssssssssss sssssssssssssss sssssssssssss",
        },
        {
          label: "Condition",
          type: "complex",
          tooltip: "stuffsssssssssssssssssssss sssssssssssssss sssssssssssss",
        },
      ],
    },
    {
      label: "Graph-Generators",
      nodes: [
        {
          label: "Graph Rewriting",
          type: "complex",
          tooltip: "stuzff",
        },
      ],
    },
    {
      label: "Text-Generators",
      nodes: [
        {
          label: "Large Language Model",
          type: "complex",
          tooltip: "stuffff",
        },
        {
          label: "Text Template Engine",
          type: "complex",
          tooltip: "ssstuff",
        },
      ],
    },
  ]);

  return { generatorListWidth, editorPaneWidth, debuggerPaneHeight, sections };
});
