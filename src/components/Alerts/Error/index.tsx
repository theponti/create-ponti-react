type AlertErrorProps = {
  message: string;
};
function AlertError({ message }: AlertErrorProps) {
  return (
    <div className="alert alert-error shadow-lg mb-8">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-black stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="text-black">{message}</span>
      </div>
    </div>
  );
}

export default AlertError;
