
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
        displayData(data);
    } catch (error) {
        document.getElementById('api-data').innerHTML = '<p>Ошибка загрузки данных.</p>';
    }
}

async function createData() {
    try {
        let response = await fetch('https://api.example.com/data', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: 'Новый элемент', value: '123' })
        });
        let data = await response.json();
        displayData(data);
    } catch (error) {
        document.getElementById('api-data').innerHTML = '<p>Ошибка создания данных.</p>';
    }
}

async function updateData(id) {
    try {
        let response = await fetch(`https://api.example.com/data/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: 'Обновленный элемент', value: '456' })
        });
        let data = await response.json();
        displayData(data);
    } catch (error) {
        document.getElementById('api-data').innerHTML = '<p>Ошибка обновления данных.</p>';
    }
}

async function patchData(id) {
    try {
        let response = await fetch(`https://api.example.com/data/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ value: '789' })
        });
        let data = await response.json();
        displayData(data);
    } catch (error) {
        document.getElementById('api-data').innerHTML = '<p>Ошибка частичного обновления.</p>';
    }
}

async function deleteData(id) {
    try {
        await fetch(`https://api.example.com/data/${id}`, { method: 'DELETE' });
        document.getElementById('api-data').innerHTML = '<p>Данные успешно удалены.</p>';
    } catch (error) {
        document.getElementById('api-data').innerHTML = '<p>Ошибка удаления данных.</p>';
    }
}

function displayData(data) {
    document.getElementById('api-data').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}

