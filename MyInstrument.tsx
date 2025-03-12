/// <reference types="@microsoft/msfs-types/Pages/VCockpit/Core/VCockpit" />

import { FSComponent, ReadonlyFloat64Array, Subject, SynVisComponent, SynVisProps } from '@microsoft/msfs-sdk';
import { MyComponent } from './MyComponent';

class MyInstrument extends BaseInstrument {
  get templateID(): string {
    return 'MyInstrument';
  }

  public connectedCallback(): void {
    super.connectedCallback();

    const text = Subject.create<string>('Hello MSFS!');
    const float64Array = new Float64Array(5);
    float64Array[0] = 100;
    float64Array[1] = 200;
    float64Array[2] = 300;
    float64Array[3] = 800;
    float64Array[4] = 1000;
    const resolution = Subject.create<ReadonlyFloat64Array>(float64Array);
    const skyColor = Subject.create<number>(100);
    FSComponent.render(<MyComponent text={text} />, document.getElementById('InstrumentContent'));
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