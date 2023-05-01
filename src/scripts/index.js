import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

//Fetch data json
import ('../DATA.json').then(({default: jsonData}) => {
    console.log(jsonData)
    let datas = jsonData['restaurants']
    let dataList = '';
    datas.forEach( data => {
        dataList += `
        <div class ="listItem" tabindex="0">
            <img class="listItemThumb" src="${data['pictureId']}" alt="${data['name']} "title="${data['name']}">
            <div class="city">${data['city']}</div>
            <div class="listItemContent">
                <p class="listItemRating">
                    Rating :
                    <a href="#" class="listRatingValue>${data['rating']}</a>
                </p>
                <br><a href="#">⭐${data['rating']}</br>
                <h1 class="listItemTitle"><a href="#">${data['name']}</a></h1>
                <div class="listItemDescr">${data['description'].slice(0, 150)}...</div>
            </div>
        </div>`;
    });
    document.querySelector('#rest').innerHTML = dataList;
});

//Menu
const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', event => {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

hero.addEventListener('click', () => {
    drawer.classList.remove('open');
});

main.addEventListener('click', () => {
    drawer.classList.remove('open');
});
