import { Position } from "@vue-flow/core";
import type { NodeProps } from "@vue-flow/core";

export interface NodeData {
  toolbarVisible: boolean;
  toolbarPosition: Position;
  label: string;
}

export interface NodeEvents {
  data: NodeData;
  type: "complex";
}

export type Props = NodeProps<NodeData>;
