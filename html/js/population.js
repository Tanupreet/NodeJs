var margin = { top: 50, right: 0, bottom: 20, left: 65 },
        width = 1300 - margin.left /*- margin.right*/ ,
        height = 700 - margin.top - margin.bottom;

    var formatPercent = d3.format("");

    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1);

    var y = d3.scale.linear()
        .range([height, 10]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .tickFormat(formatPercent);

    var tip = d3.tip()
        .attr('class', 'd3-tip')
        .offset([-10, 0])
        .html(function(d) {
            return "<strong> Population: </strong> <span style='color:red'>" + d.Population + "</span>";
        })

    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg.call(tip);

    d3.json("../../json/Population.json", function(error, data) {
        x.domain(data.map(function(d) { return d.CountryName; }));
        y.domain([0, d3.max(data, function(d) { return d.Population > 3200 ? d.Population : 3200; })]);

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);
            

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Population");

        svg.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function(d) { return x(d.CountryName); })
            .attr("width", x.rangeBand())
            .attr("y", function(d) { return y(d.Population); })
            .attr("height", function(d) { return height - y(d.Population); })
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)

    });
  