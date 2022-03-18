import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'food-shared-toolbar-component',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() title = '';
  @Output() clicked = new EventEmitter<MouseEvent>();
  isShown = false;

  ngOnInit(): void {
    this.isShown = this.clicked.observers.length > 0;
  }

  onClick(): void {
    this.clicked.emit();
  }
}
