import React from 'react';
import FlexBox from '../elements/FlexBox';
import theme from '../theme';

const FLEXBOX_THEME = {
    flexDirection: theme.flexDirection.column,
    paddingTop: '1em',
    paddingRight: '1em'
}

const ROW_FLEXBOX_THEME = {
    flexDirection: theme.flexDirection.row,
    justifyContent: theme.justifyContent.flexEnd,
}

const ACTUAL_TEMPERATURE_STYLE = {
    fontSize: '4em',
    color: 'white'
}

const DEGREE_STYLE = {
    color: 'white',
    paddingLeft: '1em',
    paddingTop: '0.5em'
}

interface Props {
    onTempChange: () => void,
    cTemperature: number,
    cFeelsLikeTemperature: number,
    fTemperature: number,
    fFeelsLikeTemperature: number,
    isF: boolean
}

const Temperature: React.FC<Props> = (props) => {
    if (props.isF) {
        return(
            <FlexBox theme={FLEXBOX_THEME}>
                <FlexBox theme={ROW_FLEXBOX_THEME}>
                    <div style={ACTUAL_TEMPERATURE_STYLE}>
                        {props.fTemperature}
                    </div>
                    <div style={DEGREE_STYLE} onClick={() => props.onTempChange() } >
                        F
                    </div>
                </FlexBox>
                <FlexBox theme={ROW_FLEXBOX_THEME}>
                    <div style={{ fontSize: '1.2em', color: 'white' }}>
                        Feels like {props.fFeelsLikeTemperature}
                    </div>
                </FlexBox>
            </FlexBox>
        );
    } else {
        return(
            <FlexBox theme={FLEXBOX_THEME}>
                <FlexBox theme={ROW_FLEXBOX_THEME}>
                    <div style={ACTUAL_TEMPERATURE_STYLE}>
                        {props.cTemperature}
                    </div>
                    <div style={DEGREE_STYLE} onClick={() => props.onTempChange()  }>
                        C
                    </div>
                </FlexBox>
                <FlexBox theme={ROW_FLEXBOX_THEME}>
                    <div style={{ fontSize: '1.2em', color: 'white' }}>
                        Feels like {props.cFeelsLikeTemperature}
                    </div>
                </FlexBox>
            </FlexBox>
        );
    }
}

export default Temperature;