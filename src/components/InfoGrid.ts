import { Component, w } from '../Woon';

export default class InfoGrid extends Component {
  build() {
    return w({
      tag: 'div',
      styles: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      children: [
        w({
          tag: 'a',
          styles: {
            backgroundColor: 'hsl(211, 80%, 58%)',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            color: '#fff',
            textDecoration: 'none',
          },
          attributes: { href: 'https://github.com/euseanwoon2016/woon-js' },
          children: [
            w({
              tag: 'div',
              text: 'View on GitHub',
              styles: { fontSize: '2rem', fontWeight: 'bold' },
            }),
          ],
        }),
        w({
          tag: 'a',
          styles: {
            backgroundColor: 'hsl(211, 80%, 47%)',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            color: '#fff',
            textDecoration: 'none',
          },
          attributes: { href: 'https://github.com/euseanwoon2016/woon-js/wiki' },
          children: [
            w({
              tag: 'div',
              text: 'View Wiki',
              styles: { fontSize: '2rem', fontWeight: 'bold' },
            }),
          ],
        }),
      ],
    });
  }
}
