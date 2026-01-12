import { Component } from '@angular/core';
import { ArrowRight, CheckCircle, LucideAngularModule, MessageCircle, Target, User, Users, Wrench } from 'lucide-angular';

@Component({
  selector: 'app-engagement-models',
  imports: [LucideAngularModule],
  templateUrl: './engagement-models.html',
  styleUrl: './engagement-models.css',
})
export class EngagementModels {
user=User
arrowright=ArrowRight
checkcircle=CheckCircle
users=Users
target=Target
wrench=Wrench
messagecircle=MessageCircle
}
