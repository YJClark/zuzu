var female = [
    { id: "Eunha", price: 1000, imgSrc: "eunha.jpg" },
    { id: "Irene", price: 1600, imgSrc: "irene.jpg" },
    { id: "Sana", price: 1200, imgSrc: "sana.jpg" },
    { id: "Sullyoon", price: 1000, imgSrc: "sullyoon.jpg" },
    { id: "So-Hee", price: 1800, imgSrc: "xeeseo.jpg" },
    { id: "Yeji", price: 1500, imgSrc: "yeji.jpg" },
    { id: "Winter", price: 1350, imgSrc: "winter.jpg" }
]

var detail = [
    { mbti:"ISTP", height:"163", loc:"首爾", aca:"首爾藝高", career:"idol", feature:"唱歌", mar:"單身", lan:"韓文、英文", age:'27'}, 
    { mbti:"ISTJ", height:"158", loc:"大邱", aca:"鶴南高校", career:"idol", feature:"罵人20min", mar:"單身", lan:"韓文、英文", age:'33'},
    { mbti:"ENFP", height:"164", loc:"大阪", aca:"翰林藝高", career:"idol", feature:"撒嬌", mar:"單身", lan:"韓文、日文", age:'27'},
    { mbti:"ISFP", height:"168", loc:"台南", aca:"翰林藝高", career:"idol", feature:"發泡泡", mar:"單身", lan:"韓文、英文", age:'20'},
    { mbti:"INFP", height:"165", loc:"台南", aca:"蔚山藝高", career:"演員", feature:"刺青", mar:"單身", lan:"韓文、英文", age:'29'},
    { mbti:"ESFJ", height:"167", loc:"台南", aca:"全州商高", career:"idol", feature:"跳舞", mar:"單身", lan:"韓文、英文", age:'24'},
    { mbti:"ISFJ", height:"164", loc:"台南", aca:"梁山女高", career:"idol", feature:"拍抖音", mar:"單身", lan:"韓文、英文", age:'23'}
]

var service = [
    {services: "鐘點約會、專業職人、商業應酬"},
    {services: "鐘點約會、旅遊陪同、朋友聚會"},
    {services: "鐘點約會、專業職人、商業應酬"},
    {services: "鐘點約會、旅遊陪同、專業職人、朋友聚會、商業應酬"},
    {services: "鐘點約會、專業職人、商業應酬"},
    {services: "鐘點約會、專業職人、商業應酬"},
    {services: "鐘點約會、專業職人、商業應酬"}
]


function createProductTable(f) {
    var container = document.querySelector('.product-table-container');

    var table = document.createElement('table');
    table.classList.add('product-table');

        var rowNum = Math.ceil(f.length / 4);

    for (var i = 0; i < rowNum; i++) {
        var tr = document.createElement('tr');

        for (var j = 0; j < 4; j++) {
            var index = i * 4 + j;
            if (index < f.length) {
                var idol = f[index];

                var td = document.createElement('td');
                td.id = idol.id;
                td.classList.add('product-item');

                var img = document.createElement('img');
                img.src = "media/female/" + idol.imgSrc;
                img.alt = idol.id;

                var p = document.createElement('p');
                p.innerHTML = idol.id + "<br>";
                var button = document.createElement('button');
                button.classList.add('detail_btn');
                button.textContent = "more";
                //這邊要改生成detail頁面的function
                button.setAttribute('data-index', index);
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

//按下more後生成的
document.querySelectorAll('.detail_btn').forEach(button => {
    button.addEventListener('click', function() {
        const index = this.getAttribute('data-index');
        console.log(index);
        const person = female[index];
        const personDetail = detail[index];
        const ser = service[index];
        const circle_pic = document.getElementById('circle_pic');

        circle_pic.src = `media/female/${person.imgSrc}`;
        circle_pic.alt = person.id;
        document.getElementById('modal-mbti').textContent = personDetail.mbti;
        document.getElementById('modal-name').textContent = person.id;
        document.getElementById('modal-height').textContent = `${personDetail.height} 公分`;
        document.getElementById('modal-aca').textContent = personDetail.aca;
        document.getElementById('modal-career').textContent = personDetail.career;
        document.getElementById('modal-mar').textContent = personDetail.mar;
        document.getElementById('modal-lan').textContent = personDetail.lan;
        document.getElementById('modal-feature').textContent = personDetail.feature;
        document.getElementById('modal-loc').textContent = personDetail.loc;
        document.getElementById('modal-age').textContent = personDetail.age;
        document.getElementById('modal-services').textContent = ser.services;
        document.getElementById('modal-price').textContent = `NT$ ${person.price}`;

        document.getElementById('modal').style.opacity = 0;
        document.getElementById('modal').style.display = "block";
        setTimeout(function() {
            document.getElementById('modal').style.transition = "opacity 0.5s ease";
            document.getElementById('modal').style.opacity = 1;
        }, 10);
    });
});

document.querySelector('.close').addEventListener('click', function() {

    document.getElementById('modal').style.transition = "opacity 0.5s ease";
    document.getElementById('modal').style.opacity = 0;
    setTimeout(function() {
        document.getElementById('modal').style.display = "none";
    }, 500);
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = "none";
    }
});