import "./style.css";
import { useState } from "react";
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

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

function App() {
  const [showForm, setShowform] = useState(false);
  return (
    <>
      <header>
        <div className="logo">
          <img src="logo.png" alt="Image" height="68" width="68" />
          <h1>Today's Facts</h1>
        </div>

        <button className="bt bt-large bt-open">Share a fact</button>
      </header>

      {showForm ? <NewFactForm /> : null}
      <main className="main">
        <CategoryFilter />

        <FactsList />
      </main>
    </>
  );
}

// function Counter() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <span style={{ fontSize: "40px" }}>{count}</span>
//       <button className="bt bt-large" onClick={() => setCount(count + 1)}>
//         +1
//       </button>
//     </div>
//   );
// }

function NewFactForm() {
  return <form className="form">fact form</form>;
}

function CategoryFilter() {
  return (
    <aside>
      <ul>
        <li>
          <button className="bt bt-all">All</button>
        </li>
        {CATEGORIES.map((cat) => (
          <li key={cat.name} className="category">
            <button
              className="bt bt-category"
              style={{ backgroundColor: cat.color }}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function FactsList() {
  const facts = initialFacts;
  return (
    <section>
      <ul className="fact-list">
        {facts.map((fact) => (
          <Fact key={fact.id} fact={fact} />
        ))}
      </ul>
    </section>
  );
}

function Fact({ fact }) {
  return (
    <li className="fact">
      <p>
        {fact.text}
        <a
          className="source"
          href={fact.source}
          target="_blank"
          rel="noreferrer"
        >
          (Source)
        </a>
      </p>
      <span
        className="tag"
        style={{
          backgroundColor: CATEGORIES.find((cat) => cat.name === fact.category)
            .color,
        }}
      >
        {fact.category}
      </span>
      <div className="vote-buttons">
        <button className="bt vb">👍🏻 {fact.votesInteresting}</button>
        <button className="bt vb">🤯 {fact.votesMindblowing}</button>
        <button className="bt vb">⛔️ {fact.votesFalse}</button>
      </div>
    </li>
  );
}

export default App;
