
var React = window.React = require('react'),
    ReactDOM = require("react-dom"),
    mountNode = document.getElementById("app");

var reflux = require('reflux');
var StateMixin = require('reflux-state-mixin')(reflux);
import History from './history.js';
import Json from './json.js';
import Links from './Links.js';
import Site from './Site.js';
import AppStore from './AppStore';
import actions from './AppActions';


var App = React.createClass({
  mixins:[StateMixin.connect(AppStore)],
  render: function() {
    return (

    <div className='container'>
      <div className="start btncol-md-12">
        <div className="btn btn-default" onClick={this.handleStartClick}>
          {this.state && this.state.initialised ? 'RESTART (GET "/api")' : 'START (GET "/api")'}
        </div>
      </div>
      <div className="col-md-4">
          <History/>
          <Links/>
      </div>
      <div className="col-md-8">
        <Json/>
      </div>
      <div className="site col-md-12">
        <h1>Site</h1>
        <hr/>
        <Site/>
      </div>
    </div>
    );
  },
  handleStartClick: function(){
    actions.onStartClick();
  }
});


ReactDOM.render(<App />, mountNode);

