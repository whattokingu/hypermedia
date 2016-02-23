var React = require('react');
var reflux = require('reflux');
var StateMixin = require('reflux-state-mixin')(reflux);
var actions = require('./AppActions');
import AppStore from './AppStore';

var Site = React.createClass({
  mixins: [
    StateMixin.connect(AppStore)
  ],
  render: function(){
    //console.log(this.state.uri, this.state.json);
    var uri = this.state.uri.split('?')[0];
    if(!this.state.initialised){
      return null;
    }
    switch(true){
      case '/api' === uri: return <Api json={this.state.json}/>;
      case '/authors' === uri: return <Authors json={this.state.json}/>;
      case /\/author/.test(uri): return <Author json={this.state.json} uri={this.state.uri}/>;
      default: return <Error/>;
    }
  }
});

var Api = React.createClass({
  render: function(){
    return (
      <div className="api">
        <h2>Welcome to the API page</h2>
        <div className="description">
          <div className="desc-header">Description</div>
          <div className="desc-body">{this.props.json.description}</div>
        </div>
        <div className="nav-bar col-md-6">
          <h3>Links</h3>
          <div className="links">
            {renderLinks(this.props.json._links)}
          </div>
        </div>
      </div>
    );
  }
});

var Authors = React.createClass({
  render: function(){
    return (
      <div className="authors">
        <h2>Author List</h2>
        <ul className="-author-list">
          {this.props.json.authors.map(function(author){
            return(
              <li key={author.href} className="author" onClick={actions.geturi.bind(this, author.href)}>
                <div className="author-line name">
                  <span className="key">Name: </span>
                  <span className="value">{author.name}</span>
                </div>
                <div className="author-line occupation">
                  <span className="key">Occupation: </span>
                  <span className="value">{author.occupation}</span>
                </div>

              </li>
            );
          })}
        </ul>
        <div className="nav-bar col-md-6">
          <h3>links</h3>
          <div className="links">
            {renderLinks(this.props.json._links)}
          </div>
        </div>
      </div>
    );
  }
});

var Author = React.createClass({
  render: function(){
    return (
      <div className="author container">
        <h2 className="col-md-12">Author Page</h2>
        <img className="author-img col-md-2" src={this.props.json.image}/>
        <div className="col-md-9">
          <div className="page-line">
            <div className="key">Name: </div>
            <div className="userName">{this.props.json.name}</div>
          </div>
          <div className="page-line">
            <div className="key">Occupation: </div>
            <div className="occupation">{this.props.json.occupation}</div>
          </div>
          <div className="page-line">
            <div className="key">Description: </div>
            <div className="occupation">{this.props.json.description}</div>
          </div>

        </div>
      </div>
    )
  }
});

var Error = React.createClass({
  render: function(){
    return (
      <div className="error">
        <h2>Error</h2>
        <div className="error-msg">
          Error 404: Page not found.
          You have navigated here by mistake.
        </div>
      </div>
    );
  }
});

var renderLinks = function(links){
  var reactLinks = [];
  for(var link in links){
    if(link !== 'self' && links.hasOwnProperty(link)){
      reactLinks.push(
        <div className={"btn btn-default " + link} onClick={actions.geturi.bind(this,links[link].href)}>{link}</div>);
    }
  }
  return reactLinks;
};

export default Site;