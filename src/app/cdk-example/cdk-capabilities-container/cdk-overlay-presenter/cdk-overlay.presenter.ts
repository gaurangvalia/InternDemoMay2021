import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable } from '@angular/core';
import { OverlayDemoComponent } from '../cdk-overlay-presentation/overlay-demo/overlay-demo.component';

@Injectable()
export class CdkOverlayPresenter {

    constructor(
        public overlay: Overlay,
    ) {
        // let myComponentRef: ComponentRef < OverlayDemoComponent> = new ComponentRef()
    }

    public openOverlayComponent(buttonCDKRef: HTMLButtonElement) {
        const componentRef: ComponentRef<OverlayDemoComponent> = this.overlayConfig(buttonCDKRef);

    }

    /** Overlays config for the open Add and edit time */
    public overlayConfig(cdkAttchElement: HTMLButtonElement): ComponentRef<OverlayDemoComponent> {
        const overlayConfig: OverlayConfig = new OverlayConfig();
        overlayConfig.positionStrategy = this.overlay.position().flexibleConnectedTo(cdkAttchElement)
            .withPositions(
                [
                    {
                        panelClass: 'top-right',
                        originX: 'end',
                        originY: 'bottom',
                        overlayX: 'end',
                        overlayY: 'top',
                        offsetX: 0,
                        offsetY: 10
                    }
                ]);
        overlayConfig.hasBackdrop = true;
        overlayConfig.backdropClass = '';
        let overlayRef = this.overlay.create(overlayConfig);
        const portal: ComponentPortal<OverlayDemoComponent>
            = new ComponentPortal<OverlayDemoComponent>(OverlayDemoComponent, null);
        const componentRef: ComponentRef<OverlayDemoComponent> = overlayRef.attach(portal);
        componentRef.instance.myName= 'pratik';
        
        componentRef.instance.passData.subscribe((res:any)=>{
            console.log(res);
        });

        overlayRef.backdropClick().subscribe(() => {
            overlayRef.detach();
        });
        return componentRef;
    }
}