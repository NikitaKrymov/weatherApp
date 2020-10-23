import React from 'react';
import FlexBox from '../elements/FlexBox';
import theme from '../theme';

const FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.flexStart,
    flexDirection: theme.flexDirection.column,
    paddingLeft: '1em',
    paddingTop: '1em',
}

const TOP_ROW_FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.flexStart,
}

const LOWER_ROW_FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.flexStart,
    flexDirection: theme.flexDirection.column,
    paddingTop: '1em'
}

const DIV_STYLE = { 
    color: 'white', 
    marginTop: '1em' 
}

interface Props {
    condition: string,
    sunriseTime: string,
    sunsetTime: string,
    moonriseTime: string,
    moonsetTime: string,
    rainChance: string,
    windSpeed: string,
    icon: string
}

const LeftTopDashboard: React.FC<Props> = (props) => {
    return(
        <FlexBox theme={FLEXBOX_THEME} >
            <FlexBox theme={TOP_ROW_FLEXBOX_THEME}>
                <div>
                    <img alt="icon" src={props.icon}/>
                </div>
                <div style={{ fontSize: '2em', color: 'white', paddingLeft: '0.3em', paddingTop: '0.3em'}}>
                    {props.condition}
                </div>
            </FlexBox>
            <FlexBox theme={LOWER_ROW_FLEXBOX_THEME}>
                <div style={DIV_STYLE}>
                    Sunrise: {props.sunriseTime}
                </div>
                <div style={DIV_STYLE}>
                    Sunset: {props.sunsetTime}
                </div>
                <div style={DIV_STYLE}>
                    <i className="fas fa-cloud-showers-heavy"></i> {props.rainChance}%
                </div>
                <div style={DIV_STYLE}>
                    <i className="fas fa-wind"></i> {props.windSpeed}mpH
                </div>
            </FlexBox>
        </FlexBox>
    );
}

export default LeftTopDashboard;