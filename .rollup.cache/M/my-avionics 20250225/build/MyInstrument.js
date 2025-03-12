/// <reference types="@microsoft/msfs-types/Pages/VCockpit/Core/VCockpit" />
import { FSComponent, Subject } from '@microsoft/msfs-sdk';
import { MyComponent } from './MyComponent';
class MyInstrument extends BaseInstrument {
    get templateID() {
        return 'MyInstrument';
    }
    connectedCallback() {
        super.connectedCallback();
        const text = Subject.create('Hello MSFS!');
        const float64Array = new Float64Array(5);
        float64Array[0] = 100;
        float64Array[1] = 200;
        float64Array[2] = 300;
        float64Array[3] = 800;
        float64Array[4] = 1000;
        const resolution = Subject.create(float64Array);
        const skyColor = Subject.create(100);
        FSComponent.render(FSComponent.buildComponent(MyComponent, { text: text }), document.getElementById('InstrumentContent'));
    }
    Init() {
        super.Init();
        console.log("Init");
    }
    Update() {
        super.Update();
    }
}
registerInstrument('my-instrument', MyInstrument);
//# sourceMappingURL=MyInstrument.js.map