const visibilityFilterActions = {
  setVisibilityFilter: filter => ({ setState }) => {
    setState(() => filter)
  }
}

export default visibilityFilterActions