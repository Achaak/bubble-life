import type { TextareaProps } from '@pikas-ui/textarea';
import { Textarea as TextareaPikasUI } from '@pikas-ui/textarea';

export { TextareaPadding, TextareaResize } from '@pikas-ui/textarea';
export type {
  TextareaPaddingType,
  TextareaProps,
  TextareaResizeType,
  TextareaStylesType,
} from '@pikas-ui/textarea';

export const Textarea: React.FC<TextareaProps> = ({ styles, ...props }) => {
  return (
    <TextareaPikasUI
      styles={{
        ...styles,
        label: {
          color: '$WHITE',
          ...styles?.label,
        },
      }}
      {...props}
    />
  );
};
