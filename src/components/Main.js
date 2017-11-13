import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Search from './Search';
import Detail from './Detail';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Search} />
      <Route exact path='/detail' component={Detail} />
    </Switch>
  </main>
)

export default Main;