import { useState } from "react";

function Home() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    //setIsShown((current) => !current);

    setIsShown(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>

      {isShown && (
        <div>
          <h2>Some content here</h2>
        </div>
      )}
    </div>
  );
}

export default Home;
