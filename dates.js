function(start_date, end_date, nodes) {
    return nodes.filter(function(node, i, arr) {
        var date = Date(node.birthday);
        return date.getTime() <= end_date.getTime() && date.getTime() >= start_date.getTime()
    });
}