import { Handle, NodeProps, Position } from 'react-flow-renderer';

export const HierarchyNodeCustom = (nodeProps: NodeProps) => {
  return (
    <>
      {nodeProps.data.label}
      
  );
};
