import { Component } from '@angular/core';

declare var loadStickySidebar: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  ngOnInit(): void {
  }
  
  ngAfterViewInit() {
    // call the externaljs functions
    loadStickySidebar();
  }

  title = 'devs';

  timelineData_en = [
    {
      type: 'position',
      company: {
        name: 'First Decision',
        website: 'https://www.firstdecision.com.br'
      },
      title: 'Senior Fullstack Developer',
      technologies: ['angular', 'laravel', 'vue.js', 'symphony', 'postgres', 'jenkins', 'rancher'],
      responsibilities: [
        'Developed many modules of a governamental system that control taxes and incomes of a public fund;',
        'Implemented backend functions using Laravel;',
        'Used Angular to develop frontend interaction, using synchronous and asynchronous functions.'
      ],
      dates: {
        start: new Date(2020, 2),
        end: null
      }
    },
    {
      type: 'position',
      company: {
        name: 'Sebrae Bahia',
        website: 'https://www.sebraeatende.com.br/'
      },
      title: 'Tech Lead',
      technologies: ['scrum', 'agile', 'pmbok', 'php', 'jquery', 'sql server', 'mysql', 'kettle', 'qlikview'],
      responsibilities: [
        'Tech Lead, software project management, contracts management and database administration of large scale systems;',
        'Support, analysis and development of corporate systems, e-commerces and websites.',
      ],
      dates: {
        start: new Date(2012, 1),
        end: new Date(2022, 1)
      }
    },
    {
      type: 'position',
      company: {
        name: 'Instituto Recôncavo de Tecnologia',
        website: 'https://www.reconcavo.org.br/'
      },
      title: 'Junior Developer',
      technologies: ['c#.net', 'vb.net', '.net-core', 'sql server', 'javascript', 'reporting service'],
      responsibilities: [
        'Developed highly functional and reusable UI packages in Angular and published to npm registry',
        'Consumed ​REST APIs​ and developed few of them in microservice based architecture',
        'Contributed to ​Chatbot​ implementation using ​Dialogflow',
        'Implemented ​.NET MVC​ application for playing video tutorials'
      ],
      dates: {
        start: new Date(2010, 4),
        end: new Date(2012, 1)
      }
    },
    {
      type: 'position',
      company: {
        name: 'LII Lab',
        website: 'https://liilab.com/'
      },
      title: 'Software Engineer',
      technologies: ['android', 'java'],
      responsibilities: [
        'Developed image editing Android apps',
        'Implemented flood-fill algorithm to automatically erase selected color from an image',
        'Participated at daily SCRUM and maintained trello board'
      ],
      dates: {
        start: new Date(2017, 7),
        end: new Date(2018, 1)
      }
    }
  ];
  

  notes: { id: number, name: string }[] = [
    { "id": 0, "name": "Available" },
    { "id": 1, "name": "Ready" },
    { "id": 2, "name": "Started" }
  ];
  
  folders: { id: number, name: string }[] = [
    { "id": 0, "name": "Available" },
    { "id": 1, "name": "Ready" },
    { "id": 2, "name": "Started" }
  ];


  alternateSide: boolean = true;
  firstContentSide: 'left' | 'right' = 'left';

}
