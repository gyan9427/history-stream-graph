let fs = require("fs")
let {exec} = require("child_process")

// read package.json
let packageText = fs.readFileSync("./d3/package.json").toString()
let packageJson = JSON.parse(packageText)
// loop through dependencies
let depends = Object.keys(packageJson.dependencies)
console.log("dependencies", depends)
// clone each repo
depends.forEach(repo => {
  let command = `git clone https://github.com/d3/${repo}.git`
  exec(command, (error, stdout, stderr) => {
    // TODO: handle errors.
  })
})

