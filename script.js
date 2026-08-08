
const plants = {

    snake: {
        name: "Snake Plant",
        type: "INDOOR PLANT",
        icon: "🌿",

        description:
            "Snake Plant is a hardy indoor plant and is perfect for beginners.",

        water:
            "Water once the soil becomes completely dry.",

        sun:
            "Low to medium indirect light.",

        soil:
            "Well-drained sandy soil.",

        temperature:
            "18°C - 30°C.",

        benefits:
            "Helps improve indoor air quality and requires very little maintenance.",

        care:
            "Avoid overwatering. Keep the plant in a well-drained pot and clean the leaves regularly."
    },


    money: {
        name: "Money Plant",
        type: "INDOOR PLANT",
        icon: "🍃",

        description:
            "Money Plant is a popular indoor plant that grows easily in homes and offices.",

        water:
            "Water when the top layer of soil feels dry.",

        sun:
            "Bright indirect sunlight.",

        soil:
            "Rich and well-drained potting soil.",

        temperature:
            "18°C - 32°C.",

        benefits:
            "Adds greenery to indoor spaces and is easy to maintain.",

        care:
            "Provide indirect sunlight and avoid keeping the soil continuously wet."
    },


    aloe: {
        name: "Aloe Vera",
        type: "MEDICINAL PLANT",
        icon: "🌵",

        description:
            "Aloe Vera is a low-maintenance succulent known for its useful properties.",

        water:
            "Water only when the soil is completely dry.",

        sun:
            "Bright indirect or morning sunlight.",

        soil:
            "Sandy and well-drained soil.",

        temperature:
            "15°C - 32°C.",

        benefits:
            "Known for its soothing gel and attractive appearance.",

        care:
            "Use a pot with drainage holes and avoid excessive watering."
    },


    peace: {
        name: "Peace Lily",
        type: "INDOOR PLANT",
        icon: "🌸",

        description:
            "Peace Lily is an elegant indoor plant with beautiful white flowers.",

        water:
            "Keep the soil slightly moist but not soggy.",

        sun:
            "Low to medium indirect light.",

        soil:
            "Moist and well-drained potting soil.",

        temperature:
            "18°C - 30°C.",

        benefits:
            "Adds beauty to indoor spaces and helps create a fresh environment.",

        care:
            "Keep the soil slightly moist and protect the plant from direct harsh sunlight."
    },


    rose: {
        name: "Rose",
        type: "FLOWERING PLANT",
        icon: "🌹",

        description:
            "Rose is a beautiful flowering plant that produces colorful and fragrant flowers.",

        water:
            "Water deeply when the top soil starts to dry.",

        sun:
            "At least 5-6 hours of sunlight.",

        soil:
            "Fertile and well-drained soil.",

        temperature:
            "15°C - 28°C.",

        benefits:
            "Adds beauty, fragrance and color to gardens.",

        care:
            "Provide enough sunlight, water regularly and remove dry flowers."
    }

};




const exploreBtn =
    document.getElementById("exploreBtn");


const myPlantsBtn =
    document.getElementById("myPlantsBtn");


const searchInput =
    document.getElementById("plantSearch");


const searchBtn =
    document.getElementById("searchBtn");


const plantCards =
    document.querySelectorAll(".plant-card");


const detailButtons =
    document.querySelectorAll(".details-btn");


const detailsSection =
    document.getElementById("plantDetails");


const exploreSection =
    document.getElementById("explore");


const orderSection =
    document.getElementById("orderSection");


const myPlantsSection =
    document.getElementById("myPlants");




exploreBtn.addEventListener("click", function () {

    exploreSection.scrollIntoView({
        behavior: "smooth"
    });

});



myPlantsBtn.addEventListener("click", function () {

    myPlantsSection.scrollIntoView({
        behavior: "smooth"
    });

});




function searchPlants() {

    const searchText =
        searchInput.value
        .toLowerCase()
        .trim();


    plantCards.forEach(function (card) {

        const plantName =
            card.getAttribute("data-name");


        if (plantName.includes(searchText)) {

            card.style.display = "block";

        }

        else {

            card.style.display = "none";

        }

    });

}




searchBtn.addEventListener("click", function () {

    searchPlants();

});


searchInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        searchPlants();

    }

});



detailButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const plantId =
            button.getAttribute("data-plant");

        showPlantDetails(plantId);

    });

});



function showPlantDetails(plantId) {

    const plant =
        plants[plantId];


    if (!plant) {

        return;

    }


    document.getElementById("detailsImage").textContent =
        plant.icon;


    document.getElementById("detailsType").textContent =
        plant.type;


    document.getElementById("detailsName").textContent =
        plant.name;


    document.getElementById("detailsDescription").textContent =
        plant.description;


    document.getElementById("detailsWater").textContent =
        plant.water;


    document.getElementById("detailsSun").textContent =
        plant.sun;


    document.getElementById("detailsSoil").textContent =
        plant.soil;


    document.getElementById("detailsTemp").textContent =
        plant.temperature;


    document.getElementById("detailsBenefits").textContent =
        plant.benefits;


    document.getElementById("detailsCare").textContent =
        plant.care;


    document.getElementById("addPlantBtn").setAttribute(
        "data-current-plant",
        plantId
    );


    document.getElementById("orderBtn").setAttribute(
        "data-current-plant",
        plantId
    );


    detailsSection.style.display =
        "block";


    detailsSection.scrollIntoView({
        behavior: "smooth"
    });

}


