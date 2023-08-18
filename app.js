let arrayFood = [
  {
    foodNumber: 1,
    foodName: "Portie Mix",
    foodImg: "food/portie-mix.png",
    foodDisc: "Salami, kaas, mosterd, augurkjes en ajuintjes",
    foodPrice: [{name: "normaal", price:11, extra: false}],
    foodCat: "Tapas",
    foodDiv: "food"
  },
  {
    foodNumber: 2,
    foodName: "Portie Mix + Rillette",
    foodImg: "food/portie-mix-rillette.png",
    foodDisc: "Rillette + toastjes\nSalami, kaas, mosterd, augurkjes en ajuintjes",
    foodPrice: [{name: "normaal", price:16, extra: false}],
    foodCat: "Tapas",
    foodDiv: "food"
  },
  {
    foodNumber: 3,
    foodName: "Portie Mix + Krab",
    foodImg: "food/portie-mix-krab.png",
    foodDisc: "Krabsalade v/h huis met verse kroepoek\nSalami, kaas, mosterd, augurkjes en ajuintjes",
    foodPrice: [{name: "normaal", price:17, extra: false}],
    foodCat: "Tapas",
    foodDiv: "food"
  },
  {
    foodNumber: 4,
    foodName: "Tapas Schotel Fiesta",
    foodImg: "food/tapas-schotel-fiesta.png",
    foodDisc: "Tomatensalsa, Guacamole en bijhorende Nacho’s en chorizo\nKaas, salami, mosterd, augurkjes en uitjes",
    foodPrice: [{name: "normaal", price:17, extra: false}],
    foodCat: "Tapas",
    foodDiv: "food"
  },
  {
    foodNumber: 5,
    foodName: "Tapas Schotel Wervik Kerremesse",
    foodImg: "food/tapas-schotel-wervik-kerremesse.png",
    foodDisc: "Bicky en kip&peper salade v/h huis + bijhorende toastjes, witte pens en Paté\nKaas en salami, mosterd, augurkjes en uitjes",
    foodPrice: [{name: "normaal", price:21.5, extra: false}],
    foodCat: "Tapas",
    foodDiv: "food"
  },
  {
    foodNumber: 6,
    foodName: "Up t’Gemak Burger (warm)",
    foodImg: "food/up-t-gemak-burger.png",
    foodDisc: "Bagnat broodje, 180 gr rundsvlees, salade, tomaat, gedroogde en rode ui en up t’Gemak saus",
    foodPrice: [{name: "normaal", price:10, extra: false}],
    foodCat: "Broodjes & Burgers",
    foodDiv: "food"
  },
  {
    foodNumber: 7,
    foodName: "Croque Up t’Gerecht (warm)",
    foodImg: "food/croque-up-t-gerecht.png",
    foodDisc: "½ Bruschetta brood met tomatensalsa, hesp, kaas, rucola en pijnboompitjes",
    foodPrice: [{name: "normaal", price:8.5, extra: false}],
    foodCat: "Broodjes & Burgers",
    foodDiv: "food"
  },
  {
    foodNumber: 8,
    foodName: "Panini ham & kaas",
    foodImg: "food/panini-ham-kaas.png",
    foodDisc: "(warm van Het Krokantje)",
    foodPrice: [{name: "normaal", price:6.5, extra: false}],
    foodCat: "Broodjes & Burgers",
    foodDiv: "food"
  },
  {
    foodNumber: 9,
    foodName: "Panini boulette",
    foodImg: "food/panini-boulette.png",
    foodDisc: "boulette met kaas, Andalousesaus en gedroogde uitjes (warm van het Krokantje)",
    foodPrice: [{name: "normaal", price:6.5, extra: false}],
    foodCat: "Broodjes & Burgers",
    foodDiv: "food"
  },
  {
    foodNumber: 10,
    foodName: "Panini mozarella",
    foodImg: "food/panini-mozarella.png",
    foodDisc: "mozarella, pesto en gerookte ham (warm van het krokantje)",
    foodPrice: [{name: "normaal", price:6.5, extra: false}],
    foodCat: "Broodjes & Burgers",
    foodDiv: "food"
  },
  {
    foodNumber: 11,
    foodName: "Mama Thai (warm)",
    foodImg: "food/mama-thai.png",
    foodDisc: "Pasta beker met kip in een heerlijk sausje met kokos en rode curry",
    foodPrice: [{name: "normaal", price:9.5, extra: false}],
    foodCat: "Pasta",
    foodDiv: "food"
  },
  {
    foodNumber: 12,
    foodName: "Salade Tropical",
    foodImg: "food/salade-tropical.png",
    foodDisc: "Koude pastasalade met kip, curry, ananas, wortel enz…",
    foodPrice: [{name: "normaal", price:8.5, extra: false}],
    foodCat: "Pasta",
    foodDiv: "food"
  },
  {
    foodNumber: 13,
    foodName: "Bagnat met kip&peper",
    foodImg: "food/bagnat-met-kip-peper.png",
    foodDisc: "Bagnat broodje belegd met huis bereide kip&peper salade, wortel en tomaat",
    foodPrice: [{name: "normaal", price:5, extra: false}],
    foodCat: "Broodjes & Burgers",
    foodDiv: "food"
  },
  {
    foodNumber: 14,
    foodName: "Bagnat eiersalade met garnaaltjes",
    foodImg: "food/bagnat-eiersalade-garnaaltjes.png",
    foodDisc: "Bagnat broodje belegd met eiersalade v/h huis, garnaaltjes, salade, wortel en tomaat",
    foodPrice: [{name: "normaal", price:6.5, extra: false}],
    foodCat: "Broodjes & Burgers",
    foodDiv: "food"
  },
  {
    foodNumber: 15,
    foodName: "Verwenbordje voor bij de koffie",
    foodImg: "food/verwenbordje.png",
    foodDisc: "2 stukjes taart, advocaat en chocolaatjes",
    foodPrice: [{name: "normaal", price:10, extra: false}],
    foodCat: "Desert",
    foodDiv: "food"
  },
  {
    foodNumber: 16,
    foodName: "Chocomousse",
    foodImg: "food/chocomouse.png",
    foodDisc: "",
    foodPrice: [{name: "normaal", price:6, extra: false}],
    foodCat: "Desert",
    foodDiv: "food"
  },
  {
    foodNumber: 17,
    foodName: "Coca cola",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:2.4, extra: false}],
    foodCat: "frisdrank",
    foodDiv: "drink"
  },
  {
    foodNumber: 18,
    foodName: "Coca cola Zero",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:2.4, extra: false}],
    foodCat: "frisdrank",
    foodDiv: "drink"
  },
  {
    foodNumber: 19,
    foodName: "Fanta orange",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:2.4, extra: false}],
    foodCat: "frisdrank",
    foodDiv: "drink"
  },
  {
    foodNumber: 20,
    foodName: "Lipton ice tea",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:2.6, extra: false}],
    foodCat: "frisdrank",
    foodDiv: "drink"
  },
  {
    foodNumber: 21,
    foodName: "Schweppes tonic",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:2.6, extra: false}],
    foodCat: "frisdrank",
    foodDiv: "drink"
  },
  {
    foodNumber: 22,
    foodName: "Schweppes agrum",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:2.6, extra: false}],
    foodCat: "frisdrank",
    foodDiv: "drink"
  },
  {
    foodNumber: 23,
    foodName: "Tonissteiner citroen",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:2.6, extra: false}],
    foodCat: "frisdrank",
    foodDiv: "drink"
  },
  {
    foodNumber: 24,
    foodName: "Tonissteiner orange",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:2.6, extra: false}],
    foodCat: "frisdrank",
    foodDiv: "drink"
  },
  {
    foodNumber: 25,
    foodName: "Looza orange",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:2.4, extra: false}],
    foodCat: "frisdrank",
    foodDiv: "drink"
  },
  {
    foodNumber: 26,
    foodName: "Looza appel",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:2.4, extra: false}],
    foodCat: "frisdrank",
    foodDiv: "drink"
  },
  {
    foodNumber: 27,
    foodName: "Cecemel",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:2.5, extra: false}],
    foodCat: "frisdrank",
    foodDiv: "drink"
  },
  {
    foodNumber: 28,
    foodName: "Appeltiser",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:3, extra: false}],
    foodCat: "frisdrank",
    foodDiv: "drink"
  },
  {
    foodNumber: 29,
    foodName: "Canada dry",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:2.6, extra: false}],
    foodCat: "frisdrank",
    foodDiv: "drink"
  },
  {
    foodNumber: 30,
    foodName: "Gini",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:2.4, extra: false}],
    foodCat: "frisdrank",
    foodDiv: "drink"
  },
  {
    foodNumber: 31,
    foodName: "Stella Artois 25cl",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:2.4, extra: false}],
    foodCat: "Bier op vat",
    foodDiv: "drink"
  },
  {
    foodNumber: 32,
    foodName: "Stella Artois 33cl",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:3, extra: false}],
    foodCat: "Bier op vat",
    foodDiv: "drink"
  },
  {
    foodNumber: 33,
    foodName: "Gouden Carolus Tripel",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:4.2, extra: false}],
    foodCat: "Bier op vat",
    foodDiv: "drink"
  },
  {
    foodNumber: 34,
    foodName: "Cornet 33cl",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:4.2, extra: false}],
    foodCat: "Bier op vat",
    foodDiv: "drink"
  },
  {
    foodNumber: 35,
    foodName: "Up t'gemakske blond",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:4.2, extra: false}],
    foodCat: "Bier op fles",
    foodDiv: "drink"
  },
  {
    foodNumber: 36,
    foodName: "Up t'gemakske amber",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:4.2, extra: false}],
    foodCat: "Bier op fles",
    foodDiv: "drink"
  },
  {
    foodNumber: 37,
    foodName: "Up t'gemakske wit",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:4.2, extra: false}],
    foodCat: "Bier op fles",
    foodDiv: "drink"
  },
  {
    foodNumber: 38,
    foodName: "Duvel",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:4.2, extra: false}],
    foodCat: "Bier op fles",
    foodDiv: "drink"
  },
  {
    foodNumber: 39,
    foodName: "Omer",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:4.2, extra: false}],
    foodCat: "Bier op fles",
    foodDiv: "drink"
  },
  {
    foodNumber: 40,
    foodName: "Tripel Karmeliet",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:4.2, extra: false}],
    foodCat: "Bier op fles",
    foodDiv: "drink"
  },
  {
    foodNumber: 41,
    foodName: "Leffe blond",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:4.2, extra: false}],
    foodCat: "Bier op fles",
    foodDiv: "drink"
  },
  {
    foodNumber: 42,
    foodName: "Leffe bruin",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:4.2, extra: false}],
    foodCat: "Bier op fles",
    foodDiv: "drink"
  },
  {
    foodNumber: 43,
    foodName: "KlootZakske",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:4.2, extra: false}],
    foodCat: "Bier op fles",
    foodDiv: "drink"
  },
  {
    foodNumber: 44,
    foodName: "Paix Dieu",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:4.4, extra: false}],
    foodCat: "Bier op fles",
    foodDiv: "drink"
  },
  {
    foodNumber: 45,
    foodName: "Que de Charue Triple Oaked",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:4.4, extra: false}],
    foodCat: "Bier op fles",
    foodDiv: "drink"
  },
  {
    foodNumber: 46,
    foodName: "St. Bernardus 12",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:4.4, extra: false}],
    foodCat: "Bier op fles",
    foodDiv: "drink"
  },
  {
    foodNumber: 47,
    foodName: "St. Bernardus Tripel",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:4.4, extra: false}],
    foodCat: "Bier op fles",
    foodDiv: "drink"
  },
  {
    foodNumber: 48,
    foodName: "La Chouffe blond",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:4.4, extra: false}],
    foodCat: "Bier op fles",
    foodDiv: "drink"
  },
  {
    foodNumber: 49,
    foodName: "Cherry Chouffe",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:4.2, extra: false}],
    foodCat: "Bier op fles",
    foodDiv: "drink"
  },
  {
    foodNumber: 50,
    foodName: "Liefmans kriek",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:3, extra: false}],
    foodCat: "Bier op fles",
    foodDiv: "drink"
  },
  {
    foodNumber: 51,
    foodName: "Rodenbach",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:2.5, extra: false}],
    foodCat: "Bier op fles",
    foodDiv: "drink"
  },
  {
    foodNumber: 52,
    foodName: "Geuze Boon",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:5.5, extra: false}],
    foodCat: "Bier op fles",
    foodDiv: "drink"
  },
  {
    foodNumber: 53,
    foodName: "Desperados",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:4.6, extra: false}],
    foodCat: "Bier op fles",
    foodDiv: "drink"
  },
  {
    foodNumber: 54,
    foodName: "Orval",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:5, extra: false}],
    foodCat: "Trappisten",
    foodDiv: "drink"
  },
  {
    foodNumber: 55,
    foodName: "Westmalle Tripel",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:5, extra: false}],
    foodCat: "Trappisten",
    foodDiv: "drink"
  },
  {
    foodNumber: 56,
    foodName: "Westmalle Dubbel",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:5, extra: false}],
    foodCat: "Trappisten",
    foodDiv: "drink"
  },
  {
    foodNumber: 57,
    foodName: "Picon Maison",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:8, extra: false}],
    foodCat: "Apero",
    foodDiv: "drink"
  },
  {
    foodNumber: 58,
    foodName: "Picon zoet",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:8, extra: false}],
    foodCat: "Apero",
    foodDiv: "drink"
  },
  {
    foodNumber: 59,
    foodName: "Ricard",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:5.5, extra: false}],
    foodCat: "Apero",
    foodDiv: "drink"
  },
  {
    foodNumber: 60,
    foodName: "Kirr",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:5.5, extra: false}],
    foodCat: "Apero",
    foodDiv: "drink"
  },
  {
    foodNumber: 61,
    foodName: "Kirr Royal",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:7, extra: false}],
    foodCat: "Apero",
    foodDiv: "drink"
  },
  {
    foodNumber: 62,
    foodName: "Porto wit",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:5, extra: false}],
    foodCat: "Apero",
    foodDiv: "drink"
  },
  {
    foodNumber: 63,
    foodName: "Porto rood",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:5, extra: false}],
    foodCat: "Apero",
    foodDiv: "drink"
  },
  {
    foodNumber: 64,
    foodName: "Martini wit",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:5, extra: false}],
    foodCat: "Apero",
    foodDiv: "drink"
  },
  {
    foodNumber: 65,
    foodName: "Martini rood",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:5, extra: false}],
    foodCat: "Apero",
    foodDiv: "drink"
  },
  {
    foodNumber: 66,
    foodName: "Martini Bellini",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:5, extra: false}],
    foodCat: "Apero",
    foodDiv: "drink"
  },
  {
    foodNumber: 67,
    foodName: "Pineau de Charentes",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:5, extra: false}],
    foodCat: "Apero",
    foodDiv: "drink"
  },
  {
    foodNumber: 68,
    foodName: "Campari orange",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:8.5, extra: false}],
    foodCat: "Apero",
    foodDiv: "drink"
  },
  {
    foodNumber: 69,
    foodName: "Pisang orange",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:8.5, extra: false}],
    foodCat: "Apero",
    foodDiv: "drink"
  },
  {
    foodNumber: 70,
    foodName: "Sangria wit",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:8, extra: false}],
    foodCat: "Apero",
    foodDiv: "drink"
  },
  {
    foodNumber: 71,
    foodName: "Sangria rood",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:8, extra: false}],
    foodCat: "Apero",
    foodDiv: "drink"
  },
  {
    foodNumber: 75,
    foodName: "Yusibi + tonic",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:8, extra: false}],
    foodCat: "Cocktail",
    foodDiv: "drink"
  },
  {
    foodNumber: 76,
    foodName: "Aperol SpritZ",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:8.5, extra: false}],
    foodCat: "Cocktail",
    foodDiv: "drink"
  },
  {
    foodNumber: 77,
    foodName: "Lillet + tonic",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:8.5, extra: false}],
    foodCat: "Cocktail",
    foodDiv: "drink"
  },
  {
    foodNumber: 78,
    foodName: "Wodka Red Bull",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:8.5, extra: false}],
    foodCat: "Cocktail",
    foodDiv: "drink"
  },
  {
    foodNumber: 79,
    foodName: "Mojito",
    foodImg: false,
    foodDisc: "rum, limoen, munt, suiker en bruiswater",
    foodPrice: [{name: "normaal", price:9, extra: false}],
    foodCat: "Cocktail",
    foodDiv: "drink"
  },
  {
    foodNumber: 80,
    foodName: "Strawberry Mojito",
    foodImg: false,
    foodDisc: "rum, aardbei, lemoen, munt, suiker en bruiswater",
    foodPrice: [{name: "normaal", price:9.5, extra: false}],
    foodCat: "Cocktail",
    foodDiv: "drink"
  },
  {
    foodNumber: 81,
    foodName: "Sidney",
    foodImg: false,
    foodDisc: "vlierbloesemlikeur, munt, dragon en cava",
    foodPrice: [{name: "normaal", price:9, extra: false}],
    foodCat: "Cocktail",
    foodDiv: "drink"
  },
  {
    foodNumber: 82,
    foodName: "Lazy Red Cheeks",
    foodImg: false,
    foodDisc: "vodka, framboos, violet, limoen en rietsuiker",
    foodPrice: [{name: "normaal", price:9, extra: false}],
    foodCat: "Cocktail",
    foodDiv: "drink"
  },
  {
    foodNumber: 83,
    foodName: "Pornstar Martini",
    foodImg: false,
    foodDisc: "vodka, passievrucht, vanille en limoen",
    foodPrice: [{name: "normaal", price:9, extra: false}],
    foodCat: "Cocktail",
    foodDiv: "drink"
  },
  {
    foodNumber: 72,
    foodName: "Stella 0.0%",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:2.4, extra: false}],
    foodCat: "Bier 0.0%",
    foodDiv: "drink"
  },
  {
    foodNumber: 73,
    foodName: "Chouffe 0.0%",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:4.2, extra: false}],
    foodCat: "Bier 0.0%",
    foodDiv: "drink"
  },
  {
    foodNumber: 74,
    foodName: "Liefmans 0.0%",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:3, extra: false}],
    foodCat: "Bier 0.0%",
    foodDiv: "drink"
  },
  {
    foodNumber: 84,
    foodName: "Mojito 0.0%",
    foodImg: false,
    foodDisc: "limoen, munt, suiker en bruiswater",
    foodPrice: [{name: "normaal", price:9, extra: false}],
    foodCat: "Cocktail 0.0%",
    foodDiv: "drink"
  },
  {
    foodNumber: 85,
    foodName: "Lazy Red Cheeks 0.0%",
    foodImg: false,
    foodDisc: "framboos, violet, limoen en suiker",
    foodPrice: [{name: "normaal", price:9, extra: false}],
    foodCat: "Cocktail 0.0%",
    foodDiv: "drink"
  },
  {
    foodNumber: 86,
    foodName: "Ipanema 0.0%",
    foodImg: false,
    foodDisc: "limoen, passievrucht en gemberbier",
    foodPrice: [{name: "normaal", price:9, extra: false}],
    foodCat: "Cocktail 0.0%",
    foodDiv: "drink"
  },
  {
    foodNumber: 87,
    foodName: "Bombay Sapphire",
    foodImg: false,
    foodDisc: "+ Elderflower Cucumber Tonic",
    foodPrice: [{name: "normaal", price:12, extra: false}],
    foodCat: "Gin",
    foodDiv: "drink"
  },
  {
    foodNumber: 88,
    foodName: "Bulldog",
    foodImg: false,
    foodDisc: "+ Indian Tonic",
    foodPrice: [{name: "normaal", price:12.5, extra: false}],
    foodCat: "Gin",
    foodDiv: "drink"
  },
  {
    foodNumber: 89,
    foodName: "Copperhead",
    foodImg: false,
    foodDisc: "+ Mallorcan Tonic",
    foodPrice: [{name: "normaal", price:14, extra: false}],
    foodCat: "Gin",
    foodDiv: "drink"
  },
  {
    foodNumber: 90,
    foodName: "Blind Tiger",
    foodImg: false,
    foodDisc: "+ Mallorcan Tonic",
    foodPrice: [{name: "normaal", price:13, extra: false}],
    foodCat: "Gin",
    foodDiv: "drink"
  },
  {
    foodNumber: 91,
    foodName: "Gin de l'ea noire",
    foodImg: false,
    foodDisc: "+ Indian Tonic",
    foodPrice: [{name: "normaal", price:13, extra: false}],
    foodCat: "Gin",
    foodDiv: "drink"
  },
  {
    foodNumber: 92,
    foodName: "Bacardi Carta Blanca",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:7, extra: false}, {name: "Cola", price: 2.4, extra: true}, {name: "Cola Zero", price: 2.4, extra: true}],
    foodCat: "Rum",
    foodDiv: "drink"
  },
  {
    foodNumber: 93,
    foodName: "Bacardi Spiced",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:7, extra: false}, {name: "Cola", price: 2.4, extra: true}, {name: "Cola Zero", price: 2.4, extra: true}],
    foodCat: "Rum",
    foodDiv: "drink"
  },
  {
    foodNumber: 94,
    foodName: "Kraken",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:8, extra: false}, {name: "Cola", price: 2.4, extra: true}, {name: "Cola Zero", price: 2.4, extra: true}],
    foodCat: "Rum",
    foodDiv: "drink"
  },
  {
    foodNumber: 95,
    foodName: "Don Papa",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:9.5, extra: false}, {name: "Cola", price: 2.4, extra: true}, {name: "Cola Zero", price: 2.4, extra: true}],
    foodCat: "Rum",
    foodDiv: "drink"
  },
  {
    foodNumber: 96,
    foodName: "Limoncello",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:5.2, extra: false}],
    foodCat: "Degustieven",
    foodDiv: "drink"
  },
  {
    foodNumber: 97,
    foodName: "Amaretto",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:5.2, extra: false}],
    foodCat: "Degustieven",
    foodDiv: "drink"
  },
  {
    foodNumber: 98,
    foodName: "Baileys",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:5.2, extra: false}],
    foodCat: "Degustieven",
    foodDiv: "drink"
  },
  {
    foodNumber: 99,
    foodName: "Coqnac",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:5.2, extra: false}],
    foodCat: "Degustieven",
    foodDiv: "drink"
  },
  {
    foodNumber: 100,
    foodName: "Grand Marnier",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:5.2, extra: false}],
    foodCat: "Degustieven",
    foodDiv: "drink"
  },
  {
    foodNumber: 101,
    foodName: "Cointreau",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:5.2, extra: false}],
    foodCat: "Degustieven",
    foodDiv: "drink"
  },
  {
    foodNumber: 102,
    foodName: "Get 27",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:5, extra: false}],
    foodCat: "Degustieven",
    foodDiv: "drink"
  },
  {
    foodNumber: 103,
    foodName: "Whiskey William Lawson",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:6.5, extra: false}],
    foodCat: "Degustieven",
    foodDiv: "drink"
  },
  {
    foodNumber: 104,
    foodName: "Whiskey Arron Single Malt Scotch",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:10, extra: false}],
    foodCat: "Degustieven",
    foodDiv: "drink"
  },
  {
    foodNumber: 105,
    foodName: "Whiskey Yoichi single Malt",
    foodImg: false,
    foodDisc: false,
    foodPrice: [{name: "normaal", price:12, extra: false}],
    foodCat: "Degustieven",
    foodDiv: "drink"
  },
  {
    foodNumber: 106,
    foodName: [`Huiswijn wit`, `Réserve Saint Auriol 'Pays D'oc'`],
    foodImg: false,
    foodDisc: "Réserve Saint Auriol 'Pays D'oc'",
    foodPrice: [{name: "glas", price:4.2, extra: false}, {name: "0.5l", price:12.5, extra: false}, {name: "fles", price:20, extra: false}],
    foodCat: "Wijnen - Cava <br> Champagne",
    foodDiv: "drink"
  },
  {
    foodNumber: 107,
    foodName: [`Huiswijn rosé`, `Réserve Saint Auriol 'Pays D'oc'`],
    foodImg: false,
    foodDisc: `Réserve Saint Auriol 'Pays D'oc'`,
    foodPrice: [{name: "glas", price:4.2, extra: false}, {name: "0.5l", price:12.5, extra: false}, {name: "fles", price:20, extra: false}],
    foodCat: "Wijnen - Cava <br> Champagne",
    foodDiv: "drink"
  },
  {
    foodNumber: 108,
    foodName: [`Huiswijn rood`, `Réserve Saint Auriol 'Pays D'oc'`],
    foodImg: false,
    foodDisc: `Réserve Saint Auriol 'Pays D'oc'`,
    foodPrice: [{name: "glas", price:4.2, extra: false}, {name: "0.5l", price:12.5, extra: false}, {name: "fles", price:20, extra: false}],
    foodCat: "Wijnen - Cava <br> Champagne",
    foodDiv: "drink"
  },
  {
    foodNumber: 109,
    foodName: ["Suggestie rode wijn", "Mission Royale"],
    foodImg: false,
    foodDisc: "Mission Royale",
    foodPrice: [{name: "glas", price:4.2, extra: false}, {name: "0.5l", price:12.5, extra: false}, {name: "fles", price:20, extra: false}],
    foodCat: "Wijnen - Cava <br> Champagne",
    foodDiv: "drink"
  },
  {
    foodNumber: 110,
    foodName: ["Suggestie rode wijn", "Cabernet Syrah"],
    foodImg: false,
    foodDisc: "Cabernet Syrah",
    foodPrice: [{name: "glas", price:4.2, extra: false}, {name: "0.5l", price:12.5, extra: false}, {name: "fles", price:20, extra: false}],
    foodCat: "Wijnen - Cava <br> Champagne",
    foodDiv: "drink"
  },
  {
    foodNumber: 111,
    foodName: ["Cava", "Grans Moments"],
    foodImg: false,
    foodDisc: "Grans Moments",
    foodPrice: [{name: "glas", price:6, extra: false}, {name: "fles", price:25, extra: false}],
    foodCat: "Wijnen - Cava <br> Champagne",
    foodDiv: "drink"
  },
  {
    foodNumber: 112,
    foodName: ["Cava", "Bru"],
    foodImg: false,
    foodDisc: "Bru",
    foodPrice: [{name: "glas", price:6, extra: false}, {name: "fles", price:25, extra: false}],
    foodCat: "Wijnen - Cava <br> Champagne",
    foodDiv: "drink"
  },
  {
    foodNumber: 113,
    foodName: ["Champagne", "Frédéric"],
    foodImg: false,
    foodDisc: "Frédéric",
    foodPrice: [{name: "glas", price:9, extra: false}, {name: "fles", price:42, extra: false}],
    foodCat: "Wijnen - Cava <br> Champagne",
    foodDiv: "drink"
  },
  {
    foodNumber: 114,
    foodName: ["Champagne", "Cuvée Pastorale"],
    foodImg: false,
    foodDisc: "Cuvée Pastorale",
    foodPrice: [{name: "glas", price:6, extra: false}, {name: "fles", price:25, extra: false}],
    foodCat: "Wijnen - Cava <br> Champagne",
    foodDiv: "drink"
  }

];
let arrayPlace = [
  {
    placeName: "Black Pearl",
    placeLocation: false,
    placeItemFilter: [],
    placeCatFilter: [],
    placeDivFilter: ["drink"],
    placePost: "https://formspree.io/f/xaygeqwy",
    placeDisc: "Open van <br>11:00 tot 23:00 uur. <br> Uw bestelling wordt binnen ongeveer 20 minuten aan uw tafel bezorgd. <br> Betalen is mogelijk met zowel kaart als contant geld."
  },
  {
    placeName: "Eendracht Wervik",
    placeLocation: false,
    placeItemFilter: [1],
    placeCatFilter: [],
    placeDivFilter: ["drink"],
    placePost: "https://formspree.io/f/xaygeqwy",
    placeDisc: "Open van <br>11:00 tot 23:00 uur. <br> Uw bestelling wordt binnen ongeveer 20 minuten aan uw tafel bezorgd. <br> Betalen is mogelijk met zowel kaart als contant geld."
  },
  {
    placeName: "Krokantje",
    placeLocation: false,
    placeItemFilter: [],
    placeCatFilter: ["Broodjes & Burgers", "Pasta", "Desert"],
    placeDivFilter: ["drink"],
    placePost: "https://formspree.io/f/xaygeqwy",
    placeDisc: "Open van <br>11:00 tot 23:00 uur. <br> Uw bestelling wordt binnen ongeveer 20 minuten aan uw tafel bezorgd. <br> Betalen is mogelijk met zowel kaart als contant geld."
  },
  {
    placeName: "Gerecht",
    placeLocation: false,
    placeItemFilter: [],
    placeCatFilter: [],
    placeDivFilter: [],
    placePost: "https://formspree.io/f/xjvqyzgo",
    placeDisc: "Open van <br>11:00 tot 23:00 uur. <br> Uw bestelling word zo spoedig mogelijk gebracht."
  },
  {
    placeName: "Rommelmarkt",
    placeLocation: true,
    placeItemFilter: [],
    placeCatFilter: [],
    placeDivFilter: ["drink"],
    placePost: "https://formspree.io/f/xaygeqwy",
    placeDisc: "Bestellen mogelijk tijdens rommelmark.<br> Uw bestelling word zo spoedig mogelijk gebracht."
  }
]

