import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/home'
import UsersArray from './pages/usersArray'
import HideShow from './pages/hideShow'
import DataBinding from './pages/dataBinding'
import DisableButton from './pages/disableButton'
import UpdateParent from './pages/updateParent'
import AddChild from './pages/addChild'
import Sum from './pages/sum'
import Counter from './pages/counter'
import Fetch from './pages/fetch'

const paths = [
  { path: '/array', element: <UsersArray /> },
  { path: '/show-hide', element: <HideShow /> },
  { path: '/data-bind', element: <DataBinding /> },
  { path: '/disable-button', element: <DisableButton /> },
  { path: '/parent-state', element: <UpdateParent /> },
  { path: '/add-child', element: <AddChild /> },
  { path: '/sum', element: <Sum /> },
  { path: '/counter', element: <Counter /> },
  { path: '/fetch', element: <Fetch /> }
]

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/'><Home /></Route>
        {paths.map(i => <Route path={i.path}>{i.element}</Route>)}
      </Switch>
    </Router>
  </React.StrictMode>
)
