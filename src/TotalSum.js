import React from "react";

function TotalSum({ total, nutritionName, bgColor, children }) {
  return total === 0 ? (
    ""
  ) : (
    <div className="sumWraper">
      <div style={{ backgroundColor: bgColor }} className="totalSum">
        <div>{nutritionName} total:</div>
        <div className="sum">
          <p>{total.toFixed(1)}</p>
          <small>
            <strong>{children}</strong>
          </small>
        </div>
      </div>
    </div>
  );
}

export default TotalSum;
