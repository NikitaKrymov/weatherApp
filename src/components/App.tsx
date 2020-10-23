import React from 'react';
import GridBox from '../elements/GridBox';
import theme from '../theme';
import WeatherCard from './WeatherCard';

const GRIDBOX_THEME = {
    border: '1px solid black',
    gridAutoFlow: theme.gridAutoFlow.column
}

const WeatherApp: React.FC = () => {

    return(
        <GridBox theme={GRIDBOX_THEME}>
            <WeatherCard/>
        </GridBox>
    );
}

export default WeatherApp;