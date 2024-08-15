
const timeDisc = "Open van 11u tot 24u"
let arrayPlace = [
    {
      placeName: "Black Pearl",
      placeLocation: false,
      placeItemFilter: [],
      placeCatFilter: [],
      placeDivFilter: ["drink"],
      placePost: "https://formspree.io/f/xaygeqwy",
      placeDisc: `${timeDisc} <br> Uw bestelling wordt binnen ongeveer 20 minuten aan uw tafel bezorgd. <br> Betalen is mogelijk met zowel kaart als contant geld.`
    },
    {
      placeName: "Eendracht Wervik",
      placeLocation: false,
      placeItemFilter: [1],
      placeCatFilter: [],
      placeDivFilter: ["drink"],
      placePost: "https://formspree.io/f/xaygeqwy",
      placeDisc: `${timeDisc} <br> Uw bestelling wordt binnen ongeveer 20 minuten aan uw tafel bezorgd. <br> Betalen is mogelijk met zowel kaart als contant geld.`
    },
    {
      placeName: "Krokantje",
      placeLocation: false,
      placeItemFilter: [],
      placeCatFilter: ["Broodjes & Burgers", "Pasta", "Desert"],
      placeDivFilter: ["drink"],
      placePost: "https://formspree.io/f/xaygeqwy",
      placeDisc: `${timeDisc} <br> Uw bestelling wordt binnen ongeveer 20 minuten aan uw tafel bezorgd. <br> Betalen is mogelijk met zowel kaart als contant geld.`
    },
    {
      placeName: "Gerecht",
      placeLocation: false,
      placeItemFilter: [],
      placeCatFilter: [],
      placeDivFilter: [],
      placePost: "https://formspree.io/f/xjvqyzgo",
      placeDisc: "Uw bestelling word zo spoedig mogelijk gebracht."
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

export default arrayPlace