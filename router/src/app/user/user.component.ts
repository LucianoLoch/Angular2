import { Component, OnDestroy } from '@angular/core';

import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnDestroy {
  id: string;

  private subscription: Subscription;

  constructor(private router: Router,private activatedRoute: ActivatedRoute){
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
      );

  }

  onNavigate(){
    this.router.navigate(['/'], {queryParams: {'analytics': 100}});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
 