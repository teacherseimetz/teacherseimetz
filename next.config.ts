import { NextConfig } from "next";

const config: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/teacherseimetz",
  images: {
    unoptimized: true,
  }
};

export default config;
