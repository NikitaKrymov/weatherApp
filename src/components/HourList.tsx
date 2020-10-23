import React from 'react';
import FlexBox from '../elements/FlexBox';
import HourDiv from '../elements/HourDiv';
import theme from '../theme';

interface Props {
    forecast: any[],
    isF: boolean
}

const FLEXBOX_THEME = {
    flexDirection: theme.flexDirection.row,
    justifyContent: theme.justifyContent.se,
    alignItems: theme.alignItems.center
}

const HourList: React.FC<Props> = (props) => {

    console.log(props.forecast)
    return (
        <FlexBox theme={FLEXBOX_THEME} style={{ padding: '0.3em' }}>
            {props.forecast.map((hour, i) => {
                const time = hour.time.slice(11,13);
                return(
                    <HourDiv key={i} >
                        <div style={{ fontSize: '0.7em'}}>
                            {time > 12 ? time-12 + 'pm' : time + 'am' }
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <img alt="icon" src={hour.condition.icon} style={{ width: '50%', height: '100%' }}/>
                        </div>
                        <div>
                            {props.isF ? hour.temp_f + ' F' : hour.temp_c + ' C'}
                        </div>
                    </HourDiv>
                );
            })}
        </FlexBox>
        
    );
}

export default HourList;