import { Injectable } from '@angular/core';
import { AddblogService } from './addblog.service';
import { HttpClient } from '@angular/common/http';
import { comment } from '../model/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private blgs:AddblogService,private http:HttpClient) { }
  addComments(info:comment)
  {
    return this.http.post(`http://20.69.113.185:8085/dashboard/addComment`,info)
  }
  showComments(id:string)
  {
    return this.http.get(`http://20.69.113.185:8085/dashboard/getComments/${id}`)
  }
}