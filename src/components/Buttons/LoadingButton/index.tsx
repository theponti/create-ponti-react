import cx from "classnames";
import { ReactNode } from "react";

type LoadingButtonProps = {
  children: ReactNode;
  isLoading: boolean;
  onClick?: () => void;
  isSubmit?: boolean;
  testId?: string;
  type: string;
};
function LoadingButton({
  children,
  isLoading,
  isSubmit,
  onClick,
  testId,
  type,
}: LoadingButtonProps) {
  const spinner = (
    <svg
      className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
  const className = cx(
    `btn`,
    "inline-flex",
    "items-center",
    "px-4 py-2",
    "font-semibold",
    "leading-6",
    "text-sm",
    "shadow",
    "rounded-md",
    "transition ease-in-out duration-150",
    {
      success: "btn-success",
      error: "btn-error",
    }[type],
    {
      "cursor-not-allowed": isLoading,
    }
  );

  if (isSubmit) {
    return (
      <button
        data-testid={testId}
        disabled={isLoading}
        type="submit"
        className={className}
      >
        {isLoading ? spinner : null}
        {isLoading ? "Processing..." : children}
      </button>
    );
  }

  return (
    <button
      data-testid={testId}
      disabled={isLoading}
      type="button"
      onClick={onClick}
      className={className}
    >
      {isLoading ? spinner : null}
      {isLoading ? "Processing..." : children}
    </button>
  );
}

LoadingButton.defaultProps = {
  isSubmit: false,
  onClick: () => {},
  testId: "",
};

export default LoadingButton;
