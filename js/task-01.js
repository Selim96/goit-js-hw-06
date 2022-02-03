const list = document.querySelector('#categories');

function categoriesList(someList) {
    const items = someList.children;
    console.log(`Number of categories: ${items.length}`);
    console.log('');
    const arrOfItems = [...items];

    return arrOfItems.map((item) => {
        console.log(`Category: ${item.firstElementChild.textContent}`);
        const elements = item.lastElementChild.children;
        console.log(`Elements: ${elements.length}`);
        console.log('');
    });
};

categoriesList(list);

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5