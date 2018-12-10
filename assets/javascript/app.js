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
        // let midDiv = document.createElement("div");
        // midDiv.classList.add("middle");
        // let lastDiv = document.createElement("div");
        // lastDiv.classList.add("cardname");
        // let petName = document.createElement("a");
        // petName.setAttribute(
        //   "href",
        //   "https://www.petfinder.com/search/pets-for-adoption/?id=" + pet.id.$t
        // );
        // petName.innerHTML = pet.name.$;
        results.appendChild(petCard);
      //   results.appendChild(midDiv);
      //   results.appendChild(lastDiv);
      // });
    });
  }
});
}
