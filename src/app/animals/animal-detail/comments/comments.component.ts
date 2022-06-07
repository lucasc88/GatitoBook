import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, switchMap, tap } from 'rxjs';
import { Comments } from './comments';
import { CommentsService } from './comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() id!: number
  comments$!: Observable<Comments>;
  commentForm!: FormGroup;

  constructor(private commentsService: CommentsService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.comments$ = this.commentsService.searchComment(this.id);
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.maxLength(300)]
    });
  }

  save() {
    const comment = this.commentForm.get('comment')?.value ?? '';
    console.log("###################### " + comment);
    this.comments$ = this.commentsService.addComments(this.id, comment)
      .pipe( //this pipe is to change the flow from addComments to searchComment using switchMap
        switchMap(() => this.commentsService.searchComment(this.id)),
        tap(() => { // tap does not affect the flow, it's just to reset the form and print the alert
          this.commentForm.reset();
          alert('Comment has been saved');
        })
      );
  }

}
