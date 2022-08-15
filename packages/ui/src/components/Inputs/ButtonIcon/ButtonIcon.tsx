import type { ButtonIconLinkProps, ButtonIconProps } from '@pikas-ui/button';
import {
  ButtonIcon as ButtonIconPikasUI,
  ButtonIconLink as ButtonIconLinkPikasUI,
} from '@pikas-ui/button';

export type {
  ButtonIconDefaultProps,
  ButtonIconLinkProps,
  ButtonIconProps,
  ButtonIconStylesType,
} from '@pikas-ui/button';

export const ButtonIcon: React.FC<ButtonIconProps> = (props) => {
  return <ButtonIconPikasUI boxShadow="none" {...props} />;
};

export const ButtonIconLink: React.FC<ButtonIconLinkProps> = (props) => {
  return <ButtonIconLinkPikasUI boxShadow="none" {...props} />;
};
