import Wrapper from '../assets/wrappers/SearchContainer'
import { useAppContext } from '../context/appContext'
import FormRow from './FormRow'
import FormRowSelect from './FormRowSelect'

const SearchContainer = () => {
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

  const handleSearch = (e) => {
    if (isLoading) return
    handleChange({name: e.target.name, value: e.target.value})
  }

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSearch}>
        <h4>Search Form</h4>
        {/* search position */}
        <div className="form-center">
          <FormRow type="text" name="search" value={search} handleChange={handleSearch}/>
          <FormRowSelect labelText='status' name="searchStatus" value={searchStatus} handleChange={handleSearch} list={['all', ...statusOptions]}/>
          <FormRowSelect labelText='type' name="searchType" value={searchType} handleChange={handleSearch} list={['all', ...jobTypeOptions]}/>
          <FormRowSelect name="sort" value={sort} handleChange={handleSearch} list={sortOptions}/>
          <button type="button" className='btn btn-block btn-danger' disabled={isLoading} onClick={clearFilters}>Clear Filters</button>
        </div>
      </form>
    </Wrapper>
  )
}
export default SearchContainer