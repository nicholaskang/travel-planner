export interface ResponseLength {
  key: string;
  name: string;
  description: string;
}

const responseLengths: ResponseLength[] = [
  {
    key: "short",
    name: "Short",
    description: "Keep responses short, concise, and straight to the point.",
  },
  {
    key: "medium",
    name: "Medium",
    description:
      "Provide balanced responses with a mix of details and quick takeaways.",
  },
  {
    key: "long",
    name: "Long",
    description:
      "Give in-depth, detailed responses with full breakdowns, examples, and storytelling.",
  },
];

export default responseLengths;
