import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import Ads from './Ads'
import SidebarSponser from './SidebarSponser'
import ArticleLinks from './ArticleLinks'
import ArticleBody from './ArticleBody'
import Profile from './Profile'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>

    <main className="expanded row">
      <div className="large-8 medium-12 columns article">
        <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
        <Profile/>
        <ArticleBody/>
        <ArticleLinks/>
      </div>
      <SidebarSponser/>
      <Ads/>
    </main>
    <Footer/>
      </div>
    );
  }
}

export default App;
