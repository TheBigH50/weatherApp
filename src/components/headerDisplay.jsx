export default function HeaderDisplay({
  weatherData,
  isShowing,
  setIsShowing,
}) {
  return (
    <div className="flex flex-col h-1/3 max-w-fit">
      <button
        type="button"
        onClick={() => setIsShowing(!isShowing)}
        className="flex mt-3 ml-3 z-0"
      >
        <svg viewBox="0 0 10 8" width="40">
          <path
            d="M1 1h8M1 4h 8M1 7h8"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <h3>{`${weatherData}`}</h3>
    </div>
  );
}
