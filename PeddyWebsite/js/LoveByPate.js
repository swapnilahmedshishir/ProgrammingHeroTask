const LoveByPate = (imageUrl, petName) => {
  const parentDiv = document.getElementById("loveByImageShow");
  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = petName;
  parentDiv.appendChild(img);
};
