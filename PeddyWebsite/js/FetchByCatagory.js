const fetchByCatagory = (catgoryName) => {
  document.getElementById("loadingSpinner").classList.remove("hidden");
  document.getElementById("show_data_card").classList.add("hidden");

  const url = `https://openapi.programming-hero.com/api/peddy/category/${catgoryName}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setTimeout(() => {
        document.getElementById("loadingSpinner").classList.add("hidden");
        document.getElementById("show_data_card").classList.remove("hidden");

        DisplayAllData(data.data);
      }, 2000);
    })
    .catch((error) => console.error("Error fetching Data:", error));

  const DisplayAllData = (data) => {
    const sortByPriceBtn = document.getElementById("sortByPriceBtn");
    sortByPriceBtn.addEventListener("click", () => {
      const sortedData = data.sort((a, b) => b.price - a.price);
      renderData(sortedData);
    });
    renderData(data);
  };

  const renderData = (data) => {
    const parentDiv = document.getElementById("show_data_card");
    parentDiv.innerHTML = "";

    if (data.length <= 0) {
      const div = document.createElement("div");
      div.classList.add("col-span-3", "erro_card");
      div.innerHTML = ` <div class="hero min-h-screen">
            <div class="hero-content text-center">
              <div class="max-w-full">
                <img
                  class="mx-auto w-80"
                  src="./images/no-data.png"
                  alt="no data Available fromate"
                />
                <h1 class="text-5xl font-bold mt-6">
                  No Information Available
                </h1>
                <p class="py-6 px-24">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a.
                </p>
              </div>
            </div>
          </div>`;
      parentDiv.appendChild(div);
    } else {
      data.forEach((dt) => {
        const div = document.createElement("div");
        div.classList.add("card", "card-compact", "shadow-xl", "card_items");
        div.innerHTML = `  <figure>
                      <img
                       class="rounded-md"
                        src=${dt?.image} 
                        alt=${dt.breed}
                       
                      />
                    </figure>
                    <div class="px-1 py-3">
                      <h2 class="card-title">${
                        dt.pet_name ? dt.pet_name : "NO pet name"
                      }</h2>
                      <div class="flex gap-2">
                        <span><i class="fa-solid fa-border-all"></i></span>
                        <p>Breed: ${dt.breed ? dt.breed : " NO breed name"}</p>
                      </div>
                      <div class="flex gap-2">
                        <span><i class="fa-solid fa-cake-candles"></i></span>
                        <p>Birth: ${
                          dt.date_of_birth
                            ? dt.date_of_birth
                            : " no data of birth"
                        }</p>
                      </div>
                      <div class="flex gap-2">
                        <span><i class="fa-solid fa-mercury"></i></span>
                        <p>Gender: ${dt.gender ? dt.gender : "no gender"}</p>
                      </div>
                      <div class="flex gap-2">
                        <span><i class="fa-solid fa-dollar-sign"></i></span>
                        <p>Price : ${
                          dt.price ? dt.price + "$" : " no price"
                        }</p>
                      </div>
                      <div class="divider h-0"></div>
                      <div class="card-actions gap-3">
                       <button class="card_btn" onclick="LoveByPate('${
                         dt?.image
                       }' , '${dt.pet_name}')" >
                  <i class="fa-regular fa-heart"></i>
                </button>
                        <button class="card_btn" onclick="CounterNumber()"><span>Adopt</span></button>
                        <button class="card_btn" onclick="FetchDetailsDynamic('${
                          dt.petId
                        }')"><span>Details</span></button>
                      </div>
                    </div>`;
        parentDiv.appendChild(div);
      });
    }
  };
};
fetchAllData();
