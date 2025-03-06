import type { NodeMouseEvent } from "@vue-flow/core";

export function handleNodeClick(params: NodeMouseEvent) {
  params.node.data.label = "test";
  //   params.node.style = {
  //     clipPath:
  //       "polygon(37% 0%,79% 6%,88% 20%,92% 39%,125% 64%,80% 79%,76% 100%,22% 100%,7% 82%,0% 55%,5% 22%,14% 1%)",
  //     backgroundColor: "blue",
  //   };
}
