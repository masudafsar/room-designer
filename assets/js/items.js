function GenerateItems(items, container) {
    items.forEach((item) => {
        let addItemImage = $("<img/>")
            .attr('src', item.image)
            .attr('alt', item.name);

        let addItemButton = $("<a></a>")
            .addClass('thumbnail')
            .addClass('add-item')
            .attr('model-name', item.name)
            .attr('model-url', item.model)
            .attr('model-type', item.type)
            .text(item.name)
            .prepend(addItemImage);

        let addItemButtonContainer = $("<div></div>")
            .addClass('col-sm-4')
            .append(addItemButton);

        container.append(addItemButtonContainer);
    });
}

const items = [
    {
        "name": "راحتی تک نفره",
        "model": "https://masudafsar.github.io/room-designer/statics/items/json/sofa-blue-1.json",
        "image": "https://masudafsar.github.io/room-designer/statics/items/preview/sofa-blue-1.jpg",
        "type": "1"
    },
    {
        "name": "راحتی تک نفره",
        "model": "https://masudafsar.github.io/room-designer/statics/items/json/sofa-green-2.json",
        "image": "https://masudafsar.github.io/room-designer/statics/items/preview/sofa-green-2.jpg",
        "type": "1"
    },
    {
        "name": "راحتی تک نفره",
        "model": "https://masudafsar.github.io/room-designer/statics/items/json/sofa-01.json",
        "image": "https://masudafsar.github.io/room-designer/statics/items/preview/sofa-01.jpg",
        "type": "1"
    },
    {
        "name": "راحتی تک نفره",
        "model": "https://masudafsar.github.io/room-designer/statics/items/json/sofa-02.json",
        "image": "https://masudafsar.github.io/room-designer/statics/items/preview/sofa-02.jpg",
        "type": "1"
    },
    {
        "name": "راحتی تک نفره",
        "model": "https://masudafsar.github.io/room-designer/statics/items/json/sofa-03.json",
        "image": "https://masudafsar.github.io/room-designer/statics/items/preview/sofa-03.jpg",
        "type": "1"
    },
    {
        "name": "راحتی دو نفره",
        "model": "https://masudafsar.github.io/room-designer/statics/items/json/sofa-green-1.json",
        "image": "https://masudafsar.github.io/room-designer/statics/items/preview/sofa-green-1.jpg",
        "type": "1"
    },

    {
        "name": "جلو مبلی",
        "model": "https://masudafsar.github.io/room-designer/statics/items/json/coffee-table-1.json",
        "image": "https://masudafsar.github.io/room-designer/statics/items/preview/coffee-table-1.jpg",
        "type": "1"
    },
    {
        "name": "میز نهارخوری",
        "model": "https://masudafsar.github.io/room-designer/statics/items/json/dining-table-1.json",
        "image": "https://masudafsar.github.io/room-designer/statics/items/preview/dining-table-1.jpg",
        "type": "1"
    },
    {
        "name": "میز آرایش",
        "model": "https://masudafsar.github.io/room-designer/statics/items/json/vanity-1.json",
        "image": "https://masudafsar.github.io/room-designer/statics/items/preview/vanity-1.jpg",
        "type": "1"
    },

    {
        "name": "تخت تک نفره",
        "model": "https://masudafsar.github.io/room-designer/statics/items/json/bed-1.json",
        "image": "https://masudafsar.github.io/room-designer/statics/items/preview/bed-1.jpg",
        "type": "1"
    },
    {
        "name": "تخت دو نفره",
        "model": "https://masudafsar.github.io/room-designer/statics/items/json/bed-2.json",
        "image": "https://masudafsar.github.io/room-designer/statics/items/preview/bed-2.jpg",
        "type": "1"
    },

    {
        "name": "پنجره چوبی کوچک",
        "model": "https://masudafsar.github.io/room-designer/statics/items/json/window-wooden-1.json",
        "image": "https://masudafsar.github.io/room-designer/statics/items/preview/window-wooden-1.jpg",
        "type": "3"
    },
    {
        "name": "پنجره چوبی متوسط",
        "model": "https://masudafsar.github.io/room-designer/statics/items/json/window-wooden-2.json",
        "image": "https://masudafsar.github.io/room-designer/statics/items/preview/window-wooden-2.jpg",
        "type": "3"
    },
    {
        "name": "پنجره چوبی بزرگ",
        "model": "https://masudafsar.github.io/room-designer/statics/items/json/window-wooden-2.json",
        "image": "https://masudafsar.github.io/room-designer/statics/items/preview/window-wooden-2.jpg",
        "type": "3"
    },

    {
        "name": "پنجره سفید کوچک",
        "model": "https://masudafsar.github.io/room-designer/statics/items/json/window-white-1.json",
        "image": "https://masudafsar.github.io/room-designer/statics/items/preview/window-white-1.jpg",
        "type": "3"
    },
    {
        "name": "پنجره سفید متوسط",
        "model": "https://masudafsar.github.io/room-designer/statics/items/json/window-white-2.json",
        "image": "https://masudafsar.github.io/room-designer/statics/items/preview/window-white-2.jpg",
        "type": "3"
    },
    {
        "name": "پنجره سفید بزرگ",
        "model": "https://masudafsar.github.io/room-designer/statics/items/json/window-white-3.json",
        "image": "https://masudafsar.github.io/room-designer/statics/items/preview/window-white-3.jpg",
        "type": "3"
    },

    {
        "name": "در اتاق - حالت بسته",
        "model": "https://masudafsar.github.io/room-designer/statics/items/json/door-close.json",
        "image": "https://masudafsar.github.io/room-designer/statics/items/preview/door-close.jpg",
        "type": "7"
    },
    {
        "name": "در اتاق - حالت باز",
        "model": "https://masudafsar.github.io/room-designer/statics/items/json/door-open.json",
        "image": "https://masudafsar.github.io/room-designer/statics/items/preview/door-open.jpg",
        "type": "7"
    },

    {
        "name": "کابینت دو درب",
        "model": "https://masudafsar.github.io/room-designer/statics/items/json/cabinet-2-doors.json",
        "image": "https://masudafsar.github.io/room-designer/statics/items/preview/cabinet-2-doors.jpg",
        "type": "1"
    },
    {
        "name": "کابینت تک درب",
        "model": "https://masudafsar.github.io/room-designer/statics/items/json/cabinet-1-door.json",
        "image": "https://masudafsar.github.io/room-designer/statics/items/preview/cabinet-1-door.jpg",
        "type": "1"
    },
    {
        "name": "کابینت گوشه ساده",
        "model": "https://masudafsar.github.io/room-designer/statics/items/json/cabinet-corner.json",
        "image": "https://masudafsar.github.io/room-designer/statics/items/preview/cabinet-corner.jpg",
        "type": "1"
    },
    {
        "name": "کابینت سینک",
        "model": "https://masudafsar.github.io/room-designer/statics/items/json/cabinet-sink.json",
        "image": "https://masudafsar.github.io/room-designer/statics/items/preview/cabinet-sink.jpg",
        "type": "1"
    },

    {
        "name": "یخچال دو طبقه",
        "model": "https://masudafsar.github.io/room-designer/statics/items/json/fridge-01.json",
        "image": "https://masudafsar.github.io/room-designer/statics/items/preview/fridge-01.jpg",
        "type": "1"
    },
    {
        "name": "یخچال ساید بای ساید",
        "model": "https://masudafsar.github.io/room-designer/statics/items/json/fridge-02.json",
        "image": "https://masudafsar.github.io/room-designer/statics/items/preview/fridge-02.jpg",
        "type": "1"
    },
    {
        "name": "یخچال ساید بای ساید",
        "model": "https://masudafsar.github.io/room-designer/statics/items/json/fridge-03.json",
        "image": "https://masudafsar.github.io/room-designer/statics/items/preview/fridge-03.jpg",
        "type": "1"
    },

    {
        "name": "اجاق ساده",
        "model": "https://masudafsar.github.io/room-designer/statics/items/json/stove-01.json",
        "image": "https://masudafsar.github.io/room-designer/statics/items/preview/stove-01.jpg",
        "type": "1"
    },
    {
        "name": "اجاق فردار",
        "model": "https://masudafsar.github.io/room-designer/statics/items/json/stove-02.json",
        "image": "https://masudafsar.github.io/room-designer/statics/items/preview/stove-02.jpg",
        "type": "1"
    },
    {
        "name": "اجاق فردار",
        "model": "https://masudafsar.github.io/room-designer/statics/items/json/stove-03.json",
        "image": "https://masudafsar.github.io/room-designer/statics/items/preview/stove-03.jpg",
        "type": "1"
    },

    {
        "name": "ماشین لباسشویی",
        "model": "https://masudafsar.github.io/room-designer/statics/items/json/wash-machine.json",
        "image": "https://masudafsar.github.io/room-designer/statics/items/preview/wash-machine.jpg",
        "type": "1"
    },

    {
        "name": "صندلی",
        "image": "https://masudafsar.github.io/room-designer/statics/models/thumbnails/thumbnail_Church-Chair-oak-white_1024x1024.jpg",
        "model": "https://masudafsar.github.io/room-designer/statics/models/js/gus-churchchair-whiteoak.js",
        "type": "1"
    },
    {
        "name": "راحتی تک نفره",
        "image": "https://masudafsar.github.io/room-designer/statics/models/thumbnails/thumbnail_tn-orange.png",
        "model": "https://masudafsar.github.io/room-designer/statics/models/js/ik-ekero-orange_baked.js",
        "type": "1"
    },
    {
        "name": "راحتی تک نفره",
        "image": "https://masudafsar.github.io/room-designer/statics/models/thumbnails/thumbnail_ekero-blue3.png",
        "model": "https://masudafsar.github.io/room-designer/statics/models/js/ik-ekero-blue_baked.js",
        "type": "1"
    },
    {
        "name": "کشو لباس",
        "image": "https://masudafsar.github.io/room-designer/statics/models/thumbnails/thumbnail_matera_dresser_5.png",
        "model": "https://masudafsar.github.io/room-designer/statics/models/js/DWR_MATERA_DRESSER2.js",
        "type": "1"
    },
    {
        "name": "کشو لباس",
        "image": "https://masudafsar.github.io/room-designer/statics/models/thumbnails/thumbnail_img25o.jpg",
        "model": "https://masudafsar.github.io/room-designer/statics/models/js/we-narrow6white_baked.js",
        "type": "1"
    },
    {
        "name": "میز کنار مبلی",
        "image": "https://masudafsar.github.io/room-designer/statics/models/thumbnails/thumbnail_Blu-Dot-Shale-Bedside-Table.jpg",
        "model": "https://masudafsar.github.io/room-designer/statics/models/js/bd-shalebedside-smoke_baked.js",
        "type": "1"
    },
    {
        "name": "میز کنار مبلی",
        "image": "https://masudafsar.github.io/room-designer/statics/models/thumbnails/thumbnail_arch-white-oval-nightstand.jpg",
        "model": "https://masudafsar.github.io/room-designer/statics/models/js/cb-archnight-white_baked.js",
        "type": "1"
    },
    {
        "name": "تخت دو نفره",
        "image": "https://masudafsar.github.io/room-designer/statics/models/thumbnails/thumbnail_nordli-bed-frame__0159270_PE315708_S4.JPG",
        "model": "https://masudafsar.github.io/room-designer/statics/models/js/ik_nordli_full.js",
        "type": "1"
    },
    {
        "name": "قفسه کتاب",
        "image": "https://masudafsar.github.io/room-designer/statics/models/thumbnails/thumbnail_kendall-walnut-bookcase.jpg",
        "model": "https://masudafsar.github.io/room-designer/statics/models/js/cb-kendallbookcasewalnut_baked.js",
        "type": "1"
    },
    {
        "name": "میز تلوزیون",
        "image": "https://masudafsar.github.io/room-designer/statics/models/thumbnails/thumbnail_clapboard-white-60-media-console-1.jpg",
        "model": "https://masudafsar.github.io/room-designer/statics/models/js/cb-clapboard_baked.js",
        "type": "1"
    },
    {
        "name": "راحتی سه نفره",
        "image": "https://masudafsar.github.io/room-designer/statics/models/thumbnails/thumbnail_rochelle-sofa-3.jpg",
        "model": "https://masudafsar.github.io/room-designer/statics/models/js/cb-rochelle-gray_baked.js",
        "type": "1"
    },
    {
        "name": "جلو مبلی",
        "image": "https://masudafsar.github.io/room-designer/statics/models/thumbnails/thumbnail_teca-storage-trunk.jpg",
        "model": "https://masudafsar.github.io/room-designer/statics/models/js/cb-tecs_baked.js",
        "type": "1"
    },
    {
        "name": "چراغ پایه‌دار",
        "image": "https://masudafsar.github.io/room-designer/statics/models/thumbnails/thumbnail_ore-white.png",
        "model": "https://masudafsar.github.io/room-designer/statics/models/js/ore-3legged-white_baked.js",
        "type": "1"
    },
    {
        "name": "جلو مبلی",
        "image": "https://masudafsar.github.io/room-designer/statics/models/thumbnails/thumbnail_stockholm-coffee-table__0181245_PE332924_S4.JPG",
        "model": "https://masudafsar.github.io/room-designer/statics/models/js/ik-stockholmcoffee-brown.js",
        "type": "1"
    },
    {
        "name": "میز کنار مبلی",
        "image": "https://masudafsar.github.io/room-designer/statics/models/thumbnails/thumbnail_Screen_Shot_2014-02-21_at_1.24.58_PM.png",
        "model": "https://masudafsar.github.io/room-designer/statics/models/js/GUSossingtonendtable.js",
        "type": "1"
    },
    {
        "name": "میز نهارخوری",
        "image": "https://masudafsar.github.io/room-designer/statics/models/thumbnails/thumbnail_scholar-dining-table.jpg",
        "model": "https://masudafsar.github.io/room-designer/statics/models/js/cb-scholartable_baked.js",
        "type": "1"
    },
];
const carpets = [
    {
        "name": "فرش 1 - 6 متری",
        "image": "https://masudafsar.github.io/room-designer/statics/carpets/thumbnails/carpet-001.jpg",
        "model": "https://masudafsar.github.io/room-designer/statics/carpets/json/carpet-001.json",
        "type": "8"
    },
    {
        "name": "فرش 2 - 6 متری",
        "image": "https://masudafsar.github.io/room-designer/statics/carpets/thumbnails/carpet-002.jpg",
        "model": "https://masudafsar.github.io/room-designer/statics/carpets/json/carpet-002.json",
        "type": "8"
    },
    {
        "name": "فرش 3 - 6 متری",
        "image": "https://masudafsar.github.io/room-designer/statics/carpets/thumbnails/carpet-003.jpg",
        "model": "https://masudafsar.github.io/room-designer/statics/carpets/json/carpet-003.json",
        "type": "8"
    },
    {
        "name": "فرش 4 - 6 متری",
        "image": "https://masudafsar.github.io/room-designer/statics/carpets/thumbnails/carpet-004.jpg",
        "model": "https://masudafsar.github.io/room-designer/statics/carpets/json/carpet-004.json",
        "type": "8"
    },
    {
        "name": "فرش 5 - 6 متری",
        "image": "https://masudafsar.github.io/room-designer/statics/carpets/thumbnails/carpet-005.jpg",
        "model": "https://masudafsar.github.io/room-designer/statics/carpets/json/carpet-005.json",
        "type": "8"
    },
    {
        "name": "فرش 6 - 6 متری",
        "image": "https://masudafsar.github.io/room-designer/statics/carpets/thumbnails/carpet-006.jpg",
        "model": "https://masudafsar.github.io/room-designer/statics/carpets/json/carpet-006.json",
        "type": "8"
    },
    {
        "name": "فرش 7 - 6 متری",
        "image": "https://masudafsar.github.io/room-designer/statics/carpets/thumbnails/carpet-007.jpg",
        "model": "https://masudafsar.github.io/room-designer/statics/carpets/json/carpet-007.json",
        "type": "8"
    },
    {
        "name": "فرش 8 - 6 متری",
        "image": "https://masudafsar.github.io/room-designer/statics/carpets/thumbnails/carpet-008.jpg",
        "model": "https://masudafsar.github.io/room-designer/statics/carpets/json/carpet-008.json",
        "type": "8"
    },
    {
        "name": "فرش 9 - 6 متری",
        "image": "https://masudafsar.github.io/room-designer/statics/carpets/thumbnails/carpet-009.jpg",
        "model": "https://masudafsar.github.io/room-designer/statics/carpets/json/carpet-009.json",
        "type": "8"
    },
    {
        "name": "فرش 10 - 6 متری",
        "image": "https://masudafsar.github.io/room-designer/statics/carpets/thumbnails/carpet-010.jpg",
        "model": "https://masudafsar.github.io/room-designer/statics/carpets/json/carpet-010.json",
        "type": "8"
    },
    {
        "name": "فرش 11 - 6 متری",
        "image": "https://masudafsar.github.io/room-designer/statics/carpets/thumbnails/carpet-011.jpg",
        "model": "https://masudafsar.github.io/room-designer/statics/carpets/json/carpet-011.json",
        "type": "8"
    },
    {
        "name": "فرش 12 - 6 متری",
        "image": "https://masudafsar.github.io/room-designer/statics/carpets/thumbnails/carpet-012.jpg",
        "model": "https://masudafsar.github.io/room-designer/statics/carpets/json/carpet-012.json",
        "type": "8"
    },
    {
        "name": "فرش 13 - 6 متری",
        "image": "https://masudafsar.github.io/room-designer/statics/carpets/thumbnails/carpet-013.jpg",
        "model": "https://masudafsar.github.io/room-designer/statics/carpets/json/carpet-013.json",
        "type": "8"
    },
    {
        "name": "فرش 14 - 6 متری",
        "image": "https://masudafsar.github.io/room-designer/statics/carpets/thumbnails/carpet-014.jpg",
        "model": "https://masudafsar.github.io/room-designer/statics/carpets/json/carpet-014.json",
        "type": "8"
    },
    {
        "name": "فرش 15 - 6 متری",
        "image": "https://masudafsar.github.io/room-designer/statics/carpets/thumbnails/carpet-015.jpg",
        "model": "https://masudafsar.github.io/room-designer/statics/carpets/json/carpet-015.json",
        "type": "8"
    },
    {
        "name": "فرش 16 - 6 متری",
        "image": "https://masudafsar.github.io/room-designer/statics/carpets/thumbnails/carpet-016.jpg",
        "model": "https://masudafsar.github.io/room-designer/statics/carpets/json/carpet-016.json",
        "type": "8"
    },
    {
        "name": "فرش 17 - 6 متری",
        "image": "https://masudafsar.github.io/room-designer/statics/carpets/thumbnails/carpet-017.jpg",
        "model": "https://masudafsar.github.io/room-designer/statics/carpets/json/carpet-017.json",
        "type": "8"
    },
    {
        "name": "فرش 18 - 6 متری",
        "image": "https://masudafsar.github.io/room-designer/statics/carpets/thumbnails/carpet-018.jpg",
        "model": "https://masudafsar.github.io/room-designer/statics/carpets/json/carpet-018.json",
        "type": "8"
    },
    {
        "name": "فرش 19 - 6 متری",
        "image": "https://masudafsar.github.io/room-designer/statics/carpets/thumbnails/carpet-019.jpg",
        "model": "https://masudafsar.github.io/room-designer/statics/carpets/json/carpet-019.json",
        "type": "8"
    },
    {
        "name": "فرش 20 - 6 متری",
        "image": "https://masudafsar.github.io/room-designer/statics/carpets/thumbnails/carpet-020.jpg",
        "model": "https://masudafsar.github.io/room-designer/statics/carpets/json/carpet-020.json",
        "type": "8"
    },
    {
        "name": "فرش 21 - 6 متری",
        "image": "https://masudafsar.github.io/room-designer/statics/carpets/thumbnails/carpet-021.jpg",
        "model": "https://masudafsar.github.io/room-designer/statics/carpets/json/carpet-021.json",
        "type": "8"
    },
    {
        "name": "فرش 22 - 6 متری",
        "image": "https://masudafsar.github.io/room-designer/statics/carpets/thumbnails/carpet-022.jpg",
        "model": "https://masudafsar.github.io/room-designer/statics/carpets/json/carpet-022.json",
        "type": "8"
    },
    {
        "name": "فرش 23 - 6 متری",
        "image": "https://masudafsar.github.io/room-designer/statics/carpets/thumbnails/carpet-023.jpg",
        "model": "https://masudafsar.github.io/room-designer/statics/carpets/json/carpet-023.json",
        "type": "8"
    },
    {
        "name": "فرش 24 - 6 متری",
        "image": "https://masudafsar.github.io/room-designer/statics/carpets/thumbnails/carpet-024.jpg",
        "model": "https://masudafsar.github.io/room-designer/statics/carpets/json/carpet-024.json",
        "type": "8"
    },
];

$(document).ready(function () {
    GenerateItems(items, $("#items-wrapper"));
    GenerateItems(carpets, $("#carpets-wrapper"));
});
