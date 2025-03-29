async function fetchData(section) {
    const apiEndpoints = {
        home: 'https://api.example.com/home',
        about: 'https://api.example.com/about',
        services: 'https://api.example.com/services',
        contact: 'https://api.example.com/contact',
        casino: 'https://site-mirror.pokerok.com.ru/registration',
        weather: 'https://api.open-meteo.com/v1/forecast?latitude=55.7512&longitude=37.6184&current_weather=true'
    };

    document.getElementById('api-data').innerHTML = '<p>Загрузка данных...</p>';

    try {
        let response = await fetch(apiEndpoints[section]);
        let data = await response.json();
        displayData(data, section);
    } catch (error) {
        document.getElementById('api-data').innerHTML = '<p>Ошибка загрузки данных.</p>';
    }
}

function displayData(data, section) {
    if (section === 'weather') {
        document.getElementById('api-data').innerHTML = `<h3>Погода в Москве</h3>
                   <p>Температура: ${data.current_weather.temperature}°C</p>
                   <p>Ветер: ${data.current_weather.windspeed} км/ч</p>`;
    } else {
        document.getElementById('api-data').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    }
}
