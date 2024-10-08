const fetchDataFunction = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data));

  const displayData = (data) => {
    const fetchDataShow = document.querySelector("#fetchDataShow");
    for (let item of data) {
      const li = document.createElement("li");
      li.innerHTML = `${item.id}: ${item.title}`;
      fetchDataShow.appendChild(li);
    }
  };
};

fetchDataFunction();
