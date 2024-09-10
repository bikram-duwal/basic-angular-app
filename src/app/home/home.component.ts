import { Component, OnInit } from '@angular/core';
import { Post, RandomAPIService } from '../_services/random-api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: RandomAPIService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data: Post[]) => { 
      this.posts = data; 
      console.log(this.posts) 
    });
  }

}
