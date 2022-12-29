import { ENodeStatus, IStatusConfig } from '@/interface/interfaceHierarchyTree';

export const rootCoordinate = { x: 0, y: 0 };

export const defaultNodeWidth = 90;
export const defaultNodeHeight = 50;

export const NodeStatusConfig: IStatusConfig[] = [
  { key: 'STOP', status: ENodeStatus.STOP, label: 'dashboard.status.stop', color: 'red' },
  {
    key: 'DRIVING',
    status: ENodeStatus.DRIVING,
    label: 'dashboard.status.driving',
    color: 'green',
  },
];
