import { Component, w } from '../Woon';
import InfoGrid from './InfoGrid';

export default class Body extends Component {
  build() {
    return w({
      tag: 'div',
      styles: {
        width: '70%',
        maxWidth: '1200px',
        backgroundColor: 'hsl(0, 0%, 90%)',
        margin: '0 auto',
        color: 'white',
        display: 'grid',
        gridTemplateRows: '4fr 3fr',
      },
      children: [
        w({
          tag: 'div',
          styles: {
            width: '100%',
            backgroundColor: 'hsl(211, 75%, 50%)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          },
          children: [
            w({ tag: 'h1', text: 'Hello, world!', styles: { fontSize: '8rem' } }),
            w({ tag: 'span', text: 'This site was made using Woon.js', styles: { fontSize: '1.5rem' } }),
          ],
        }),
        new InfoGrid(),
      ],
    });
  }
}
