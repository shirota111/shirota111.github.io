// ノードにドラッグ機能を追加
const dragHandler = d3.drag()
    .on("start", function (event, d) {
        d3.select(this).raise().attr("stroke", "black");
    })
    .on("drag", function (event, d) {
        d3.select(this)
            .attr("cx", d.x = event.x)
            .attr("cy", d.y = event.y);

        // ノードの移動に合わせてリンクも更新
        svg.selectAll("line")
            .attr("x1", d => nodes[d.source - 1].x)
            .attr("y1", d => nodes[d.source - 1].y)
            .attr("x2", d => nodes[d.target - 1].x)
            .attr("y2", d => nodes[d.target - 1].y);
    });

dragHandler(svg.selectAll("circle"));