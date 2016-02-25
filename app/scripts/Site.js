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
      case '/articles' === uri: return <Articles json={this.state.json}/>;
      case /\/article.*/.test(uri): return <Article json={this.state.json}/>;
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

var Articles = React.createClass({
  generateArticle: function(json){
    var articles =[];
    for(var article in json.articles){
      //console.log('art', json.articles[0]);
      articles.push(
        <div className="article col-md-12">
          <div className="article-title" onClick={actions.geturi.bind(this, json.articles[article].href)}>
            {json.articles[article].title}
          </div>
          <div className="article-subtitle container">
            <div className="col-md-2">
              <span className="key">By:</span>
              <span className="value name" onClick={actions.geturi.bind(this, json.articles[article].author.href)}>{json.articles[article].author.name}</span>
            </div>
            <div className="col-md-4">
              <span className="key">Published:</span>
              <span className="value">{json.articles[article].date}</span>
            </div>
          </div>
        </div>
      );
    }
    return articles;
  },
  render: function(){
    return (
      <div className="articles container">
        <h2 className="col-md-12">Article List</h2>
        <div className="article-list col-md-12">
          {this.generateArticle(this.props.json)}
        </div>
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

var Article = React.createClass({
  render: function(){
   return (
     <div className="article container">
       <h2 className="col-md-12">{this.props.json.title}</h2>
       <div className="article-subtitle col-md-12">
         <span className="key">By:</span>
         <span className="value name" onClick={actions.geturi.bind(this, this.props.json.author.href)}>{this.props.json.author.name}</span>
       </div>
       <div className="text col-md-12">{this.props.json.text}</div>
       <div className="publish-date col-md-12">
         <span className="key">Published:</span>
         <span className="date">{this.props.json.date}</span>
       </div>
     </div>
   );
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
        <div key={link} className={"btn btn-default " + link} onClick={actions.geturi.bind(this,links[link].href)}>{link}</div>);
    }
  }
  return reactLinks;
};

export default Site;