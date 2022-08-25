document.querySelector('#b1').addEventListener('click', () => {
  let v = document.getElementById('box1');
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
    if (v.value === data[i]) {
      console.log("Found !");
      document.getElementById("result").textContent = "Found";
      break;
    } else {
      console.log("Not found !");
    }
  }
})








