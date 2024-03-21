var $ = go.GraphObject.make; // GoJS namespace alias

var diagram = $(
  go.Diagram,
  "diagramContainer", // Reference your HTML 'div'
  {
    initialContentAlignment: go.Spot.Center, // Center the diagram
  }
);

// Define a template for Actor nodes
diagram.nodeTemplate = $(
  go.Node,
  "Spot",
  { locationSpot: go.Spot.Center },
  $(go.Shape, "Ellipse", { fill: "lightblue", strokeWidth: 2 }),
  $(
    go.TextBlock,
    { margin: 5, font: "bold 12pt sans-serif" },
    new go.Binding("text")
  )
);

// Define a template for Use Case nodes
diagram.nodeTemplateMap.add(
  "UseCase", // Template name
  $(
    go.Node,
    "Spot",
    { locationSpot: go.Spot.Center },
    $(go.Shape, "RoundedRectangle", { fill: "lightyellow", strokeWidth: 2 }),
    $(
      go.TextBlock,
      { margin: 5, font: "12pt sans-serif" },
      new go.Binding("text")
    )
  )
);

// Simple diagram data
diagram.model = new go.GraphLinksModel(
  [
    { key: "Reader", text: "Reader" },
    { key: "Publisher", text: "Publisher" },
    { key: "View Article", text: "View Article", category: "UseCase" },
    { key: "Submit Article", text: "Submit Article", category: "UseCase" },
  ],
  [
    { from: "Reader", to: "View Article" },
    { from: "Publisher", to: "View Article" },
    { from: "Publisher", to: "Submit Article" },
  ]
);
