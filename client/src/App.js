import { Header } from './component/Header';
import Home  from "./component/Home";
import { Component } from 'react';
import $ from "jquery";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Services from "./component/Services"
import AfterCare from './component/AfterCare';
import FormLayout from './component/FormLayout';
import WaverLayout from "./component/WaverLayout";
import AfterLayout from './component/AfterLayout';

class App extends Component {
  constructor() {
    super();
    this.state = {
        servicesData: {}
    }
}

  // loadServices(){
  //   $.ajax({
  //     url: `services.json`,
  //     dataType: "json",
  //     cache: false,
  //     success: function (data) {
  //       this.setState({ servicesData: data });
  //       document.title = `${this.state.servicesData.services.name} | ${this.state.servicesData.services.title}`;
  //     }.bind(this),
  //     error: function (xhr, status, err) {
  //       console.log(err);
  //     },
  //   })
  // }
  render() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/aftercare" component={AfterCare} />
            <Route exact path="/forms" component={FormLayout} />
            <Route exact path="/forms.waiver" component={WaverLayout} />
            <Route exact path="/forms.After" component={AfterLayout} />
          </div>
        </header>
      </div>
    </Router>
  );
  }
}

export default App;
