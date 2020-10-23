import React from 'react';
import FlexBox from '../elements/FlexBox';
import GridBox from '../elements/GridBox';
import DayDiv from '../elements/DayDiv';
import theme from '../theme';

const DAYS = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'FRIDAY', 'SATURDAY'];

interface Props {
    forecast: any[],
    isF: boolean,
    onDayClick: (index: number) => void;
}

const GRIDBOX_THEME = {
    gridTemplateColumns: theme.gridTemplateColumns.three,

}

const FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.sa
}

const TOP_ROW_FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.se,
}

const LEFT_CONTENT_FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.flexStart,
    flexDirection: theme.flexDirection.column,
    paddingLeft: '0.5em',
    alignItems: 'flex-start'
}

const RIGHT_CONTENT_FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.flexEnd,
    flexDirection: theme.flexDirection.column,
    alignItems: 'flex-end',
    paddingRight: '0.5em',
    paddingBottom: '0.5em'

}

const DIV_STYLE = { 
    color: 'white', 
    marginTop: '1em' 
}

const DayList: React.FC<Props> = (props) => {
    return(
        <GridBox theme={GRIDBOX_THEME}>
            {props.forecast.map((day, i) => {
                const year = day.date.slice(0,4);
                const month = Number(day.date.slice(5,7)) - 1;
                const date = Number(day.date.slice(8,11)) + 1;
                const currentDay = new Date(Date.UTC(year, month, date));
                return(
                    <DayDiv key={i} onClick={() => props.onDayClick(i)} >
                        <FlexBox theme={FLEXBOX_THEME}>
                            <FlexBox theme={TOP_ROW_FLEXBOX_THEME}>
                                <div>
                                    <img alt="icon" src={day.day.condition.icon}/>
                                </div>
                                <div style={{ paddingTop: '1em', color: 'white'}}>
                                    {DAYS[currentDay.getDay()]} {date}
                                </div>
                            </FlexBox>
                            <div style={{ paddingTop: '0.4em', fontSize: '1.5em', color: 'white'}}>
                                { props.isF ? day.day.avgtemp_f+' F' : day.day.avgtemp_c+' C'}
                            </div>
                        </FlexBox>
                        <GridBox style={{
                            gridTemplateColumns: '1fr 1fr',
                        }}>
                            <FlexBox theme={LEFT_CONTENT_FLEXBOX_THEME}>
                                <div style={DIV_STYLE}>
                                    Sunrise: {day.astro.sunrise}
                                </div>
                                <div style={DIV_STYLE}>
                                    Sunset: {day.astro.sunset}
                                </div>
                                <div style={DIV_STYLE}>
                                    <i className="fas fa-cloud-showers-heavy"></i> {day.day.daily_chance_of_rain}%
                                </div>
                                <div style={DIV_STYLE}>
                                    <i className="fas fa-wind"></i> {day.day.maxwind_mph}mpH
                                </div>
                            </FlexBox>
                            <FlexBox theme={RIGHT_CONTENT_FLEXBOX_THEME}>
                                <div style={DIV_STYLE}>
                                    Max: {props.isF ? day.day.maxtemp_f+ ' F' : day.day.maxtemp_c+ ' C'}
                                </div>
                                <div style={DIV_STYLE}>
                                    Min: {props.isF ? day.day.mintemp_f+ ' F' : day.day.mintemp_c+ ' C'}
                                </div>
                                <div style={DIV_STYLE}>
                                    <i className="fas fa-cloud-showers-heavy"></i> {day.day.daily_chance_of_rain}%
                                </div>
                                <div style={DIV_STYLE}>
                                    {day.day.avghumidity}%
                                </div>
                            </FlexBox>
                        </GridBox>
                    </DayDiv>
                );
            })}
        </GridBox>
    );
}

export default DayList;