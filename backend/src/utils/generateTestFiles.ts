import fs from "fs";
import path from "path";

const generateTestFiles = () => {
  const testFilesDir = path.join(__dirname, "../../test-files");

  //Create the folder if not existing
  if (!fs.existsSync(testFilesDir)) {
    fs.mkdirSync(testFilesDir, { recursive: true });
  }

  //Generate 1MB file
  const oneMB = Buffer.alloc(1024 * 1024, 0);
  fs.writeFileSync(path.join(testFilesDir, "1mb.bin"), oneMB);
  console.log("1Mb file created");

  //Generate 10MB file
  const tenMB = Buffer.alloc(1024 * 1024 * 10, 0);
  fs.writeFileSync(path.join(testFilesDir, "10mb.bin"), oneMB);
  console.log("10Mb file created");
};

generateTestFiles();
