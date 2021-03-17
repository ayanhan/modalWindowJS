const fruits = [
    {id: 1, title: 'Apple', price: 10, img: 'http://agromehrgan.com/en/images/stories/virtuemart/product/apple-16.jpg'},
    {id: 2, title: 'Cabbage', price: 20, img: 'http://agromehrgan.com/en/images/stories/virtuemart/product/%D8%A8%D8%B1%DA%AF%20%DA%A9%D9%84%D9%85.jpg'},
    {id: 3, title: 'Tangerine', price: 30, img: 'http://agromehrgan.com/en/images/stories/virtuemart/product/%D9%86%D8%AA%D8%A7.jpg'}
]

const toHTML = fruit => `
        <div class="col">
            <div class="card">
                <img style="height: 300px;" src="${fruit.img}" class="card-img-top" alt="${fruit.title}">
                <div class="card-body">
                    <h5 class="card-title">${fruit.title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Price</a>
                    <a href="#" class="btn btn-danger">Delete</a>
                </div>
            </div>
        </div>
`


function render() {
    const html = fruits.map(fruit => {
       return toHTML(fruit)
    }).join('')
   document.querySelector('#fruits').innerHTML = html

}
render()


const priceModal = $.modal({
    title: 'Price',
    closable: 'true',
    width: '400px',
    footerButtons: [
        {text: 'Close', type: 'primary', handler() {
            console.log('Primaary btn clicked')
                priceModal.close()
            }}
    ]
})


document.addEventListener('click', event => {
    event.preventDefault()
    const id = +event.target.dataset.id
    const btnType = event.target.dataset.btn
    if (btnType === 'price') {
        const fruit = fruits.find(f => f.id === id)
        priceModal.setContent(`
          <p>Price for ${fruit.title}: <strong>${fruit.price}$</strong></p>
        `)


        priceModal.open()
    }
})