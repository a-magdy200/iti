const usersList = document.getElementById("users-list");
const createUser = (user) => {
  return `<div class="user">
    <img src="${user.avatar}" alt="User avatar" />
    <h2>${user.first_name} ${user.last_name}</h2>
    <p>${user.email}</p>
</div>`;
}
fetch("https://reqres.in/api/users?page=2", {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
})
  .then(res => res.json())
  .then(res => res.data)
  .then(res => {
    usersList.innerHTML = "";
    res.forEach(user => {
      usersList.innerHTML += createUser(user);
    })
  });
