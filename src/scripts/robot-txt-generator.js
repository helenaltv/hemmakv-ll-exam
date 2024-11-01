import fs from "fs";

const generateRobotTxt = () => {
  const environment = process.env.NODE_ENV;
  let content = "User-agent: *\n";

  if (environment === "production") {
    // Ingen begränsning i produktion
  } else {
    content += "Disallow: *\n"; // Disallow i andra miljöer
  }

  try {
    fs.writeFileSync("./public/robots.txt", content);
    console.log("robots.txt generated successfully!");
  } catch (error) {
    console.error("Error generating robots.txt:", error);
  }
};

generateRobotTxt();
