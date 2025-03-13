import { FSComponent, DisplayComponent, VNode, MapSystemBuilder, ComponentProps, MapComponentProps, SynVisProps, Subscribable, SynVisComponent, BingComponent, Subject, ArraySubject, ReadonlyFloat64Array } from '@microsoft/msfs-sdk';
import './MyInstrument.css';

interface MyComponentProps extends ComponentProps {
  text: Subscribable<string>;
}

export class MyComponent extends DisplayComponent<any> {
  // public render(): VNode {
  //   return (
  //     <>
  //       <div class='my-component'>Synthetic vision goes here.</div>
  //       <div class='my-component2'>Navigation map goes here.</div>
  //     </>
  //   );
  // }

  private containerRef = FSComponent.createRef<HTMLDivElement>();

  private float64Array = new Float64Array([800, 800]);
  private resolution = Subject.create<ReadonlyFloat64Array>(this.float64Array);

  private createSVTEarthColors(): number[] {
    return BingComponent.createEarthColorsArray('#000049', [
      {
        elev: 0,
        color: '#0c2e04'
      },
      {
        elev: 500,
        color: '#113300'
      },
      {
        elev: 2000,
        color: '#463507'
      },
      {
        elev: 3000,
        color: '#5c421f'
      },
      {
        elev: 6000,
        color: '#50331b'
      },
      {
        elev: 8000,
        color: '#512d15'
      },
      {
        elev: 10500,
        color: '#673118'
      },
      {
        elev: 27000,
        color: '#4d4d4d'
      },
      {
        elev: 29000,
        color: '#666666'
      }
    ]);
  }

  public render(): VNode {
    return (
      <div class="synthetic-vision" ref={this.containerRef}>
        <SynVisComponent
          bingId={"EEE145"}
          resolution={this.resolution}
          earthColors={ArraySubject.create(this.createSVTEarthColors())}
          skyColor={Subject.create(BingComponent.hexaToRGBColor('0033E6'))}
        />
        {/* <HorizonCompass ref={this.horizonRef} /> */}
      </div>
    );
  }
}

