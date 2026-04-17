// ============================================================
// Навигатор по Старому кладбищу Таганрога
// С обновленными координатами входа
// ============================================================

// Глобальные переменные
let myMap;
let allPlacemarks = [];
let activePlacemarks = [];
let userLocation = null;
let currentRouteLine = null;
let currentYandexRoute = null;
let currentSelectedPlacemark = null;

// Координаты входа (ОБНОВЛЕНЫ)
const ENTRANCE = {
    lat: 47.207333,
    lon: 38.904194,
    name: "Вход на кладбище"
};

// ========== ИНИЦИАЛИЗАЦИЯ КАРТЫ ==========
ymaps.ready(initMap);

function initMap() {
    console.log("Инициализация карты...");
    
    myMap = new ymaps.Map("map", {
        center: [ENTRANCE.lat, ENTRANCE.lon],
        zoom: 17,
        controls: ['zoomControl', 'fullscreenControl']
    });
    
    const geolocationControl = new ymaps.control.GeolocationControl({
        options: { position: { right: 10, top: 100 } }
    });
    myMap.controls.add(geolocationControl);
    
    addEntranceMarker();
    loadAllPlacemarks();
    renderObjectsList(gravesData);
    
    document.getElementById('objectsCount').innerText = objectsCount;
    if (typeof allCategories !== 'undefined') {
        document.getElementById('categoriesCount').innerText = allCategories.length;
    }
    
    setupSearch();
    setupMobileMenu();
    createCategoryButtons();
    getUserLocation();
    
    // Обработчики кнопок
    document.getElementById('closeInfoPanelBtn').addEventListener('click', closeInfoPanel);
    document.getElementById('mobileClearBtn').addEventListener('click', () => clearAllData());
    document.getElementById('hideAllMarkersBtn').addEventListener('click', () => clearAllData());
    document.getElementById('locateBtn').addEventListener('click', () => {
        if (userLocation) {
            myMap.setCenter([userLocation.lat, userLocation.lon], 17);
            showTempMessage('Центрировано на вашем местоположении');
        } else {
            getUserLocation();
        }
    });
    
    // Модальное окно
    setTimeout(function() {
        const modal = document.getElementById('welcomeModal');
        if (modal) {
            modal.style.display = 'flex';
            
            const closeBtn = document.getElementById('closeWelcomeModal');
            if (closeBtn) {
                closeBtn.onclick = function(e) {
                    e.stopPropagation();
                    modal.style.display = 'none';
                };
            }
            
            modal.onclick = function(e) {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            };
        }
    }, 500);
    
    console.log("Карта готова");
}

function addEntranceMarker() {
    const marker = new ymaps.Placemark(
        [ENTRANCE.lat, ENTRANCE.lon],
        { hintContent: ENTRANCE.name, balloonContent: `<strong>${ENTRANCE.name}</strong><br>🚪 Начало маршрутов по кладбищу` },
        { preset: 'islands#greenStretchyIcon', iconColor: '#2ecc71' }
    );
    myMap.geoObjects.add(marker);
}

// ========== ЗАГРУЗКА ВСЕХ МЕТОК ==========
function loadAllPlacemarks() {
    console.log("Создание меток для всех объектов...");
    
    gravesData.forEach(grave => {
        const placemark = new ymaps.Placemark(
            [grave.lat, grave.lon],
            {
                hintContent: grave.name,
                balloonContent: createBalloonContent(grave)
            },
            {
                preset: 'islands#circleIcon',
                iconColor: '#e67e22',
                balloonOffset: [0, -20]
            }
        );
        
        placemark.events.add('click', () => {
            showObjectDetails(grave);
        });
        
        allPlacemarks.push({ id: grave.id, placemark, data: grave });
    });
    
    console.log(`Создано ${allPlacemarks.length} меток`);
}

