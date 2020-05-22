import {Breakpoints, BreakpointObserver} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";
import {Observable} from "rxjs";

export const sideMarginMobile: string = '16px';
export const sideMarginDesktop: string = '32px';

export class Globals {

  private handset$ = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  private handset: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.handset$.subscribe(event => this.handset = event);
  }

  public isHandset(): boolean {
    return this.handset;
  }

  public getHandset(): Observable<boolean> {
    return this.handset$;
  }

  public getSideMargin(): string {
    return this.isHandset() ? sideMarginMobile : sideMarginDesktop;
  }
}
