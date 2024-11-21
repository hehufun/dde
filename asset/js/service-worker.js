const CACHE_NAME = 'dde_web_v1';
const urlsToCache = [
    '../',
    '../css/main.css',
    './main.js',
    '../json/dde_ics.json'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    console.log('从缓存中获取资源:', event.request.url);
                    return response; // 如果在缓存中找到请求的资源，则返回缓存中的资源
                }
                console.log('从网络获取资源:', event.request.url);
                return fetch(event.request); // 如果在缓存中没有找到请求的资源，则从网络获取资源
            })
    );
});

if ('service-Worker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
            console.log('Service Worker 注册成功:', registration);
        })
        .catch(error => {
            console.error('Service Worker 注册失败:', error);
        });
} else {
    console.error('浏览器不支持 Service Worker');
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
            console.log('Service Worker 注册成功:', registration);

            // 检查 Service Worker 状态
            if (registration.installing) {
                console.log('Service Worker 正在安装');
            } else if (registration.waiting) {
                console.log('Service Worker 等待激活');
            } else if (registration.active) {
                console.log('Service Worker 已激活');
            }
        })
        .catch(error => {
            console.error('Service Worker 注册失败:', error);
        });
} else {
    console.error('浏览器不支持 Service Worker');
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
            console.log('Service Worker 注册成功:', registration);

            if (navigator.serviceWorker.controller) {
                console.log('当前页面由 Service Worker 控制');
            } else {
                console.log('当前页面未由 Service Worker 控制');
            }
        })
        .catch(error => {
            console.error('Service Worker 注册失败:', error);
        });
} else {
    console.error('浏览器不支持 Service Worker');
}
