import { ReactFlowProvider } from 'react-flow-renderer';
import { HierarchyTreeCanvas } from './HierarchyTreeCanvas';

import './HierarchyTree.scss';

export const HierarchyTree = ({ hideAttribution = false }: { hideAttribution?: boolean }) => {
  return (
    <ReactFlowProvider>
      <HierarchyTreeCanvas hideAttribution={hideAttribution} />
    </ReactFlowProvider>
  );
};
