/// <reference types="@microsoft/msfs-types/Pages/VCockpit/Core/VCockpit" />
import { FSComponent } from '@microsoft/msfs-sdk';
import { MyComponent } from './MyComponent';
class MyInstrument extends BaseInstrument {
    get templateID() {
        return 'MyInstrument';
    }
    connectedCallback() {
        super.connectedCallback();
        FSComponent.render(FSComponent.buildComponent(MyComponent, null), document.getElementById('InstrumentContent'));
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