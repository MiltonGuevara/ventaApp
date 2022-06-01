import { Component, OnInit } from '@angular/core';
import { JobService, TopLevel } from 'src/app/services/job.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  jobs: TopLevel[] = [];

  constructor( private joService: JobService) { }

  ngOnInit(): void {
    this.joService.getJobs().subscribe( respuesta =>{
      console.log(respuesta);
      this.jobs = respuesta;

    });
  }

}
