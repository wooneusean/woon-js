import { Component, w } from '../Woon';

export default class NavBar extends Component {
  build() {
    return w({
      tag: 'nav',
      styles: { width: '100%', backgroundColor: 'hsl(211, 100%, 56%)', color: 'hsl(0, 0%, 96%)' },
      children: [
        w({
          tag: 'nav',
          styles: {
            width: '70%',
            maxWidth: '1200px',
            padding: '2rem',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
          children: [
            w({
              tag: 'h1',
              styles: {
                textDecoration: 'none',
                fontSize: '1.5em',
                fontWeight: 'bold',
                textAlign: 'center',
                padding: '0px',
                margin: '0px',
                border: '0px',
              },
              text: this.props.title,
            }),
          ],
        }),
      ],
    });
  }
}
