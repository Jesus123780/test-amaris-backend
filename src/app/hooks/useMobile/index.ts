import { useEffect, useState } from 'react';

/**
 * Hook personalizado para detectar dispositivos móviles y manejar cambios en el tamaño de la ventana.
 * @param {object} props - Las propiedades del hook.
 * @param {Function} props.callBack - Una función de devolución de llamada opcional que se ejecuta cuando cambia el tamaño de la ventana.
 * @returns {object} - Un objeto que contiene información sobre el dispositivo y el tamaño de la ventana.
 */
export const useMobile = (props: { callBack?: () => void } = {}) => {
  const { callBack = () => {} } = props || {};
  const [innerHeight, setInnerHeight] = useState<number | undefined>();
  const [innerWidth, setInnerWidth] = useState<number | undefined>();
  let isMobile = false;

  useEffect(() => {
    setInnerHeight(window.innerHeight);
    setInnerWidth(window.innerWidth);
    callBack();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (!isNaN(window?.innerHeight) && window?.innerHeight !== innerHeight) {
        setInnerHeight(window.innerHeight);
      }
      if (!isNaN(window.innerWidth) && window.innerWidth !== innerWidth) {
        setInnerWidth(window.innerWidth);
      }
      callBack();
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  if (typeof window !== 'undefined' && /Mobile/i.test(navigator?.userAgent || navigator?.vendor)) {
    isMobile = true;
  }

  return {
    isMobile,
    innerHeight,
    innerWidth,
  };
};
