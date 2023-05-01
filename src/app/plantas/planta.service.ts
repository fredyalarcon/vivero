import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Planta } from './planta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlantaService {
  private apiUrl = environment.baseUrl + '202212_MISW4104_Grupo2.json';

  constructor(private http: HttpClient) {}

  getPlantas(): Observable<Planta[]> {
    return this.http.get<Planta[]>(this.apiUrl);
  }

  getCantidadPlantasTipo() {
    let count_int = 0;
    let count_ext = 0;
    const dds = document.getElementsByTagName('dd');
    for (let i = 0; i < dds.length; i++) {
      if (dds[i].getAttribute('data-value') === 'Interior') {
        count_int++;
      } else {
        if (dds[i].getAttribute('data-value') === 'Exterior') {
          count_ext++;
        }
      }
    }
    console.log(count_int, count_ext);
  }
}
