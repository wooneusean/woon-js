export interface ComponentProps extends Partial<any> {
  children?: Component[];
}

export abstract class Component {
  protected props: any = {};
  private state: any = {};
  private onChange: () => void = () => {};

  constructor(props?: any) {
    this.props = props;
    this.state['props'] = props;

    this.init();
  }

  init(): void {}

  abstract build(): HTMLElement;

  setState(key: string, value: any): any {
    this.state = { ...this.state, [key]: value };
    this.onChange();
    return this.state[key];
  }

  getState(key: string): any {
    return this.state[key];
  }
}

export default class Woon {
  component: Component;
  entry: HTMLElement;
  mountedElement: HTMLElement;

  constructor(entry: HTMLElement, component: Component) {
    this.entry = entry;
    this.component = component;

    this.mountedElement = document.createElement('div');
    this.entry.appendChild(this.mountedElement);

    Object.defineProperty(component, 'onChange', {
      value: () => {
        this.render();
      },
      writable: false,
    });
    return this.render();
  }

  render() {
    while (this.mountedElement.firstChild) {
      this.mountedElement.removeChild(this.mountedElement.firstChild);
    }

    this.mountedElement.appendChild(this.component.build());
    return this;
  }
}

interface ComponentBuilderProps {
  tag: string;
  attributes: { [key: string]: string };
  styles: Partial<CSSStyleDeclaration>;
  text: string;
  children: (HTMLElement | Component)[];
  events: { [key: string]: (event: Event, element: HTMLElement) => void };
}

export function w({ tag, attributes, styles, text, children, events }: Partial<ComponentBuilderProps>): HTMLElement {
  const element = document.createElement(tag);

  if (text != null) {
    element.appendChild(document.createTextNode(text));
  }

  if (attributes != null) {
    Object.keys(attributes).forEach((key) => {
      element.setAttribute(key, attributes[key]);
    });
  }

  if (styles != null) {
    Object.keys(styles).forEach((key: any) => {
      element.style[key] = styles[key];
    });
  }

  if (children != null) {
    children.forEach((child) => {
      if (child instanceof HTMLElement) {
        element.appendChild(child);
      } else if (child instanceof Component) {
        element.appendChild(child.build());
      }
    });
  }

  if (events != null) {
    Object.keys(events).forEach((key) => {
      element.addEventListener(key, (e) => events[key](e, element));
    });
  }

  return element;
}

// Premade Components
interface HeadingComponentProps extends ComponentProps {
  level: number;
  text: string;
}

export class Heading extends Component {
  protected props: HeadingComponentProps;

  constructor(props: HeadingComponentProps) {
    super(props);
  }

  build(): HTMLElement {
    return w({
      tag: `h${this.props.level}`,
      text: this.props.text,
    });
  }
}
