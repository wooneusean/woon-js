import Woon, { Component, w } from '../src/Woon';

class NavBar extends Component {
  build(): HTMLElement {
    const { onMove } = this.props;

    return w({
      tag: 'div',
      styles: {
        fontWeight: 'bold',
        borderRadius: '10px',
        marginBottom: '1rem',
        width: '100%',
        padding: '0.5rem',
        fontSize: '1.25rem',
        userSelect: 'none',
        cursor: 'move',
        background: 'linear-gradient(to top, hsl(0, 0%, 15%), hsl(90, 0%, 35%))',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      events: {
        mousedown: (e: MouseEvent, element: HTMLElement) => {
          const { offsetHeight, offsetWidth } = element;
          const x = e.clientX - element.getBoundingClientRect().left;
          const y = e.clientY - element.getBoundingClientRect().top;

          const moveAt = (e: MouseEvent) => {
            let left = e.clientX - x;
            let top = e.clientY - y;

            if (left < 0) {
              left = 0;
            }
            if (top < 0) {
              top = 0;
            }
            if (left + offsetWidth > window.innerWidth) {
              left = window.innerWidth - offsetWidth;
            }
            if (top + offsetHeight > window.innerHeight) {
              top = window.innerHeight - offsetHeight;
            }
            onMove(left, top);
          };

          moveAt(e);

          document.onmousemove = (e) => {
            moveAt(e);
          };

          document.onmouseup = () => {
            document.onmousemove = null;
          };
        },
      },
      children: [
        w({
          tag: 'span',
          styles: {
            fontSize: '1.25rem',
            color: 'white',
            fontWeight: 'bold',
            padding: '0.5rem',
          },
          text: 'Menu',
        }),
      ],
    });
  }
}

class MenuBody extends Component {
  build(): HTMLElement {
    const { numElements } = this.props;
    return w({
      tag: 'div',
      styles: {
        minWidth: '450px',
        maxWidth: '90vw',
        minHeight: '350px',
        maxHeight: '85vh',
        borderRadius: '10px',
        backgroundColor: 'hsl(0, 0%, 20%)',
        padding: '1rem',
      },
      children: [
        ...Array(numElements)
          .fill(null)
          .map((_, i) => {
            return w({
              tag: 'div',
              text: `item ${i + 1}`,
              events: { click: () => console.log(`clicked ${i + 1}`) },
            });
          }),
        w({
          tag: 'button',
          text: 'previous page',
          events: {
            click: () => {
              this.props.onNavChange(this.props.currentPage - 1);
            },
          },
        }),
        w({
          tag: 'button',
          text: 'next page',
          events: {
            click: () => {
              this.props.onNavChange(this.props.currentPage + 1);
            },
          },
        }),
      ],
    });
  }
}

class HomePage extends Component {
  getBody(): Component {
    switch (this.getState('pageNum')) {
      case 1:
        return new MenuBody({
          numElements: 10,
          currentPage: this.getState('pageNum'),
          onNavChange: (newPage: number) => {
            this.setState('pageNum', newPage);
          },
        });

      case 2:
        return new MenuBody({
          numElements: 20,
          currentPage: this.getState('pageNum'),
          onNavChange: (newPage: number) => {
            this.setState('pageNum', newPage);
          },
        });

      case 3:
        return new MenuBody({
          numElements: 30,
          currentPage: this.getState('pageNum'),
          onNavChange: (newPage: number) => {
            this.setState('pageNum', newPage);
          },
        });

      case 0:
      default:
        return new MenuBody({
          numElements: 0,
          currentPage: this.getState('pageNum'),
          onNavChange: (newPage: number) => {
            this.setState('pageNum', newPage);
          },
        });
    }
  }

  init() {
    this.setState('position', { left: 25, top: 25 });
    this.setState('pageNum', 0);
  }

  override build(): HTMLElement {
    const { left, top } = this.getState('position');

    return w({
      tag: 'div',
      styles: {
        fontFamily: 'Segoe UI',
        color: 'white',
        zIndex: '9999',
        flexDirection: 'column',
        position: 'fixed',
        left: `${left}px`,
        top: `${top}px`,
      },
      children: [
        new NavBar({
          onMove: (left: number, top: number) => {
            this.setState('position', { left, top });
          },
        }),
        this.getBody(),
      ],
    });
  }
}

const app = new Woon(document.querySelector('#app'), new HomePage());
