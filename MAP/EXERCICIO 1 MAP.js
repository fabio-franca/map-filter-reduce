//Retornar nome do produto e preço com desconto de 50% quando o valor for igual ou maior que 30
 const products = [{
    name: 'Mouse Sem Fio',
    price: 30
  },
  {
    name: 'Pen Drive',
    price: 25
  },
  {
    name: 'Cartucho de Tinta',
    price: 50
  },
  {
    name: 'Suporte Ergonômico para Notebook',
    price: 23
  },
  {
    name: 'Repetidor de Sinal Wi-Fi',
    price: 44
  }
];

const newProducts = products.map(product => {
  if (product.price >= 30) {
  	return `${product.name} ${product.price/2}`
  } else {
     return `${product.name} ${product.price}`
  }
});

console.log(newProducts);
