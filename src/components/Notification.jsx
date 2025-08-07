const Notification = ({ type = "", setIsOpened, message = "" }) => {
  const isSuccess = type === "success";

  return (
    <div
      className={`relative w-full p-4 mb-2 shadow-md transition-all
        ${isSuccess
          ? "bg-green-100 border border-green-300 text-green-800"
          : "bg-red-100 border border-red-300 text-red-800"
        }`}
    >
      <p className="text-sm">{message}</p>

      <button
        onClick={() => setIsOpened(false)}
        type="button"
        className="absolute top-0 right-0 p-1.5 text-inherit cursor-pointer"
        aria-label="Close notification"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default Notification;
