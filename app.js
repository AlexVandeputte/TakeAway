import arrayFood from './foodData.js' 
import arrayPlace from './placeData.js'


console.log(arrayFood)
console.log(arrayPlace)



let params = new URLSearchParams(document.location.search)
let terras = params.get('terras')
let foodArray = []
let arrayCat = []
const menuWrapper = document.getElementById("menu")
const placeWrapper = document.getElementById("terrasSelect")

init()

document.getElementById('selectBtn').addEventListener('click', placeSelected)

function init(){
    genPlaceSelectHtml(placeWrapper, arrayPlace)
    selectView()
    genCatHtml(menuWrapper, foodArray, arrayCat)
    attachToggleCatListeners();
    attachIncrementButtonListeners()
}

///first called function after init
function genPlaceSelectHtml(wrapper, arrayPlace){
  for (const x of arrayPlace){
    wrapper.innerHTML += `<option value="${x.placeName}">${x.placeName}</option>`
  }
}

///second called function after init
function selectView(){
  if (terras === null){
    document.getElementById("terrasPlaats").style.display = "block"
    document.getElementById("menu").style.display = "none"
    document.getElementById("terrasTitle").style.display = "none"
    document.getElementById("gegevens").style.display = "none"
  } else {
    if (arrayPlace.find((x) => x.placeName === terras).placeLocation === "tafel"){
      document.getElementById("placeLocation").innerHTML = `
        <input type="number" name="tafel" style="width: 100%;margin-top: 0.5%" placeholder="tafel nummer" required>`
    } 
    if (arrayPlace.find((x) => x.placeName === terras).placeLocation === "adres") {
      document.getElementById("placeLocation").innerHTML = `
        <input type="text" name="straat" style="width: 100%;margin-top: 0.5%" placeholder="straatnaam" required>
        <input type="number" name="huisnummer" style="width: 100%;margin-top: 0.5%" placeholder="huisnummer" required>`
    }
    if (arrayPlace.find((x) => x.placeName === terras).placeLocation === "omschrijving") {
      document.getElementById("placeLocation").innerHTML = `
        <input type="text" name="plaats omschrijving" style="width: 100%;margin-top: 0.5%" placeholder="plaats omschrijving" required>`
    }

    document.getElementById("terrasPlaats").style.display = "none"
    document.getElementById("menu").style.display = "block"
    document.getElementById('terrasSelect').value = terras
    document.getElementById('terrasTitle').innerHTML += ` ${terras}` 
    document.getElementById("formSpree").action = `${arrayPlace.find((x) => x.placeName === terras).placePost}`
    document.getElementById("placeDisc").innerHTML = `${arrayPlace.find((x) => x.placeName === terras).placeDisc}`
    foodArray = filterArray(arrayFood, [...arrayPlace.find((x) => x.placeName === terras).placeItemFilter], [...arrayPlace.find((x) => x.placeName === terras).placeCatFilter], [...arrayPlace.find((x) => x.placeName === terras).placeDivFilter])
    arrayCat = [...new Set(foodArray.map((x) => x.foodCat))]
  }
}

///third called function after init
function genCatHtml(wrapper, foodArray){
  for (const x of arrayCat){
      const catIndex = arrayCat.indexOf(x) + 1;
      wrapper.innerHTML += `
      <div class="row" id="cat${catIndex}Row" style="display: block;height: auto">
          <div class="col-sm"> 
              <div class="cat-header" id="cat${catIndex}">
                  <h6 class="toggle-cat" data-index="${catIndex}" id="titleCat${catIndex}">${x} ⇊</h6>
                  <div class="row item-cat" id="itemCat${catIndex}" style="display: none;"></div>
              </div>
          </div>
      </div>`;
      genItemHtml(`itemCat${catIndex}`, foodArray.filter((y) => y.foodCat === x));
  }
}

///called by function genCatHtml
function genItemHtml(wrapper, x){
  for (const item of x){
      let price = genItemPriceHtml(item)[0]
      let priceString = genItemPriceHtml(item)[1]
      document.getElementById(wrapper).innerHTML += `
      <div class="col-lg space" id="food${item.foodNumber}">
          <div>
              <div class="row item-np" style="margin: 0px;padding:0px;">
                  <div style="margin: 0px;padding:0px;">
                      <label for="${item.foodNumber}"><b>${typeof item.foodName === "string" ? `${item.foodName}` : `${item.foodName[0]}`}</b></label>
                  </div>
                  <div style="margin-left: auto;margin-right: 0;padding:0px;">
                      <label><b>${price ? `&euro;${price}` : ''}</b></label>
                  </div>
              </div>  
              ${item.foodDisc&&item.foodImg ? `
              <div class="row item-ds" style="margin: 0px;padding:0px;">
                  <div class="col-sm" style="margin: 0px;padding:0px;display: flex;">
                      <img src="${item.foodImg}" alt="${item.foodName}" srcset="">
                      <p style="margin: 0;">${item.foodDisc}</p>
                  </div>
              </div>` : `
              ${item.foodDisc ? `
              <div class="row item-ds" style="margin: 0px;padding:0px;">
                  <div class="col-sm" style="margin: 0px;padding:0px;display: flex;">
                      <p style="margin: 0;">${item.foodDisc}</p>
                  </div>
              </div>` : ""}`
              }
              ${priceString}
          </div>
      </div>`
  }
}

