import React, { useContext } from 'react';
import { ThemeContext } from '../UseContext/UseContextComp';

const FunctionComponent = () => {
  const darkTheme = useContext(ThemeContext);
  const themeStyle = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem',
  };

  return <div style={themeStyle}>Function Theme</div>;
};

export default FunctionComponent;
