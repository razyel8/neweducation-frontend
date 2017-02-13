/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SondazeComponent } from './sondaze.component';

describe('SondazeComponent', () => {
  let component: SondazeComponent;
  let fixture: ComponentFixture<SondazeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SondazeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SondazeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
