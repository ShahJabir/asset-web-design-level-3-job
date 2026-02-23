const container = document.getElementById("breadcrumb");
let currentPath = "";

container.innerHTML = "";

const path = window.location.pathname.split("/").filter(Boolean);
path.forEach((segment, _) => {
  currentPath += ` > ${segment}`;
});

let newPath = currentPath.substring(2);

container.innerHTML = newPath;
