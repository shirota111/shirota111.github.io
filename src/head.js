export function loadHead() {
    const head = document.head;
    const links = [
        'main.css',
        'modules/module1.css',
        'modules/module2.css',
        'modules/module3.css',
        'modules/module4.css'
    ];
    const scripts = [
        'module1.js',
        'module2.js',
        'module3.js',
        'module4.js',
    ];

    links.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        head.appendChild(link);
    });

    scripts.forEach(src => {
        const script = document.createElement('script');
        script.src = src;
        script.defer = true;
        head.appendChild(script);
    });
}