$(document).ready(function () {
    const items = [
        {
            "name": "Closed Door",
            "image": "/statics/models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
            "model": "/statics/models/js/closed-door28x80_baked.js",
            "type": "7"
        },
        {
            "name": "Open Door",
            "image": "/statics/models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png",
            "model": "/statics/models/js/open_door.js",
            "type": "7"
        },
        {
            "name": "Window",
            "image": "/statics/models/thumbnails/thumbnail_window.png",
            "model": "/statics/models/js/whitewindow.js",
            "type": "3"
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
            "name": "Blue Rug",
            "image": "/statics/models/thumbnails/thumbnail_cb-blue-block60x96.png",
            "model": "/statics/models/js/cb-blue-block-60x96.js",
            "type": "8"
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

    const itemsDiv = $("#items-wrapper");
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

        itemsDiv.append(addItemButtonContainer);
    });
});
