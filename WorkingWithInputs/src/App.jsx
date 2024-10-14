import './App.css'
import SearchOnAnArray from './SearchOnAnArray/SearchOnAnArray'
import Sort from './SortMethod/Sort'
import WorkingWithCheckboxes from './WorkingWithCheckboxes/WorkingWithCheckboxes'
import WorkingWithDropdown from './WorkingWithDropdown/WorkingWithDropdown'
import WorkingWithDropdownII from './WorkingWithDropdownII/WorkingWithDropdownII'
import WorkingWithInputs from './WorkingWithInputsI/WorkingWithInputs'
import WorkingWithInputsII from './WorkingWithInputsII/WorkingWithInputsII'

export default function App() {
  return (
    <div className='App'>
      <WorkingWithInputs />
      <WorkingWithInputsII />
      <SearchOnAnArray />
      <WorkingWithDropdown />
      <WorkingWithDropdownII />
      <WorkingWithCheckboxes />
      <Sort />
    </div>
  )
}
