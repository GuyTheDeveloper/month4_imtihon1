import render from "./render.js";

let list = document.getElementById("card");

async function main() {
  let fetchFirst = await fetch("https://reqres.in/api/users");
  let fetchData = await fetchFirst;
  //   console.log((await fetchData.json()).data);

  if (fetchData.ok) {
    let data = (await fetchData.json()).data;
    render(list, data);
  }
}

main();
