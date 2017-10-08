## Assessment 1

![](https://github.com/maroeska/fe3-assessment-1/blob/master/preview.png)

In deze readme beschrijf ik wat ik heb gedaan in mijn assessment, welke data ik heb gebruikt, welke features ik heb gebruikt van D3 en welke bronnen ik heb gebruikt. 

___

## Beschrijving

Ik koos eerst voor de dataset met het weer. Ik heb verschillende charts uit de D3 library geprobeerd, maar ik kwam er niet uit. Ik heb daarna aan Desley gevraagd welke data hij gebruikte en gekoppeld had aan een chart. Hij beval mij de speakers data aan en een bar chart, omdat ik daar al ervaring mee heb (en ik geen programmeer genie ben... ;-)).<br>
Ik heb een bar chart van de [d3’s example gallery](https://github.com/d3/d3/wiki/Gallery) gehaald uit de [Basic Charts section](https://github.com/d3/d3/wiki/Gallery#basic-charts). Vervolgens heb ik de javascript, css en html gescheiden van elkaar en naar elkaar gelinkt in de html.<br>
Ik heb de data vanuit het tsv bestand gekoppeld in javascript, zodat de juiste data zichtbaar wordt in de bar chart. De dataset gaat over talen die zijn vermeld op 50 miljoen of meer speakers.

De tsv file oproepen in javascript ging goed en doordat ik voor de tweede keer de bar chart heb geinspecteerd, snap ik de d3 features weer iets beter. Ik vind het nog moeilijk om zelf code toe te voegen aan de javascript, omdat ik hier nog weinig ervaring mee heb. 

## Data

Tab-separated values (TSV) with 26 rijen en 2 kolommen:

*   `language` — naam van de taal
*   `speakers` — geschatte nummer van het totaal aantal speakers

## Features

*   [`d3-selection`](https://github.com/d3/d3-selection#api-reference)
    — `d3.select`
    — Huidige selectie teruggeven, of een nieuwe selectie
*   [`d3-scale`](https://github.com/d3/d3-scale#api-reference)
    — `d3.scaleBand` and `d3.scaleLinear`
    — Positie bepalen
*   [`d3-array`](https://github.com/d3/d3-axis#api-reference)
    — `d3.axisBottom` and `d3.axisLeft`
    — Asgenerators voor schalen
*   [`d3-format`](https://github.com/d3/d3-format#api-reference) 
    — `d3.format`
    — Uitdrukking getallen
    
## Bronnen    

Informatie bronnen:

https://github.com/d3/d3-format > d3.format
https://stackoverflow.com > diverse vragen van mensen gelezen<br>
https://github.com/d3/d3-array > veel informatie gehaald over D3<br>
https://developer.mozilla.org/nl/ > informatie gezocht over D3 en errors<br>
https://developer.mozilla.org/nl/ > informatie gezocht over CSS en JS<br> 
https://medium.com/@nick3499/d3-scaleband-rangeround-padding-ordinal-scale-with-range-bands-including-padding-f4af1e3c96ab > informatie gezocht over .Scaleband<br>
https://github.com/DesleyAalderink/fe3-assessment-1/tree/master/DesleyAalderink > inspiratie voor d3.format

## License

GPL-3.0 © Maroeska Verkerk
