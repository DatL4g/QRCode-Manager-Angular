import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NetworkContentComponent} from './network-content.component';

describe('NetworkContentComponent', () => {
  let component: NetworkContentComponent;
  let fixture: ComponentFixture<NetworkContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
