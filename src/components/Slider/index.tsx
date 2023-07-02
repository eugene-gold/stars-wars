import { FC, useRef } from "react";
import { SliderHeader, StyledSlider, StyledThumb } from "./styles";

type SliderProps = {
    initial: number,
    max: number, 
    onChange: (value: any)=> void,
    formatFn: (number: number) => string
}

// TODO
// не работает слайдер, что то неверно при описании TS 
//доделать при желании

const getPercentage = (current: number, max: number) => (100 * current) / max;
const getValue = (percentage: number, max: number) => ((max / 100) * percentage).toString();
const getLeft = (percentage: number) => `calc(${percentage}% - 5px)`;

export const Slider: FC<SliderProps> = ({initial, max, onChange, formatFn = (number: number) => (number.toFixed(0)).toString()}) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const thumbRef = useRef<HTMLDivElement>(null);
    const diff = useRef(0);
    const currentRef = useRef<HTMLDivElement>(null);

    const initialPercentage = getPercentage(initial, max);
  
    const handleMouseMove = (event: MouseEvent) => {
        if(sliderRef.current && thumbRef.current && currentRef.current) {
            let newX = event.clientX - diff.current - sliderRef.current.getBoundingClientRect().left;

            const end = sliderRef.current.offsetWidth - thumbRef.current.offsetWidth;

            const start = 0;

            if (newX < start) {
                newX = 0;
            }

            if (newX > end) {
                newX = end;
            }

            const newPercentage = getPercentage(newX, end);
            const newValue = getValue(newPercentage, max);
            thumbRef.current.style.left = getLeft(newPercentage);
            currentRef.current.textContent = formatFn(parseInt(newValue));
            currentRef.current.textContent = newValue;
            onChange(newValue)
        }
      
    };

    const handleMouseUp = () => {
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('mousemove', handleMouseMove)
    }
    
    const handleMouseDown = (event: MouseEvent) => {
        if(thumbRef.current) {
            diff.current = event.clientX - thumbRef.current.getBoundingClientRect().left;
        }
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      };
  
    return (
      <>
      <SliderHeader >
        <strong ref={currentRef}>{formatFn(initial)}</strong>
        &nbsp;/&nbsp;
        {formatFn(max)}
      </SliderHeader>
        <StyledSlider ref={sliderRef}>
          <StyledThumb ref={thumbRef}
           onMouseDown={()=>handleMouseDown}
           style={{ left: getLeft(initialPercentage) }}
           />
        </StyledSlider>
      </>
    );
  };