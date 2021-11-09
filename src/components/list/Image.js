import React, {useCallback} from 'react';
import styled from 'styled-components'
import parse from 'html-react-parser'
import { color, font } from '../../styled/variables'


const My = styled.div`
  cursor: pointer;
  overflow: hidden;
  img{
    transition: all .35s;
  }
  &:hover {
    img{
        transform: scale()(1.1);
        opacity: .875;
      }
    }
`


const Image = ({ src=null, thumb, isImg=false }) => {

  const onClick = useCallback(e => {
    if(isImg) {
      //모달창
    }
    else if(src) window.open(src) //새창 오픈
  }, [isImg, src ])


  return (
    <My>
      <img src={ thumb } alt="" className="w-100" onClick={ onClick } />
    </My>

  );
}

export default React.memo(Image)