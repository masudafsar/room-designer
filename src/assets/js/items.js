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
        "name": "پنجره چوبی کوچک",
        "model": "/statics/items/json/window-wooden-1.json",
        "image": "/statics/items/preview/window-wooden-1.jpg",
        "type": "3"
    },
    {
        "name": "پنجره چوبی متوسط",
        "model": "/statics/items/json/window-wooden-2.json",
        "image": "/statics/items/preview/window-wooden-2.jpg",
        "type": "3"
    },
    {
        "name": "پنجره چوبی بزرگ",
        "model": "/statics/items/json/window-wooden-2.json",
        "image": "/statics/items/preview/window-wooden-2.jpg",
        "type": "3"
    },

    {
        "name": "پنجره سفید کوچک",
        "model": "/statics/items/json/window-white-1.json",
        "image": "/statics/items/preview/window-white-1.jpg",
        "type": "3"
    },
    {
        "name": "پنجره سفید متوسط",
        "model": "/statics/items/json/window-white-2.json",
        "image": "/statics/items/preview/window-white-2.jpg",
        "type": "3"
    },
    {
        "name": "پنجره سفید بزرگ",
        "model": "/statics/items/json/window-white-3.json",
        "image": "/statics/items/preview/window-white-3.jpg",
        "type": "3"
    },

    {
        "name": "در اتاق - حالت بسته",
        "model": "/statics/items/json/door-close.json",
        "image": "/statics/items/preview/door-close.jpg",
        "type": "7"
    },
    {
        "name": "در اتاق - حالت باز",
        "model": "/statics/items/json/door-open.json",
        "image": "/statics/items/preview/door-open.jpg",
        "type": "7"
    },
    
    {
        "name": "Chair",
        "image": "/statics/models/thumbnails/thumbnail_Church-Chair-oak-white_1024x1024.jpg",
        "model": "/statics/models/js/gus-churchchair-whiteoak.js",
        "type": "1"
    },
    {
        "name": "Red Chair",
        "image": "/statics/models/thumbnails/thumbnail_tn-orange.png",
        "model": "/statics/models/js/ik-ekero-orange_baked.js",
        "type": "1"
    },
    {
        "name": "Blue Chair",
        "image": "/statics/models/thumbnails/thumbnail_ekero-blue3.png",
        "model": "/statics/models/js/ik-ekero-blue_baked.js",
        "type": "1"
    },
    {
        "name": "Dresser - Dark Wood",
        "image": "/statics/models/thumbnails/thumbnail_matera_dresser_5.png",
        "model": "/statics/models/js/DWR_MATERA_DRESSER2.js",
        "type": "1"
    },
    {
        "name": "Dresser - White",
        "image": "/statics/models/thumbnails/thumbnail_img25o.jpg",
        "model": "/statics/models/js/we-narrow6white_baked.js",
        "type": "1"
    },
    {
        "name": "Bedside table - Shale",
        "image": "/statics/models/thumbnails/thumbnail_Blu-Dot-Shale-Bedside-Table.jpg",
        "model": "/statics/models/js/bd-shalebedside-smoke_baked.js",
        "type": "1"
    },
    {
        "name": "Bedside table - White",
        "image": "/statics/models/thumbnails/thumbnail_arch-white-oval-nightstand.jpg",
        "model": "/statics/models/js/cb-archnight-white_baked.js",
        "type": "1"
    },
    {
        "name": "Wardrobe - White",
        "image": "/statics/models/thumbnails/thumbnail_TN-ikea-kvikine.png",
        "model": "/statics/models/js/ik-kivine_baked.js",
        "type": "1"
    },
    {
        "name": "Full Bed",
        "image": "/statics/models/thumbnails/thumbnail_nordli-bed-frame__0159270_PE315708_S4.JPG",
        "model": "/statics/models/js/ik_nordli_full.js",
        "type": "1"
    },
    {
        "name": "Bookshelf",
        "image": "/statics/models/thumbnails/thumbnail_kendall-walnut-bookcase.jpg",
        "model": "/statics/models/js/cb-kendallbookcasewalnut_baked.js",
        "type": "1"
    },
    {
        "name": "Media Console - White",
        "image": "/statics/models/thumbnails/thumbnail_clapboard-white-60-media-console-1.jpg",
        "model": "/statics/models/js/cb-clapboard_baked.js",
        "type": "1"
    },
    {
        "name": "Media Console - Black",
        "image": "/statics/models/thumbnails/thumbnail_moore-60-media-console-1.jpg",
        "model": "/statics/models/js/cb-moore_baked.js",
        "type": "1"
    },
    {
        "name": "Sofa - Grey",
        "image": "/statics/models/thumbnails/thumbnail_rochelle-sofa-3.jpg",
        "model": "/statics/models/js/cb-rochelle-gray_baked.js",
        "type": "1"
    },
    {
        "name": "Wooden Trunk",
        "image": "/statics/models/thumbnails/thumbnail_teca-storage-trunk.jpg",
        "model": "/statics/models/js/cb-tecs_baked.js",
        "type": "1"
    },
    {
        "name": "Floor Lamp",
        "image": "/statics/models/thumbnails/thumbnail_ore-white.png",
        "model": "/statics/models/js/ore-3legged-white_baked.js",
        "type": "1"
    },
    {
        "name": "Coffee Table - Wood",
        "image": "/statics/models/thumbnails/thumbnail_stockholm-coffee-table__0181245_PE332924_S4.JPG",
        "model": "/statics/models/js/ik-stockholmcoffee-brown.js",
        "type": "1"
    },
    {
        "name": "Side Table",
        "image": "/statics/models/thumbnails/thumbnail_Screen_Shot_2014-02-21_at_1.24.58_PM.png",
        "model": "/statics/models/js/GUSossingtonendtable.js",
        "type": "1"
    },
    {
        "name": "Dining Table",
        "image": "/statics/models/thumbnails/thumbnail_scholar-dining-table.jpg",
        "model": "/statics/models/js/cb-scholartable_baked.js",
        "type": "1"
    },
    {
        "name": "Dining table",
        "image": "/statics/models/thumbnails/thumbnail_Screen_Shot_2014-01-28_at_6.49.33_PM.png",
        "model": "/statics/models/js/BlakeAvenuejoshuatreecheftable.js",
        "type": "1"
    },
    {
        "name": "NYC Poster",
        "image": "/statics/models/thumbnails/thumbnail_nyc2.jpg",
        "model": "/statics/models/js/nyc-poster2.js",
        "type": "2"
    }
    /*
    {
       "name" : "",
       "image" : "",
       "model" : "",
       "type" : "1"
     },
     */
];
const carpets = [
    {
        "name": "فرش 1 - 6 متری",
        "image": "/statics/carpets/thumbnails/carpet-001.jpg",
        "model": "/statics/carpets/json/carpet-001.json",
        "type": "8"
    }, {
        "name": "فرش 2 - 6 متری",
        "image": "/statics/carpets/thumbnails/carpet-002.jpg",
        "model": "/statics/carpets/json/carpet-002.json",
        "type": "8"
    }, {
        "name": "فرش 3 - 6 متری",
        "image": "/statics/carpets/thumbnails/carpet-003.jpg",
        "model": "/statics/carpets/json/carpet-003.json",
        "type": "8"
    }, {
        "name": "فرش 4 - 6 متری",
        "image": "/statics/carpets/thumbnails/carpet-004.jpg",
        "model": "/statics/carpets/json/carpet-004.json",
        "type": "8"
    }, {
        "name": "فرش 5 - 6 متری",
        "image": "/statics/carpets/thumbnails/carpet-005.jpg",
        "model": "/statics/carpets/json/carpet-005.json",
        "type": "8"
    },
];

$(document).ready(function () {
    GenerateItems(items, $("#items-wrapper"));
    GenerateItems(carpets, $("#carpets-wrapper"));
});
