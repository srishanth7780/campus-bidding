import React from "react";

const BubbleBackground = () => (
  <div className="bubble-background">
    {/* Soft glass bubbles */}
    {Array.from({ length: 8 }).map((_, index) => {
      const z = Math.random() * 400 - 200; // -200 to 200
      const rx = Math.random() * 20 - 10; // -10 to 10 deg
      const ry = Math.random() * 20 - 10;
      return (
        <div
          key={`bubble-${index}`}
          className="bubble"
          style={{
            '--bubble-size': `${40 + ((index % 5) * 20)}px`,
            '--bubble-left': `${(index * 12) % 100}%`,
            '--bubble-duration': `${14 + (index % 4) * 4}s`,
            '--bubble-delay': `${(index % 6) * 0.8}s`,
            '--z': `${z}px`,
            '--rx': `${rx}deg`,
            '--ry': `${ry}deg`,
          }}
        />
      );
    })}
    {/* Floating 3D Premium Images */}
    {Array.from({ length: 6 }).map((_, index) => {
      const z = Math.random() * 400 - 200;
      const rx = Math.random() * 40 - 20;
      const ry = Math.random() * 40 - 20;
      const imgSrc= "https://i1-e.pinimg.com/736x/b4/d7/b8/b4d7b811c45b34cdedb68e7b0cb024d3.jpg"
      
      return (
        <div key={`container-${index}`}>
        <img
          key={`img-${index}`}
          src={imgSrc}
          className="floating-3d-img rounded-full"
          alt="3D floating element"
          style={{
            '--bubble-size': `clamp(${40 + (index % 3) * 20}px, ${5 + (index % 3) * 2.5}vw, ${80 + (index % 3) * 40}px)`,
            '--bubble-left': `${(index * 15 + 5) % 100}%`,
            '--bubble-duration': `${18 + (index % 3) * 5}s`,
            '--bubble-delay': `${(index % 5) * 1.5}s`,
            '--z': `${z}px`,
            '--rx': `${rx}deg`,
            '--ry': `${ry}deg`,
          }}
          />

          </div>
      );
    })}
  </div>
);

export default BubbleBackground;
