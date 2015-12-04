var margin = {top: 30, right: 20, bottom: 30, left: 50},
    width = 950 - margin.left - margin.right,
    height = 550 - margin.top - margin.bottom;

var parseDate = d3.time.format("%Y/%m/%d").parse;

var x = d3.time.scale()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    // .ticks(12);

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var valueline = d3.svg.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.temperature); });


var svg = d3.select("body")
  .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
  .append("g")
        .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")")

d3.csv("data.csv", function(error, data) {
    data.forEach(function(d) {
        d.date = parseDate(d.date);
        d.temperature = +d.temperature;
    })

    x.domain(d3.extent(data, function(d) { return d.date; }));
    y.domain(d3.extent(data, function(d) { return d.temperature; }));
    // y.domain([0, d3.max(data, function(d) { return d.temperature; })]);

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


    var svg = d3.select("body").append("svg")
        .attr("width", containerWidth)
        .attr("height", containerHeight);

    var margin = { top: 50, left: 50, right: 50, bottom: 50 };

    var height = containerHeight - margin.top - margin.bottom;
    var width = containerWidth - margin.left - margin.right;

    var xDomain = d3.extent(data, function(d) { return d.date; })
    var yDomain = d3.extent(data, function(d) { return d.temperature; });

    var xScale = d3.time.scale().range([0, width]).domain(xDomain);
    var yScale = d3.scale.linear().range([height, 0]).domain(yDomain);

    var xAxis = d3.svg.axis().scale(xScale).orient('bottom');
    var yAxis = d3.svg.axis().scale(yScale).orient('left');

    var line = d3.svg.line()
        .x(function(d) { return xScale(d.date); })
        .y(function(d) { return yScale(d.temperature); });

    var area = d3.svg.area()
        .x(function(d) { return xScale(d.date); })
        .y0(function(d) { return yScale(d.temperature); })
        .y1(height);

    var g = svg.append('g').attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

    svg.append('path')
        .datum(data)
        .attr('class', 'area')
        .attr('d', area);

    svg.append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0, ' + height + ')')
        .call(xAxis);

    svg.append('g')
        .attr('class', 'y axis')
        .call(yAxis)
        .append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', 6)
            .attr('dy', '.71em')
            .attr('text-anchor', 'end')
            .text(yLabel);

    svg.append('path')
        .datum(data)
        .attr('class', 'line')
        .attr('d', line);

    svg.selectAll('circle').data(data).enter().append('circle')
        .attr('cx', function(d) { return xScale(d.date); })
        .attr('cy', function(d) { return yScale(d.temperature); })
        .attr('r', 5)
        .attr('class', 'circle');

    // focus tracking

    var focus = svg.append('g').style('display', 'none');

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

    svg.append('rect')
        .attr('class', 'overlay')
        .attr('width', width)
        .attr('height', height)
        .on('mouseover', function() { focus.style('display', null); })
        .on('mouseout', function() { focus.style('display', 'none'); })
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

    // warn line
    if(warnLine && yDomain[0] < warnLine.lineValue && yDomain[1] > warnLine.lineValue) {
        svg.append('line')
            .attr('x1', xScale(xDomain[0]))
            .attr('y1', yScale(warnLine.lineValue))
            .attr('x2', xScale(xDomain[1]))
            .attr('y2', yScale(warnLine.lineValue))
            .attr('class', 'zeroline');
        svg.append('text')
            .attr('x', xScale(xDomain[1]))
            .attr('y', yScale(warnLine.lineValue))
            .attr('dy', '1em')
            .attr('text-anchor', 'end')
            .text(warnLine.label)
            .attr('class', 'zerolinetext');
    }
  });
