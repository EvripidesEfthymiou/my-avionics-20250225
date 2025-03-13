/// <reference types="@microsoft/msfs-types/Pages/VCockpit/Core/VCockpit" />

import { FSComponent, ReadonlyFloat64Array, Subject, SynVisComponent, SynVisProps } from '@microsoft/msfs-sdk';
import { MyComponent } from './MyComponent';

class MyInstrument extends BaseInstrument {
  get templateID(): string {
    return 'MyInstrument';
  }

  public connectedCallback(): void {
    super.connectedCallback();

    FSComponent.render(<MyComponent />, document.getElementById('InstrumentContent'));
  }

  protected Init(): void {
    super.Init();
    console.log("Init");
  }

  public Update(): void {
    super.Update();
  }
}

registerInstrument('my-instrument', MyInstrument);