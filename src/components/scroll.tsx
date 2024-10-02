const Scroll = () => {
  return (
    <div className="relative flex w-full flex-col justify-center overflow-hidden">
      <div className="pointer-events-none relative flex overflow-hidden">
        <div className="flex min-w-full animate-marquee items-center justify-around">
          {["Text 1", "Text 2", "Text 3", "Text 4", "Text 5"].map(
            (text, index) => (
              <div key={index} className="p-4">
                <p>{text}</p>
              </div>
            ),
          )}
        </div>
        <div className="flex min-w-full animate-marquee items-center justify-around">
          {["Text 1", "Text 2", "Text 3", "Text 4", "Text 5"].map(
            (text, index) => (
              <div key={index} className="p-4">
                <p>{text}</p>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Scroll;
