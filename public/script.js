document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const searchQuery = document.getElementById('searchQuery').value.toLowerCase();
    const minRating = parseFloat(document.getElementById('ratingFilter').value) || 0; // Default to 0 if empty

    // Filter hotels by address, best food, and rating
    const filteredHotels = hotels.filter(hotel =>
        (hotel.address.toLowerCase().includes(searchQuery) || 
        hotel.bestFood.toLowerCase().includes(searchQuery)) && 
        hotel.rating >= minRating // Filter by rating
    );

    if (filteredHotels.length > 0) {
        displayHotels(filteredHotels);
    } else {
        alert("No hotels found matching your search.");
    }
});

// Sample hotel data (replace with data from backend)
const hotels = [
    { 
        name: "The Oberoi", 
        location: "Bangalore", 
        address: "MG Road, Bangalore", 
        cuisine: "Indian", 
        rating: 4.6, 
        bestFood: "Dal Makhani",
        type: "veg",
        foodImage: "images/dal-makhani.jpg",
         mapLink: "https://www.google.com/maps/dir/12.8907426,77.6208384/The+Oberoi,+Bengaluru,+37-39,+Mahatma+Gandhi+Rd,+Yellappa+Garden,+Yellappa+Chetty+Layout,+Sivanchetti+Gardens,+Bengaluru,+Karnataka+560001/@12.9325963,77.5756168,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bae16835c3ada19:0x7065f59042b7b2db!2m2!1d77.6184025!2d12.9736048?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
    },
    { 
        name: "Behrouz", 
        location: "Bangalore", 
        address: "Seenappa Layout, Bommanahalli, Bengaluru", 
        cuisine: "Multi-cuisine", 
        rating: 4.1, 
        bestFood: "Biryani",
        type: "non-veg",
        foodImage: "images/behrouz.jpg",
        mapLink: "https://www.google.com/maps/dir/12.8907426,77.6208384/Behrouz+Biryani+Bommanhalli+RK,+543,+6,+Devrachikkanahalli,+Main+Rd,+Seenappa+Layout,+Bommanahalli,+Bengaluru,+Karnataka+560068/@12.891864,77.617661,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bae156ff49b2fed:0xb536c4503aa10b36!2m2!1d77.6197593!2d12.8929855?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D" 
    },
    { 
        name: "ITC Gardenia", 
        location: "Bangalore", 
        address: "Residency Road, Bangalore", 
        cuisine: "Continental", 
        rating: 4.7, 
        bestFood: "Grilled Salmon",
        type: "non-veg",
        foodImage: "images/grilled-salmon.jpg",
         mapLink: "https://www.google.com/maps/dir/12.8907426,77.6208384/ITC+Gardenia,+a+Luxury+Collection+Hotel,+Bengaluru,+1,+Residency+Rd,+Ashok+Nagar,+Bengaluru,+Karnataka+560025/@12.9312965,77.56781,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a0276dd2cf216d3:0x523e0c08edd084f2!2m2!1d77.5955521!2d12.9669848?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
    },
    { 
        name: "Kebarbiq", 
        location: "Bangalore", 
        address: "HSR Layout, Bengaluru", 
        cuisine: "Continental", 
        rating: 4.3, 
        bestFood: "Unlimited Barbeque",
        type: "non-veg",
        foodImage: "images/kebarbiq.webp",
         mapLink: "https://www.google.com/maps/dir/12.8907426,77.6208384/Kebarbiq,+FFK+Towers,+445,+17th+Cross+Rd,+Sector+4,+HSR+Layout,+Bengaluru,+Karnataka+560102/@12.9042582,77.6207681,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bae15c6cc21cf49:0x1671c454d175c65!2m2!1d77.6424709!2d12.912415?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
    },
    { 
        name: "The Leela Palace", 
        location: "Bangalore", 
        address: "Old Airport Road, Bangalore", 
        cuisine: "South Indian", 
        rating: 4.9, 
        bestFood: "Masala Dosa",
        type: "veg",
        foodImage: "images/masala-dosa.jpg",
         mapLink: "https://www.google.com/maps/dir/12.8907426,77.6208384/The+Leela+Palace+Bengaluru+-+Garden+City's+Only+Modern+Palace+Hotel,+23,+HAL+Old+Airport+Rd,+HAL+2nd+Stage,+Kodihalli,+Bengaluru,+Karnataka+560008/@12.9260809,77.5920203,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bae14067cca9bdd:0x111bbe37cc24e71a!2m2!1d77.6484361!2d12.9603365?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
    },
    { 
        name: "Nahdi Mandi", 
        location: "Bangalore", 
        address: "Kammanahalli, Bengaluru", 
        cuisine: "Yemeni rice and meat dish", 
        rating: 4.7, 
        bestFood: "Mandi",
        type: "non-veg",
        foodImage: "images/nahdi.avif",
         mapLink: "https://www.google.com/maps/dir//Nahdi+Mandi/@12.9676789,77.5448987,12z?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
    },
    { 
        name: "Copper Kitchen Restaurant", 
        location: "Bangalore", 
        address: "HSR Layout, Bengaluru", 
        cuisine: "Continental", 
        rating: 4.4, 
        bestFood: "Biryani",
        type: "non-veg",
        foodImage: "images/Copper.jpg",
        mapLink: "https://www.google.com/maps/dir//L+147,+5th+Main+Rd,+Sector+6,+HSR+Layout,+Bengaluru,+Karnataka+560102/@12.9149618,77.5497624,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae159f53a82717:0x93b79d798d16a79f!2m2!1d77.6321643!2d12.9149747?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
    },
    { 
        name: "Taj Bangalore", 
        location: "Bangalore", 
        address: "Near Kempegowda International Airport, Bangalore", 
        cuisine: "Multi-cuisine", 
        rating: 4.8, 
        bestFood: "Biryani",
        type: "non-veg",
        foodImage: "images/biryani.jpg", // Add image URL
        mapLink: "https://www.google.com/maps/dir//opposite+Kempegowda+International+Airport+Bengaluru,+Devanahalli,+Bengaluru,+Gangamuthanahalli,+Karnataka+560300/@13.1971035,77.6277312,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3bae1cfd3250d2b9:0xf1e234798c0b8d8!2m2!1d77.7101331!2d13.1971167?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
    },
    { 
        name: "Fasta Pizza", 
        location: "Bangalore", 
        address: "HSR Layout, Bengaluru", 
        cuisine: "Continental", 
        rating: 4.6, 
        bestFood: "Pizza",
        type: "veg",
        foodImage: "images/Fasta.png",
        mapLink: "https://www.google.com/maps/dir//12.9160864,77.6326412/@12.9160864,77.6300663,17z?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
    },
    { 
        name: "The Dome Cafe", 
        location: "Bangalore", 
        address: "HSR Layout, Bengaluru", 
        cuisine: "Continental", 
        rating: 4.3, 
        bestFood: "Burger",
        type: "non-veg",
        foodImage: "images/Dome-Cafe.jpg",
        mapLink: "https://www.google.com/maps/dir//5th+floor,+%2316,+9th+main,+17th+Cross+Rd,+above+Lenskart,+7th+Sector,+HSR+Layout,+Bengaluru,+Karnataka+560102/@12.9122133,77.5535477,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae15579ddbadd9:0xa8e4525621934468!2m2!1d77.6359496!2d12.9122262?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
    },
    { 
        name: "Andhra Vilas", 
        location: "Bangalore", 
        address: "HSR Layout, Bengaluru", 
        cuisine: "Continental", 
        rating: 4.4, 
        bestFood: "Full meals",
        type: "veg",
        foodImage: "images/Andhra.jpeg",
        mapLink: "https://www.google.com/maps/dir//Ground+Floor,+Andhra+vilas+245,+245,+19th+Main+Rd,+Sector+4,+HSR+Layout,+Bengaluru,+Karnataka+560102/@12.9139888,77.5621686,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae157a8f4cec3f:0x5cd61d1806986504!2m2!1d77.6445705!2d12.9140017?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
    },
    { 
        name: "The Big Baadshaah", 
        location: "Bangalore", 
        address: "marathahalli, Bengaluru", 
        cuisine: "Continental", 
        rating: 4.3, 
        bestFood: "Chicken Tikka",
        type: "non-veg",
        foodImage: "images/Big-Baadshaah.jpeg",
        mapLink: "https://www.google.com/maps/dir//2nd+Floor,+88,+Outer+Ring+Rd,+near+More+Supermarket,+Marathahalli+Village,+Marathahalli,+Bengaluru,+Karnataka+560037/@12.9484182,77.6163709,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae13f0104466e7:0xd5f32cc24b24f541!2m2!1d77.6987728!2d12.9484311?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
    },
    { 
        name: "The Black Pearl", 
        location: "Bangalore", 
        address: "marathahalli, Bengaluru", 
        cuisine: "Continental", 
        rating: 4.2, 
        bestFood: "Fish",
        type: "non-veg",
        foodImage: "images/The-Black-Pearl.jpg",
        mapLink: "https://www.google.com/maps/dir//6th+Floor,+Swamy+Lagoto+Building,+7,+Outer+Ring+Rd,+above+Kia+Motors,+Kadubeesanahalli,+Marathahalli,+Bengaluru,+Karnataka+560103/@12.9393747,77.6123359,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae13b2159f047d:0x1a50941614704c96!2m2!1d77.6947378!2d12.9393876?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
    },
    { 
        name: "Nagarjuna Restaurant", 
        location: "Bangalore", 
        address: "marathahalli, Bengaluru", 
        cuisine: "Continental", 
        rating: 4.0, 
        bestFood: "Full meals",
        type: "veg",
        foodImage: "images/Nagarjuna-Restaurant.jpg",
        mapLink: "https://www.google.com/maps/dir//Mega+Store,+88,+Outer+Ring+Rd,+next+to+More,+Marathahalli,+Bengaluru,+Karnataka+560037/@12.9484027,77.6164222,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae13b548ff6e07:0xed1229239308d49c!2m2!1d77.6988241!2d12.9484156?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
    },
    { 
        name: "Manasi Roof Top Family Restaurant", 
        location: "Bangalore", 
        address: "marathahalli, Bengaluru", 
        cuisine: "Continental", 
        rating: 4.6, 
        bestFood: "Fish",
        type: "non-veg",
        foodImage: "images/Manasi-Roof.Avif",
        mapLink: "https://www.google.com/maps/dir//shree+ganapa+towers,+223%2F95,+Marathahalli+Main+Rd,+above+Manasi+Residency,+Marathahalli+Village,+Marathahalli,+Bengaluru,+Karnataka+560037/@12.9563069,77.6134011,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae1361c39840bf:0x97bc94beaad369a5!2m2!1d77.695803!2d12.9563198?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
    },
  
];

