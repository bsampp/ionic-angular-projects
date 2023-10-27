import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OmdbapiService } from 'src/app/model/services/omdbapi.service';

@Component({
  selector: 'app-filmes-detalhes',
  templateUrl: './filmes-detalhes.page.html',
  styleUrls: ['./filmes-detalhes.page.scss'],
})
export class FilmesDetalhesPage implements OnInit {
  info : any;

  constructor(private actRoute : ActivatedRoute, private omdbApi : OmdbapiService) { }

  ngOnInit() {
    let id  = this.actRoute.snapshot.paramMap.get('id');
    this.omdbApi.getById(id).subscribe(result => {this.info=result});
  }

  openUrl(){
    window.open(this.info.Website, '_blank');
  }

}
