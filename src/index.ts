import './style.css';
import Woon, { Component, w } from './Woon';

class HomePage extends Component {
  init() {
    this.setState('who', 'world');
  }

  build() {
    return w({ tag: 'h1', text: `Hello ${this.getState('who')}!` });
  }
}

const app = new Woon(document.querySelector('#app'), new HomePage());
