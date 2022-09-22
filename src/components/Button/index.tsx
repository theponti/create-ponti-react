import cx from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  testId?: string;
  onClick?: () => void;
  readonly variant: 'danger' | 'success' | 'text';
}

function Button({
  children,
  className,
  onClick,
  variant,
  testId,
  type,
}: ButtonProps) {
  return (
    <button
      className={cx(styles.wrap, { [styles[variant]]: true }, className)}
      data-testid={testId}
      onClick={onClick}
      /* eslint-disable-next-line react/button-has-type */
      type={type || 'button'}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  testId: '',
  onClick: () => {},
};

export default Button;
