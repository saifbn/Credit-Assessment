import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-public',
  templateUrl: './result-public.component.html',
  styleUrls: ['./result-public.component.css']
})
export class ResultPublicComponent implements OnInit {
  risk: number = window.history.state.val_ret;
  interest: number = 0.08 ;

  verdict: boolean = true; 
  loading = false;
  constructor() { 
    
    
  }

  ngOnInit(): void {


  }

}
