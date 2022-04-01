import { AfterViewInit, Component, OnInit , NgZone} from '@angular/core';

   import am4geodata_worldHigh from "@amcharts/amcharts4-geodata/worldHigh";
   import * as am4plugins_bullets from "@amcharts/amcharts4/plugins/bullets"; 
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent   implements OnInit, AfterViewInit   {

    constructor(){
      console.log('hello world');
    }
ngAfterViewInit()
{
    
    // Create map instance
    var chart = am4core.create("chartdiv", am4maps.MapChart);
    
    // Set map definition
    chart.geodata = am4geodata_worldLow;
    
    // Set projection
    chart.projection = new am4maps.projections.Orthographic();

    chart.geodata = am4geodata_worldLow;
    chart.panBehavior = "rotateLong";
    
     let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
 polygonSeries.exclude = ["AQ"];
 polygonSeries.useGeodata = true;

    let polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#367B25");  
     // for coloring map with data ends

     var imageSeries = chart.series.push(new am4maps.MapImageSeries());

     let imageSeriesTemplate = imageSeries.mapImages.template;
   
    chart.data = [{
        "year": "1994",
        "cars": 1587,
        "motorcycles": 650,
        "bicycles": 121
      }, {
        "year": "1995",
        "cars": 1567,
        "motorcycles": 683,
        "bicycles": 146
      }, {
        "year": "1996",
        "cars": 1617,
        "motorcycles": 691,
        "bicycles": 138
      }, {
        "year": "1997",
        "cars": 1630,
        "motorcycles": 642,
        "bicycles": 127
      }, {
        "year": "1998",
        "cars": 1660,
        "motorcycles": 699,
        "bicycles": 105
      }, {
        "year": "1999",
        "cars": 1683,
        "motorcycles": 721,
        "bicycles": 109
      }, {
        "year": "2000",
        "cars": 1691,
        "motorcycles": 737,
        "bicycles": 112
      }, {
        "year": "2001",
        "cars": 1298,
        "motorcycles": 680,
        "bicycles": 101
      }, {
        "year": "2002",
        "cars": 1275,
        "motorcycles": 664,
        "bicycles": 97
      }, {
        "year": "2003",
        "cars": 1246,
        "motorcycles": 648,
        "bicycles": 93
      }, {
        "year": "2004",
        "cars": 1218,
        "motorcycles": 637,
        "bicycles": 101
      }, {
        "year": "2005",
        "cars": 1213,
        "motorcycles": 633,
        "bicycles": 87
      }, {
        "year": "2006",
        "cars": 1199,
        "motorcycles": 621,
        "bicycles": 79
      }, {
        "year": "2007",
        "cars": 1110,
        "motorcycles": 210,
        "bicycles": 81
      }, {
        "year": "2008",
        "cars": 1165,
        "motorcycles": 232,
        "bicycles": 75
      }, {
        "year": "2009",
        "cars": 1145,
        "motorcycles": 219,
        "bicycles": 88
      }, {
        "year": "2010",
        "cars": 1163,
        "motorcycles": 201,
        "bicycles": 82
      }, {
        "year": "2011",
        "cars": 1180,
        "motorcycles": 285,
        "bicycles": 87
      }, {
        "year": "2012",
        "cars": 1159,
        "motorcycles": 277,
        "bicycles": 71
      }];
    // Create image
//var imageSeriesTemplate = imageSeries.mapImages.template;
let marker = imageSeriesTemplate.createChild(am4core.Image);
let nnn = ["moiz","uddin"];
let remarks = "onpassive is AI based company"
marker.href = "../assets/placeholder.png";
marker.width = 20;
marker.height = 20;
// marker.tooltip.label.interactionsEnabled = true;

// marker.tooltip.keepTargetHover = true;
marker.nonScaling = true;
marker.tooltipHTML = `<center><strong>YEAR {categoryX}</strong></center>
<hr />
<table>
<tr>
  <th align="left">Cars</th>
  <td>{cars}</td>
</tr>
<tr>
  <th align="left">Motorcycles</th>
  <td>{motorcycles}</td>
</tr>
<tr>
  <th align="left">Bicycles</th>
  <td>{bicycles}</td>
</tr>
</table>
<hr />`;
marker.horizontalCenter = "middle";
marker.verticalCenter = "bottom";

// Set property fields
imageSeriesTemplate.propertyFields.latitude = "latitude";
imageSeriesTemplate.propertyFields.longitude = "longitude";

// Add data for the three cities
imageSeries.data = [{
  "latitude": 48.856614,
  "longitude": 2.352222,
  "title": "Paris"
}, {
  "latitude": 40.712775,
  "longitude": -74.005973,
  "title": "New York"
}, {
  "latitude": 49.282729,
  "longitude": -123.120738,
  "title": "Vancouver"
}];
  
}
ngOnInit(){}
}
