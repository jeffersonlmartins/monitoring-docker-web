import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UploadFile } from 'ng-zorro-antd/upload';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  private id;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private commentService: CommentService
  ) {
    this.id = this.route.snapshot.params.id;

    this.form = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      comment: [null, [Validators.required]]
    });
  }

  ngOnInit() {
    if (this.id) {
      this.commentService.get(this.id).subscribe((response: any) => {
        if (response.success) {
          const data = response.data;
          this.form.setValue({
            name: data.name,
            email: data.email,
            comment: data.comment
          });
        } else {
          alert('Ocorreu um erro ao obter os dados');
        }
      });
    }
  }

  submit() {
    // tslint:disable-next-line:forin
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }

    const data = this.form.value;

    if (this.form.valid) {
      if (this.id) {
        this.commentService.put(this.id, data).subscribe((response: any) => {
          if (response.success) {
            this.router.navigateByUrl('/');
          } else {
            alert('Ocorreu um erro ao salvar');
          }
        });
      } else {
        this.commentService.post(data).subscribe((response: any) => {
          if (response.success) {
            this.router.navigateByUrl('/');
          } else {
            alert('Ocorreu um erro ao salvar');
          }
        });
      }
    }
  }

}
