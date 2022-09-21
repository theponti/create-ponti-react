import cx from 'classnames';
import styles from './Button.module.scss';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  testId?: string;
  onClick: () => void;
  readonly variant: 'danger' | 'success' | 'text';
};

function Button({
  children,
  className,
  onClick,
  variant,
  testId,
}: ButtonProps) {
  return (
    <button
      className={cx(styles.wrap, { [styles[variant]]: true }, className)}
      data-testid={testId}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: '',
  testId: '',
};

export default Button;
