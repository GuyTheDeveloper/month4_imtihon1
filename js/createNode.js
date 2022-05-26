export default function ({ id, email, first_name, last_name, avatar }) {
  let template = document.getElementById("template");
  let newTempl = template.content.cloneNode(true);

  newTempl.querySelector(".ava").src = avatar;
  newTempl.querySelector(".name").textContent = first_name + last_name;
  newTempl.querySelector(".email").textContent = email;

  return newTempl;
}
