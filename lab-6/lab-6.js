async function fetchData(section) {
    const apiEndpoints = {
        home: 'https://api.example.com/home',
        about: 'https://api.example.com/about',
        services: 'https://api.example.com/services',
        contact: 'https://api.example.com/contact',
        casino: 'https://site-mirror.pokerok.com.ru/registration'
    };

    document.getElementById('api-data').innerHTML = '<p>Загрузка данных...</p>';

    try {
        let response = await fetch(apiEndpoints[section]);
        let data = await response.json();
        document.getElementById('api-data').innerHTML = `<p>${JSON.stringify(data)}</p>`;
    } catch (error) {
        document.getElementById('api-data').innerHTML = '<p>Ошибка загрузки данных.</p>';
    }
}