document.getElementById("backToPlants")
    .addEventListener("click", function () {

        detailsSection.style.display = "none";

        exploreSection.scrollIntoView({
            behavior: "smooth"
        });

    });




document.getElementById("addPlantBtn")
    .addEventListener("click", function () {

        const plantId =
            this.getAttribute("data-current-plant");


        const plant =
            plants[plantId];


        addToMyPlants(plant);


        alert(
            plant.name +
            " has been added to My Plants 🌱"
        );

    });




let myPlants = [];


function addToMyPlants(plant) {

    const alreadyAdded =
        myPlants.some(function (item) {

            return item.name === plant.name;

        });


    if (alreadyAdded) {

        return;

    }


    const newPlant = {

        name: plant.name,

        icon: plant.icon,

        date:
            new Date().toLocaleDateString(),

        watering:
            plant.water,

        sunlight:
            plant.sun,

        status:
            "Healthy"

    };


    myPlants.push(newPlant);


    displayMyPlants();

}




function displayMyPlants() {

    const container =
        document.getElementById(
            "myPlantsContainer"
        );


    container.innerHTML = "";


    if (myPlants.length === 0) {

        container.innerHTML = `
            <div class="empty-message">
                🌱 No plants added yet.
            </div>
        `;

        return;

    }


    myPlants.forEach(function (plant) {

        const card =
            document.createElement("div");


        card.className =
            "my-plant-card";


        card.innerHTML = `

            <div class="my-plant-icon">
                ${plant.icon}
            </div>

            <h3>
                ${plant.name}
            </h3>

            <p>
                📅 Added: ${plant.date}
            </p>

            <p>
                💧 ${plant.watering}
            </p>

            <p>
                ☀️ ${plant.sunlight}
            </p>

            <p>
                🌱 Status: ${plant.status}
            </p>

        `;


        container.appendChild(card);

    });

}




document.getElementById("orderBtn")
    .addEventListener("click", function () {

        const plantId =
            this.getAttribute("data-current-plant");


        const plant =
            plants[plantId];


        document.getElementById(
            "orderPlantName"
        ).textContent =
            "You are ordering: " + plant.name;


        detailsSection.style.display =
            "none";


        orderSection.style.display =
            "block";


        orderSection.scrollIntoView({
            behavior: "smooth"
        });

    });



document.getElementById("backToDetails")
    .addEventListener("click", function () {

        orderSection.style.display =
            "none";


        detailsSection.style.display =
            "block";


        detailsSection.scrollIntoView({
            behavior: "smooth"
        });

    });


const orderForm =
    document.getElementById("orderForm");


orderForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const quantity =
        document.getElementById("quantity").value.trim();


    const name =
        document.getElementById("customerName").value.trim();


    const phone =
        document.getElementById("phone").value.trim();


    const address =
        document.getElementById("address").value.trim();


    let isValid = true;




    document.getElementById("quantityError").textContent = "";

    document.getElementById("nameError").textContent = "";

    document.getElementById("phoneError").textContent = "";

    document.getElementById("addressError").textContent = "";


  

    if (
        quantity === "" ||
        Number(quantity) < 1 ||
        Number(quantity) > 10
    ) {

        document.getElementById(
            "quantityError"
        ).textContent =
            "Please enter quantity between 1 and 10.";

        isValid = false;

    }




    if (name === "") {

        document.getElementById(
            "nameError"
        ).textContent =
            "Name is required.";

        isValid = false;

    }

    else if (!/^[A-Za-z ]+$/.test(name)) {

        document.getElementById(
            "nameError"
        ).textContent =
            "Name should contain letters only.";

        isValid = false;

    }




    if (!/^[0-9]{10}$/.test(phone)) {

        document.getElementById(
            "phoneError"
        ).textContent =
            "Enter a valid 10 digit phone number.";

        isValid = false;

    }



    if (address === "") {

        document.getElementById(
            "addressError"
        ).textContent =
            "Address is required.";

        isValid = false;

    }

    else if (address.length < 10) {

        document.getElementById(
            "addressError"
        ).textContent =
            "Please enter a complete address.";

        isValid = false;

    }


 

    if (isValid) {

        orderSection.style.display =
            "none";


        document.getElementById(
            "successMessage"
        ).style.display =
            "flex";

    }

});




document.getElementById("successHomeBtn")
    .addEventListener("click", function () {

        document.getElementById(
            "successMessage"
        ).style.display =
            "none";


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });



plantCards.forEach(function (card) {

    card.addEventListener(
        "mouseenter",
        function () {

            card.style.transform =
                "translateY(-8px)";

        }
    );


    card.addEventListener(
        "mouseleave",
        function () {

            card.style.transform =
                "translateY(0)";

        }
    );

});