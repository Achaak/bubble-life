import type { DescriptionProps } from '@pikas-ui/text';
import { Description as DescriptionPikasUI } from '@pikas-ui/text';

export type { DescriptionProps } from '@pikas-ui/text';

export const Description: React.FC<DescriptionProps> = ({
  style,
  ...props
}) => {
  return (
    <DescriptionPikasUI
      style={{
        color: '$WHITE',
        ...style,
      }}
      {...props}
    />
  );
};