// БАЛУН МЕТКИ - БЕЗ КНОПКИ "ПОДРОБНЕЕ"
function createBalloonContent(grave) {
    const photoHtml = grave.photo ? `<img src="${grave.photo}" style="width: 100%; max-height: 120px; object-fit: cover; border-radius: 8px; margin-top: 8px;" onerror="this.style.display='none'">` : '';
    return `
        <div style="max-width: 280px;">
            <strong style="font-size: 14px;">${grave.name}</strong><br>
            <span style="color: #e67e22; font-size: 11px;">${grave.category}</span>
            <p style="margin-top: 8px; font-size: 12px; line-height: 1.4;">${grave.description.substring(0, 120)}${grave.description.length > 120 ? '...' : ''}</p>
            ${photoHtml}
        </div>
    `;
}

function showMarkerOnMap(placemarkObj) {
    if (!placemarkObj) return false;
    
    const exists = activePlacemarks.some(p => p.id === placemarkObj.id);
    if (exists) return true;
    
    try {
        myMap.geoObjects.add(placemarkObj.placemark);
        activePlacemarks.push(placemarkObj);
        console.log(`✅ МЕТКА НА КАРТЕ: ${placemarkObj.data.name}`);
        return true;
    } catch(e) {
        console.error(`Ошибка добавления: ${placemarkObj.data.name}`, e);
        return false;
    }
}

function addMarkersForObjects(graves) {
    console.log(`=== ДОБАВЛЯЕМ ${graves.length} МЕТОК НА КАРТУ ===`);
    let count = 0;
    
    graves.forEach(grave => {
        const marker = allPlacemarks.find(p => p.id === grave.id);
        if (marker && showMarkerOnMap(marker)) {
            count++;
        }
    });
    
    console.log(`=== ДОБАВЛЕНО МЕТОК: ${count} ===`);
    return count;
}

// ========== ПОКАЗ ДЕТАЛЬНОЙ ИНФОРМАЦИИ ==========
function showObjectDetails(grave) {
    const photoHtml = grave.photo && grave.photo !== '' 
        ? `<img src="${grave.photo}" class="object-photo" onerror="this.style.display='none'">`
        : `<div class="object-photo" style="display: flex; align-items: center; justify-content: center; background: #f5f5f5; color: #999; flex-direction: column; min-height: 150px;">
            <i class="fas fa-image" style="font-size: 2rem; margin-bottom: 8px;"></i>Фото будет добавлено
           </div>`;
    
    const html = `
        <div class="object-card">
            <h3><i class="fas fa-info-circle"></i> ${grave.name}</h3>
            <span class="object-category-badge">${grave.category}</span>
            ${photoHtml}
            <p class="object-description">${grave.description}</p>
            <div class="object-actions">
                <button class="btn-primary" id="routeFromMyLocationBtn">📍 Маршрут от моего местоположения</button>
                <button class="btn-primary" id="routeFromEntranceBtn">🚶 Маршрут от входа</button>
                <button class="btn-secondary" id="closeDetailsBtn">✕ Закрыть</button>
            </div>
        </div>
    `;
    
    showInfoPanel(html);
    
    setTimeout(() => {
        const fromMyLocationBtn = document.getElementById('routeFromMyLocationBtn');
        const fromEntranceBtn = document.getElementById('routeFromEntranceBtn');
        const closeBtn = document.getElementById('closeDetailsBtn');
        
        if (fromMyLocationBtn) fromMyLocationBtn.onclick = () => buildHybridRoute(grave);
        if (fromEntranceBtn) fromEntranceBtn.onclick = () => buildRouteFromEntrance(grave);
        if (closeBtn) closeBtn.onclick = closeInfoPanel;
    }, 50);
}

// Функция для открытия деталей из списка
window.showFullInfo = function(id) {
    const grave = gravesData.find(g => g.id === id);
    if (grave) {
        showObjectDetails(grave);
        const placemarkObj = allPlacemarks.find(p => p.id === id);
        if (placemarkObj) {
            myMap.panTo([grave.lat, grave.lon], { flying: true, duration: 500 });
        }
    }
};

