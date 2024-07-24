import { Box, Image, Text } from "@chakra-ui/react";
import * as go from "gojs";

export default function Header({ diagramRef }: any) {
  const handleClickToolBar = (type: string) => {
    switch (type) {
      case "draw-line":
        // draw a line in diagram gojs, gojs-react
        addLine();
        break;
      case "draw-square":
        // draw a square in diagram gojs, gojs-react
        addSquare();

      default:
    }
  };

  const addLine = () => {
    const diagram = diagramRef?.current?.getDiagram();
    const link = new go.Link();
    const shape = new go.Shape();
    shape.stroke = "black";
    link.add(shape);
    diagram.add(link);
  };

  const addSquare = () => {
    const diagram = diagramRef?.current?.getDiagram();
    const node = new go.Node("Auto");
    const shape = new go.Shape("RoundedRectangle", {
      name: "SHAPE",
      fill: "white",
      strokeWidth: 1,
      portId: "",
      fromLinkable: true,
      fromLinkableSelfNode: true,
      fromLinkableDuplicates: true,
      toLinkable: true,
      toLinkableSelfNode: true,
      toLinkableDuplicates: true,
    });
    node.add(shape);
    const textblock = new go.TextBlock("Default Text", {
      margin: 5,
      editable: true,
    });
    node.add(textblock);
    diagram.add(node);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
        mb: "20px",
        border: "1px solid gray",
        padding: "16px",
        borderRadius: "10px",
        alignItems: "center",
        "& *": {
          cursor: "pointer",
        },
      }}
    >
      <Image
        onClick={() => handleClickToolBar("draw-line")}
        src="https://static.thenounproject.com/png/1143439-200.png"
        alt="line"
        sx={{
          height: "30px",
        }}
      />
      <Image
        onClick={() => handleClickToolBar("draw-square")}
        src="https://cdn-icons-png.flaticon.com/256/649/649730.png"
        alt="line"
        sx={{
          height: "30px",
        }}
      />
      <Image
        onClick={() => handleClickToolBar("draw-line")}
        src="https://cdn-icons-png.flaticon.com/512/71/71397.png"
        alt="line"
        sx={{
          height: "30px",
        }}
      />
      <Text>Text</Text>
    </Box>
  );
}
