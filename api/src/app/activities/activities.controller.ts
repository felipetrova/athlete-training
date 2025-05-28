import { Controller, Get, NotFoundException, Param } from '@nestjs/common';

@Controller('activities')
export class ActivitiesController {
  private activities = [
    {
      id: 1,
      sport_type: 'Swim',
      start_time: '2025-05-25T10:32:17+0000',
      title: 'Natação Matinal',
      moving_time: '30:06',
      distance: '1.547',
      elevation_gain: '146',
    },
    {
      id: 2,
      sport_type: 'Ride',
      start_time: '2025-05-27T09:05:16+0000',
      title: 'Pedalada Matinal',
      moving_time: '1:00:03',
      distance: '25,37',
      elevation_gain: '216',
    },
    {
      id: 3,
      sport_type: 'Run',
      start_time: '2025-05-25T12:25:32+0000',
      title: 'Corrida Matinal',
      moving_time: '45:32',
      distance: '10,21',
      elevation_gain: '12',
    },
  ];

  // GET /activities
  @Get()
  findAll() {
    return this.activities;
  }

  // GET /activities/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    const activitie = this.activities.find((u) => u.id === Number(id));
    if (!activitie) {
      throw new NotFoundException(`Activitie with id ${id} not found`);
    }
    return activitie;
  }
}
