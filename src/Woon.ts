export interface ComponentProps extends Partial<any> {
  children?: Component[];
}

export abstract class Component {
  static _UID: number = 0;
  protected UID: number;
  protected props: any = {};
  private onChange = () => window['__woon__'].render();
  private getCache = () => window['__woon__'].cache[this.UID] || {};
  private setCache = (cache: any) => (window['__woon__'].cache[this.UID] = cache);

  constructor(props?: any) {
    this.props = props;
    this.UID = Component._UID++;

    this.init();
  }

  init(): void {}

  abstract build(): HTMLElement;

  protected newState(key: string, initialValue: any): void {
    if (this.getCache()[key] != null) return;

    this.setCache({ ...this.getCache(), [key]: initialValue });
  }

  protected setState(key: string, value: any): void {
    if (this.getState(key) === value) return;

    this.setCache({ ...this.getCache(), [key]: value });

    this.onChange();
  }

  protected getState(key: string): any {
    return this.getCache()[key];
  }
}

declare global {
  interface Window {
    __woon__: any;
  }
}
window['__woon__'] = {};
export default class Woon {
  component: Component;
  entry: HTMLElement;
  cache: { [key: number]: any } = {};

  constructor(entry: HTMLElement, component: Component) {
    this.entry = entry;
    this.component = component;

    window['__woon__'] = this;

    return this.render();
  }

  render() {
    Component._UID = 0;
    while (this.entry.firstChild) {
      this.entry.removeChild(this.entry.firstChild);
    }

    this.entry.appendChild(this.component.build());
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
  const element = document.createElement(tag || 'div');

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
