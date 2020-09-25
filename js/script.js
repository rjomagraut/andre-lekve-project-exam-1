const indexHeader = document.querySelector('.index-header');

const url =
  'https://api.nasa.gov/planetary/apod?api_key=DjaT9ZuDgQSEzDCpSQuU9EsZYEPwdKZkxrAJR12B';

async function fetchInfo() {
  const response = await fetch(url);
  const info = await response.json();

  console.log(info);

  indexHeader.innerHTML = `<h2>DAILY PICTURE</h2>
                            <h3 class="daily-title">${info.title}</h3>
                            <p class="daily-explanation">${info.explanation}</p>
                            <a href="${info.hdurl}"><img class="daily-image" src="${info.url}"></a>
                            <div class="daily-copyright">Copyright: ${info.copyright}</div>
                            <div class="daily-date">Picture taken: ${info.date}</div>`;
}

fetchInfo();
