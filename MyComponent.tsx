import { FSComponent, DisplayComponent, VNode, MapSystemBuilder, ComponentProps, MapComponentProps, SynVisProps, Subscribable, SynVisComponent } from '@microsoft/msfs-sdk';
import './MyInstrument.css';

interface MyComponentProps extends ComponentProps {
  text: Subscribable<string>;
}

export class MyComponent extends DisplayComponent<any> {
  public render(): VNode {
    return (
      <>
        <div class='my-component'>Synthetic vision goes here.</div>
        <div class='my-component2'>Navigation map goes here.</div>
      </>
    );
  }
}