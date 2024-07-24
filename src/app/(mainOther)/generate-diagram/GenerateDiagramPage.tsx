// App.js
"use client";
import { Box } from "@chakra-ui/react";
import * as go from "gojs";
import { ReactDiagram, ReactOverview } from "gojs-react";
import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";

function initDiagram() {
  const diagram = new go.Diagram({
    "undoManager.isEnabled": true, // must be set to allow for model change listening
    // 'undoManager.maxHistoryLength': 0,  // uncomment disable undo/redo functionality
    // "clickCreatingTool.archetypeNodeData": {
    //   text: "new node",
    //   color: "lightblue",
    // },
    // model: new go.GraphLinksModel({
    //   linkKeyProperty: "key", // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
    // }),
  });

  // define a simple Node template
  diagram.nodeTemplate = new go.Node("Auto") // the Shape will go around the TextBlock
    .bindTwoWay("location", "loc", go.Point.parse, go.Point.stringify)
    .add(
      new go.Shape("RoundedRectangle", {
        name: "SHAPE",
        fill: "white",
        strokeWidth: 0,
        portId: "",
        fromLinkable: true,
        fromLinkableSelfNode: true,
        fromLinkableDuplicates: true,
        toLinkable: true,
        toLinkableSelfNode: true,
        toLinkableDuplicates: true,
      })
        // Shape.fill is bound to Node.data.color
        .bind("fill", "color"),
      new go.TextBlock({ margin: 8, editable: true }) // some room around the text
        .bindTwoWay("text")
    );

  diagram.linkTemplate = new go.Link({
    // allow the user to reconnnect existing links:
    relinkableFrom: true,
    relinkableTo: true,
    // draw the link path shorter than normal,
    // so that it does not interfere with the appearance of the arrowhead
    toShortLength: 2,
  }).add(
    new go.Shape({ strokeWidth: 2 }),
    new go.Shape({ toArrow: "Standard", stroke: null })
  );

  return diagram;
}

/**
 * This function handles any changes to the GoJS model.
 * It is here that you would make any updates to your React state, which is discussed below.
 */
function handleModelChange(changes: any) {
  console.log("changes model", changes);
  // alert("GoJS model changed!");
}

// render function...
export default function GenerateDiagramPage() {
  const diagramRef: any = useRef(null);
  const [keyDiagramComponent, setKeyDiagramComponent] = useState(Math.random());
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    if (!diagramRef.current) {
      return;
    }
    const handleWindowClose = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };

    window.addEventListener("beforeunload", handleWindowClose);
    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("beforeunload", handleWindowClose);
    };
  }, []);

  useEffect(() => {
    if (!diagramRef.current) {
      return;
    }
    const diagram = diagramRef.current.getDiagram(); // refs are up-to-date
    if (diagram instanceof go.Diagram) {
      setUpdate(update + 1);
    }
  }, [keyDiagramComponent]);

  const initOverview = () => {
    const $ = go.GraphObject.make;
    const overview = $(go.Overview, { contentAlignment: go.Spot.Center });
    return overview;
  };

  return (
    <Box
      sx={{
        "& .diagram-component": {
          border: "1px solid gray",
          height: "600px",
          flex: 1,
        },
        " & .overview-component": {
          border: "1px solid gray",
          height: "150px",
          width: "200px",
        },
      }}
    >
      <Header diagramRef={diagramRef} />
      <Box sx={{ display: "flex", gap: "16px" }}>
        <ReactDiagram
          ref={diagramRef}
          initDiagram={initDiagram}
          divClassName="diagram-component"
          nodeDataArray={[
            { key: 0, text: "Alpha", color: "lightblue", loc: "0 0" },
            { key: 1, text: "Beta", color: "orange", loc: "150 0" },
            { key: 2, text: "Gamma", color: "lightgreen", loc: "0 150" },
            { key: 3, text: "Delta", color: "pink", loc: "150 150" },
          ]}
          // linkDataArray={[
          //   { key: -1, from: 0, to: 1 },
          //   { key: -2, from: 0, to: 2 },
          //   { key: -3, from: 1, to: 1 },
          //   { key: -4, from: 2, to: 3 },
          //   { key: -5, from: 3, to: 0 },
          // ]}
          onModelChange={handleModelChange}
        />
        <ReactOverview
          initOverview={initOverview}
          divClassName="overview-component"
          observedDiagram={diagramRef?.current?.getDiagram() || null}
        />
      </Box>
    </Box>
  );
}
