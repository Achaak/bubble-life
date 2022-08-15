import type { SliderProps } from '@pikas-ui/slider';
import { Slider as SliderPikasUI } from '@pikas-ui/slider';

export { SliderDirection, SliderOrientation } from '@pikas-ui/slider';
export type {
  SliderDirectionType,
  SliderOrientationType,
  SliderProps,
  SliderStylesType,
} from '@pikas-ui/slider';

export const Slider: React.FC<SliderProps> = (props) => {
  return <SliderPikasUI {...props} />;
};
