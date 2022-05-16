



function Species(){
    axios.get("https://swapi.dev/api/Species/")
    .then(response => {
            for (i =0; i < response.data.results.length; i++){
            const h1 = document.createElement("h1")
            h1.innerHTML = `${response.data.results[i].Species}`
            let data = document.getElementById("list")
            data.append(h1)
            }
            }) 
            .catch(error => console.log(error))
}
function Vehicles(){
    axios.get("https://swapi.dev/api/Vehicles")
 .then(response => {
for (i =0; i < response.data.results.length; i++){
    const h2 = document.createElement("h2")
    h2.innerHTML = `${response.data.results[i].Vehicles}`
    let data = document.getElementById("list")
    data.append(h2)       
        }
    })
    .catch(error => console.log(error))
}