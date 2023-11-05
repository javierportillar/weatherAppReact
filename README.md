# **React Weather App**

To develop this project, it was needed to create two components inside `App.jsx`:

1. **Search component**
2. **Weather component**

How we need to comunicate both components, under the component father it was created an `useState` with the variables (`city` and `setCity`).

In order to get this comunication completed, the component **Search** receibes as props (`serCity`), because that's the component in charge of search the new city.

The component **Weather** receibes `city` as props, because that's the component in charge of renderind the information of the new city setted on (`setCity`).

## **Search component**
**Search component** is the component in charge of receibe the name of the city that is going to be consulted, this component has an input text and a button with an SVG code.

The input text has an event KeyDown that pulls `handleKeyDown` fcn, this fcn check if the `event.key` = Enter. In case that it's true, it will set the name of the new city using the hook `useState`.

The button element has an click event that pulls `handleSearch` fcn and inside of it, set the name of the city with the current value of the reference element (input).

## **Weather component**
**Weather component** is in charge of receibe the city name and set the information of that city as its needed (name, icon, description, temp, humidity, speed and country).

Under this component it was created an `useState` with the data that is going to be rendered called `weatherData` and `setWeatherData`.

This was needed to update the information when the state of that variables change (when a new city word is written and then clicked button or press enter).

It was created the same variables that:
- save the ApiKey (`apiKey`)
- makes the Api petition. (`fetchWeather`)

`fetchWeather` calls `displayWeather` fcn and gives data (converted into JSON) as params

`displayWeather` desctructure data variable into (name, icon, description, temp, humidity, speed and country). And set the body bg style with the name of the new city and calls `setWeatherData` sending the new infrmation of the data.

It was needed an `useEffect`, creating a cb using `fetchWeather(city)` and keeping an eye on `(city)` variable. It means that `fetchWeather(city)` is going to be called every time that the variable `city` changes state.

Finally it returns the HTML code with the information setted on `weatherData` variable.
