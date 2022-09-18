const button = document.querySelector(".loadimage");
const card = document.querySelector(".header");
const card2 = document.querySelector(".second_header");
const secondary = document.querySelector(".secondary_img");
const search = document.querySelector(".searchfield");
const searchoutput = document.querySelector(".search_output");

const api2 = async function (search) {
  const res1 = await fetch(`https://api.pexels.com/v1/search?query=${search}`, {
    headers: {
      Authorization: "563492ad6f9170000100000114ea3d0675934ea8a932486e365a02ef",

      //
    },
  });
  const result1 = await res1.json();

  const data1 = result1.photos;

  console.log(data1);

  data1.map((el) => {
    const div2 = document.createElement("div");
    div2.classList.add("col");
    div2.innerHTML = `<img src=${el.src.medium} style="object-fit: cover" height="200" width="300" />
  <h2>${el.photographer}</h2>
  <h2>${el.id}</h2>`;
    searchoutput.appendChild(div2);
  });
};

//api1

const api = async function () {
  const res = await fetch(
    "https://api.pexels.com/v1/search?query=[your-query]=",
    {
      headers: {
        Authorization:
          "563492ad6f9170000100000114ea3d0675934ea8a932486e365a02ef",

        //
      },
    }
  );
  const result = await res.json();

  const data = result.photos;
  console.log(data);

  //const threeindex = data.slice(0, 3);
  data.map((el) => {
    console.log(el);
    const div = document.createElement("div");
    div.classList.add("col-4");
    div.innerHTML = `
<div class="card mt-4" >
  <img src="${el.src.large}" class="card-img-top" alt="..."style="object-fit: cover" height="200" width="200" />
  <div class="card-body">
    <h5 class="card-title">${el.photographer}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  
  `;

    card.appendChild(div);
  });
};

button.addEventListener("click", function () {
  api();
});

secondary.addEventListener("click", function () {
  const enterInput = search.value;
  api2(enterInput);
});
