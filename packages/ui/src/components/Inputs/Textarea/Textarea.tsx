import type { TextareaProps } from '@pikas-ui/textarea';
import { Textarea as TextareaPikasUI } from '@pikas-ui/textarea';

export { textareaPadding, textareaResize } from '@pikas-ui/textarea';
export type {
  TextareaPadding,
  TextareaProps,
  TextareaResize,
  TextareaCSS,
} from '@pikas-ui/textarea';

export const Textarea: React.FC<TextareaProps> = ({ css, ...props }) => {
  return (
    <TextareaPikasUI
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
