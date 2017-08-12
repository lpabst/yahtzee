
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Game from './components/Game/Game.js';
import Rules from './components/Rules/Rules.js';


export default (
    <Switch>
        
        <Route component={ Game } path='/' exact />
        <Route component={ Rules } path='/rules' exact />

    </Switch>
)
