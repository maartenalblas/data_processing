// consstants for the width and height of the graph
var margin = {top: 30, right: 20, bottom: 30, left: 50},
    width = 950 - margin.left - margin.right,
    height = 550 - margin.top - margin.bottom;

// this will parse the dates to javascript format
var parseDate = d3.time.format("%Y/%m/%d").parse;

var x = d3.time.scale()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

// posiiton of the x axis
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")

// posiiton of the y axis
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

// line in the graph
var valueline = d3.svg.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.temperature); });

// adding the svg to the body
var svg = d3.select("body")
  .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
  .append("g")
        .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

// The graph is created with the data from the csv
// Everything from here is in this function which loads the data
d3.csv("data.csv", function(error, data) {
    data.forEach(function(d) {
        d.date = parseDate(d.date);
        d.temperature = +d.temperature;
    })

    x.domain(d3.extent(data, function(d) { return d.date; }));
    y.domain(d3.extent(data, function(d) { return d.temperature; }));

    // Add the X Axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    // Add the Y Axis
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("Temperature (Celsius)");

    // draw the graph
    svg.append("path")
    .attr("class", "line")
    .attr("d", valueline(data));

    // this is the domain
    var xDomain = d3.extent(data, function(d) { return d.date; })
    var yDomain = d3.extent(data, function(d) { return d.temperature; });

    // scale x and y likek this
    var xScale = d3.time.scale().range([0, width]).domain(xDomain);
    var yScale = d3.scale.linear().range([height, 0]).domain(yDomain);

    var focus = svg.append('g').style('display', 'none');

    // appends the crosshair
    focus.append('line')
        .attr('id', 'focusLineX')
        .attr('class', 'focusLine');
    focus.append('line')
        .attr('id', 'focusLineY')
        .attr('class', 'focusLine');
    focus.append('circle')
        .attr('id', 'focusCircle')
        .attr('r', 5)
        .attr('class', 'circle focusCircle');

    var bisectDate = d3.bisector(function(d) { return d.date; }).left;

    // adds an extra rectangle as an overlay
    svg.append('rect')
        .attr('class', 'overlay')
        .attr('width', width)
        .attr('height', height)
        .on('mouseover', function() { focus.style('display', null); })
        .on('mouseout', function() { focus.style('display', 'none'); })
        // when mouse moves crosshair moves
        .on('mousemove', function() {
            var mouse = d3.mouse(this);
            var mouseDate = xScale.invert(mouse[0]);
            var i = bisectDate(data, mouseDate); // returns the index to the current data item

            var d0 = data[i - 1]
            var d1 = data[i];
            // work out which date value is closest to the mouse
            var d = mouseDate - d0[0] > d1[0] - mouseDate ? d1 : d0;

            var x = xScale(d.date);
            var y = yScale(d.temperature);

            focus.select('#focusCircle')
                .attr('cx', x)
                .attr('cy', y);
            focus.select('#focusLineX')
                .attr('x1', x).attr('y1', yScale(yDomain[0]))
                .attr('x2', x).attr('y2', yScale(yDomain[1]));
            focus.select('#focusLineY')
                .attr('x1', xScale(xDomain[0])).attr('y1', y)
                .attr('x2', xScale(xDomain[1])).attr('y2', y);
        });
  })
