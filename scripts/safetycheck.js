#!/usr/bin/env node

let semver = require('semver');
let execSync = require('child_process').execSync;
let chalk = require('chalk');
let spawnOptions = { stdio: 'pipe' };

let execute = (cmd, supress) => {
  try {
    let output = execSync(cmd, spawnOptions).toString();
    if (!supress) {
      console.log(output);
    }
    return output;
  }
  catch (e) {
    //Doesn't feel write to swallow the exceptions but there doesn't seem
    //to be a built in way to supress exceptions if git add and git push fail
  }
}

function getVersionFromRef(ref) {
  return JSON.parse(execute(`git show ${ref}:package.json`, true)).version;
}

const branches = ['jump-start', 'observables', 'architecture', 'forms', 'routing', 'redux', 'ngrx']


console.log(chalk.green('Fetching from origin to read upstream version...'));
execute(`git fetch origin`)

let fail = false;

branches.forEach(branch => {
  console.log(chalk.green.bold(`${branch} versions:`));
  let remoteVersion = getVersionFromRef(`origin/${branch}`);
  let localVersion = getVersionFromRef(branch);

  console.log(chalk.green(`Remote version: ${remoteVersion}`));
  console.log(chalk.green(`Local version: ${localVersion}\n`));

  if (semver.lt(localVersion, remoteVersion)){
    console.log(chalk.red(`It appears that the local version of your courseware is behind upstream.
Please make sure to base your work on top the latest courseware.
An easy way to reset all your local branches would be ./reset_local_branches.sh
But keep in mind that this will reset all courseware branches to the state
that is on latest GitHub.`));

    fail = true;
  }
  else if (localVersion === remoteVersion) {
    console.log(chalk.green(`The version number of your local courseware matches the one upstream.
This is good! The only thing left to do is to increase the local version number before you deploy.`));
    fail = true;
  }
});

if (fail){
  process.exit(1);
}


