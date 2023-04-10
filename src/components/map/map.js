if (document.getElementById("map")) {
    ymaps.ready(function () {
        var map = new ymaps.Map(document.getElementById("map"), {
            center: [59.970113007741, 30.375625058352],
            zoom: 9
        });
        // —оздаем инстанцию геометрии многоугольника (указываем координаты вершин контуров).
        var polygonGeometry = new ymaps.Polygon([[
                [59.6982, 30.1959], [59.6489, 30.0653], [59.6903, 29.8518], [59.7731, 29.8504], [59.8672, 29.8415], [59.9744, 29.9067], [60.1111, 29.8785], [60.1672, 29.8740], [60.1953, 29.9928], [60.2192, 30.1178], [60.2602, 30.1850], [60.2684, 30.2489], [60.2466, 30.4482], [60.2203, 30.5491], [60.0699, 30.7455], [60.0513, 30.8334], [60.0030, 30.8799], [59.9321, 30.8895], [59.8407, 30.9074], [59.8078, 30.8154], [59.7864, 30.7440], [59.7594, 30.7096], [59.7171, 30.6334], [59.6793, 30.4308], [59.6692, 30.2393], [59.6982, 30.1959],
            ]],
            {
                hintContent: "Зона бесплатных замеров",
            }, {
                fillColor: '#007db6',
                strokeColor: '#007db6',
                opacity: 0.5,
                strokeWidth: 5,
            });
        map.geoObjects.add(polygonGeometry);


        var placemark1 = new ymaps.Placemark([59.870113007741, 30.375625058352], {balloonContent: '<div class="offices-map"><ul class="reset"><h4>Международная</h4><li><address>Ул.Белы Куна 2 корп1</address></li><li><strong>Электронная почта:</strong><a href="mailto:sales@potolok-peter.ru"> sales@potolok-peter.ru</a></li><li><strong>Режим работы:</strong> пн–пт — с 9:00 до 21:00<br/> сб–вс — с 10:00 до 20:00</li></ul></div></ul></div>'});
        map.geoObjects.add(placemark1);


        var placemark2 = new ymaps.Placemark([60.00959054236, 30.261460412896], {balloonContent: '<div class="offices-map"><ul class="reset"><h4>Комендантский</h4><li><address>ул. Уточкина, 2, корп. 1</address></li><li><strong>Электронная почта:</strong><a href="mailto:sales@potolok-peter.ru"> sales@potolok-peter.ru</a></li><li><strong>Режим работы:</strong> пн–пт — с 9:00 до 20:00<br/> сб–вс — с 10:00 до 20:00</li></ul></div></ul></div>'});
        map.geoObjects.add(placemark2);


        var placemark3 = new ymaps.Placemark([59.832190476934, 30.38781417247], {balloonContent: '<div class="offices-map"><ul class="reset"><h4>Купчино</h4><li><address>ул. Ярослава Гашека, 4, корп. 1</address></li><li><strong>Электронная почта:</strong><a href="mailto:sales@potolok-peter.ru"> sales@potolok-peter.ru</a></li><li><strong>Режим работы:</strong> пн–пт — с 9:00 до 21:00<br/> сб–вс — с 10:00 до 20:00</li></ul></div></ul></div>'});
        map.geoObjects.add(placemark3);

        var placemark4 = new ymaps.Placemark([59.905461243685, 30.479990303774], {balloonContent: '<div class="offices-map"><ul class="reset"><h4>Дыбенко</h4><li><address>ул. Дыбенко, 27, корп. 1</address></li><li><strong>Электронная почта:</strong><a href="mailto:sales@potolok-peter.ru"> sales@potolok-peter.ru</a></li><li><strong>Режим работы:</strong> пн–пт — с 9:00 до 21:00<br/> сб–вс — с 10:00 до 20:00</li></ul></div></ul></div>'});
        map.geoObjects.add(placemark4);

        var placemark5 = new ymaps.Placemark([60.043408163411, 30.378085417943], {balloonContent: '<div class="offices-map"><ul class="reset"><h4>Гражданский проспект</h4><li><address>просп. Просвещения, 53, корп. 1</address></li><li><strong>Электронная почта:</strong><a href="mailto:sales@potolok-peter.ru"> sales@potolok-peter.ru</a></li><li><strong>Режим работы:</strong> пн–пт — с 11:00 до 20:00<br/>сб–вс — с 11:00 до 20:00</li></ul></div></ul></div>'});
        map.geoObjects.add(placemark5);

        var placemark6 = new ymaps.Placemark([60.014400645678, 30.393823901721], {balloonContent: '<div class="offices-map"><ul class="reset"><h4>Академическая</h4><li><address>просп. Науки, 12</address></li><li><strong>Электронная почта:</strong><a href="mailto:sales@potolok-peter.ru"> sales@potolok-peter.ru</a></li><li><strong>Режим работы:</strong> пн–пт — с 9:00 до 21:00<br/>сб–вс — с 10:00 до 20:00</li></ul></div></ul></div>'});
        map.geoObjects.add(placemark6);

        var placemark7 = new ymaps.Placemark([59.833497, 30.197434], {balloonContent: '<div class="offices-map"><ul class="reset"><h4>Пр-т Ветеранов</h4><li><address>пр. Ветеранов, д. 109 корп. 4, 2 этаж</address></li><li><strong>Электронная почта:</strong><a href="mailto:sales@potolok-peter.ru"> sales@potolok-peter.ru</a></li><li><strong>Режим работы:</strong> пн–сб — с 10:00 до 20:00,<br/> вс — с 11:00 до 19:00</li></ul></div></ul></div>'});
        map.geoObjects.add(placemark7);

        var placemark8 = new ymaps.Placemark([59.999723, 30.260379], {balloonContent: '<div class="offices-map"><ul class="reset"><h4>Богатырский</h4><li><address><br />Богатырский пр., 18, корп.1, офис 609А</address></li><li><strong>Электронная почта:</strong><a href="mailto:sales@potolok-peter.ru"> sales@potolok-peter.ru</a></li><li><strong>Режим работы:</strong> пн–пт — с 10:00 до 18:00</li></ul></div></ul></div>'});
        map.geoObjects.add(placemark8);

        var placemark9 = new ymaps.Placemark([59.737900, 30.088800], {balloonContent: '<div class="offices-map"><ul class="reset"><h4>Красное Село</h4><li><address>пр. Ленина, д. 59</address></li><li><strong>Электронная почта:</strong><a href="mailto:sales@potolok-peter.ru"> sales@potolok-peter.ru</a></li><li><strong>Режим работы:</strong> пн–пт — с 09:00 до 21:00<br/> вс — с 10:00 до 20:00</li></ul></div></ul></div>'});
        map.geoObjects.add(placemark9);

        var placemark10 = new ymaps.Placemark([59.949749, 30.233466], {balloonContent: '<div class="offices-map"><ul class="reset"><h4>Приморская</h4><li><address>ул. Наличная, д. 49</address></li><li><strong>Электронная почта:</strong><a href="mailto:sales@potolok-peter.ru"> sales@potolok-peter.ru</a></li><li><strong>Режим работы:</strong> пн–пт — с 09:00 до 20:00<br/> вс — с 10:00 до 19:00</li></ul></div></ul></div>'});
        map.geoObjects.add(placemark10);

        //var placemark11 = new ymaps.Placemark([60.039386, 30.333448], {balloonContent: '<div class="offices-map"><ul class="reset"><h4>Озерки</h4><li><address>пер. Учебный, 2</address></li><li><strong>Электронная почта:</strong><a href="sales@potolok-peter.ru"> sales@potolok-peter.ru</a></li><li><strong>Режим работы:</strong> пн–пт — с 10:00 до 20:00</li><br/> </li></ul></div></ul></div>'});
        //map.geoObjects.add(placemark11);

        var placemark12 = new ymaps.Placemark([59.737246, 30.611710], {balloonContent: '<div class="offices-map"><ul class="reset"><h4>г. Колпино</h4><li><address>г. Колпино, ул. Тверская, 50</address></li><li><strong>Электронная почта:</strong><a href="mailto:sales@potolok-peter.ru"> sales@potolok-peter.ru</a></li><li><strong>Режим работы:</strong> пн–пт — с 09:00 до 20:00<br/> сб–вс — с 10:00 до 20:00 </li></ul></div></ul></div>'});
        map.geoObjects.add(placemark12);

        var placemark13 = new ymaps.Placemark([60.055111, 30.440159], {balloonContent: '<div class="offices-map"><ul class="reset"><h4>Девяткино</h4><li><address>М. Девяткино, просп. Авиаторов Балтики, д.11/1</address></li><li><strong>Электронная почта:</strong><a href="mailto:sales@potolok-peter.ru"> sales@potolok-peter.ru</a></li><li><strong>Режим работы:</strong> пн–вс — с 10:00 до 20:00 </li></ul></div></ul></div>'});
        map.geoObjects.add(placemark13);

        var placemark14 = new ymaps.Placemark([59.862429, 30.387868], {balloonContent: '<div class="offices-map"><ul class="reset"><h4>пр-т Славы</h4><li><address> ул. Бухарестская, д. 39, корп. 1</address></li><li><strong>Электронная почта:</strong><a href="mailto:sales@potolok-peter.ru"> sales@potolok-peter.ru</a></li><li><strong>Режим работы:</strong> пн–вс — с 09:00 до 20:00<br/> вс — с 10:00 до 20:00</li></ul></div></ul></div>'});
        map.geoObjects.add(placemark14);

        var placemark15 = new ymaps.Placemark([60.052447, 30.339853], {balloonContent: '<div class="offices-map"><ul class="reset"><h4>Проспект Просвещения</h4><li><address>ул. Есенина 32, корп 1</address></li><li><strong>Электронная почта:</strong><a href="mailto:sales@potolok-peter.ru"> sales@potolok-peter.ru</a></li><li><strong>Режим работы:</strong> пн–пт — с 09:00 до 20:00<br/> сб–вс — с 10:00 до 19:00</li></ul></div></ul></div>'});
        map.geoObjects.add(placemark15);

        $(".contacts_item").click(function () {
            if ($(this).attr("rel") == 1) {
                map.setCenter([59.870113007741, 30.375625058352], 13);
                placemark1.balloon.open();
            } else if ($(this).attr("rel") == 2) {
                map.setCenter([60.00959054236, 30.261460412896], 13);
                placemark2.balloon.open();
            } else if ($(this).attr("rel") == 3) {
                map.setCenter([59.832190476934, 30.38781417247], 13);
                placemark3.balloon.open();
            } else if ($(this).attr("rel") == 4) {
                map.setCenter([59.905461243685, 30.479990303774], 13);
                placemark4.balloon.open();
            } else if ($(this).attr("rel") == 5) {
                map.setCenter([60.043408163411, 30.378085417943], 13);
                placemark5.balloon.open();
            } else if ($(this).attr("rel") == 6) {
                map.setCenter([60.014400645678, 30.393823901721], 13);
                placemark6.balloon.open();
            } else if ($(this).attr("rel") == 7) {
                map.setCenter([59.833497, 30.197434], 13);
                placemark7.balloon.open();
            } else if ($(this).attr("rel") == 8) {
                map.setCenter([59.999723, 30.260379], 13);
                placemark8.balloon.open();
            } else if ($(this).attr("rel") == 9) {
                map.setCenter([59.737900, 30.088800], 13);
                placemark9.balloon.open();
            } else if ($(this).attr("rel") == 10) {
                map.setCenter([59.949749, 30.233466], 13);
                placemark10.balloon.open();
            } else if ($(this).attr("rel") == 11) {
                map.setCenter([60.039386, 30.333448], 13);
                placemark11.balloon.open();
            } else if ($(this).attr("rel") == 12) {
                map.setCenter([59.737246, 30.611710], 13);
                placemark12.balloon.open();
            } else if ($(this).attr("rel") == 13) {
                map.setCenter([60.055111, 30.440159], 13);
                placemark13.balloon.open();
            } else if ($(this).attr("rel") == 14) {
                map.setCenter([59.862429, 30.387868], 14);
                placemark13.balloon.open();
            } else if ($(this).attr("rel") == 15) {
                map.setCenter([60.052447, 30.339853], 15);
                placemark13.balloon.open();
            }
        });
    });
}