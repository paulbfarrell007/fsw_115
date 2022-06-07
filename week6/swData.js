let flexHeader = document.createElement("div")
document.body.appendChild(flexHeader);

let header = document.createElement("h1");
header.textContent = "characters, planets, ships, vehicles, droids, and more";
flexHeader.appendChild(header);

const xhr = new XMLHttpRequest();
xhr.open ("GET", "https://swapi.dev/api/people", true);
xhr.send();

xhr.open ("GET", "https://swapi.dev/api/starships", true);
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
        let newSW = document.createElement("h2");
        newSW.textContent = data[i].name;
        document.body.appendChild(newSW);

        let newItem = document.createElement("ul");
        document.body.appendChild(newItem);

        const xml = new XMLHttpRequest();
        xml.open ("GET",`https://swapi.dev/api/${i+1}`, true);
        xml.send();

xml.onreadystatechange = function()
    {if (xml.readyState == 4 && xml.status == 200)
    {let apiDetails = JSON.parse(xml.responseText)                        
displayDetails(apiDetails.abilities);}                                                    
    else if(xml.readyState == 4 && xml.status !== 200)
    {let failed = document.createElement("li");                    
    failed.textContent = "API Failed"                        
    newItem.appendChild(failed);}                                                  
    }                                                             
function displayDetails(data)
    {data.forEach(function(e, i)
    {let newPeople = document.createElement("li");            
    newPeople.textContent = data[i].ability.name;            
    newItem.appendChild(newPeople);})                            
    }        
    });    
    }