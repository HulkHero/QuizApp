import React, { useState ,memo} from 'react';

interface RadioProps {
    options:string[],
    
    onChange?: (selectedValue: string) => void;
}


const RadioInputs = ({ options, onChange }:RadioProps) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    if (onChange) {
      onChange(selectedValue);
    }
  };

  return (
    
      <div>
        {options.map((option,index) => (
          <label key={option} className="flex  items-center space-x-2 py-3 mx-3 border-b-2">
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
              className="form-radio cursor-pointer w-5 h-5 checked:accent-green-700 "
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    
  );
};

export default memo(RadioInputs);
