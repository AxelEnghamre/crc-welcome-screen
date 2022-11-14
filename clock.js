const clockSection = document.querySelector('.clock');


setInterval(() => {
    const date = new Date();

    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();

    let Oh = '';
    let Om = '';
    let Os = '';

    h < 10? Oh = '0' : Oh = '';
    m < 10? Om = '0' : Om = '';
    s < 10? Os = '0' : Os = '';


    clockSection.textContent = `${Oh + h} : ${Om + m} : ${Os + s}`;
},1000);