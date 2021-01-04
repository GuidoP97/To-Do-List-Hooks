import React from 'react';
import styled from 'styled-components';
import allColors from '../styles/colors';
import ColorBox from './ColorBox';
import {generate as id} from 'shortid';

const Input = styled.input`
    border:none;
    border-bottom:1px solid ${allColors.mainColor};
    background: none;
    outline:none;
    color:${allColors.mainColor};
    width:22%;
`

const Button = styled.button`
    background-color:transparent;
    border:1px solid ${allColors.mainColor};
    border-radius:5px;
    color:${allColors.mainColor};
    padding:.3rem .5rem;
    cursor:pointer;
    outline:none;
    margin-top:.8rem;

    &:hover {
      background-color:${ allColors.mainColor };
      color: #fff;
    }
`

const ColorsContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:10rem;
    /* hay que poner el with a 150px */
    margin:0 auto .5rem;
`

const FormTask = ({ handleChangeColor, handleSubmit, colorSelected }) => (
  <form onSubmit={handleSubmit}>
    <Input type="text" name="title"/>
    <ColorsContainer>
      {
        allColors.colors.map( color =>(
          <ColorBox 
            color={color} 
            handleChangeColor={handleChangeColor} 
            key={id()}
            isChecked={colorSelected === color}
          />
        ))
      }
    </ColorsContainer>
    <Button>Add Task</Button>
  </form>
)

export default FormTask