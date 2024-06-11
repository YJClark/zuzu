var male = [
    { id: "Bobo", price: 1000, imgSrc: "bobo.jpg" },
    { id: "Yorick", price: 1250, imgSrc: "Yorick.jpg" },
    { id: "Clark", price: 1600, imgSrc: "clark.jpg" },
    { id: "Edison", price: 1200, imgSrc: "edison.jpg" },
    { id: "Jeff", price: 1000, imgSrc: "jeff.jpg" },
    { id: "Lu", price: 1800, imgSrc: "lu.jpg" },
    { id: "Ma", price: 1500, imgSrc: "ma.jpg" },
    { id: "Marc", price: 1250, imgSrc: "marc.jpg" },
    { id: "Min", price: 1250, imgSrc: "min.jpg" },
    { id: "Peko", price: 1250, imgSrc: "peko.jpg" },
    { id: "Yang", price: 1250, imgSrc: "yang.jpg" }
]

function createProductTable(f) {
    var container = document.querySelector('.product-table-container');

    var table = document.createElement('table');
    table.classList.add('product-table');

        var rowNum = Math.ceil(f.length / 3);

    for (var i = 0; i < rowNum; i++) {
        var tr = document.createElement('tr');

        for (var j = 0; j < 3; j++) {
            var index = i * 3 + j;
            if (index < f.length) {
                var idol = f[index];

                var td = document.createElement('td');
                td.id = idol.id;
                td.classList.add('product-item');

                var img = document.createElement('img');
                img.src = "media/male/" + idol.imgSrc;
                img.alt = idol.id;

                var p = document.createElement('p');
                p.innerHTML = idol.id + "<br>Price: NT$" + idol.price + "/hr";

                var button = document.createElement('button');
                button.classList.add('detail_btn');
                button.textContent = "more";
                //這邊要改生成detail頁面的function
                button.setAttribute('onclick', 'updatePrice(' + idol.price + ', "' + idol.imgSrc + '")');

                td.appendChild(img);
                td.appendChild(p);
                td.appendChild(button);
                tr.appendChild(td);
            }
        }
        table.appendChild(tr);
    }
    container.appendChild(table);
}

createProductTable(male);