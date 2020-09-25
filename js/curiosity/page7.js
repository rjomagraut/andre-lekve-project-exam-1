const imageUrl =
  'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=7&api_key=DjaT9ZuDgQSEzDCpSQuU9EsZYEPwdKZkxrAJR12B';

fetch(imageUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    addImages(json);
  })
  .catch(function (error) {
    console.dir(error);
  });

function addImages(photos) {
  console.log(photos.photos[0].rover.name);

  const imageContainer = document.querySelector('.images');

  let html = '';

  for (let i = 0; i < photos.photos.length; i++) {
    if (!photos.photos[i].rover.name) {
      [];
      continue;
    }

    let nameOfRover = 'Unknown';
    if (photos.photos[i].rover.name !== '-') {
      nameOfRover = photos.photos[i].rover.name;
    }
    html += `<div class="gallery">
    <div class="rover-gallery">
                <a href="${photos.photos[i].img_src}"><img class="rover-image" src="${photos.photos[i].img_src}"></a>
    </div>
    </div>`;
  }
  imageContainer.innerHTML = html;
}
