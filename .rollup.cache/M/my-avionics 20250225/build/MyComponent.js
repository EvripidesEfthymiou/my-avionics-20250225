import { FSComponent, DisplayComponent } from '@microsoft/msfs-sdk';
import './MyInstrument.css';
export class MyComponent extends DisplayComponent {
    render() {
        return (FSComponent.buildComponent(FSComponent.Fragment, null,
            FSComponent.buildComponent("div", { class: 'my-component' }, "Synthetic vision goes here."),
            FSComponent.buildComponent("div", { class: 'my-component2' }, "Navigation map goes here.")));
    }
}
//# sourceMappingURL=MyComponent.js.map