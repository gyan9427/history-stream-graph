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
  let command = `cd ${repo}; git log --pretty=format:"☕%h🔪%ad🔪%an🔪%s🔪%b" --date="iso" --no-merges --compact-summary > ../data/${repo}.001.🔪sv`
  exec(command, (error, stdout, stderr) => {
    // TODO: handle errors.
  })
})