let params = new URLSearchParams(document.location.search)
let terras = params.get('terras')
let foodArray = []
let arrayCat = []
const menuWrapper = document.getElementById("menu")
const placeWrapper = document.getElementById("terrasSelect")

init()

function init(){
    genPlaceSelectHtml(placeWrapper, arrayPlace)
    selectView()
    genCatHtml(menuWrapper, foodArray, arrayCat)
}

function selectView(){
  if (terras === null){
    document.getElementById("terrasPlaats").style.display = "block"
    document.getElementById("menu").style.display = "none"
    document.getElementById("terrasTitle").style.display = "none"
    document.getElementById("gegevens").style.display = "none"
  } else {
    if (arrayPlace.find((x) => x.placeName === terras).placeLocation === false){
      document.getElementById("placeLocation").innerHTML = `
        <input type="number" name="tafel" style="width: 100%;margin-top: 0.5%" placeholder="tafel nummer" required>`
    } else {
      document.getElementById("placeLocation").innerHTML = `
        <input type="text" name="straat" style="width: 100%;margin-top: 0.5%" placeholder="straatnaam" required>
        <input type="number" name="huisnummer" style="width: 100%;margin-top: 0.5%" placeholder="huisnummer" required>`
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

function genPlaceSelectHtml(wrapper, arrayPlace){
    for (const x of arrayPlace){
      wrapper.innerHTML += `<option value="${x.placeName}">${x.placeName}</option>`
    }
}

function genCatHtml(wrapper, foodArray){
    for (const x of arrayCat){
        wrapper.innerHTML += `
        <div class="row" id="cat${arrayCat.indexOf(x) + 1}Row" style="display: block;height: auto">
            <div class="col-sm"> 
                <div class="cat-header" id="cat${arrayCat.indexOf(x) + 1}">
                    <h6 onclick="toggleCat(${arrayCat.indexOf(x)})" id="titleCat${arrayCat.indexOf(x) + 1}">${x} ⇊</h6>
                    <div class="row" id="itemCat${arrayCat.indexOf(x) + 1}" class="item" style="display: none;"></div>
                </div>
            </div>
        </div>`
        genItemHtml(`itemCat${arrayCat.indexOf(x) + 1}`, foodArray.filter((y) => y.foodCat === x))
    }
}

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
            <input id="${item.foodNumber}" name="${item.foodName} ${item.foodPrice[0].price}" placeholder="aantal" style="line-height: 16px; font-size: 15px; text-align: center; width: 100%; padding: 0; margin: 0; height: 20px;" type="number">
          </div>
        </div>`
        normaalPrice = (item.foodPrice[0].price)
      } else {
        //special extra
        if (y.extra === false){
          genString += `
          <div class="item-type">
            <div style=" max-width: 2000px; height: 20px; margin-top: 2%; padding: 0;text-align: center; display: flex;">
              <div style="width: 60%;display: flex;justify-content: space-between;">
                <p style="text-align: left;">${y.name}</p>
                <p><b>&euro;${y.price}</b></p>
              </div>
              <input id="${item.foodNumber}" name="${item.foodName} ${y.name} ${normaalPrice + y.price}" placeholder="aantal" style="line-height: 16px; font-size: 15px; text-align: center; width: 100%; padding: 0; margin: 0; height: 20px;margin-left: 10px;" type="number">
            </div>
          </div>`
        }
        //special
        if (y.extra === true){
          genString += `
          <div class="item-type">
            <div style=" max-width: 2000px; height: 20px; margin-top: 2%; padding: 0;text-align: center; display: flex;">
              <div style="width: 60%;display: flex;justify-content: space-between;">
                <p style="text-align: left;">${y.name}</p>
                <p><b>+&euro;${y.price}</b></p>
              </div>
              <input id="${item.foodNumber}" name="${item.foodName} ${y.name} ${y.price}" placeholder="aantal" style="line-height: 16px; font-size: 15px; text-align: center; width: 100%; padding: 0; margin: 0; height: 20px;margin-left: 10px;" type="number">
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
        <input id="${item.foodNumber}" name="${item.foodName} ${item.foodPrice[0].price}" placeholder="aantal" style="line-height: 16px; font-size: 15px; text-align: center; width: 100%; padding: 0; margin: 0; height: 20px;" type="number">
      </div>
    </div>`
    normaalPrice = (item.foodPrice[0].price)
  }
  return [normaalPrice, genString]
}

function toggleCat(text){
  let triger = document.getElementById(`titleCat${text + 1}`)
  let target = document.getElementById(`itemCat${text + 1}`)
  if (target.style.display === "none"){
      target.style.display = 'unset'
      triger.innerHTML = `${arrayCat[text]} ⇈`
  }
  else {
      target.style.display = 'none'
      triger.innerHTML = `${arrayCat[text]} ⇊`
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
