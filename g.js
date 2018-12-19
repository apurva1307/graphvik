var res  =
{
    "results": [
        {
            "columns": [
                "path"
            ],
            "data": [
                {
                    "graph": {
                        "nodes": [
                            {
                                "id": "0",
                                "labels": [
                                    "SourceSystem"
                                ],
                                "properties": {
                                    "name": "ddddsf77",
                                    "referenceMdmSystem": "dddd",
                                    "referenceMdmId": "d64"
                                }
                            },
                            {
                                "id": "21",
                                "labels": [
                                    "Material"
                                ],
                                "properties": {
                                    "aliases": [],
                                    "name": "1221adasd",
                                    "externalId": "32232",
                                    "uuid": "dadasdas"
                                }
                            }
                        ],
                        "relationships": [
                            {
                                "id": "1",
                                "type": "SOURCE_SYSTEM",
                                "startNode": "21",
                                "endNode": "0",
                                "properties": {}
                            }
                        ]
                    }
                },
                {
                    "graph": {
                        "nodes": [
                            {
                                "id": "20",
                                "labels": [
                                    "SemanticEntity"
                                ],
                                "properties": {
                                    "name": "ffff",
                                    "referenceMdmSystem": "ff",
                                    "description": "fff",
                                    "referenceMdmId": "fff"
                                }
                            },
                            {
                                "id": "21",
                                "labels": [
                                    "Material"
                                ],
                                "properties": {
                                    "aliases": [],
                                    "name": "1221adasd",
                                    "externalId": "32232",
                                    "uuid": "dadasdas"
                                }
                            }
                        ],
                        "relationships": [
                            {
                                "id": "0",
                                "type": "SEMANTIC_ENTITY",
                                "startNode": "21",
                                "endNode": "20",
                                "properties": {}
                            }
                        ]
                    }
                }
            ]
        }
    ],
    "errors": []
};

function idIndex(a,id) {
  for (var i=0;i<a.length;i++) {
    if (a[i].id == id) return i;}
  return null;
}
var nodes=[], links=[];
res.results[0].data.forEach(function (row) {
 row.graph.nodes.forEach(function (n) {
   if (idIndex(nodes,n.id) == null)
     nodes.push({id:parseInt(n.id), name:n.labels[0], label:n.labels[0]});
 });
  row.graph.relationships.map(function(r) {
     links.push({source:parseInt(r.startNode),target:parseInt(r.endNode),type:r.type});
   })
});

var json = {nodes:nodes, links:links};


  // var width = 800, height = 800;
  // var force = d3.layout.force()
  //   .charge(-200).linkDistance(30).size([width, height]);

  // var svg = d3.select("#graph").append("svg")
  //   .attr("width", "100%").attr("height", "100%")
  //   .attr("pointer-events", "all");

  //   force.nodes(viz.nodes).links(viz.links).start();

  //   var link = svg.selectAll(".link")
  //     .data(graph.links).enter()
  //     .append("line").attr("class", "link");

  //   var node = svg.selectAll(".node")
  //     .data(graph.nodes).enter()
  //     .append("circle")
  //     .attr("class", d => {
  //       return "node " + d.label
  //     })
  //     .attr("r", 10)
  //     .call(force.drag);
