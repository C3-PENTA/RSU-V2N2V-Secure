import { useEffect, useMemo } from 'react';
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  ReactFlowInstance,
  useReactFlow,
} from 'react-flow-renderer';

import useGlobalStore from '@/store';
import { handleDiagramData, processAutoLayoutDiagram } from '@/helper/hierarchyTreeHelper';

import { HierarchyNodeCustom } from './HierarchyNodeCustom';

import './HierarchyTree.scss';

export const HierarchyTreeCanvas = ({ hideAttribution }: { hideAttribution: boolean }) => {
  const rawDiagramData = useGlobalStore((state) => state.rawDiagramData);

  const { fitView } = useReactFlow();

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onInit = (_: ReactFlowInstance | undefined) => {
  };

  const nodeTypes = useMemo(() => ({ customNode: HierarchyNodeCustom }), []);

};
