import type { SliderProps } from '@pikas-ui/slider';
import { Slider as SliderPikasUI } from '@pikas-ui/slider';

export { sliderDirection, sliderOrientation } from '@pikas-ui/slider';
export type {
  SliderDirection,
  SliderOrientation,
  SliderProps,
  SliderCSS,
} from '@pikas-ui/slider';

export const Slider: React.FC<SliderProps> = ({ css, ...props }) => {
  return (
    <SliderPikasUI
      css={{
        ...css,
        label: {
          color: '$WHITE',
          ...css?.label,
        },
      }}
      {...props}
    />
  );
};
