
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-hero-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-hero-section.html',
  styleUrls: ['./contact-hero-section.css']
})
export class ContactHeroSection implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$')]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        control?.markAsTouched();
      });
      return;
    }

    this.isSubmitting = true;

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', this.contactForm.value);
      this.submitted = true;
      this.isSubmitting = false;
      this.contactForm.reset();

      // Show success message
      alert('We will review your message and respond within one business day..');

      // Reset submitted status after 5 seconds
      setTimeout(() => {
        this.submitted = false;
      }, 5000);
    }, 1500);
  }

  // Convenience getter for easy access to form fields
  get f() {
    return this.contactForm.controls;
  }
}