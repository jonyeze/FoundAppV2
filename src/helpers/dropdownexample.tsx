import React, { useState } from "react";
import Dropdown from "../components/dropdown";
import { Option } from "../components/dropdown/types";

const ExampleComponent = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const dropdownOptions = {
    placeholder: "Seleccione una opción",
    items: [
      { value: "option1", label: "Opción 1" },
      { value: "option2", label: "Opción 2" },
      { value: "option3", label: "Opción 3" },
    ] as Option[], 
  };

  return (
    <div>
      <h1>Ejemplo de uso de Dropdown</h1>
      <Dropdown
        options={dropdownOptions}
        value={selectedOption}
        onChange={handleDropdownChange}
      />
      <p>Seleccionaste: {selectedOption}</p>
    </div>
  );
};

export default ExampleComponent;
