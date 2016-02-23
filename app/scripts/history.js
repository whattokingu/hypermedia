var React = require('react');
import AppStore from './AppStore';
var reflux = require('reflux');
var StateMixin = require('reflux-state-mixin');
var History = React.createClass({
  mixins: [StateMixin.connect(AppStore, 'history')],
  render: function(){
    return (
      <div className="col-md-12 history">
        <h2>History</h2>
        <ul className="history-list">
          {
            this.state.history.map(function(item, i){
              return(
                <li key={i} className="history-item" id={i}>
                  <span className="verb">{item.verb+ ':'}</span>
                  <span className="uri">{' ' + item.uri}</span>
                </li>
              );
            })
          }
        </ul>
      </div>
    );

  }

});

export default History;