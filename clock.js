const clockSection = document.querySelector('.clock');


setInterval(() => {
    const date = new Date();

    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();


    clockSection.textContent = `${h} : ${m} : ${s}`;
},1000);