// ========== КОМБИНИРОВАННЫЙ МАРШРУТ ==========
function buildHybridRoute(grave) {
    if (!userLocation) {
        showTempMessage('Сначала определите ваше местоположение');
        getUserLocation();
        return;
    }
    
    clearAllData();
    addMarkersForObjects([grave]);
    
    const entrancePoint = [ENTRANCE.lat, ENTRANCE.lon];
    const gravePoint = [grave.lat, grave.lon];
    const userPoint = [userLocation.lat, userLocation.lon];
    
    // Линия от входа до объекта
    currentRouteLine = new ymaps.Polyline([entrancePoint, gravePoint], {}, {
        strokeColor: "#e67e22",
        strokeWidth: 5,
        strokeStyle: "solid",
        opacity: 0.9
    });
    myMap.geoObjects.add(currentRouteLine);
    
    const lineDistance = calculateDistance(entrancePoint, gravePoint);
    window.tempLineDistance = formatDistance(lineDistance);
    window.tempLineDuration = formatDuration(lineDistance);
    
    // Маршрут через Яндекс API
    try {
        const multiRoute = new ymaps.multiRouter.MultiRoute({
            referencePoints: [userPoint, entrancePoint]
        }, {
            boundsAutoApply: false,
            wayPointStartIconColor: "#2196f3",
            wayPointEndIconColor: "#2ecc71",
            routeStrokeColor: "#2196f3",
            routeStrokeWidth: 5
        });
        
        myMap.geoObjects.add(multiRoute);
        currentYandexRoute = multiRoute;
        
        multiRoute.model.events.once('success', () => {
            const activeRoute = multiRoute.getActiveRoute();
            if (activeRoute) {
                const apiDistance = activeRoute.properties.get('distance')?.text || 'неизвестно';
                const apiDuration = activeRoute.properties.get('duration')?.text || 'неизвестно';
                showHybridRouteInfo(apiDistance, apiDuration, window.tempLineDistance, window.tempLineDuration, grave.name);
            } else {
                showHybridRouteInfo("неизвестно", "неизвестно", window.tempLineDistance, window.tempLineDuration, grave.name);
            }
        });
        
        multiRoute.model.events.once('error', () => {
            showHybridRouteInfo("неизвестно", "неизвестно", window.tempLineDistance, window.tempLineDuration, grave.name);
        });
    } catch (error) {
        showHybridRouteInfo("неизвестно", "неизвестно", window.tempLineDistance, window.tempLineDuration, grave.name);
    }
    
    const bounds = calculateBounds([userPoint, entrancePoint, gravePoint]);
    if (bounds) myMap.setBounds(bounds, { zoomMargin: 100 });
}

function showHybridRouteInfo(apiDistance, apiDuration, lineDistance, lineDuration, graveName) {
    const html = `
        <div class="route-info">
            <div class="route-distance">🚶 Смешанный маршрут до "${graveName}"</div>
            <div style="margin: 12px 0; padding: 8px; background: #e3f2fd; border-radius: 12px;">
                <strong>📍 Часть 1 (Яндекс Карты):</strong><br>
                От вас до входа: ${apiDistance} · ⏱️ ${apiDuration}
            </div>
            <div style="margin: 12px 0; padding: 8px; background: #fff3e0; border-radius: 12px;">
                <strong>🚶 Часть 2 (Прямая линия):</strong><br>
                От входа до "${graveName}": ${lineDistance} · ⏱️ ${lineDuration}
            </div>
            <div class="object-actions">
                <button class="btn-primary" id="clearRouteBtn">🗑 Очистить</button>
                <button class="btn-secondary" id="closeRouteBtn">✕ Закрыть</button>
            </div>
        </div>
    `;
    showInfoPanel(html);
    
    setTimeout(() => {
        const clearBtn = document.getElementById('clearRouteBtn');
        const closeBtn = document.getElementById('closeRouteBtn');
        if (clearBtn) clearBtn.onclick = () => clearAllData();
        if (closeBtn) closeBtn.onclick = closeInfoPanel;
    }, 50);
}

