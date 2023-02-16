const form = document.querySelector("form");
const profile = document.querySelector("#profile");

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = form.elements['username'].value;
  form.elements['username'].value=''

   fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {

      profile.innerHTML = `
    <img src="${data.avatar_url || "Not available" }" alt="Avatar">
    <p>Name: ${data.name || "Not available"}</p>
    <p>Username: ${data.login || "Not available"}</p>
    <p>Company: ${data.company || "Not available"}</p>
    <p>Location: ${data.location || "Not available"}</p>
    <p>Followers: ${data.followers || "Not available"}</p>
    <p>Following: ${data.following || "Not available"}</p>
    `;
      
    })
    .catch(error => {
      profile.textContent = `<p>${error.message}</p>`;
    });
});
