let fs = require("fs")
let {exec} = require("child_process")

// read package.json
let packageText = fs.readFileSync("./d3/package.json").toString()
let packageJson = JSON.parse(packageText)
// loop through dependencies
let depends = Object.keys(packageJson.dependencies)
console.log("dependencies", depends)
// clone each repo
//let repo = "d3"
let commits = []
 depends.forEach(repo => {
  let txt = fs.readFileSync(`data/${repo}.001.json`).toString()
  let json = JSON.parse(txt)
  json.forEach(c => {
    c.repo = repo
    commits.push(c)
  })
})
fs.writeFileSync(`data/combined.001.json`, JSON.stringify(commits))

