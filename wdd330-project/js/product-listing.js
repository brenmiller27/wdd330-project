fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => console.log(json));


fetch("https://fakestoreapi.com/products/7", {
  method: "PUT",
  body: JSON.stringify({
    title: "test product",
    price: 13.5,
    description: "lorem ipsum set",
    image: "https://i.pravatar.cc",
    category: "electronic",
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));

async function fetchData(){
  try {
    const response = await fetch("https://fakestoreapi.com/products/7")

    if(!response.ok) {
        throw new Error("Could not fetch resourse")

    }

    const data = await response.json();
    console.log(data);

  }
  catch(error){
    console.error(error)
  }

}


/* will return
{
    id:7,
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
}
*/


async function fetchData() {


    
}