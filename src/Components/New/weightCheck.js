import { useState } from "react";

export const PriceCalculator = () => {
  const [detail, setDetails] = useState({
    dropdown: "standard",
    price: "",
    weight: "",
  });


  const price = parseFloat(detail.price);
  const weight = parseFloat(detail.weight);

  let discountedPrice = "";

  if (!isNaN(price) && !isNaN(weight)) {
    if (detail.dropdown === "seasonal") {
      discountedPrice = price - price * 0.12;
    } else if (detail.dropdown === "standard") {
      discountedPrice = price - price * 0.06;
    } else if (detail.dropdown === "weight") {
      if (weight <= 10) {
        discountedPrice = price - price * 0.06;
      } else {
        discountedPrice = price - price * 0.18; 
      }
    }
    
  }

  return (
    <div>
      <h2>
        seasonal Discount: weight_any: 12%,<br />
        standard Discount: weight_any: 6%,<br />
        weight Discount: weight ≤ 10: 6% OR weight &gt; 10: 18%
      </h2>

      <label htmlFor="type">Select Type:</label>
      <select
        id="type"
        onChange={(e) =>
          setDetails({ ...detail, dropdown: e.target.value })
        }
        name="type"
        value={detail.dropdown}
      >
        <option value="standard">Standard</option>
        <option value="seasonal">Seasonal</option>
        <option value="weight">Weight</option>
      </select>

      <br />

      <label htmlFor="weight">Weight (kg):</label>
      <input
        type="number"
        id="weight"
        name="weight"
        step="0.01"
        placeholder="weight"
        value={detail.weight}
        onChange={(e) => setDetails({ ...detail, weight: e.target.value })}
      />

      <label htmlFor="totalPrice">Total Price:</label>
      <input
        type="number"
        id="totalPrice"
        name="totalPrice"
        placeholder="price"
        step="0.01"
        value={detail.price}
        onChange={(e) => setDetails({ ...detail, price: e.target.value })}
      />

      <div>
        Discounted price:
        <span id="discountedPrice">
          {discountedPrice !== "" ? ` ${discountedPrice}` : " N/A"}
        </span>
      </div>
    </div>
  );
};
