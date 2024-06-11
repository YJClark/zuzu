var female = [
    { id: "Eunha", price: 1000, imgSrc: "eunha.jpg" },
    { id: "Irene", price: 1600, imgSrc: "irene.jpg" },
    { id: "Sana", price: 1200, imgSrc: "sana.jpg" },
    { id: "Sullyoon", price: 1000, imgSrc: "sullyoon.jpg" },
    { id: "Xeeseo", price: 1800, imgSrc: "xeeseo.jpg" },
    { id: "Yeji", price: 1500, imgSrc: "yeji.jpg" },
    { id: "Winter", price: 1250, imgSrc: "winter.jpg" }
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
                img.src = "media/female/" + idol.imgSrc;
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

createProductTable(female);