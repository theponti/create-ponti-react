import cx from 'classnames';

import styles from './Button.module.scss';

enum VARIANTS {
  DANGER = 'danger',
  SUCCESS = 'success',
  TEXT = 'text',
}

function Button({
  children,
  className,
  onClick,
  variant,
}: ButtonType) {
  let buttonStyle;

  switch (variant) {
    case VARIANTS.SUCCESS:
      buttonStyle = styles.btnSuccess;
      break;
    case VARIANTS.DANGER:
      buttonStyle = styles.btnDanger;
      break;
    case VARIANTS.TEXT:
      buttonStyle = styles.btnText;
      break;
    default:
  }

  return (
    <button
      data-testid="button"
      className={cx(styles.container, className, buttonStyle)}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: '',
  variant: VARIANTS.SUCCESS,
};

type ButtonType = {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  variant?: 'danger' | 'success' | 'text';
};

export default Button;
