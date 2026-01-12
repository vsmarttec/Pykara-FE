
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-lets-talk-project',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './lets-talk-project.html',
  styleUrls: ['./lets-talk-project.css']
})
export class LetsTalkProject implements OnInit {
  title: string = 'Let\'s Talk About Your Project';
  subtitle: string = 'If you have an idea, a product, or an existing system that needs improvement, we are ready to help.';

  projectForm: FormGroup;
  submitted = false;

  timelineOptions = [
    { value: 'immediate', label: 'Immediate Start' },
    { value: '1-3months', label: 'Within 1-3 Months' },
    { value: '3-6months', label: 'Within 3-6 Months' },
    { value: 'exploring', label: 'Just Exploring Options' }
  ];

  challenges = [
    { id: 'performance', label: 'Performance Issues' },
    { id: 'scalability', label: 'Scalability Concerns' },
    { id: 'modernization', label: 'System Modernization' },
    { id: 'new-features', label: 'Adding New Features' },
    { id: 'team', label: 'Need Development Team' },
    { id: 'planning', label: 'Project Planning' }
  ];

  constructor(private fb: FormBuilder) {
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      projectType: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(20)]],
      timeline: ['', Validators.required],
      challenges: [[]],
      budgetRange: [''],
      contactMethod: ['email', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.projectForm.valid) {
      // In a real app, you would send this data to your backend
      console.log('Form submitted:', this.projectForm.value);
      alert('Thank you for your submission! We will contact you within 24 hours.');
      this.projectForm.reset();
      this.submitted = false;
    }
  }

  toggleChallenge(challengeId: string): void {
    const currentChallenges = this.projectForm.get('challenges')?.value || [];
    const index = currentChallenges.indexOf(challengeId);

    if (index === -1) {
      currentChallenges.push(challengeId);
    } else {
      currentChallenges.splice(index, 1);
    }

    this.projectForm.patchValue({ challenges: currentChallenges });
  }
}