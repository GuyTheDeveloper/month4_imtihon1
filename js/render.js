import createNode from "./createNode.js";

export default function (where, what) {
  let fragment = document.createDocumentFragment();

  what.forEach((user) => {
    let newUser = createNode(user);

    fragment.append(newUser);
  });

  where.innerHTML = "";
  where.append(fragment);
}
