import type {
  ButtonIconLinkProps,
  ButtonIconProps,
  ButtonLinkProps,
  ButtonProps,
} from '@pikas-ui/button';
import {
  Button as ButtonPikasUI,
  ButtonLink as ButtonLinkPikasUI,
  ButtonIcon as ButtonIconPikasUI,
  ButtonIconLink as ButtonIconLinkPikasUI,
} from '@pikas-ui/button';

export {
  buttonEffect,
  buttonGap,
  buttonPadding,
  buttonTarget,
  buttonTextTransform,
  buttonType,
} from '@pikas-ui/button';
export type {
  ButtonDefaultProps,
  ButtonEffect,
  ButtonGap,
  ButtonLinkProps,
  ButtonPadding,
  ButtonProps,
  ButtonCSS,
  ButtonTarget,
  ButtonTextTransform,
  ButtonType,
  BaseButtonIconLinkProps,
  BaseButtonIconProps,
  BaseButtonLinkProps,
  BaseButtonProps,
  ButtonIconCSS,
  ButtonIconDefaultProps,
  ButtonIconLinkProps,
} from '@pikas-ui/button';

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <ButtonPikasUI
      boxShadow="none"
      color="WHITE"
      outlined
      borderWidth={2}
      {...props}
    />
  );
};

export const ButtonLink: React.FC<ButtonLinkProps> = (props) => {
  return (
    <ButtonLinkPikasUI
      boxShadow="none"
      color="WHITE"
      outlined
      borderWidth={2}
      {...props}
    />
  );
};

export const ButtonIcon: React.FC<ButtonIconProps> = (props) => {
  return (
    <ButtonIconPikasUI boxShadow="none" color="WHITE" outlined {...props} />
  );
};

export const ButtonIconLink: React.FC<ButtonIconLinkProps> = (props) => {
  return (
    <ButtonIconLinkPikasUI boxShadow="none" color="WHITE" outlined {...props} />
  );
};
