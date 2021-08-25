import { Component, w } from '../Woon';
import InfoGrid from './InfoGrid';

export default class Body extends Component {
  init() {
    this.newState('counter', 0);
  }

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
            w({
              tag: 'h1',
              text: `Counter: ${this.getState('counter')}`,
              styles: { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
              children: [
                w({
                  children: [
                    w({
                      tag: 'button',
                      text: '+1',
                      events: {
                        click: () => {
                          this.setState('counter', this.getState('counter') + 1);
                        },
                      },
                      // Bootstrap button style
                      styles: {
                        backgroundColor: 'hsl(211, 75%, 60%)',
                        color: 'white',
                        padding: '0.5rem 0.75rem',
                        border: 'none',
                        borderRadius: '5px',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        margin: '0.25rem 0.5rem',
                      },
                    }),
                    w({
                      tag: 'button',
                      text: '-1',
                      events: {
                        click: () => {
                          this.setState('counter', this.getState('counter') - 1);
                        },
                      },
                      styles: {
                        backgroundColor: 'hsl(211, 75%, 60%)',
                        color: 'white',
                        padding: '0.5rem 0.75rem',
                        border: 'none',
                        borderRadius: '5px',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        margin: '0.25rem 0.5rem',
                      },
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        new InfoGrid(),
      ],
    });
  }
}
