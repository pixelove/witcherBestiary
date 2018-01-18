$(document).ready(function(){
	$.getJSON("chorts.json", function(data){
		// console.log(data); to check if it's linking correctly
		$("#name").append(data.name);
		$("#cite").append(data.cite);
		$("#description").append(data.description);
	});
});

$('#monsterModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text(recipient)
  modal.find('.modal-body input').val(recipient)
})

var completeBestiary = [
// beasts
"Bears",
"Big Bad Wolf",
"Dogs",
"Panthers",
"The Beast of Beauclair",
"Three Little Pigs",
"Wild boars",
"Wolves",
// cursed ones
"Archespore",
"Berserkers",
"Botchlings",
"Lubberkin",
"The Toad Prince",
"Ulfhedinn",
"Werewolves",
// draconids
"Basilisks",
"Cockatrices",
"Forktails",
"Royal wyverns",
"Shrieker",
"Silver Basilisk",
"Slyzards",
"Slyzard Matriarchs",
"The Dragon of Fyresdal",
"Wyverns",
// elementa
"Djinn",
"Earth Elemental",
"Fire Elemental",
"Gargoyle",
"Golem",
"Hounds of the Wild Hunt",
"Ice Elemental",
"Moreau's Golem",
"Pixies",
"The Apiarian Phantom",
"Therazane",
// hybrids
"Ekhidna",
"Erynia",
"Griffin",
"Harpy",
"Melusine",
"Opinicus",
"Salma",
"Siren",
"Succubus",
// insectoids
"Arachasae",
"Arachnomorphs",
"Armoured arachasae",
"Endrega drones",
"Endrega warriors",
"Endrega workers",
"Giant centipedes",
"Harrisi",
"Kikimore",
"Kikimore Workers",
"Pale Widows",
"Sandcrabs",
"Venomous arachasae",
// necrophages
"Abaya",
"Alghoul",
"Devourer",
"Drowner",
"Drowned dead",
"Foglet",
"Ghoul",
"Grave hag",
"Ignis Fatuus",
"Mourntart",
"Mucknixer",
"Rotfiend",
"Scurver",
"Spotted wight",
"Water hag",
"Wight",
// ogroids
"Cloud Giant",
"Cyclopses",
"Golyat",
"Hagubman",
"Ice giant",
"Ice troll",
"Nekkers",
"Rabid rock troll",
"Rock troll",
"Wham-a-Wham",
// relics
"Chorts",
"Crones",
"Doppler",
"Fiends",
"Fugas",
"Godling",
"Grottore",
"Howler",
"Imp",
"Kernun",
"Leshen",
"Morvudd",
"Shaelmaar",
"Shaelmaar from the Emperor of Nilfgaard",
"Spriggans",
"Sylvans",
"The Caretaker",
"The Monster of Tufo",
"Wicked Witch",
"Woodland Spirit",
// specters
"Barghest",
"Banshee",
"Daphne's Wraith",
"Devil by the Well",
"Ethereal",
"Hym",
"Jenny o' the Woods",
"Longlocks",
"Nightwraith",
"Noonwraith",
"Penitent",
"Plague maiden",
"Umbra",
"The White Lady",
"The Wraith from the Painting",
"Wraith",
// vampires
"Alpha Garkain",
"Alp",
"Bruxa",
"Dettlaff van der Eretein",
"Ekimmara",
"Fleder",
"Gael",
"Garkain",
"Higher Vampire",
"Katakan",
"Protofleder",
"Sarasti",
"The Bruxa of Corvo Bianco"
]