
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { WelcomePykaraData } from '../../welcome-pykara/welcomepykara';
import { Eye, Home, LucideAngularModule, Play, Share2, Share2Icon, Video, VideoIcon } from 'lucide-angular';


interface Projectprop {
  id: number;
  title: string;
  videoUrl: string;
  category?: string;
}

interface Filter {
  id: string;
  name: string;
}

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule,LucideAngularModule],
  templateUrl: './project.html',
  styleUrls: ['./project.css']
})
export class Project implements OnInit {
  EyeIcon = Eye;
  VideoIcon = Video;
  PlayIcon = Play;
  ShareIcon = Share2;
  HomeIcon = Home;
  video=VideoIcon;
  share2=Share2Icon
  portfolioProjects: Projectprop[] = [
    { id: 1, title: "Sample 1", videoUrl: "https://youtu.be/BSYn17P3B8A" },
    { id: 2, title: "Sample 2", videoUrl: "https://youtu.be/6_7xYBb1VcI" },
    { id: 3, title: "Sample 3", videoUrl: "https://youtu.be/CE1fQUak0lo" },
    { id: 4, title: "Sample 4", videoUrl: "https://youtu.be/wZ6SWTGoekI" },
    { id: 5, title: "Sample 5", videoUrl: "https://youtu.be/vGHSxNHa2VY" },
    { id: 6, title: "Sample 6", videoUrl: "https://youtu.be/v-Q7wT9h4vo" },
    { id: 7, title: "Sample 7", videoUrl: "https://youtu.be/KNnRCThBSxc" },
    { id: 8, title: "Sample 8", videoUrl: "https://youtu.be/pFN9yBnkXTM" },
    { id: 9, title: "Sample 9", videoUrl: "https://youtu.be/6pY9ikkXAJw" },
    { id: 10, title: "Sample 10", videoUrl: "https://youtu.be/DDiLHizVIj0" },
    { id: 11, title: "Sample 11", videoUrl: "https://youtu.be/_UB9AdNjoHo" },
    { id: 12, title: "Sample 12", videoUrl: "https://youtu.be/Hyxqoc1o_1Q" },
    { id: 13, title: "Sample 13", videoUrl: "https://youtu.be/0WzQCR7MOTc" },
    { id: 14, title: "Sample 14", videoUrl: "https://youtu.be/K9Xn-oVmsZs" },
    { id: 15, title: "Sample 15", videoUrl: "https://youtu.be/1KjamOJUhNo" },
    { id: 16, title: "Sample 16", videoUrl: "https://youtu.be/JnKDwGZqOkE" },
    { id: 17, title: "Sample 17", videoUrl: "https://youtu.be/0WzQCR7MOTc" },
    { id: 18, title: "Sample 18", videoUrl: "https://youtu.be/v-Q7wT9h4vo" },
    { id: 19, title: "Sample 19", videoUrl: "https://youtu.be/_UB9AdNjoHo" },
    { id: 20, title: "Sample 20", videoUrl: "https://youtu.be/1KjamOJUhNo" },
    { id: 21, title: "Sample 21", videoUrl: "https://youtu.be/vOODTbJNnF0" },
    { id: 22, title: "Sample 22", videoUrl: "https://youtu.be/K9Xn-oVmsZs" },
    { id: 23, title: "Sample 23", videoUrl: "https://youtu.be/yvCoBaM5cl8" },
    { id: 24, title: "Sample 24", videoUrl: "https://youtu.be/wiG4tbhsoVA" }
  ];
  getYouTubeThumbnail(url: string): string {
    if (!url) return '';

    const regExp =
      /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);

    return match && match[1]
      ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`
      : '';
  }
  ProjectsdetailsAi = WelcomePykaraData

  filters: Filter[] = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    // { id: 'ai', name: 'AI / ML' },
    { id: 'mobile', name: 'Mobile Apps' }
  ];

  activeFilter = 'all';
  visibleProjects = 8;
  selectedVideo: Projectprop | null = null;
  isButtonDisabled = false
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.portfolioProjects = this.portfolioProjects.map((p, i) => ({
      ...p,
      category: ['web', 'ai', 'mobile'][i % 3]
    }));
  }

  getFilteredProjects(): Projectprop[] {
    let list = [...this.portfolioProjects];

    if (this.activeFilter !== 'all') {
      list = list.filter(p => p.category === this.activeFilter);
    }

    return list.slice(0, this.visibleProjects);
  }

  setActiveFilter(id: string): void {
    this.activeFilter = id;
    this.visibleProjects = 8;
  }

  loadMore(): void {
    this.visibleProjects += 8;
  }

  watchVideo(project: Projectprop): void {
    this.selectedVideo = project;
  }

  closeVideo(): void {
    this.selectedVideo = null;
  }

  getSafeUrl(url: string): SafeResourceUrl {
    const videoId = this.extractVideoId(url);
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}?autoplay=1`
    );
  }

  private extractVideoId(url: string): string {
    if (url.includes('youtu.be')) {
      return url.split('youtu.be/')[1].split('?')[0];
    }
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : '';
  }

  shareProject(project: Projectprop): void {
    console.log(project, "project!!")
    if (navigator.share) {
      navigator.share({
        title: project.title,
        url: project.videoUrl
      });
    } else {

      console.log(project.videoUrl, "project.videoUrl")
      window.open(project.videoUrl, '_blank');
    }
  }

  viewAllProjects(): void {
    this.activeFilter = 'all';
    this.visibleProjects = this.portfolioProjects.length;
  }

  contactUs(): void {
    window.location.href = "/contact-us"
  }
}
