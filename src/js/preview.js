import { spinner } from "./utils";
import { vote } from "./vote";

// Load Data
const DATA_URL = "./src/data/previews.json";

function getJson() {
  fetch(DATA_URL)
    .then((res) => res.json())
    .then((dataJson) => {
      spinner();
      getPreview(dataJson);
    });
}

function getPreview(dataJson) {
  const dataPreview = dataJson.length;
  for (var i = 0; i < dataPreview; i++) {
    previewList.innerHTML += `
      <div class="col-6">
        <figure class="previous__item">
          <img class="previous__item-img" class="" src="${dataJson[i].img}" alt="">
          <figcaption>
            <div class="previous__item-content">
              <div class="previous__item-copy">
                <i class="previous__item-hand" style="background-color: #1cbbb4;">
                  <img src="./src/images/icon-hand.svg" alt="Icon hand">
                </i>
                <h2 class="h2">
                  ${dataJson[i].name}
                </h2>
                <p class="p-sm">${dataJson[i].description}</p>
              </div>
              <div class="previous__view-link">
                <div class="previous__view-vote">
                  <button id="buttonVoteGood" class="bckg-seconday-opacity" role="button" aria-label="Button Good"><img src="./src/images/icon-hand.svg" alt="Icon Hand"></button>
                  <button id="buttonVoteBad" class="bckg-primary-opacity" role="button" aria-label="Button bad"><img src="./src/images/icon-hand.svg" alt="Icon Hand"></button>
                </div>
                <button role="button" aria-label="Button Good" class="vote-now link-sm">Vote now</button>
              </div>
            </div>
            <div class="vote">
              <div class="bckg-seconday-opacity" style="width: 30%">
                <img src="./src/images/icon-hand.svg" alt="Icon Hand">
                <span></span>
              </div>
              <div class="bckg-primary-opacity" style="width: 70%">
                <img src="./src/images/icon-hand.svg" alt="Icon Hand">
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    `;
  }
  vote();
}

getJson();
