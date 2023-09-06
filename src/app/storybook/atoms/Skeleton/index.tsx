import React from 'react';
import './Skeleton.scss'; // Asegúrate de importar tu archivo de estilos SASS

interface SkeletonProps {
  height?: number;
  width?: string;
  margin?: string;
  numberObject?: number;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  height,
  width = '100%',
  margin,
  numberObject,
}) => {
  return (
    <React.Fragment>
      {Array.from(Array(numberObject || 1).keys()).map((value) => {
        return (
          <div
            className='container'
            style={{
              height: `${height}px`,
              width: `${width}`,
              margin: `${margin}`,
            }}
            key={value + 1}
          >
            <div className='card-loader' style={{ height: `${height}px` }}></div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

