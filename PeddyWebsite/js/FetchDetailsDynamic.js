const FetchDetailsDynamic = (id) => {
  const url = `https://openapi.programming-hero.com/api/peddy/pet/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => DetailsDynamicDisplayData(data.petData))
    .catch((error) => console.error("Error fetching Data:", error));

  const modal = document.getElementById("dynamicDataShowModal");
  modal.showModal();
  const DetailsDynamicDisplayData = (dt) => {
    modal.innerHTML = "";
    const div = document.createElement("div");
    div.classList.add("modal-box");
    div.innerHTML = `
      <img
        src=${dt.image}
        alt=${dt.pet_name}
        class="w-[477px] h-[240px] rounded-md"
      />
      <div class="mt-5">
        <h3 class="text-2xl font-extrabold">${dt.pet_name}</h3>
        <div class="grid grid-cols-2 gap-2 mt-3">
          <div class="flex gap-2">
            <span><i class="fa-solid fa-border-all"></i></span>
            <p>Breed: ${dt.breed ? dt.breed : " NO breed name"}</p>
          </div>
          <div class="flex gap-2">
            <span><i class="fa-solid fa-cake-candles"></i></span>
            <p>Birth: ${
              dt.date_of_birth ? dt.date_of_birth : " no data of birth"
            }</p>
          </div>
          <div class="flex gap-2">
            <span><i class="fa-solid fa-mercury"></i></span>
            <p>Gender: ${dt.gender ? dt.gender : "no gender"}</p>
          </div>
          <div class="flex gap-2">
            <span><i class="fa-solid fa-dollar-sign"></i></span>
            <p>Price : ${dt.price ? dt.price + "$" : " no price"}</p>
          </div>
        </div>
      </div>
      <div class="divider h-0"></div>
      <div>
        <h2 class="card-title">Details Information</h2>
        <p class="py-2">
         ${dt.pet_details}
        </p>
      </div>
  
      <div>
        <form method="dialog">
          <button class="btn w-full card_btn"><span>Cancel</span></button>
        </form>
      </div>
   
  `;
    modal.appendChild(div);
  };
};
