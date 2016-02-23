var React = require('react');
var reflux = require('reflux');
var StateMixin = require('reflux-state-mixin')(reflux);
import AppStore from './AppStore';

var Json = React.createClass({
  mixins: [StateMixin.connect(AppStore, 'json')],
  render: function(){
    return (
      <div className="col-md-12 json">
        <h2>Json</h2>
        <div className="json-display">
          <pre>
            {JSON.stringify(this.state.json, null, 2)}
          </pre>

        </div>
      </div>
    );

  }

});

export default Json;