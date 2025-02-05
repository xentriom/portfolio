// Loading component for Suspense fallback and loading states
const Loading = () => {
  return (
    <div className="flex justify-center flex-col items-center flex-grow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="50"
        height="50"
        className="animate-spin"
        role="img"
        aria-label="Loading animation"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#4f46e5"
          strokeWidth="10"
          strokeDasharray="212"
          strokeDashoffset="70"
        />
      </svg>
      <p className="text-center">Loading...</p>
    </div>
  );
};

export default Loading;
