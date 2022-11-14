const welcomeSection = document.querySelector('.welcome');


const welcome = (name) => {
    welcomeSection.textContent = '';

    welcomeSection.style.padding = 1 + 'rem';

    const h2 = document.createElement('h2');
    h2.textContent = "välkommen";
    
    const p = document.createElement('p');
    p.textContent = name;
    
    welcomeSection.appendChild(h2);
    welcomeSection.appendChild(p);
};

const getName = async () => {
    const response = await fetch('name.txt');
    if(response.ok) {
        const name = await response.text();
        
        if(name != '') {
            welcome(name);
        } else {
            welcomeSection.textContent = '';
        welcomeSection.style.padding = 0;
        }
    } else {
        welcomeSection.textContent = '';
        welcomeSection.style.padding = 0;
    }
}


setInterval(getName,10000);