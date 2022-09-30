const filter = document.querySelector(".filter");
const userList = document.querySelector(".user-list");

const listItems = [];

getUserList();

async function getUserList() {
  const res = await fetch("https://randomuser.me/api?results=50");
  const { results } = await res.json();

  userList.innerHTML = "";

  results.forEach((user) => {
    const li = document.createElement("li");

    li.innerHTML = ` 
    <img
    src="${user.picture.large}"
    alt="${user.name.last}"
  />
  <div class="user-info">
    <h4>${user.name.first} ${user.name.last}</h4>
    <p>${user.location.city}, ${user.location.country}</p>
  </div>
    `;
    listItems.push(li);
    userList.appendChild(li);
  });
}

filter.addEventListener("input", (e) => filterUser(e.target.value));

function filterUser(userName) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(userName.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
