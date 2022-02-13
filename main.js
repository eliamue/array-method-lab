// const async = require('async');
// const fetch = require('node-fetch');
const fs = require('fs');

// RETURN NEW PRODUCTS, NOT FINISHED, STILL IN STRING FORM AND NOT PUT INTO PROPER SHAPE YET
// const poop = Promise.all([
//     fetch('http://127.0.0.1:8081/product_info?product_id=1'),
//     fetch('http://127.0.0.1:8081/product_info?product_id=2'),
//     fetch('http://127.0.0.1:8081/product_info?product_id=3'),
//     fetch('http://127.0.0.1:8081/product_info?product_id=4'),
//     fetch('http://127.0.0.1:8081/product_info?product_id=5'),
//     fetch('http://127.0.0.1:8081/product_info?product_id=6'),
// ], {
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json'
//     }}).then(function (responses) {
// 	return Promise.all(responses.map(function (res) {
// 		return res.text();

// 	}));
// }).then(function (data) {
// 	console.log(data);
// }).catch(function (error) {
// 	console.log(error);
// });

fs.readFile('/root/data/productsDump.json', 'utf8', (err, data) => {
  const oldProducts = JSON.parse(data);
  const newProducts = [
    {
      updated_at: 1565641075,
      price: 110,
      manufacturer: 'm2',
      id: 1,
      name: 'Product1',
    },
    { updated_at: 1565641635, price: 48, id: 3, name: 'Product3' },
    {
      updated_at: 1565642015,
      price: 28,
      manufacturer: 'm1',
      id: 4,
      name: 'Product4',
    },
    {
      updated_at: 1565641485,
      price: 91,
      id: 5,
      name: 'Product5',
    },
    {
      updated_at: 1565641596,
      price: 80,
      id: 6,
      name: 'Product6',
    },
  ];

  const both = oldProducts.concat(newProducts);
  both.forEach(function (product) {
    if (product.manufacturer) {
      console.log(`${product.id}_${product.name}_${product.manufacturer}`);
    } else {
      console.log(`${product.id}_${product.name}`);
    }
  });
});

  //     let result = newProducts.filter(o1 => oldProducts.some(o2 => newProducts.o1.charAt(0) !== oldProducts.o2.charAt(0)));
  // console.log(result)
  //     // const both = oldProducts.filter(function (oldPro) {
  //     //     return newProducts.some(function (newPro) {
  //     //         console.log(oldPro !== newPro);
  //     //     })
  //     })
  
  //     const a_map = newProducts.reduce((acc, value) => Object.assign({}, acc, {[value.id]: value}), {});
  // const uniques = oldProducts.filter(o => !!a_map[o.id])
  // newProducts.pop(uniques);
  // console.log(newProducts, oldProducts)
  

//     if (newProduct.id !== oldProduct.id && newProduct.manufacturer !== oldProduct.manufacturer) {
//         all.push(newProduct, oldProduct)
//     }
// }
//     const res = oldProducts.filter(function(oldProduct) {
//         return newProducts.some(function(newProduct) {
//             return (!oldProduct.Id === newProduct.Id);
//     })
// console.log(res)
