import { css } from '@emotion/react';
import styled from '@emotion/styled';

enum VARIANTS {
  DANGER = 'danger',
  SUCCESS = 'success',
  TEXT = 'text',
}

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  readonly variant: 'danger' | 'success' | 'text';
};

const Wrap = styled.button<ButtonProps>`
  background-color: rgb(0 133 255);
  border-radius: ${(props) => props.theme.shape.borderRadius};
  border: 0;
  color: rgb(255 255 255);
  cursor: pointer;
  font-size: 16px;
  min-height: 30px;
  padding: 12px 16px;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.palette.grey.light100};
    box-shadow: ${(props) => props.theme.misc.focusShadow};
  }

  ${(props) => ({
    [VARIANTS.DANGER]: css`
      color: ${props.theme.palette.white};
      background-color: ${props.theme.palette.red.main};
    `,
    [VARIANTS.SUCCESS]: css`
      color: ${props.theme.palette.white};
      background-color: ${props.theme.palette.green.main};
    `,
    [VARIANTS.TEXT]: css`
      color: ${props.theme.palette.black};
      background-color: ${props.theme.palette.white};
    `,
  })[props.variant]}
`;

function Button({
  children,
  className,
  onClick,
  variant,
}: ButtonProps) {
  return (
    <Wrap
      data-testid="button"
      className={className}
      onClick={onClick}
      type="button"
      variant={variant}
    >
      {children}
    </Wrap>
  );
}

Button.defaultProps = {
  className: '',
};

export default Button;
