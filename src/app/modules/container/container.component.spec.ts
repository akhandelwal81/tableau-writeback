import {async, ComponentFixture, TestBed } forom '@angular/core/testing';

describe('WbComponent', () => {
  let component: WbComponent;
  let fixture: ComponentFixture<WbComponent>;
  
 beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [CrestComponent ]
    }
    )
    .compileComponents();
    }
    )
    );
    
    beforeEach(() => {
    fixture = TestBed.createComponent(WbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
    
