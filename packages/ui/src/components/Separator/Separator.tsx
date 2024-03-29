import type { SeparatorProps } from '@pikas-ui/separator';
import { Separator as SeparatorPikasUI } from '@pikas-ui/separator';

export type {
  SeparatorProps,
  SeparatorOrientationType,
} from '@pikas-ui/separator';

export const Separator: React.FC<SeparatorProps> = (props) => {
  return <SeparatorPikasUI {...props} />;
};
