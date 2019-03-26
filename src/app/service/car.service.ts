import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CarDTO} from '../model/car-dto';
import {Constant} from '../util/constant';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private _http: HttpClient) {
  }

  public save(carDTO: CarDTO) {

    return this._http.post(Constant.CAR_URL, carDTO);
  }

  public findAll(): Observable<CarDTO[]> {

    return this._http.get<CarDTO[]>(Constant.CAR_URL);
  }

  /*public countNumberOfCars(): Observable<number> {
    return this._http.get(Constant.CAR_URL + '/count');
  }*/

  public countNumberOfCars(): Observable<number[]> {
    return this._http.get<number[]>(Constant.CAR_URL + '/countsize');
  }

  findUnSoldCars(page: number, size: number): Observable<CarDTO[]> {
    return this._http.get<CarDTO[]>(Constant.CAR_URL + '/unsold' + '?page=' + page + '&size=' + size);
  }

  findSoldCars(page: number, size: number): Observable<CarDTO[]> {
    return this._http.get<CarDTO[]>(Constant.CAR_URL + '/sold' + '?page=' + page + '&size=' + size);
  }
}
