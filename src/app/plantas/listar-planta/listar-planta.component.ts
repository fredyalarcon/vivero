import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-listar-planta',
  templateUrl: './listar-planta.component.html',
  styleUrls: ['./listar-planta.component.css'],
})
export class ListarPlantaComponent implements OnInit {
  plantas: Array<Planta> = [];
  count_int:number;
  count_ext:number;
  elementCount: {[key: string]: number} = {};
  constructor(private plantaService: PlantaService) {
    this.count_int=0;
    this.count_ext=0;
  }

  getPlantas() {
    this.plantaService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
    });
  }

  ngOnInit() {
    this.getPlantas();
  }

  ngAfterViewInit() {
    const elements_ext = document.querySelectorAll('p[value="Exterior"]');
    const elements_int = document.querySelectorAll('p[value="Interior"]');
    this.count_ext = elements_ext.length;
    this.count_int = elements_int.length;
  }
}
