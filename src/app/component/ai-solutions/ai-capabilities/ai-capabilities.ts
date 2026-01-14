import { Component } from '@angular/core';
import { capabilities } from './ai-capabilities-Data';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Zap } from 'lucide-angular';

@Component({
  selector: 'app-ai-capabilities',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './ai-capabilities.html',
  styleUrl: './ai-capabilities.css',
})
export class AiCapabilities {
  zap=Zap
  title = 'Intelligent Application Capabilities';
  capabilities = capabilities
}
