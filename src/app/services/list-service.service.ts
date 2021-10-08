import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListServiceService {
  listOne() {
    return [
      {
        id: 1,
        employee: 'John',
        title: 'Angular',
        dir: 'Front End Developer',
      },
      {
        id: 2,
        employee: 'Ricky',
        title: 'React',
        dir: 'Front End Developer',
      },
      {
        id: 3,
        employee: 'Sasha',
        title: 'Vue',
        dir: 'Full Stack Developer',
      },
      {
        id: 4,
        employee: 'Mario',
        title: 'JavaScript',
        dir: 'Front End Developer',
      },
    ];
  }

  listTwo() {
    return [
      { id: 1, employeer: 'Mikel', title: 'Figma', dir: 'Graph Designer' },
      {
        id: 2,
        employeer: 'Ron',
        title: 'AdobePhotoshop',
        dir: 'WireFrame Design',
      },
      { id: 3, employeer: 'Greg', title: 'Trades', dir: 'Forex' },
      { id: 4, employeer: 'Lejla', title: 'Python', dir: 'Data' },
      { id: 5, employeer: 'Mia', title: 'AdobeCC', dir: 'Graph Designer' },
    ];
  }

  constructor() {}
}
