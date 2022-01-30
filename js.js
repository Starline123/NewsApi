/*SEARCH BY USING A CITY NAME (e.g. athens) OR A COMMA-SEPARATED CITY NAME ALONG WITH THE COUNTRY CODE (e.g. athens,gr)*/
const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");
const apiKey = config.apiKey;

window.addEventListener("load", e => {
  e.preventDefault();
  //let inputVal = input.value;
  console.log('page is fully loaded');
  //check if there's already a city
  //ajax here
  const url = `https://api.thenewsapi.com/v1/news/all?api_token=${apiKey}`;
  fetch(url)
    .then(response => response.json())
    .then(_data => {
      const { data } = _data;


      const li = document.createElement("li");
      li.classList.add("city");
      const markup = `
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="${data[0].image_url}" alt="">
          <div class="carousel-caption d-none d-md-block">
            <h5>${data[0].title}</h5>
            <p>${data[0].description}</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="${data[1].image_url}" alt="">
          <div class="carousel-caption d-none d-md-block">
            <h5>${data[1].title}</h5>
            <p>${data[1].description}</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="${data[2].image_url}" alt="">
          <div class="carousel-caption d-none d-md-block">
            <h5>${data[2].title}</h5>
            <p>${data[2].description}</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="${data[3].image_url}" alt="">
          <div class="carousel-caption d-none d-md-block">
            <h5>${data[3].title}</h5>
            <p>${data[3].description}</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="${data[4].image_url}" alt="">
          <div class="carousel-caption d-none d-md-block">
            <h5>${data[4].title}</h5>
            <p>${data[4].description}</p>
          </div>
        </div>

      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
      `;
      console.log(markup);

      console.log("Loading finished");
      li.innerHTML = markup;
      list.appendChild(li);
    });
});