// ========== МАРШРУТ ОТ ВХОДА ==========
function buildRouteFromEntrance(grave) {
    clearAllData();
    addMarkersForObjects([grave]);
    
    const startPoint = [ENTRANCE.lat, ENTRANCE.lon];
    const endPoint = [grave.lat, grave.lon];
    
    currentRouteLine = new ymaps.Polyline([startPoint, endPoint], {}, {
        strokeColor: "#e67e22",
        strokeWidth: 5,
        strokeStyle: "solid",
        opacity: 0.9
    });
    myMap.geoObjects.add(currentRouteLine);
    
    const distance = calculateDistance(startPoint, endPoint);
    showRouteInfo(formatDistance(distance), formatDuration(distance), "входа", grave.name);
    myMap.setBounds(calculateBounds([startPoint, endPoint]), { zoomMargin: 100 });
}

// ========== МАРШРУТ ПО КАТЕГОРИИ ОТ МОЕГО МЕСТОПОЛОЖЕНИЯ ==========
function buildCategoryRouteFromMyLocation(category, graves) {
    if (!userLocation) {
        showTempMessage('Сначала определите ваше местоположение');
        getUserLocation();
        return;
    }
    
    if (!graves || graves.length === 0) {
        showTempMessage('Нет объектов для построения маршрута');
        return;
    }
    
    clearAllData();
    showTempMessage('Построение маршрута...');
    
    addMarkersForObjects(graves);
    
    const entrancePoint = [ENTRANCE.lat, ENTRANCE.lon];
    const sorted = [...graves].sort((a, b) => {
        const da = calculateDistance(entrancePoint, [a.lat, a.lon]);
        const db = calculateDistance(entrancePoint, [b.lat, b.lon]);
        return da - db;
    });
    
    const points = [entrancePoint];
    sorted.forEach(g => points.push([g.lat, g.lon]));
    
    currentRouteLine = new ymaps.Polyline(points, {}, {
        strokeColor: "#e67e22",
        strokeWidth: 5,
        strokeStyle: "solid",
        opacity: 0.9
    });
    myMap.geoObjects.add(currentRouteLine);
    
    let totalDist = 0;
    for (let i = 0; i < points.length - 1; i++) {
        totalDist += calculateDistance(points[i], points[i + 1]);
    }
    const lineDistance = formatDistance(totalDist);
    const lineDuration = formatDuration(totalDist);
    
    const names = sorted.map(g => g.name);
    const namesText = names.length > 3 ? names.slice(0, 3).join(', ') + ` и еще ${names.length - 3}` : names.join(', ');
    
    const userPoint = [userLocation.lat, userLocation.lon];
    
    try {
        const multiRoute = new ymaps.multiRouter.MultiRoute({
            referencePoints: [userPoint, entrancePoint]
        }, {
            boundsAutoApply: false,
            wayPointStartIconColor: "#2196f3",
            wayPointEndIconColor: "#2ecc71",
            routeStrokeColor: "#2196f3",
            routeStrokeWidth: 5
        });
        
        myMap.geoObjects.add(multiRoute);
        currentYandexRoute = multiRoute;
        
        multiRoute.model.events.once('success', () => {
            const activeRoute = multiRoute.getActiveRoute();
            if (activeRoute) {
                const apiDistance = activeRoute.properties.get('distance')?.text || 'неизвестно';
                const apiDuration = activeRoute.properties.get('duration')?.text || 'неизвестно';
                showHybridCategoryRouteInfo(apiDistance, apiDuration, lineDistance, lineDuration, namesText, sorted.length);
            } else {
                showRouteInfo(lineDistance, lineDuration, "входа", namesText, true, category);
            }
        });
        
        multiRoute.model.events.once('error', () => {
            showRouteInfo(lineDistance, lineDuration, "входа", namesText, true, category);
        });
    } catch (error) {
        showRouteInfo(lineDistance, lineDuration, "входа", namesText, true, category);
    }
    
    const allPoints = [userPoint, entrancePoint, ...points.slice(1)];
    const bounds = calculateBounds(allPoints);
    if (bounds) myMap.setBounds(bounds, { zoomMargin: 100 });
}

