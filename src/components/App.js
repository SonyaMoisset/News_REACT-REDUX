import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home, News, GalleryItem } from '../containers'
import { Header, Footer } from '../components'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />    
                    <Switch>
                        <Route path="/news/:id" component={News} />
                        <Route exact path="/" component={Home} />
                        <Route path="/galleries/:id" component={GalleryItem} />
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App