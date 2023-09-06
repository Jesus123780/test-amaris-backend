import React, { ReactNode } from 'react';
import './TestimonialSlider.scss';

interface Carrusel3DProps {
  children: ReactNode;
  active: number;
  moveRight: () => void;
  moveLeft: () => void;
  maxView?: number;
}

type CardStyle = {
    '--active': number;
    '--offset': number;
    '--direction': number;
    '--abs-offset': number;
    pointerEvents: 'auto' | 'none';
    opacity: '0' | '1';
    display: 'none' | 'block';
};

export const TestimonialSlider: React.FC<Carrusel3DProps> = ({
  children,
  active,
  moveRight,
  moveLeft,
  maxView,
}) => {
  const MAX_VISIBILITY = maxView ?? 3;
  const count = React.Children.count(children);

  return (
    <>
      <div className='carousel'>
        {React.Children.map(children, (child, i) => (
          <div
            className='card-container'
            style={{
                '--active': i === active ? 1 : 0,
                '--offset': (active - i) / 3,
                '--direction': Math.sign(active - i),
                '--abs-offset': Math.abs(active - i) / 3,
                pointerEvents: active === i ? 'auto' : 'none',
                opacity: Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                display: Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
              } as CardStyle}
          >
            {child}
          </div>
        ))}
      </div>
      <div>
        <div>
          <button
            onClick={moveLeft}
            disabled={active === 0}
          >
            Click
          </button>
        </div>

        <div>
          <button
            onClick={moveRight}
            disabled={active === count - 1}
          >
            Click
          </button>
        </div>
      </div>
    </>
  );
};

