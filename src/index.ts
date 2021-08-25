import './style.css';

import Body from './components/Body';
import NavBar from './components/NavBar';
import Woon, { Component, w } from './Woon';

class HomePage extends Component {
  init() {}

  build() {
    return w({
      tag: 'div',
      styles: {
        backgroundColor: 'hsl(0, 0%, 96%)',
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
      },
      children: [new NavBar({ title: 'Woon.js Framework' }), new Body()],
    });
  }
}

const app = new Woon(document.querySelector('#app'), new HomePage());
