const Notification = ({ type = "", setIsOpened, message = "" }) => {
  return (
    <div
      className={`${
        type === "success"
          ? "border border-green-600 bg-green-300 text-green-700"
          : "border border-red-600 bg-red-300 text-red-700"
      } p-4 mb-2 w-full text-sm relative`}
    >
      <p>{message}</p>
      <div
        className="absolute right-0 top-0 p-1 cursor-pointer"
        onClick={() => setIsOpened(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  );
};

export default Notification;