function showHybridCategoryRouteInfo(apiDistance, apiDuration, lineDistance, lineDuration, destinations, count) {
    const html = `
        <div class="route-info">
            <div class="route-distance">🚶 Гибридный маршрут (${count} объектов)</div>
            <div style="margin: 12px 0; padding: 8px; background: #e3f2fd; border-radius: 12px;">
                <strong>📍 Часть 1:</strong><br>
                От вас до входа: ${apiDistance} · ⏱️ ${apiDuration}
            </div>
            <div style="margin: 12px 0; padding: 8px; background: #fff3e0; border-radius: 12px;">
                <strong>🚶 Часть 2:</strong><br>
                От входа до: ${destinations}<br>
                Длина: ${lineDistance} · ⏱️ ${lineDuration}
            </div>
            <div class="object-actions">
                <button class="btn-primary" id="clearRouteBtn">🗑 Очистить</button>
                <button class="btn-secondary" id="closeRouteBtn">✕ Закрыть</button>
            </div>
        </div>
    `;
    showInfoPanel(html);
    
    setTimeout(() => {
        const clearBtn = document.getElementById('clearRouteBtn');
        const closeBtn = document.getElementById('closeRouteBtn');
        if (clearBtn) clearBtn.onclick = () => clearAllData();
        if (closeBtn) closeBtn.onclick = closeInfoPanel;
    }, 50);
}

// ========== МАРШРУТ ПО КАТЕГОРИИ ОТ ВХОДА ==========
function buildCategoryRouteFromEntrance(category, graves) {
    if (!graves || graves.length === 0) {
        showTempMessage('Нет объектов для построения маршрута');
        return;
    }
    
    clearAllData();
    showTempMessage('Построение маршрута от входа...');
    
    addMarkersForObjects(graves);
    
    const startPoint = [ENTRANCE.lat, ENTRANCE.lon];
    const sorted = [...graves].sort((a, b) => {
        const da = calculateDistance(startPoint, [a.lat, a.lon]);
        const db = calculateDistance(startPoint, [b.lat, b.lon]);
        return da - db;
    });
    
    const points = [startPoint];
    sorted.forEach(g => points.push([g.lat, g.lon]));
    
    currentRouteLine = new ymaps.Polyline(points, {}, {
        strokeColor: "#e67e22",
        strokeWidth: 5,
        strokeStyle: "solid",
        opacity: 0.9
    });
    myMap.geoObjects.add(currentRouteLine);
    
    let totalDist = 0;
    for (let i = 0; i < points.length - 1; i++) {
        totalDist += calculateDistance(points[i], points[i + 1]);
    }
    
    const names = sorted.map(g => g.name);
    const namesText = names.length > 3 ? names.slice(0, 3).join(', ') + ` и еще ${names.length - 3}` : names.join(', ');
    
    showRouteInfo(formatDistance(totalDist), formatDuration(totalDist), "входа", namesText, true, category);
    
    const bounds = calculateBounds(points);
    if (bounds) myMap.setBounds(bounds, { zoomMargin: 100 });
}

// ========== ПОКАЗ МЕТОК КАТЕГОРИИ ==========
function showCategoryMarkers(category, graves) {
    clearAllData();
    const added = addMarkersForObjects(graves);
    
    if (added > 0) {
        const points = activePlacemarks.map(p => [p.data.lat, p.data.lon]);
        myMap.setBounds(calculateBounds(points), { zoomMargin: 50 });
        showTempMessage(`✅ Показано ${added} объектов категории "${category}"`);
    } else {
        showTempMessage(`Нет объектов в категории "${category}"`);
    }
}

