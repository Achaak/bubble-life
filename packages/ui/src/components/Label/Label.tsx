import type { LabelProps } from '@pikas-ui/text';
import { Label as LabelPikasUI } from '@pikas-ui/text';

export type { LabelProps } from '@pikas-ui/text';

export const Label: React.FC<LabelProps> = ({ style, ...props }) => {
  return (
    <LabelPikasUI
      style={{
        color: '$WHITE',
        ...style,
      }}
      {...props}
    />
  );
};
