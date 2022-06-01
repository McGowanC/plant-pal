let plantList = [
    "strawberry",
    "cherry",
    "grass",
    "cent leaf",
    "clover",
    "blackberry",
    "blueberry",
    "black leaf"
]

let searchBox = document.querySelector("#plant-search");

searchBox.addEventListener('keyup', hello )


//filter function for finding things in the plantlist

function hello(e) {
    if(e.target.value!==""){
    console.log(searchPlants(e))
    const searchResults = searchPlants(e);
    makeSearchResult(searchResults);
    } else if(e.target.value==="") {
        document.querySelector('header ul').innerHTML = "";
    }
}



function makeSearchResult(array) {
    const searchList = document.querySelector('header ul');
    searchList.innerHTML = "";

    array.forEach((item) => {
        const resultItem = document.createElement('li');
        resultItem.innerText = item;
        searchList.appendChild(resultItem);
    })

}

function searchPlants(e) {
    return plantList.filter(word => word.includes(e.target.value))
}



//build html based off json list


const houseplantDiv = document.querySelector('.common-houseplants');
const p = document.createElement('p');
p.innerText = "hello"
houseplantDiv.appendChild(p);

async function getPlantInfo() {
    let getJSON = await fetch('plants.json');
    let plantListInfo = await getJSON.json(); 
    buildPlantHTML(plantListInfo)
    
}

getPlantInfo();


function buildPlantHTML(array) {

    let plantList = document.querySelector('.common-houseplants ul');

    array.forEach((arrayItem) => {
        let plantCard = document.createElement('div');
        let listItem = document.createElement('li');
        
        let plantName = arrayItem.name;
        let plantDescShort = arrayItem['description-short']        
        
        let builtHTML = `
            <h1>The plant name is ${plantName} </h1>  
                <p>and the description is ${plantDescShort}</p>
                `

        plantCard.innerHTML = builtHTML;
        console.log(builtHTML);
        listItem.append(plantCard)
        plantList.append(listItem);
        
    })
}


// buildPlantHTML([{name: "Craig"}, {name:"Sam"}])