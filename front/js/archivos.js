const $ = document;

const containerProducts = $.querySelector('#containerProducts')

const newCard = ({id,rude,sie,nombre,fecha,gestion,dirrecion,director,secretaria,estado}) => {
    return `
           

            <div class="card" id=${id}>
                <p class="card-rude">${rude} </p>
                <p class="card-rude">${sie} </p>
                <p class="card-nombre" >${nombre}</p>
                <p class="card-fecha" >${fecha}</p>
                <p class="card-gestion" >${gestion}</p>
                <p class="card-direccion" >${dirrecion}</p>
                <p class="card-director" >${director}</p>
                <p class="card-secretaria" >${secretaria}</p>
                <p class="card-estado" >${estado}</p>
                <select class="card-select">
                    <option class="proceso" value="proceso">Proceso</option>
                    <option class="aprovado" value="aprovado">Aprovado</option>
                    <option class="finalizado" value="finalizado">Finalizado</option>
                </select>
            </div>
    `
}

const renderCards = (array)=>{
    const cardsHTML = array.map(item => newCard(item)).join('');
    containerProducts.innerHTML = cardsHTML;
}

/*const handleDetailCard = (id) => {
    window.location = `./page/detail.html?idproducto=${id}`
    //console.log('hiciste click');
}

const addClickDetailCard = () =>{
    const cards = document.querySelectorAll('.card')
    console.log(cards);
    cards.forEach((card) => card.addEventListener('click',(evento)=>{
        handleDetailCard(evento.target.id)
    }))
}*/

const getAll = async ()=>{
    try {
        const response = await fetch('http://localhost:3009/api/productos')
        if (response.status !== 200) throw new Error('Error en la solicitud')
        const data = await response.json()
        renderCards(data)
    } catch (error) {
        alert('Error ' + error)
    }
}

getAll()
/*document.addEventListener('DOMContentLoaded', async()=>{
    await getAll()
    addClickDetailCard()
})*/


