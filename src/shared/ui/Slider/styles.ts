import styled from '@emotion/styled/macro';

export const SliderHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledSlider = styled.div`
  position: relative;
  border-radius: 3px;
  background: #dddddd;
  height: 15px;
`;

export const StyledThumb = styled.div`
  width: 10px;
  height: 25px;
  border-radius: 3px;
  position: relative;
  top: -5px;
  opacity: 0.5;
  background: #823eb7;
  cursor: pointer;
`;