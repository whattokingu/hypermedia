var reflux = require('reflux');
var StateMixin = require('reflux-state-mixin')(reflux);
var actions = require('./AppActions');
var update = require('react-addons-update');
var getjson = require('./uri');

var AppStore = reflux.createStore({
  mixins: [StateMixin],
  listenables: actions,
  getInitialState: function(){
    return {
      initialised: false,
      history: [],
      json: {},
      uri: ''
    }
  },
  addToHistory: function(call){
    this.setState({
      history: update(this.state.history, {$push: [call]})
    });
  },
  onStartClick(){
    console.log('startclick');
    //make start call
    if(this.state.initialised){
      this.setState(this.getInitialState());
    }
      this.addToHistory({verb: 'GET', uri: '/api'});
      var data = getjson('/api');
      this.setState({
        initialised: true,
        json: data,
        uri: '/api'
      });
  },
  geturi(uri){
    console.log('geturi', uri);
    var data = getjson(uri);
    console.log(uri);
    console.log(data);
    this.setState({
      uri: uri,
      json: data
    });
    this.addToHistory({verb: 'GET', uri: uri});
  }
});

module.exports = AppStore;