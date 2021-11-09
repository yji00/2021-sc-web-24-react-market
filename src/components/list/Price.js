import React, { useState } from 'react';
import styled, { css } from 'styled-components'
import { color, media, font } from '../../styled/variables'
import { currency } from '../../modules/util'

const My = styled.span`
  color: ${ props => props.color !== '' ? props.color : color.darker };
  font-size: ${ props => props.size };
  text-decoration: ${ props => props.del ? 'line-through' : 'none' };
`

const Price = ( {value, size='1em', color='', del=false} ) => {
  return (
    <My color={ color } size ={size} del= { del }>
      {currency(value)}
    </My>
  );
}

export default React.memo(Price)