// ========== ПОКАЗ ОДНОГО ОБЪЕКТА ==========
function showSingleObject(grave) {
    clearAllData();
    addMarkersForObjects([grave]);
    myMap.panTo([grave.lat, grave.lon], { flying: true, duration: 800 });
    showObjectDetails(grave);
}

// ========== ОЧИСТКА ==========
function clearAllData() {
    console.log("Очистка...");
    
    activePlacemarks.forEach(p => {
        if (p && p.placemark && myMap.geoObjects) {
            try { myMap.geoObjects.remove(p.placemark); } catch(e) {}
        }
    });
    activePlacemarks = [];
    
    if (currentRouteLine && myMap.geoObjects) {
        try { myMap.geoObjects.remove(currentRouteLine); } catch(e) {}
        currentRouteLine = null;
    }
    
    if (currentYandexRoute && myMap.geoObjects) {
        try { myMap.geoObjects.remove(currentYandexRoute); } catch(e) {}
        currentYandexRoute = null;
    }
    
    closeInfoPanel();
    showTempMessage('Все метки и маршруты очищены');
}

// ========== УПРАВЛЕНИЕ ПАНЕЛЬЮ ==========
function showInfoPanel(content) {
    const panel = document.getElementById('infoPanel');
    if (!panel) return;
    document.getElementById('infoPanelContent').innerHTML = content;
    panel.style.display = 'block';
}

function closeInfoPanel() {
    const panel = document.getElementById('infoPanel');
    if (panel) panel.style.display = 'none';
}

function showRouteInfo(distance, duration, start, end, isCategory = false, category = "") {
    const html = `
        <div class="route-info">
            <div class="route-distance">🚶 ${distance} · ⏱️ ${duration}</div>
            ${isCategory 
                ? `<p><strong>📍 Маршрут по категории "${category}"</strong></p><p><strong>От:</strong> ${start}</p><p><strong>До:</strong> ${end}</p>`
                : `<p><strong>📍 Маршрут от ${start} до ${end}</strong></p>`}
            <div class="object-actions">
                <button class="btn-primary" id="clearRouteBtn">🗑 Очистить</button>
                <button class="btn-secondary" id="closeRouteBtn">✕ Закрыть</button>
            </div>
        </div>
    `;
    showInfoPanel(html);
    
    setTimeout(() => {
        const clearBtn = document.getElementById('clearRouteBtn');
        const closeBtn = document.getElementById('closeRouteBtn');
        if (clearBtn) clearBtn.onclick = () => clearAllData();
        if (closeBtn) closeBtn.onclick = closeInfoPanel;
    }, 50);
}

function showCategoryInfo(category, graves) {
    let listHtml = '<div class="category-list">';
    graves.forEach(grave => {
        const preview = grave.photo 
            ? `<img src="${grave.photo}" style="width: 36px; height: 36px; object-fit: cover; border-radius: 8px;">`
            : `<i class="fas fa-image" style="font-size: 1.2rem; color: #999;"></i>`;
        listHtml += `
            <div class="category-item" onclick="window.showSingleObjectFromId(${grave.id})">
                <div class="category-item-photo">${preview}</div>
                <span class="category-item-name">${grave.name}</span>
                <i class="fas fa-info-circle category-item-icon"></i>
            </div>
        `;
    });
    listHtml += '</div>';
    
    const html = `
        <div class="category-info">
            <h3><i class="fas fa-tags"></i> ${category}</h3>
            <p>📌 Объектов: ${graves.length}</p>
            ${listHtml}
            <div class="object-actions" style="margin-top: 12px;">
                <button class="btn-primary" id="routeFromMyLocationBtn">📍 Маршрут от меня</button>
                <button class="btn-primary" id="routeFromEntranceBtn">🚶 Маршрут от входа</button>
                <button class="btn-primary" id="showMarkersBtn">📍 Показать все метки</button>
                <button class="btn-secondary" id="closeCategoryBtn">✕ Закрыть</button>
            </div>
        </div>
    `;
    showInfoPanel(html);
    
    setTimeout(() => {
        const fromMyLocationBtn = document.getElementById('routeFromMyLocationBtn');
        const fromEntranceBtn = document.getElementById('routeFromEntranceBtn');
        const showMarkersBtn = document.getElementById('showMarkersBtn');
        const closeBtn = document.getElementById('closeCategoryBtn');
        
        if (fromMyLocationBtn) fromMyLocationBtn.onclick = () => buildCategoryRouteFromMyLocation(category, graves);
        if (fromEntranceBtn) fromEntranceBtn.onclick = () => buildCategoryRouteFromEntrance(category, graves);
        if (showMarkersBtn) showMarkersBtn.onclick = () => showCategoryMarkers(category, graves);
        if (closeBtn) closeBtn.onclick = closeInfoPanel;
    }, 50);
}

