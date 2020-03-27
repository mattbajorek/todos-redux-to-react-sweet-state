import React from 'react'
import Link from '../components/Link'
import visibilityFilterSelectors from '../stores/visibilityFilter/visibilityFilter.selectors'

const FilterLink = ({ children, filter }) => {
  const [visibilityFilter, { setVisibilityFilter }] = visibilityFilterSelectors.useVisibilityFilter()

  return (
    <Link
      active={filter === visibilityFilter}
      onClick={() => setVisibilityFilter(filter)}>
      {children}
    </Link>
  )
}

export default FilterLink