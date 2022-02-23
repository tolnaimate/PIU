import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

document.getElementById("app").innerHTML = `
<div class="container d-flex p-2 flex-column">
  <h1 class="d-flex p-2 justify-content-center">Etichete</h1>
  <table class="table table-bordered">
    <tr>
      <td>Materie</td>
      <td><input id="materie" style="width: 100%;" /></td>
    </tr>
    <tr>
      <td>Elev</td>
      <td><input id="nume" style="width: 100%;" /></td>
    </tr>
    <tr>
      <td>Culoare (<em>cod HEXA, nume</em>)</td>
      <td><input id="culoare" style="width: 100%;" /></td>
    </tr>
  </table>
  <div class="d-flex p-2 justify-content-center">
    <button id="creaza" class="btn btn-success">Crează eticheta</button>
  </div>
  <div id="etichete"></div>
</div>
`;

const generez = () => {
  //  Preiau valorile din tabel
  const materia = document.querySelector("#materie").value;
  const numeElev = document.querySelector("#nume").value;
  const culoare = document.querySelector("#culoare").value;

  //  Creez template-ul etichetei
  const temp = `
  <div class="eti" style="border-color: ${culoare};">
      <div class="materie" style="border-color: ${culoare};"> ${materia}</div>
      <div class="elev" style="border-color: ${culoare};"> ${numeElev}</div>
    </div>
  `;
  //  Adaug eticheta in blocul #etichete
  document.querySelector("#etichete").innerHTML += temp;
};

document.querySelector("#creaza").onclick = generez;
