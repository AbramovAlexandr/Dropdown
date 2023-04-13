import { useState } from 'react';
import './index.css'
import { Context } from './Utils/context/context';
import { countryMock } from './constant';
import { DropDown } from './componets/DropDown/DropDown';

function App() {

  const [counties, setCountries] = useState(countryMock)
  const [countiesSelected, setCountriesSelected] = useState([])
  const [isDrop, setDrop] = useState(false)
  const [searchValue, setSearchValue] = useState('')


  const removeCountry = (id) =>{
    const indexRemove = countiesSelected.filter(countryId => countryId.id !== id)
    if(indexRemove){
      const newArray = [...indexRemove];
      setCountriesSelected(newArray)
    }

  }

  const handleSelect = (country) =>{
    const indexRemove = countiesSelected.findIndex(countryFind => countryFind.id === country.id);
    console.log('index', indexRemove)
    if(indexRemove !== -1){
      const newArray = [...countiesSelected];
      newArray.splice(indexRemove, 1);
      setCountriesSelected(newArray)
    }else{
      setCountriesSelected([...countiesSelected, country])
    }
    
  }

  const toggleShow = () =>{
    setDrop(!isDrop)
}

const filterSearchCountry = ({countryMock, searchValue}) =>{
    if(!searchValue){
      return countryMock
    }
    return countryMock.filter(({value}) => value.toLowerCase().includes(searchValue.toLowerCase()))
}

  return (
    <div className="App">
      <Context.Provider value={{
        countiesSelected, 
        handleSelect, 
        counties, 
        removeCountry, 
        toggleShow, 
        isDrop, 
        searchValue, 
        setSearchValue, 
        filterSearchCountry,
        setCountries,
        }}>

        <DropDown/>
      </Context.Provider>
        
    </div>
  );
}

export default App;
