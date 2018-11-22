$(document).ready(function() {
    var svg = document.getElementById("logo-svg");
    var s = Snap(svg);

    var expanded = Snap.select("#Expanded");
    var collapsed = Snap.select("#Collapsed");

    var expandedPoints = expanded.node.getAttribute("d");
    var collapsedPoints = collapsed.node.getAttribute("d");
    var path;
    function reverse() {
        path.animate({d: expandedPoints}, 1000, mina.linear);
    }
    path = s.path(expandedPoints);
    path.animate({d: collapsedPoints}, 1000, mina.linear, reverse);
});
