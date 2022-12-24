let card = [
    [
        'img/img-1.jpg',
        'Escarlate',
        129.99
    ],
    ['img/img-2.jpg',
        'Et',
        139.99
    ],
    ['img/img-3.jpg',
        'Geralt',
        149.99
    ],
    ['img/img-4.jpg',
        'Duff',
        159.99
    ],
    ['img/img-5.jpg',
        'DrHarry Potter',
        199.99
    ],
    ['img/img-6.jpg',
        'Leatherface',
        129.99
    ],
    ['img/img-7.jpg',
        'Thor',
        189.99
    ],
    ['img/img-8.jpg',
        'Bart Zumbi',
        119.99
    ],
    ['img/img-9.jpg',
        'Elvis ',
        179.99
    ],
    ['img/img-10.jpg',
        'Alx Rose',
        109.99
    ],
    ['img/img-11.jpg',
        'Amily rose',
        129.99
    ],
    ['img/img-12.jpg',
        'Angus Young',
        159.99
    ],
    ['img/img-13.jpg',
        'Eivor Varinsdottir',
        149.99
    ],
    ['img/img-14.jpg',
        'Alastor Moody',
        139.99
    ],
    ['img/img-15.jpg',
        'Freed Mercury',
        189.99
    ],
    ['img/img-16.jpg',
        'Dobby',
        179.99
    ],
    ['img/img-17.jpg',
        'Vincent van Gogh',
        129.99
    ],
    ['img/img-18.jpg',
        'Barnei',
        139.99
    ],
    ['img/img-19.jpg',
        'Freddy Krueger',
        109.99
    ],
    ['img/img-20.jpg',
        'Lord Voldemorth',
        119.99
    ],
    ['img/img-21.jpg',
        'Freira',
        169.99
    ],
    ['img/img-22.jpg',
        'Chuck',
        149.99
    ],
    ['img/img-23.jpg',
        'Dr Estranho',
        139.99
    ],
    ['img/img-24.jpg',
        'Lenhador',
        199.99
    ],
    ['img/img-25.jpg',
        'Hermione ranger',
        109.99
    ],
    ['img/img-26.jpg',
        'Moon Knight',
        119.99
    ],
    ['img/img-27.jpg',
        'Brian May',
        129.99
    ],
    ['img/img-28.jpg',
        'Jaison',
        159.99
    ]
];
let valorTotal = 0;
function init() {
    for (let i = 0; i < card.length; i++) {

        let chip = `<div class="card ">
        <div class="img" style="background-image:url(${card[i][0]})"></div>
        <div class="text">${card[i][1]}</div>
        <div class="valor">${card[i][2]} </div>
        <div class="row">
        <input class="col-3" id="${i}" type="number" min="0" value="0">
        <a class="col-8" href="#container-1"><button  onclick="shop(${i})">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>Add to card</button></a>
        </div>
        </div>`;

        const div = document.createElement("div")

        div.classList.add("col-3", "chip")

        div.innerHTML = chip

        document.getElementById('line').appendChild(div)
    }
}
let contador = 0
function count(n1) {
    contador = Number(contador) + Number(n1)
    let count = document.querySelector("#count")
    count.innerHTML = contador
}
function somaTotal(valor) {
    let v3 = document.querySelector("#Total")
    v3.innerHTML = valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

}
function shopInit(){
    const elemento = document.getElementById('container-4')
    elemento.style.display = 'block'
}

function shop(n1) {
    for (let i = 0; i < card.length; i++) {
        if (n1 == i) {
            let valorItem = 0;
            var input = document.getElementById(i)
            var valor = input.value;
            valorItem = card[i][2] * valor;
            valorTotal += valorItem;
            input = 0
            count(valor)
            addCarinho(card[i], valorItem, valorTotal, valor)
            somaTotal(valorTotal)

        }
    }
}
function addCarinho(arr, vItem, vTotal, valor) {
    let vYten = vItem.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    let vten = arr[2].toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    let chip = `<div class="row">
    <div class="img col-2" style="background-image:url(${arr[0]}) "></div>
    <div class="nome col-3">${arr[1]}</div>
    <div class="unidades col-2">${valor} </div>
    <div class="vUnit col-2">${vten} </div>
    <div class="vIten col-2">${vYten} </div>
    </div >`;
    const div = document.createElement("div")
    div.classList.add("card-shop")
    div.innerHTML = chip

    document.getElementById('shop-iten').appendChild(div)
    
}


init()