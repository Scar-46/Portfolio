import './index.scss';
import { Sun, Moon } from 'lucide-react';

const Toggle = ({ handleChange, isChecked }) => {
  return (
    <div className="toggle-container" onClick={handleChange}>
      {isChecked ? (
        <Sun strokeWidth={1.5} size={25}/>
      ) : (
        <Moon strokeWidth={1.5} size={25}/>
      )}
    </div>
  );
};

export default Toggle;
