import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

import { defaults } from 'react-sweet-state'
import { produce } from 'immer'

defaults.mutator = (currentState, producer) => produce(currentState, producer)

render(
  <App />,
  document.getElementById('root')
)
