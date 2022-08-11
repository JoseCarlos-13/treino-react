import React from 'react'
import { Switch, Route } from 'react-router'
import ComponentePai from '../components/Comunicação-direta/ComponentePai'
import RandomNumber from '../Desafios/RandomNumber/RandomNumber'
import Fragment from '../components/React.Fragment/Fragment'
import Repetition from '../components/Repetição/Repetição'
import Tab from '../components/Table/table'
import ClassComponent from '../components/Componente-Classe/ClassComponent'
import StateComponent from '../components/UseState/UseState'

export default () => (
  <Switch>
    <Route exact path="/" component={ClassComponent} />
    <Route path="/state" component={StateComponent} />
    <Route path="/randomnumber" component={RandomNumber}/>
    <Route path="/fragment" component={Fragment}/>
    <Route path="/repetition" component={Repetition}/>
    <Route path="/tab" component={Tab}/>
    <Route path='/direct-comunication' component={ComponentePai} />
  </Switch>
)
