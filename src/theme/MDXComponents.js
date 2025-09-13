import React from "react";
// Importing the original mapper + our components according to the Docusaurus doc
import MDXComponents from "@theme-original/MDXComponents";
import Button from "@site/src/components/Button";
import ImageTable, { ImageTableFigure } from "@site/src/components/ImageTable";
import MovesetTable from "@site/src/components/MovesetTable";
import VideoPlayer from "@site/src/components/VideoPlayer";
export default {
  // Reusing the default mapping
  ...MDXComponents,
  Button,
  ImageTable,
  ImageTableFigure,
  MovesetTable,
  VideoPlayer,
};