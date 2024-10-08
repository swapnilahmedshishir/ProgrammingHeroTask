const fetchCatagoryData = () => {
  const url = "https://openapi.programming-hero.com/api/peddy/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => CatagoryDisplayData(data.categories))
    .catch((error) => console.error("Error fetching categories:", error));

  const CatagoryDisplayData = (categories) => {
    const parentDiv = document.querySelector("#catagory_btn");
    parentDiv.innerHTML = "";
    categories.forEach((category) => {
      const button = document.createElement("button");
      button.classList.add("catagory_btn");
      button.innerHTML = `  <img class="w-8 md:w-fit" src=${category.category_icon} alt="catgory icon" />
          <p class="catagory_Name" id='catagory_Name' >${category.category}</p>`;
      parentDiv.appendChild(button);

      button.addEventListener("click", () => {
        fetchByCatagory(category.category);
        document.querySelectorAll(".catagory_btn").forEach((btn) => {
          btn.classList.remove("active");
        });
        button.classList.add("active");
      });
    });
  };
};
fetchCatagoryData();
