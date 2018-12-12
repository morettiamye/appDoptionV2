document.addEventListener("DOMContentLoaded", randomPet);

function randomPet() {
    animals = ["cat", "dog"];
    let randomAnimal = animals[Math.floor(Math.random() * animals.length)];

    const url = "https://api.petfinder.com/pet.getRandom";
    const pfKey = "d3460587ab0aa2e88944f5afe4cca27e";

    $.ajax({
        url: url,
        jsonp: "callback",
        dataType: "jsonp",
        data: {
            key: pfKey,
            animal: randomAnimal,
            location: "60666",
            count: 6,
            output: "basic",
            format: "json"
        },
        success: function (response) {
            console.log(response);
            var results = document.querySelector(".results");
            var adoptablePet = response.petfinder.pet;

            adoptablePet.forEach(function (pet) {
                let petPhoto = "";
                    if (Object.keys(pet.media).length === 0) {
                 petPhoto = "./assets/images/pawIcon.png";
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

            });
        }
    });
}