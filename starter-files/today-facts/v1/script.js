const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const bt = document.querySelector(".bt-open");
const form = document.querySelector(".form");
const factsList1 = document.querySelector(".fact-list");

factsList1.innerHTML = "";

async function loadFacts() {
  const resp = await fetch(
    "https://imrofbiquqgqcegbgztq.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imltcm9mYmlxdXFncWNlZ2JnenRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQwNTE4MzEsImV4cCI6MTk5OTYyNzgzMX0.zjK_Mi25VNvI51eTPQJrQZlF5q5rdG_TO95S68atoUk",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imltcm9mYmlxdXFncWNlZ2JnenRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQwNTE4MzEsImV4cCI6MTk5OTYyNzgzMX0.zjK_Mi25VNvI51eTPQJrQZlF5q5rdG_TO95S68atoUk",
      },
    }
  );
  const data = await resp.json();

  //   const filteredData = data.filter((fact) => fact.category == "society");
  //   console.log(filteredData);
  createFacts(data);
}

loadFacts();
function createFacts(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
        <p>
        ${fact.text}
          <a class="source" href="${fact.source}" target="_blank">(Source)</a>
        </p>
        <span class="tag" style="background-color: ${
          CATEGORIES.find((cat) => cat.name === fact.category).color
        }">${fact.category}</span</li>`
  );
  console.log(htmlArr);
  const html1 = htmlArr.join("");
  factsList1.insertAdjacentHTML("afterbegin", html1);
}

bt.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    bt.textContent = "Close";
  } else {
    form.classList.add("hidden");
    bt.textContent = "Share a fact";
  }
});

/*
function calcage(year) {
  const curyear = new Date().getFullYear();
  return curyear - year;
}

// console.log(calcage(2004));

// let a = 300;
// let b = 40;

// const msg = a > b ? "Hi" : "Hello";

// alert(msg);

// const fun = (year) =>
//   year < new Date().getFullYear()
//     ? new Date().getFullYear() - year
//     : "Impossibile!";
// console.log(fun(2023));

const arr = ["Charan", 18, true];

const [name, age, bool] = arr;

console.log(bool);

const fact = [...arr, "Tech"];
console.log(fact);

const factObj = {
  text: "Hi",
  category: "Greet",
  date: 21,
  isTrue: true,
  Summary: function () {
    return `The fact is ${
      this.text
    } and from category ${this.category.toUpperCase()}`;
  },
};

console.log(factObj.Summary());
*/
