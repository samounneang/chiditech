import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  constructor(){}
  readonly baseUrl = 'http://localhost:4200/assets';

  protected housingLocationList: HousingLocation[] = [
    {
      id: 0,
      title: 'Basic Programming C++',
      instructor: 'by samoun',
      decription: 'Web specialize',
      imageUrl: `${this.baseUrl}/cplush.jpeg`,
      enrolled: 4,
      open: true,
      
    },
    {
      id: 1,
      title: 'Advance Programming C++',
      instructor: 'by Chiva',
      decription: 'Web specialize',
      imageUrl: `${this.baseUrl}/cplush.jpeg`,
      enrolled: 0,
      open: false,
      
    },
    {
      id: 2,
      title: 'C# Programming full course',
      instructor: 'by Chiva',
      decription: 'Web specialize',
      imageUrl: `${this.baseUrl}/csharp.png`,
      enrolled: 1,
      open: false,
      
    },
    {
      id: 3,
      title: 'C# .Net Core full course',
      instructor: 'by Chiva',
      decription: 'Web specialize',
      imageUrl: `${this.baseUrl}/dotnetcore.png`,
      enrolled: 1,
      open: true,
      
    },

    {
      id: 6,
      title: 'Angular Specialist',
      instructor: 'by Chiva',
      decription: 'Web specialize',
      imageUrl: `${this.baseUrl}/angular.png`,
      enrolled: 5,
      open: true,
      
    },
    {
      id: 5,
      title: 'Java Spring boot',
      instructor: 'by Chiva',
      decription: 'Web specialize',
      imageUrl: `${this.baseUrl}/javaspring.png`,
      enrolled: 2,
      open: true,
      
    },
    {
      id: 7,
      title: 'NextJs Developer',
      instructor: 'by Chiva',
      decription: 'Web specialize',
      imageUrl: `${this.baseUrl}/nextjs.png`,
      enrolled: 2,
      open: true,
      
    },
    {
      id: 7,
      title: 'NestJs Developer',
      instructor: 'by Chiva',
      decription: 'Web specialize',
      imageUrl: `${this.baseUrl}/nestjs.png`,
      enrolled: 2,
      open: true,
      
    },

    {
      id: 8,
      title: 'Python Developer',
      instructor: 'by Chiva',
      decription: 'Web specialize',
      imageUrl: `${this.baseUrl}/python.png`,
      enrolled: 10,
      open: false,
      
    },
    {
      id: 4,
      title: 'Database Administrator',
      instructor: 'by Chiva',
      decription: 'Web specialize',
      imageUrl: `${this.baseUrl}/dba.png`,
      enrolled: 1,
      open: true,
      
    },
    {
      id: 9,
      title: 'Report Analyst BI/SSRS',
      instructor: 'by Chiva',
      decription: 'Web specialize',
      imageUrl: `${this.baseUrl}/report.png`,
      enrolled: 6,
      open: true,
      
    }
  ];

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation |undefined{
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }

  submitApplication(firsttitle: string, lasttitle: string, email: string) {
    console.log(`Homes application received: firsttitle: ${firsttitle}, lasttitle: ${lasttitle}, email: ${email}.`);
  }
}
