import '../style/main.scss';

//npm modules
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// app modules
import AboutContainer from './component/about-container'
import DashboardContainer from './component/dashboard-container'

let renderIf = (test, component) => (test ? component : undefined);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate() {
    console.log('___STATE___', this.state);
  }

  getApp(){
    return{
      state: this.state,
      setState: this.setState.bind(this),
    }
  }

  render() {
    return (
      <main>
        <BrowserRouter>
          <div>
            <Route exact path ='/' component={AboutContainer} />
            <Route exact path='/about' component={AboutContainer} />
            <Route exact path='/dashboard' component={() => <DashboardContainer app={this.getApp()} />}
              />
          </div>
        </BrowserRouter>
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
