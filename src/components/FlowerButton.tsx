import { useEffect, useState } from "react";
import closed from "../assets/flower-close.png";
import opened from "../assets/flower-open.png";

const FlowerButton = () => {
  const [clicked, setClicked] = useState(false);
  const [imgSource, setImgSource] = useState(closed);

  useEffect(() => {
    if (clicked == true) {
      setImgSource(opened);
    }

    if (clicked == false) {
      setImgSource(closed);
    }
  }, [imgSource, clicked]);

  return (
    <div>
      <img
        src={imgSource}
        alt=""
        className=" w-30"
        onClick={() => {
          setClicked(!clicked);
        }}
      />
    </div>
  );
};

export default FlowerButton;
