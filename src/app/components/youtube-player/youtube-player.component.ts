import { Component, Input, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

declare var YT: any;

@Component({
  selector: 'youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() videoId!: string;
  @ViewChild('playerContainer', { static: false }) playerContainer!: ElementRef;

  private player: any;

  ngOnInit(): void {
    if ((window as any).YT && (window as any).YT.Player) {
      // Already loaded
      return;
    }

    // Only assign handler once
    if (!(window as any).onYouTubeIframeAPIReady) {
      (window as any).onYouTubeIframeAPIReady = () => {
        console.log("YouTube IFrame API ready");
      };

      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
    }
  }

  ngAfterViewInit(): void {
    const checkReady = () => {
      if ((window as any).YT && (window as any).YT.Player) {
        this.createPlayer();
      } else {
        setTimeout(checkReady, 100);
      }
    };

    checkReady();
  }


  createPlayer(): void {
    this.player = new YT.Player(this.playerContainer.nativeElement, {
      height: '100%',
      width: '100%',
      videoId: this.videoId,
      events: {
        'onReady': () => console.log('YouTube player ready'),
        'onStateChange': (event: any) => console.log('Player state:', event.data)
      }
    });
  }

  ngOnDestroy(): void {
    if (this.player) {
      this.player.destroy();
    }
  }
}
