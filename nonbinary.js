var others = [
    { id: "Squirtle", price: 1200, imgSrc: "squirtle.jpg" },
    { id: "Charmander", price: 1600, imgSrc: "charmander.jpg" },
    { id: "Pikachu", price: 2000, imgSrc: "pikachu.jpg" },
    { id: "Bulbasaur", price: 1600, imgSrc: "bulbasaur.jpg" },
    { id: "BiBi", price: 1800, imgSrc: "bibi.jpg" },
    { id: "Shiba", price: 1500, imgSrc: "shiba.jpg" },
    { id: "Samoyed", price: 1600, imgSrc: "samoyed.jpg" }
]

var detail = [
    { mbti:"ISTP", height:"50", loc:"武鬥道館", aca:"水", career:"烏龜", feature:"激流", mar:"單身", lan:"日文", age:'5'}, 
    { mbti:"ISTJ", height:"158", loc:"釜炎道館", aca:"火", career:"龍", feature:"猛火", mar:"單身", lan:"日文", age:'5'},
    { mbti:"ENFP", height:"40", loc:"枯葉道館", aca:"電", career:"老鼠", feature:"靜電", mar:"單身", lan:"日文", age:'5'},
    { mbti:"ISFJ", height:"70", loc:"台南", aca:"草", career:"青蛙", feature:"茂盛", mar:"單身", lan:"日文", age:'23'},
    { mbti:"ISFP", height:"70", loc:"永康", aca:"吃貨", career:"睡覺", feature:"睡覺", mar:"已結渣", lan:"喵", age:'6'},
    { mbti:"INFP", height:"120", loc:"育樂街", aca:"吃貨", career:"拆家", feature:"賣握手捲", mar:"已結紮", lan:"汪", age:'3'},
    { mbti:"ESFJ", height:"130", loc:"Pinterest", aca:"吃貨", career:"騙流量", feature:"探索中", mar:"已結紮", lan:"嗷烏", age:'4'}
]

var service = [
    {services: "鐘點約會、專業職人、商業應酬"},
    {services: "鐘點約會、旅遊陪同、朋友聚會"},
    {services: "鐘點約會、專業職人、商業應酬"},
    {services: "鐘點約會、旅遊陪同、專業職人、朋友聚會、商業應酬"},
    {services: "鐘點約會、專業職人、商業應酬"},
    {services: "鐘點約會、專業職人、朋友聚會"},
    {services: "鐘點約會、專業職人、朋友聚會"}
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
                img.src = "media/comic/" + idol.imgSrc;
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
createProductTable(others);

//按下more後生成的
document.querySelectorAll('.detail_btn').forEach(button => {
    button.addEventListener('click', function() {
        const index = this.getAttribute('data-index');
        console.log(index);
        const person = others[index];
        const personDetail = detail[index];
        const ser = service[index];
        const circle_pic = document.getElementById('circle_pic');

        circle_pic.src = `media/comic/${person.imgSrc}`;
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
        // document.getElementById('modal-price').textContent = `NT$ ${person.price}`;

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
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const closeBtns = document.querySelectorAll('.close');
    const reserveIcon = document.getElementById('reserve-icon');
    const datePicker = document.getElementById('date-picker');
    const scheduleButton = document.getElementById('schedule-button');
    const scheduleModal = document.getElementById('schedule-modal');
    const calendar = document.getElementById('calendar');

    // Close modals
    closeBtns.forEach(btn => {
        btn.onclick = function() {
            btn.parentElement.parentElement.style.display = 'none';
            enableBackgroundInteraction();
        };
    });

    // Show date picker on icon click
    reserveIcon.onclick = function() {
        datePicker.style.display = 'block';
        scheduleButton.classList.remove('hidden');
    };

    // Set the minimum date to today for date picker
    const today = new Date().toISOString().split('T')[0];
    datePicker.setAttribute('min', today);

    // Schedule the date
    scheduleButton.onclick = function() {
        const selectedDate = datePicker.value;
        const selectedDateObj = new Date(selectedDate);
        if (selectedDate) {
            if (selectedDateObj.getMonth() > 5) {
                alert("Only June is available");
            } else {
                addScheduleToCalendar(selectedDate);
                datePicker.style.display = 'none';
                scheduleButton.classList.add('hidden');
                scheduleModal.style.display = 'block';
                disableBackgroundInteraction();
            }
        } else {
            alert('Please select a date.');
        }
    };

    // Function to add scheduled date to calendar
    function addScheduleToCalendar(date) {
        const dateObj = new Date(date);
        const day = dateObj.getDate();
        const month = dateObj.getMonth() + 1;
        const year = dateObj.getFullYear();
			alert('預約成功！\n電話：34101282\n姓名：黃彥哲');
        const calendarDays = calendar.querySelectorAll('.calendar-day');
        calendarDays.forEach(dayElem => {
            const dayDate = new Date(dayElem.dataset.date);
            if (dayDate.getDate() === day && dayDate.getMonth() + 1 === month && dayDate.getFullYear() === year) {
                const input = dayElem.querySelector('input');
                input.value = '黃先生 已預定';
                dayElem.classList.add('blocked'); // Add blocked class to visually indicate it's reserved
            }
        });
    }

    // Function to create calendar for the current month
    function createCalendar() {
        const now = new Date();
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

        // Display current month and year in the schedule modal
        const monthYearText = document.createElement('p');
        monthYearText.textContent = `${startOfMonth.toLocaleString('default', { month: 'long' })} ${startOfMonth.getFullYear()}`;
        monthYearText.classList.add('month-year-text');
        scheduleModal.querySelector('.modal-content').insertBefore(monthYearText, calendar);

        for (let i = 1; i <= endOfMonth.getDate(); i++) {
            const day = document.createElement('div');
            day.className = 'calendar-day';
            day.dataset.date = new Date(now.getFullYear(), now.getMonth(), i).toISOString();

            const span = document.createElement('span');
            span.textContent = i;

            const input = document.createElement('input');
            input.type = 'text';
            input.disabled = true;

            day.appendChild(span);
            day.appendChild(input);
            calendar.appendChild(day);
        }
    }

    createCalendar();

    // Disable background interaction
    function disableBackgroundInteraction() {
        const elements = document.querySelectorAll('body > :not(.modal)');
        elements.forEach(element => {
            element.classList.add('disabled');
        });
    }

    // Enable background interaction
    function enableBackgroundInteraction() {
        const elements = document.querySelectorAll('body > :not(.modal)');
        elements.forEach(element => {
            element.classList.remove('disabled');
        });
    }

    // Close modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target == modal || event.target == scheduleModal) {
            event.target.style.display = 'none';
            enableBackgroundInteraction();
        }
    };
});
