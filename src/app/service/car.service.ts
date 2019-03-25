import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CarDTO} from '../model/car-dto';
import {Constant} from '../util/constant';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private _http: HttpClient) {
  }

  public save(carDTO: CarDTO) {

    return this._http.post(Constant.CAR_URL, carDTO);
  }

  public findAll() {

    return this._http.get(Constant.CAR_URL);
  }
}
