import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CdkDragAndDropPresenter } from '../cdk-drag-and-drop-presenter/cdk-drag-and-drop.presenter';
// ---------------------------------- //


@Component({
  selector: 'app-cdk-drag-and-drop-ui',
  templateUrl: './cdk-drag-and-drop.presentation.html',
  styleUrls: ['./cdk-drag-and-drop.presentation.scss'],
  viewProviders: [CdkDragAndDropPresenter],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdkDragAndDropPresentationComponent  {
  constructor() {}

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep',
    'Walk Dog',
    'Stretch',
    'Code Stuff',
    'Drag Stuff',
    'Drop Stuff',
    'Run',
    'Walk'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  // public drop(event: CdkDragDrop<string[]>) {
  //   debugger
  //     moveItemInArray(this.todo, event.previousIndex, event.currentIndex);
  // }

  public drop(event: CdkDragDrop<string[]>) {
    debugger
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}