import { Component, OnInit } from '@angular/core';
import { HttpSService } from '../services/http-s.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
})
export class HttpComponent implements OnInit {
  getUsers: any[] = [];
  postSome: any[];
  toggle: boolean = false;
  togglePost: boolean = false;
  obj: Object;

  constructor(private request: HttpSService) {
    this.request = request;
  }

  ngOnInit(): void {}

  getClick() {
    this.request.getPost().subscribe((data) => (this.getUsers = data));
    this.toggle = !this.toggle;
  }

  postRequest() {
    this.request.postReq().subscribe((data) => (this.postSome = data));
    console.log(this.postSome);
    this.togglePost = !this.togglePost;
  }

  deletePost() {
    this.request.deletePost().subscribe(() => {
      this.postSome = [];
    });
  }
}
