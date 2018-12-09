const submitButton = document.querySelectorAll("button");
submitButton.forEach(submit => submit.addEventListener("click", getPet));

function getPet() {
  let animal = "";
  if (this.id === "catButton") {
    animal = "cat";
  } else {
    animal = "dog";
  }

  let zipCode = document.querySelector("#zip").value;

  const url = "https://api.petfinder.com/pet.find";
  const pfKey = "d3460587ab0aa2e88944f5afe4cca27e";

  $.ajax({
    url: url,
    jsonp: "callback",
    dataType: "jsonp",
    data: {
      key: pfKey,
      animal: animal,
      location: zipCode,
      count: 50,
      output: "basic",
      format: "json"
    },
    success: function(response) {
        var results = document.querySelector(".results");
        var adoptablePet = response.petfinder.pets.pet;


      adoptablePet.forEach(function(pet) {
          console.log(pet);
        let petCard = document.createElement("img");
        petCard.setAttribute("src", pet.media.photos.photo[3].$t);
        petCard.setAttribute("alt", pet.name.$);
        petCard.classList.add("card");
        let midDiv = document.createElement("div");
        midDiv.classList.add("middle");
        let lastDiv = document.createElement("div");
        lastDiv.classList.add("cardname");
        let petName = document.createElement("a");
        petName.setAttribute(
          "href",
          "https://www.petfinder.com/search/pets-for-adoption/?id=" + pet.id.$t
        );
        petName.innerHTML = pet.name.$;
        results.appendChild(petCard);
        results.appendChild(midDiv);
        results.appendChild(lastDiv);
      });
    }
  });
}

// 				//Photo of the animals...
//                 var img = $("<img>");
//                 img.attr("src", pet.media.photos.photo[3].$t);
//                 img.attr("alt", "picture of animal");
//                 img.attr("width", 300);

// 				//Add animal name to Photo...
//                 var span = $("<span>").addClass('card-title');
//                 span.text(pet.name.$t);
//                 var divContent = $("<div>");
//                 divContent.addClass('card-content');

// 				//variables for pathways and constructing the dynamic cards from the for loop output...
//                 var animalName = pet.name.$t;
//                 var pDescript = $("<p>").text(pet.description.$t);
//                 var petId = pet.id.$t;
//                 var city = pet.contact.city.$t;
// 				var state = pet.contact.state.$t;
// 				var divAction = $("<div>");
//                 var statement = "Hello, I go by the name " + animalName + ", click the link to learn more!!!"
//                 var blank = "_blank";

// 				//Variables to be used in future iterations...
// 				//var pEmail = $("<P>").text(pet.contact.email.$t);
// 				//var email = pet.contact.email.$t;
// 				//var pNumber = $('<p>').text(pet.contact.phone.$t);
// 				//var number = pet.contact.phone.$t;
// 				//var shelterId = $("<p>").text(pet.shelterId.$t);
// 				//var gender = pet.sex.$t;

// 				//Click Feature to redirect to the animals full profile
//                 var href = 'https://www.petfinder.com/search/pets-for-adoption/?id=' + petId;
//                 var anchor = $('<a>').attr('href', href).attr('target', blank);
// 				var maphref = 'map.html';
// 				var mapAnchor = $('<a>').attr('href', maphref);

//
//             });
//                 }});
//             }//fetchAnimals
