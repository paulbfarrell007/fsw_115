let flexHeader = document.createElement("div")
document.body.appendChild(flexHeader);

let header = document.createElement("h1");
header.textContent = "Pokemon Catcher List";
flexHeader.appendChild(header);

const xhr = new XMLHttpRequest();
xhr.open ("GET", "https://pokeapi.co/api/v2/pokemon", true);
xhr.send();

xhr.onreadystatechange = function(){
     if (xhr.readyState == 4 && xhr.status == 200)
     {let apiData = JSON.parse(xhr.responseText)
         displayData(apiData.results);} 
             else if(xhr.readyState == 4 && xhr.status !== 200)
             {let failed = document.createElement("h2");
                 document.body.appendChild(failed);}}

function displayData(data) {
    data.forEach(function(e, i) {
        let newPokemon = document.createElement("h2");
        newPokemon.textContent = data[i].name;
        document.body.appendChild(newPokemon);

        let newMonster = document.createElement("ul");
        document.body.appendChild(newMonster);

        const xml = new XMLHttpRequest();
        xml.open ("GET",`https://pokeapi.co/api/v2/pokemon/${i+1}`, true);
        xml.send();

xml.onreadystatechange = function()
    {if (xml.readyState == 4 && xml.status == 200)
    {let apiDetails = JSON.parse(xml.responseText)                        
displayDetails(apiDetails.abilities);}                                                    
    else if(xml.readyState == 4 && xml.status !== 200)
    {let failed = document.createElement("li");                    
    failed.textContent = "API Failed"                        
    newMonster.appendChild(failed);}                                                  
    }                                                             
function displayDetails(data)
    {data.forEach(function(e, i)
    {let newPokemon = document.createElement("li");            
    newPokemon.textContent = data[i].ability.name;            
    newMonster.appendChild(newPokemon);})                            
    }        
    });    
    }