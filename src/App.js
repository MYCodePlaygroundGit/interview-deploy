import React, { useState } from "react";
import { Button, Input } from "antd";
import "antd/dist/antd.css";

function App() {
  const [nric, setValue] = useState("");

  function generateNRIC() {
    let nric = "";
    const randomFirst = ["S", "T", "F", "G"];
    const randomLast = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z"
    ];
    var chars = pad(Math.floor(Math.random() * 9999999), 7);
    const randomIndex1 = Math.floor(Math.random() * 4);
    const randomIndex2 = Math.floor(Math.random() * 26);
    nric = randomFirst[randomIndex1] + chars + randomLast[randomIndex2];
    setValue(nric);
  }

  function pad(num, size) {
    var s = "0000000" + num;
    return s.substr(s.length - size);
  }

  return (
    <div>
      <Button style={{ width: "100%" }} onClick={generateNRIC} type="primary">
        Generate Random NRIC
      </Button>
      <Input
        size="large"
        style={{ width: "100%", textAlign: "center" }}
        disable="true"
        placeholder="Click Generate"
        value={nric}
      />
    </div>
  );
}

export default App;