// ========== КНОПКИ КАТЕГОРИЙ ==========
function createCategoryButtons() {
    const container = document.getElementById('categoriesGrid');
    const cats = typeof routeCategories !== 'undefined' ? routeCategories : [];
    
    if (!cats.length) {
        container.innerHTML = '<div class="loading-spinner">Нет категорий</div>';
        return;
    }
    
    let html = '';
    cats.forEach(cat => {
        let icon = 'fa-building';
        if (cat.includes('Храм')) icon = 'fa-church';
        else if (cat.includes('Часов')) icon = 'fa-church';
        else if (cat.includes('Воин')) icon = 'fa-shield-alt';
        else if (cat.includes('Усыпаль')) icon = 'fa-archway';
        else if (cat.includes('Мавзол')) icon = 'fa-monument';
        html += `<button class="category-btn" data-category="${cat}"><i class="fas ${icon}"></i> ${cat}</button>`;
    });
    container.innerHTML = html;
    
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            const gravesInCategory = gravesData.filter(g => g.category === category && g.forRoute === true);
            if (gravesInCategory.length) {
                showCategoryInfo(category, gravesInCategory);
            } else {
                showTempMessage(`Нет объектов в категории "${category}"`);
            }
            if (window.innerWidth <= 768) document.getElementById('sidebar')?.classList.remove('active');
        });
    });
}

// ========== СПИСОК ОБЪЕКТОВ ==========
function renderObjectsList(graves) {
    const container = document.getElementById('objectsList');
    if (!graves.length) {
        container.innerHTML = '<div class="loading-spinner">Ничего не найдено</div>';
        return;
    }
    
    let html = '';
    graves.forEach(grave => {
        let icon = 'fa-landmark';
        if (grave.category.includes('Храм')) icon = 'fa-church';
        else if (grave.category.includes('Воин')) icon = 'fa-shield-alt';
        else if (grave.category.includes('Надгр')) icon = 'fa-tombstone';
        html += `
            <div class="object-item" onclick="window.showSingleObjectFromId(${grave.id})">
                <div class="object-name"><i class="fas ${icon}"></i> ${grave.name}</div>
                <span class="object-category">${grave.category}</span>
            </div>
        `;
    });
    container.innerHTML = html;
}

window.showSingleObjectFromId = function(id) {
    const grave = gravesData.find(g => g.id === id);
    if (grave) showSingleObject(grave);
};

// ========== ПОИСК ==========
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (!query) {
            renderObjectsList(gravesData);
            return;
        }
        if (query.length < 2) return;
        const filtered = gravesData.filter(g => g.name.toLowerCase().includes(query) || g.category.toLowerCase().includes(query));
        renderObjectsList(filtered);
    });
}

