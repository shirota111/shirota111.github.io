// app.js

// D3.jsを使ってSVG要素を作成
const width = 800;
const height = 600;
const svg = d3.select("#mindmap-container").append("svg")
    .attr("width", width)
    .attr("height", height);

// ノードとリンクのデータ
const nodes = [
    { id: 1, name: "Main Idea", x: width / 2, y: height / 2 },
    { id: 2, name: "Sub Idea 1", x: width / 3, y: height / 3 },
    { id: 3, name: "Sub Idea 2", x: width / 1.5, y: height / 1.5 }
];

const links = [
    { source: 1, target: 2 },
    { source: 1, target: 3 }
];

// ノードを描画
svg.selectAll("circle")
    .data(nodes)
    .enter()
    .append("circle")
    .attr("cx", d => d.x)
    .attr("cy", d => d.y)
    .attr("r", 20)
    .attr("fill", "steelblue");

// リンクを描画
svg.selectAll("line")
    .data(links)
    .enter()
    .append("line")
    .attr("x1", d => nodes[d.source - 1].x)
    .attr("y1", d => nodes[d.source - 1].y)
    .attr("x2", d => nodes[d.target - 1].x)
    .attr("y2", d => nodes[d.target - 1].y)
    .attr("stroke", "black")
    .attr("stroke-width", 2);