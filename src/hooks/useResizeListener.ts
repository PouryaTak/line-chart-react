import {useEffect} from 'react'
export default function useResizeListener(callback: () => void, dependencies: any[]) {
    const debounce = () => {
        let timer: NodeJS.Timeout;
        return (): void => {
          clearTimeout(timer);
          timer = setTimeout(callback, 300);
        };
      };
    
      const reCalculate = debounce();
    
      useEffect(() => {
        callback();
        window.addEventListener("resize", reCalculate);
        return () => {
          window.removeEventListener("resize", reCalculate);
        };
      }, [callback, reCalculate, ...dependencies]);
}