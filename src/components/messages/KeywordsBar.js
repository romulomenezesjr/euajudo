import React from "react";

export default function KeywordsBar() {
  const keywords = ["Campina Grande", "Comida", "Viagem", "Remédio"];
  let selectedKeywords = [];
  let classSelected = "btn btn-dark mx-1";
  let unclassSelected = "btn btn-light mx-1";

  function handleClick(e) {
    if (!selectedKeywords.includes(e.target.innerHTML)) {
      e.target.className = classSelected;
      selectedKeywords.push(e.target.innerHTML);
    } else {
      e.target.className = unclassSelected;
      selectedKeywords = selectedKeywords.filter(
        (item) => item !== e.target.innerHTML
      );
    }
  }
  return (
    <div className="col-sm-12">
      {keywords.map((k) => {
        return (
          <button
            type="button"
            className="btn btn-light mx-1"
            key={k}
            onClick={handleClick}
          >
            {k}
          </button>
        );
      })}
    </div>
  );
}
