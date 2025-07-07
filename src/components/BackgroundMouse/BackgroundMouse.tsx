import { useEffect, useRef, type ReactNode } from "react";
import "./BackgroundMouse.css";

type Props = {
  children: ReactNode;
};

export const BackgroundMouse = ({ children }: Props) => {
  const interBubbleRef = useRef(null);
  let curX = useRef(0);
  let curY = useRef(0);
  let tgX = useRef(0);
  let tgY = useRef(0);

  useEffect(() => {
    const interBubble: any = interBubbleRef.current;

    if (!interBubble) return;

    const move = () => {
      curX.current += (tgX.current - curX.current) / 20;
      curY.current += (tgY.current - curY.current) / 20;
      interBubble.style.transform = `translate(${Math.round(
        curX.current
      )}px, ${Math.round(curY.current)}px)`;
      requestAnimationFrame(move);
    };

    const handleMouseMove = (event: any) => {
      tgX.current = event.clientX;
      tgY.current = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    move();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div className="text-container">{children}</div>
      <div className={`gradient-bg`}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive" ref={interBubbleRef}></div>
        </div>
      </div>
    </div>
  );
};
