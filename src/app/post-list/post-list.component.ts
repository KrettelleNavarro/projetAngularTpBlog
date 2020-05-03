import { Component, Input, OnInit } from '@angular/core';
import { Emotion } from '../models/emotion';
import { EmotionService } from '../emotion.service'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Emotion[]

  constructor(private emotionService: EmotionService) { }

  ngOnInit() {
    this.getEmotion()
  }

  getEmotion ( ){
    this.emotionService.getEmotions()
    .subscribe(emotions => this.posts = emotions);
  }

}