///called by function genItemHtml
function genItemPriceHtml(item){
  let genString = ''
  let normaalPrice = ''
  if(item.foodPrice.length > 1){
    //special price
    for (const y of item.foodPrice){
      //normale price
      if (y.name === 'normaal'){
        genString += `
        <div class="item-type">
          <div style=" max-width: 2000px; height: 20px; margin-top: 2%; padding: 0;text-align: center; display: flex;">
            <div class="decrement">-</div>
            <input id="${item.foodNumber}" name="${item.foodName} ${item.foodPrice[0].price}" placeholder="aantal" style="line-height: 12px; font-size: 25px; text-align: center; width: 100%; padding: 0; margin: 0; height: 30px;" type="number">
            <div class="increment">+</div>
          </div>
        </div>`
        normaalPrice = (item.foodPrice[0].price)
      } else {
        //special extra
        if (y.extra === false){
          genString += `
          <div class="item-type">
            <div style=" max-width: 2000px; height: 20px; margin-top: 2%; padding: 0;text-align: center; display: flex;">
              <div style="width: 75%;display: flex;justify-content: space-between;">
                <p style="text-align: left;line-height: 30px">${y.name}</p>
                <p><b style="line-height: 30px">&euro;${y.price}</b></p>
              </div>
              <div style="margin-left: 10px" class="decrement">-</div>
              <input id="${item.foodNumber}" name="${item.foodName} ${y.name} ${normaalPrice + y.price}" placeholder="0" style="line-height: 12px; font-size: 25px; text-align: center; width: 25%; padding: 0; margin: 0; height: 30px;" type="number">
              <div class="increment">+</div>
            </div>
          </div>`
        }
        //special
        if (y.extra === true){
          genString += `
          <div class="item-type">
            <div style=" max-width: 2000px; height: 20px; margin-top: 2%; padding: 0;text-align: center; display: flex;">
              <div style="width: 75%;display: flex;justify-content: space-between;">
                <p style="text-align: left;line-height: 30px">${y.name}</p>
                <p><b style="line-height: 30px">+&euro;${y.price}</b></p>
              </div>
              <div style="margin-left: 10px" class="decrement">-</div>
              <input id="${item.foodNumber}" name="${item.foodName} ${y.name} ${y.price}" placeholder="0" style="line-height: 12px; font-size: 25px; text-align: center; width: 25%; padding: 0; margin: 0; height: 30px;" type="number">
              <div class="increment">+</div>
            </div>
          </div>`
        }
      }
    }
  } 
  else {
    //no special price 
    genString += `
    <div class="item-type">
      <div style=" max-width: 2000px; height: 20px; margin-top: 2%; padding: 0;text-align: center; display: flex;">
        <div class="decrement">-</div>
        <input id="${item.foodNumber}" name="${item.foodName} ${item.foodPrice[0].price}" placeholder="aantal" style="line-height: 12px; font-size: 25px; text-align: center; width: 100%; padding: 0; margin: 0; height: 30px;" type="number">
        <div class="increment">+</div>
      </div>
    </div>`
    normaalPrice = (item.foodPrice[0].price)
  }

  return [normaalPrice, genString]
}

///forth function called after init
function attachToggleCatListeners() {
  const toggleElements = document.querySelectorAll('.toggle-cat');
  toggleElements.forEach(element => {
      element.addEventListener('click', function() {
          const index = this.getAttribute('data-index') - 1; // Adjust for 0-based index
          toggleCat(index);
      });
  });
}

///fifth function called after init
function attachIncrementButtonListeners(){
  const decrementButtons = document.querySelectorAll('.decrement');
  const incrementButtons = document.querySelectorAll('.increment');
  console.log(decrementButtons)
  console.log(incrementButtons)

  decrementButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log('-1')
        const input = e.target.nextElementSibling;
        console.log(parseInt(input.value))
        if (isNaN(parseInt(input.value)) || parseInt(input.value) <= 1){
          input.value = ''
        }
        else {
            input.value = parseInt(input.value) - 1;
        }
    });
  });
    
  incrementButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log('+1')
        const input = e.target.previousElementSibling;
        if (isNaN(parseInt(input.value))){
          input.value = 1
        }
        else {
            input.value = parseInt(input.value) + 1;
        }
    });
  });  
}




///real functions 
function toggleCat(text){
  let triger = document.getElementById(`titleCat${text + 1}`);
  let target = document.getElementById(`itemCat${text + 1}`);
  if (target.style.display === "none"){
      target.style.display = 'unset';
      triger.innerHTML = `${arrayCat[text]} ⇈`;
  } else {
      target.style.display = 'none';
      triger.innerHTML = `${arrayCat[text]} ⇊`;
  }
}

function placeSelected(){
  const selectedTerras = document.getElementById('terrasSelect').value
  if (selectedTerras !== ""){
    window.location.replace(`?terras=${selectedTerras}`)
  } else {
    console.log("not selected")
  }
}

function filterArray(list, num, cat, div) {
  for (const x of div){
    list = filterArrayDiv(list, x)
  }
  for (const x of cat){
    list = filterArrayCat(list, x)
  }
  for (const x of num){
    list = filterArrayItem(list, x)

  }
  return(list)
}
function filterArrayItem(list, num){

  return (list.filter((x) => x.foodNumber !== num))
}
function filterArrayCat(list, cat){
  return (list.filter((x) => x.foodCat !== cat))
}
function filterArrayDiv(list, div){
  return (list.filter((x) => x.foodDiv !== div))
}
