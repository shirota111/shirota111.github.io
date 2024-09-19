function loadScript(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${url}`);
            }
            return response.text();
        })
        .then(scriptText => {
            const scriptElement = document.createElement('script');
            scriptElement.textContent = scriptText;
            document.body.appendChild(scriptElement);
        });
}

loadScript('../src/module1.js')
    .then(() => loadScript('../src/module2.js'))
    .then(() => loadScript('../src/module3.js'))
    .then(() => loadScript('../src/module4.js'))
　  .then(() => loadScript('../src/hamburgerMenu.js'))
    .catch(error => console.error(error));