import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public comments = [];

  constructor(private router: Router, private commentService: CommentService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.commentService.all().subscribe((response: any) => {
      if (response.success) {
        this.comments = response.data;
      } else {
        alert('Ocorreu um erro ao obter dados');
      }
    });
  }

  editar(comment) {
    this.router.navigate(['/edit', comment.id]);
  }

  remover(comment) {
    this.commentService.delete(comment.id).subscribe((response: any) => {
      if (response.success) {
        this.getData();
      } else {
        alert('Ocorreu um erro ao obter dados');
      }
    })
  }
}
