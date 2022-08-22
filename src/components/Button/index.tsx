import cx from 'classnames';
import styles from './Button.module.scss';

function Button({
  children,
  className,
  onClick,
  variant,
}: ButtonType) {
  let buttonStyle;

  switch (variant) {
    case 'success':
      buttonStyle = styles.btnSuccess;
      break;
    case 'danger':
      buttonStyle = styles.btnDanger;
      break;
    default:
      buttonStyle = '';
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
  variant: 'sucess',
};

type ButtonType = {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  variant?: string;
};

export default Button;