// Show Veg hotels
function showVeg() {
    document.getElementById("vegButton").classList.add("active");
    document.getElementById("nonVegButton").classList.remove("active");
    displayHotels(hotels.filter(hotel => hotel.type === "veg"));
}

// Show Non-Veg hotels
function showNonVeg() {
    document.getElementById("nonVegButton").classList.add("active");
    document.getElementById("vegButton").classList.remove("active");
    displayHotels(hotels.filter(hotel => hotel.type === "non-veg"));
}

// Display Veg hotels by default
showVeg();

function displayHotels(filteredHotels) {
    const hotelList = document.getElementById('hotelList');
    hotelList.innerHTML = ''; // Clear existing hotels

    filteredHotels.forEach(hotel => {
        const hotelCard = document.createElement('div');
        hotelCard.className = 'hotelCard';
        hotelCard.innerHTML = `
            <img src="${hotel.foodImage}" alt="${hotel.bestFood}" class="foodImage">
            <h3>${hotel.name}</h3>
            <p><strong>Address:</strong> ${hotel.address}</p>
            <p><strong>Cuisine:</strong> ${hotel.cuisine}</p>
            <p><strong>Rating:</strong> ${hotel.rating}</p>
            <p><strong>Best Food:</strong> ${hotel.bestFood}</p>
                  <a href="${hotel.mapLink}" target="_blank">
                <button>View on Google Maps</button>
            </a>
        `;
        hotelList.appendChild(hotelCard);
    });
}


// Display all Bangalore hotels on page load
const bangaloreHotels = hotels.filter(hotel => hotel.location.toLowerCase() === "bangalore");
displayHotels(bangaloreHotels);



