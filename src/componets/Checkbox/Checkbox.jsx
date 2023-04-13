import './Checkbox.css'

export const Checkbox = ({isSelected, handleSelect, value}) => {
  return (
    <>
    <label className="container">
        <input type="checkbox" onChange={() => handleSelect(value)} checked={isSelected}/>
        <div className="checkmark"></div>
    </label>
    </>
    
  )
}
