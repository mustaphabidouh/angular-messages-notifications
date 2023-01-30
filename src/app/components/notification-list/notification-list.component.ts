import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

import { Subscription } from 'rxjs';

import {} from '../../services/message-bus.service';

export enum NotificationType {
  Info = 'info',
  Alert = 'alert',
}

export interface Notification {
  title: string;
  description: string;
  type: NotificationType;
}

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css'],
})
export class NotificationListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
