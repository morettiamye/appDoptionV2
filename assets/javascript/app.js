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
      count: 300,
      output: "basic",
      format: "json"
    },
    success: function(response) {
        var results = document.querySelector(".results");
        var adoptablePet = response.petfinder.pets.pet;
       
        while(results.firstChild) {
          results.removeChild(results.firstChild);
        }

      adoptablePet.forEach(function(pet) {
        let petPhoto = "";
        if (Object.keys(pet.media).length === 0) {
          petPhoto = "./assets/images/placeholder.png";
             } else {
         petPhoto = pet.media.photos.photo[3].$t;
         };
        let petLink = document.createElement("a");
        petLink.setAttribute("href", "https://www.petfinder.com/search/pets-for-adoption/?id=" + pet.id.$t);
        petLink.setAttribute("target", "_blank");
        let img = document.createElement("img");
        let petCard = petLink.appendChild(img);
        petCard.setAttribute("src", petPhoto);
        petCard.setAttribute("alt", pet.name.$t);
        petCard.classList.add("card");
        results.appendChild(petLink);
      // });
    });
  }
});
}
