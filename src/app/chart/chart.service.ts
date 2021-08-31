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
            "x-rapidapi-key": "b4a8ca8456msh9c8e79ba17279adp1469cfjsn48ca15b5035e"
        }
        return this.http.get<any>(url, {'headers':headers})
        .toPromise()
        .then(res => <ChartData[]>res.prices);
    }

    getDataWithoutPromise(ticker="AMRN", region="US") {
        const url = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data?symbol=${ticker}&region=${region}`;
        const headers = {
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            "x-rapidapi-key": "b4a8ca8456msh9c8e79ba17279adp1469cfjsn48ca15b5035e"
        }
        return this.http.get<any>(url, {'headers':headers})
        
    }
}