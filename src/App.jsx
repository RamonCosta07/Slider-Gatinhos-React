import { useState, useEffect, useRef } from "react";
import "./App.css";
import { motion } from "framer-motion";
import image1 from "./img/1.jpeg";
import image2 from "./img/2.jpg";
import image3 from "./img/3.jpg";
import image4 from "./img/4.jpg";

const images = [image1, image2, image3, image4];

function App() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <div className="App">
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{duration: .8}}
        >
          {images.map((image, index) => (
            <motion.div key={index} className="image">
              <img src={image} alt={index} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
