const CounterNumber = (clickMe) => {
  const modal = document.getElementById("count_down_modal");
  modal.showModal();
  const counterNumber = document.getElementById("counterNumber");
  let count = 3;
  counterNumber.innerText = count;
  const handCountDown = setInterval(() => {
    if (count === 1) {
      clearInterval(handCountDown);
      modal.close();
    }
    count--;
    counterNumber.innerText = count;
  }, 2000);
};
