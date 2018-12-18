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
       nodes.push({id:n.id,label:n.labels[0],title:n.properties.name});
   });
   links = links.concat( row.graph.relationships.map(function(r) {
     return {start:idIndex(nodes,r.startNode),end:idIndex(nodes,r.endNode),type:r.type};
   }));
});
viz = {nodes:nodes, links:links};