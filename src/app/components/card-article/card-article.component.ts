import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-article',
  templateUrl: './card-article.component.html',
  styleUrls: ['./card-article.component.css'],
})
export class CardArticleComponent implements OnInit {
  @Input() img: string = '';
  @Input() title: string = '';
  @Input() description: string = '';

  constructor() {}

  ngOnInit(): void {}
}
