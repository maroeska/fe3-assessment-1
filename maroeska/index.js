var svg = d3.select("svg"), // selecteert de svg, deze svg kan nu aangepast worden
    margin = {
        top: 20,
        right: 20,
        bottom: 30,
        left: 40,
    }, // margins worden bepaald
    width = +svg.attr("width") - margin.left - margin.right, // een width wordt toegevoegd aan de svg en de margin left en right worden eraf gehaald 
    height = +svg.attr("height") - margin.top - margin.bottom; // een hight wordt toegevoegd aan de svg en de margin top en bottom worden eraf gehaald

var x = d3.scaleBand().rangeRound([0, width]).padding(0.1), // d3.scaleBand vormt een nieuwe bandschaal met het lege domein, de eenheid is 0 en de padding is 0.1, dit is de ruimte tussen de stafen van de bar chart
    y = d3.scaleLinear().rangeRound([height, 0]); // d3.scaleLineair vormt een nieuwe continue schaal met de eenheid 0 van het domein en het bereik van de eenheid

var g = svg.append("g") // het g element groepeert de SVG shapes en is geen d3 specifieke term
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); // attr() stelt eigenschappen (attribute) en waardes (values) in of geeft het terug van de geselecteerde elementen. In dit geval geeft het een transform mee en een translate.

d3.tsv("data.tsv", function (d) { // de data van het tsv wordt in een functie gezet met een parameter d. (d) staat voor de data die is gekoppeld aan een bepaalde selectie.
    d.speakers = +d.speakers; // uit += komt een positief getal die op de waardes van de speakers aansluit
    return d; // de data wordt terug gegeven
}, function (error, data) {
    if (error) throw error; // als er een error optreed bij het uitvoeren van de js code, creer dan een error
    // deze code wordt uitgevoerd wanneer het bestand data.tsv is geladen

    x.domain(data.map(function (d) { // map: de data wordt omgezet in nieuwe elementen, return: waarde terug geven in een functie, in dit geval de languages uit de dataset
        return d.language;
    }));
    y.domain([0, d3.max(data, function (d) {
        return d.speakers; // max: geeft de maximale waarde terug uit de data
    })]);

    g.append("g") // voegt inhoud toe aan het einde van de gegroepeerde svg
        .attr("class", "axis axis--x") // x-as
        .attr("transform", "translate(0," + height + ")") // 0 zorgt ervoor dat het streepje in het midden van de balk blijft
        .call(d3.axisBottom(x)); // .call roept de d3.axisBottom op die x als parameter heeft. Deze heeft lege tick argumenten en wordt onder de horizontale domain path getekend. axis heeft een path element met de class ‘domain’, gevolgd door getransformeerde g elementen van class ‘tick’. Elke tick heeft een line element, om de tick line te tekenen en een text element voor de tick label.

    g.append("g")
        .call(d3.axisLeft(y).ticks(30).tickFormat(d3.format(".3s"))) // In dit geval ticks van 30. Met d3.format wordt het hoge getal kleiner gemaakt en uitgedrukt in miljoenen
        .attr("class", "axis axis--y") // y-as
        .append("text") // tekst aan de y-as

        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em") // 0.71em verschuiving op de y-as
        .attr("text-anchor", "end") // text-anchor wordt gebruikt om een tekenreeks van een bepaald punt in te stellen (begin-, midden- of eind-alignment). In dit geval dus aan het eind ingesteld
        .text("speakers"); // invulling van tekst

    g.selectAll(".bar") // data per element invoeren
        .data(data) // pakt alle data
        .enter().append("rect") // voert een rectangle in de groep voor elk stukje data
        .attr("class", "bar") // class gemaakt voor bar, in css kan je bijvoorbeeld de kleur met deze class aanpassen
        .attr("x", function (d) {
            return x(d.language);
        }) // languages wordt terug gegeven
        .attr("y", function (d) {
            return y(d.speakers);
        }) // speakers wordt terug gegeven
        .attr("width", x.bandwidth()) // bandwith geeft de breedte van elke band weer
        .attr("height", function (d) {
            return height - y(d.speakers);
        });
});
