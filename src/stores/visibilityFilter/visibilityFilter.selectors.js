import makeSelectorsIntoHooks from '../utils'

import visibilityFilterStore from '../visibilityFilter/visibilityFilter.store'

const visibilityFilterSelectors = {
  useVisibilityFilterActions: null,
  useVisibilityFilter: visibilityFilter => visibilityFilter
}

export default makeSelectorsIntoHooks(visibilityFilterSelectors, visibilityFilterStore)