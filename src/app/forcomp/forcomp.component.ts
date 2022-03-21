import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forcomp',
  templateUrl: './forcomp.component.html',
  styleUrls: ['./forcomp.component.css']
})
export class ForcompComponent implements OnInit {

  students:any=[
    {
      "name": "Ellen Schneider",
      "gender": "female",
      "company": "ECOSYS",
      "email": "ellenschneider@ecosys.com",
      "phone": "+1 (922) 596-3785",
      "address": [
        {
          "dno": 952,
          "street": "Meadow Street",
          "city": "Mahtowa",
          "state": "Wisconsin",
          "pin": 4670
        }
      ]
    },
    {
      "name": "Gay Dawson",
      "gender": "male",
      "company": "SHEPARD",
      "email": "gaydawson@shepard.com",
      "phone": "+1 (916) 555-2766",
      "address": [
        {
          "dno": 944,
          "street": "Emmons Avenue",
          "city": "Ironton",
          "state": "Texas",
          "pin": 189
        }
      ]
    },
    {
      "name": "Audrey Clay",
      "gender": "female",
      "company": "LUNCHPOD",
      "email": "audreyclay@lunchpod.com",
      "phone": "+1 (864) 594-3774",
      "address": [
        {
          "dno": 730,
          "street": "Miller Avenue",
          "city": "Tilleda",
          "state": "Virginia",
          "pin": 7488
        }
      ]
    },
    {
      "name": "Gamble Mueller",
      "gender": "male",
      "company": "ASSITIA",
      "email": "gamblemueller@assitia.com",
      "phone": "+1 (968) 519-3923",
      "address": [
        {
          "dno": 838,
          "street": "Scholes Street",
          "city": "Franklin",
          "state": "South Carolina",
          "pin": 1590
        }
      ]
    },
    {
      "name": "Nettie Shannon",
      "gender": "female",
      "company": "CEPRENE",
      "email": "nettieshannon@ceprene.com",
      "phone": "+1 (938) 503-2729",
      "address": [
        {
          "dno": 553,
          "street": "Clarkson Avenue",
          "city": "Chesterfield",
          "state": "Michigan",
          "pin": 8640
        }
      ]
    },
    {
      "name": "Stanley Matthews",
      "gender": "male",
      "company": "GOKO",
      "email": "stanleymatthews@goko.com",
      "phone": "+1 (810) 453-2107",
      "address": [
        {
          "dno": 106,
          "street": "Pierrepont Place",
          "city": "Detroit",
          "state": "Idaho",
          "pin": 609
        }
      ]
    },
    {
      "name": "Helene Huffman",
      "gender": "female",
      "company": "EXODOC",
      "email": "helenehuffman@exodoc.com",
      "phone": "+1 (997) 446-3657",
      "address": [
        {
          "dno": 744,
          "street": "Clifford Place",
          "city": "Tivoli",
          "state": "Georgia",
          "pin": 392
        }
      ]
    }
  ];




  constructor() { }

  ngOnInit(): void {
  }



}
