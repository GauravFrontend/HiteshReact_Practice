import React, { useState } from 'react'
import "../App.css"
const Weather = () => {
    const [query, setQuery] = useState("");
    const [response, setResponse] = useState({});

    return (
        <div>
            <main>
                <div className="search">
                    <div id="sea">
                        <input onChange={(e) => setQuery(e.target.value)} type="text" />
                        <button onClick={(e) => {
                            e.preventDefault()
                            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=cacc368769c40689ef61426ae3d18e2b`)
                                .then((res) => res.json())
                                .then((res) => setResponse(res))
                                console.log(response)


                        }}>Search</button>
                    </div>
                    <div id="top">
                        <h1>{response.name ? response.name : 'Name not available'}</h1>
                        <h1>{response.sys && response.sys.country ? response.sys.country : 'Country not available'}</h1>
                    </div>

                    <div id="mid">
                        <h2>{response.main && response.main.temp ? response.main.temp : 'Temperature not available'}</h2>
                        <h2>{response.weather && response.weather[0] && response.weather[0].main ? response.weather[0].main : 'Weather not available'}</h2>
                    </div>

                </div>
            </main>

        </div>
    )
}

export default Weather