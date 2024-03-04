import { useState } from "react";

function OnlyJavaScript() {
  const [mainCheckbox, setMainCheckbox] = useState(false);
  const [subCheckbox1, setSubCheckbox1] = useState(false);
  const [subCheckbox2, setSubCheckbox2] = useState(false);
  const [subCheckbox3, setSubCheckbox3] = useState(false);
  const [subCheckbox4, setSubCheckbox4] = useState(false);

  const handleMainCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setMainCheckbox(isChecked);
    setSubCheckbox1(isChecked);
    setSubCheckbox2(isChecked);
    setSubCheckbox3(isChecked);
    setSubCheckbox4(isChecked);
  };

  const handleSubCheckboxChange = (setter) => (event) => {
    const isChecked = event.target.checked;
    setter(isChecked);
    setMainCheckbox(
      subCheckbox1 && subCheckbox2 && subCheckbox3 && subCheckbox4
    );
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={mainCheckbox}
          onChange={handleMainCheckboxChange}
        />
       Select all
      </label>
      <label>
        <input
          type="checkbox"
          checked={subCheckbox1}
          onChange={handleSubCheckboxChange(setSubCheckbox1)}
        />
        Checkbox 1
      </label>
      <label>
        <input
          type="checkbox"
          checked={subCheckbox2}
          onChange={handleSubCheckboxChange(setSubCheckbox2)}
        />
        Checkbox 2
      </label>
      <label>
        <input
          type="checkbox"
          checked={subCheckbox3}
          onChange={handleSubCheckboxChange(setSubCheckbox3)}
        />
        Checkbox 3
      </label>
      <label>
        <input
          type="checkbox"
          checked={subCheckbox4}
          onChange={handleSubCheckboxChange(setSubCheckbox4)}
        />
        Checkbox 4
      </label>
    </div>
  );
}

export default OnlyJavaScript;