// ========== ГЕОЛОКАЦИЯ ==========
function getUserLocation() {
    const locationStatus = document.getElementById('locationStatus');
    if (!locationStatus) return;
    if (!navigator.geolocation) {
        locationStatus.innerHTML = '❌ Не поддерживается';
        return;
    }
    
    locationStatus.innerHTML = '🔄 Определение...';
    navigator.geolocation.getCurrentPosition(
        (position) => {
            userLocation = { lat: position.coords.latitude, lon: position.coords.longitude };
            locationStatus.innerHTML = '✅ Определено';
            addUserMarker();
        },
        (error) => {
            console.error("Ошибка геолокации:", error.message);
            locationStatus.innerHTML = '⚠️ Недоступна';
        },
        { enableHighAccuracy: true, timeout: 10000 }
    );
}

function addUserMarker() {
    if (!userLocation) return;
    if (window.userMarker) myMap.geoObjects.remove(window.userMarker);
    window.userMarker = new ymaps.Placemark(
        [userLocation.lat, userLocation.lon],
        { hintContent: '📍 Вы здесь' },
        { preset: 'islands#blueCircleDotIcon' }
    );
    myMap.geoObjects.add(window.userMarker);
}

// ========== ВСПОМОГАТЕЛЬНЫЕ ==========
function calculateDistance(p1, p2) {
    const R = 6371000;
    const φ1 = p1[0] * Math.PI / 180;
    const φ2 = p2[0] * Math.PI / 180;
    const Δφ = (p2[0] - p1[0]) * Math.PI / 180;
    const Δλ = (p2[1] - p1[1]) * Math.PI / 180;
    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ/2) * Math.sin(Δλ/2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

function formatDistance(m) {
    return m < 1000 ? `${Math.round(m)} м` : `${(m / 1000).toFixed(1)} км`;
}

function formatDuration(m) {
    const min = Math.round(m / 80);
    return min < 60 ? `${min} мин` : `${Math.floor(min / 60)} ч ${min % 60} мин`;
}

function calculateBounds(points) {
    if (!points || !points.length) return null;
    let minLat = points[0][0], maxLat = points[0][0];
    let minLon = points[0][1], maxLon = points[0][1];
    points.forEach(p => {
        minLat = Math.min(minLat, p[0]);
        maxLat = Math.max(maxLat, p[0]);
        minLon = Math.min(minLon, p[1]);
        maxLon = Math.max(maxLon, p[1]);
    });
    return [[minLat - 0.002, minLon - 0.002], [maxLat + 0.002, maxLon + 0.002]];
}

function showTempMessage(text, duration = 3000) {
    let msg = document.getElementById('tempMessage');
    if (!msg) {
        msg = document.createElement('div');
        msg.id = 'tempMessage';
        document.body.appendChild(msg);
    }
    msg.textContent = text;
    msg.style.display = 'block';
    setTimeout(() => msg.style.display = 'none', duration);
}

function setupMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.getElementById('menuBtn');
    const mobileListBtn = document.getElementById('mobileListBtn');
    const mobileCategoriesBtn = document.getElementById('mobileCategoriesBtn');
    const mobileLocateBtn = document.getElementById('mobileLocateBtn');
    
    if (menuBtn) menuBtn.onclick = () => sidebar.classList.toggle('active');
    if (mobileListBtn) mobileListBtn.onclick = () => sidebar.classList.add('active');
    if (mobileCategoriesBtn) mobileCategoriesBtn.onclick = () => {
        sidebar.classList.add('active');
        document.querySelector('.route-categories')?.scrollIntoView({ behavior: 'smooth' });
    };
    if (mobileLocateBtn) {
        mobileLocateBtn.onclick = () => {
            if (userLocation) {
                myMap.setCenter([userLocation.lat, userLocation.lon], 17);
                showTempMessage('Центрировано на вас');
            } else {
                getUserLocation();
            }
        };
    }
    
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && sidebar?.classList.contains('active')) {
            if (!sidebar.contains(e.target) && !menuBtn?.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        }
    });
}