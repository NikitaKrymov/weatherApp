import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { requestGeolocation } from '../actions';
import FlexBox from '../elements/FlexBox';
import GridBox from '../elements/GridBox';
import WeatherAppDiv from '../elements/WeatherAppDiv';
import theme from '../theme';
import getGeolocation from '../utils/getGeolocation';
import WEATHER_APP_BACKGROUND from '../images/weatherBackground.jpg';
import NIGHT_WEATHER_APP_BACKGROUND from '../images/nightWeatherAppBackground.jpg';
import { AppState } from '../reducers/rootReducer';
import Temperature from './Temperature';
import DayList from './DayList';
import HourList from './HourList';
import LeftTopDashboard from './LetfTopDashboard';

const WEATHER_APP_BACKGROUND_STYLE = { 
    backgroundImage: `url(${new Date().getHours() < 18 && new Date().getHours() > 6 ? WEATHER_APP_BACKGROUND : NIGHT_WEATHER_APP_BACKGROUND})`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat' 
}

const TOP_GRIDBOX_THEME = {
    gridTemplateColumns: theme.gridTemplateColumns.three,
}

const TOP_FLEXBOX_DIV_STYLE = {
    margin: '0.5em',
    fontSize: '2em',
    color: 'white'
}

const TOP_FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.center,
    paddingTop: '1em'

}

type Props = MapDispatchToProps & MapStateToProps;

class WeatherCard extends React.Component<Props> {
    componentDidMount(){
        getGeolocation((geolocationResult: any) => {
            this.props.requestGeolocation(geolocationResult);
        }, (geolocationResult: any) => {
            this.props.requestGeolocation(geolocationResult);
        });
    }

    state = {
        current: 0,
        isF: true
    }

    onTempChange = () => {
        this.setState({ isF: !this.state.isF })
    }

    onDayClick = (index: number) => {
        this.setState({ current: index})
    }

    render(){
        if (this.props.weatherData.status !== 200){
            return(
               <div>
                   Loading
               </div>
            );
        } else {
            console.log(this.props.weatherData.data.forecast.forecastday[this.state.current])
            return(
                <WeatherAppDiv style={WEATHER_APP_BACKGROUND_STYLE} >
                    <GridBox theme={TOP_GRIDBOX_THEME}>
                        <LeftTopDashboard 
                            condition = {this.props.weatherData.data.forecast.forecastday[this.state.current].day.condition.text}
                            sunriseTime = {this.props.weatherData.data.forecast.forecastday[this.state.current].astro.sunrise}
                            sunsetTime = {this.props.weatherData.data.forecast.forecastday[this.state.current].astro.sunset}
                            moonriseTime = {this.props.weatherData.data.forecast.forecastday[this.state.current].astro.moonrise}
                            moonsetTime = {this.props.weatherData.data.forecast.forecastday[this.state.current].astro.moonset}
                            rainChance = {this.props.weatherData.data.forecast.forecastday[this.state.current].day.daily_chance_of_rain}
                            windSpeed = {this.props.weatherData.data.forecast.forecastday[this.state.current].day.maxwind_mph}
                            icon = {this.props.weatherData.data.forecast.forecastday[this.state.current].day.condition.icon}

                        />
                        <FlexBox theme={TOP_FLEXBOX_THEME}>
                            <div style={TOP_FLEXBOX_DIV_STYLE}>
                                <i style={{fontSize: '1em' }} className="fas fa-city" />
                            </div>
                            <div style={TOP_FLEXBOX_DIV_STYLE}>
                                {this.props.weatherData.data.location.name}
                            </div>
                        </FlexBox>
                        <Temperature
                            onTempChange={this.onTempChange}
                            isF = {this.state.isF}
                            cTemperature = {this.props.weatherData.data.current.temp_c}
                            cFeelsLikeTemperature = {this.props.weatherData.data.current.feelslike_c}
                            fTemperature = {this.props.weatherData.data.current.temp_f}
                            fFeelsLikeTemperature = {this.props.weatherData.data.current.feelslike_f}
                        />
                    </GridBox>
                    <HourList isF = {this.state.isF} forecast={this.props.weatherData.data.forecast.forecastday[this.state.current].hour}/>
                    <DayList isF = {this.state.isF} forecast={this.props.weatherData.data.forecast.forecastday} onDayClick={(index) => this.onDayClick(index)} />
                </WeatherAppDiv>
            );
        }        
    }
}

interface MapDispatchToProps {
    requestGeolocation: (geolocationResult: any) => void,
}

interface MapStateToProps {
    weatherData: any
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => ({
    requestGeolocation: (geolocationResult) => dispatch(requestGeolocation(geolocationResult))
})

const mapStateToProps = (state: AppState): MapStateToProps => ({
    weatherData: state.app.weatherData
})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCard);