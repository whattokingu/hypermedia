var React = require('react');
var reflux = require('reflux');
var StateMixin = require('reflux-state-mixin')(reflux);
import AppStore from './AppStore';
import actions from './AppActions';

var Links = React.createClass({
  mixins: [StateMixin.connect(AppStore, 'json')],
  render: function(){
    //console.log('linkjson', this.state.json);
    return (
      <div className="col-md-12 links">
        <h2>Links</h2>
        <div className="links-display">
          {this.state.json ? this.renderLinks(this.state.json._links): null}
        </div>
      </div>
    );

  },
  renderLinks(links){
    var formattedLinks = [];
    for(var link in links){
      if(links.hasOwnProperty(link)){
        formattedLinks.push(
          <div key={link} className="link-line">
            <span className="key">{link}:</span>
            <span className="value" onClick={this.handleClick.bind(this, links[link].href)}>{links[link].href}</span>
          </div>
        );
      }
    }
    return formattedLinks;
  },

  handleClick(uri){
    actions.geturi(uri);
  }

});

export default Links;