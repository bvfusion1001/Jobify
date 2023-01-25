import Wrapper from '../assets/wrappers/SearchContainer'
import { useAppContext } from '../context/appContext'
import FormRow from './FormRow'
import FormRowSelect from './FormRowSelect'
import {useState, useMemo} from 'react'

const SearchContainer = () => {
  const [localSearch, setLocalSearch] = useState('')

  const {
    isLoading,
    search,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    handleChange,
    clearFilters,
    statusOptions,
    jobTypeOptions,
  } = useAppContext()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setLocalSearch('')
    clearFilters()
  }
  const handleSearch = (e) => {
    // if (isLoading) return
    handleChange({name: e.target.name, value: e.target.value})
  }
  
  const debounce = () => {
    let timeoutId
    return (e) => {
      setLocalSearch(e.target.value)
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        handleChange({name: e.target.name, value: e.target.value})
      }, 1000)
    }
  }
  const optimizedDebounce = useMemo(() => debounce(), [])

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSearch}>
        <h4>Search Form</h4>
        {/* search position */}
        <div className="form-center">
          <FormRow type="text" name="search" value={localSearch} handleChange={optimizedDebounce}/>
          <FormRowSelect labelText='status' name="searchStatus" value={searchStatus} handleChange={handleSearch} list={['all', ...statusOptions]}/>
          <FormRowSelect labelText='type' name="searchType" value={searchType} handleChange={handleSearch} list={['all', ...jobTypeOptions]}/>
          <FormRowSelect name="sort" value={sort} handleChange={handleSearch} list={sortOptions}/>
          <button type="button" className='btn btn-block btn-danger' disabled={isLoading} onClick={handleSubmit}>Clear Filters</button>
        </div>
      </form>
    </Wrapper>
  )
}
export default SearchContainer