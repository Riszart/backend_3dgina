const data_global= []

const array_data_backend_all = {
  aguas:'https://raw.githubusercontent.com/Riszart/image/main/json/aguas.json',
  bebidas_gasificadas:'https://raw.githubusercontent.com/Riszart/image/main/json/bebidas_gasificadas.json',
  detergentes:'https://raw.githubusercontent.com/Riszart/image/main/json/detergentes.json',
  // jabones:'https://raw.githubusercontent.com/Riszart/image/main/json/jabones.json',
  lejias:'https://raw.githubusercontent.com/Riszart/image/main/json/lejias.json',
  frugos:'https://raw.githubusercontent.com/Riszart/image/main/json/frugos.json',
  // energisantes:'',
  // papeles_de_limpiesa:'',
}

Object.values(array_data_backend_all).forEach(url => {
  loadData(url)
});
async function loadData(URL){
  const response = await fetch(URL)
  data = await response.json();
  data.forEach(element => {
    data_global.push(element)
  });
}

function allProducts(data){
  
}