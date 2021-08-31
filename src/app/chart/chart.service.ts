import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ChartData } from "./chart.component";

@Injectable({
    providedIn: 'root',
})
export class ChartService {
    constructor(public http: HttpClient) {}
    
    getData(ticker="AMRN", region="US") {
        const url = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data?symbol=${ticker}&region=${region}`;
        const headers = {
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            "x-rapidapi-key": "3955d6ba4emshd63e57e1957eeaep19a082jsn7a2538c6c3a4"
        }
        return this.http.get<any>(url, {'headers':headers})
        .toPromise()
        .then(res => <ChartData[]>res.prices);
    }
}