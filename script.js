// const products = [
//     {
//         name: "classic hoodie",
//         price: "$49.99",
//         image: "image/3.jpg",
//     },
//     {
//         name: "Winter Jackets",
//         price: "$72.99",
//         image: "image/7.jpg",
//     },
//     {
//         name: "denim jackets",
//         price: "$100.00",
//         image: "image/5.jpg",
//     },
// ];
const products = [
    {
        name: "classic hoodie",
        price: "$49.99",
        image: "images/3.jpg",
    },
    {
        name: "Winter Jackets",
        price: "$72.99",
        image: "images/7.jpg",
    },
    {
        name: "denim jackets",
        price: "$100.00",
        image: "images/5.jpg",
    },
];

function loadproducts() {
    const grid = document.querySelector('.product-grid');
    products.forEach(product => {
        const div = document.createElement('div');

        div.className = 'product';
        div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
       `;
        grid.appendChild(div);
    });

}

window.onload = loadproducts;

function scrollToProducts() {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Your Login is Sucessfully (demo only)");

    window.location.href = "index.html";
});