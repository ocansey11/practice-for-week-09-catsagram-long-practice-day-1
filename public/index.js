document.addEventListener("DOMContentLoaded", () => {
  const url = "https://api.thecatapi.com/v1/images/search";
  const fetchKittenButton = document.getElementById("fetchKittenButton");
  const kittenImageContainer = document.getElementById("kittenImageContainer");
  fetchKittenButton.addEventListener("click", getRandomCats);

  randomCatPhoto = (json) => {
    let photo = json[0].url;

    console.log(json);
    kittenImageContainer.classList.add("cats");
    let image = document.createElement("img");
    image.src = photo;
    kittenImageContainer.append(image);
  };

  async function getRandomCats() {
    kittenImageContainer.innerHTML = "";
    try {
      const response = await fetch(url);
      const json = await response.json();
      return randomCatPhoto(json);
    } catch {}
  }
});
