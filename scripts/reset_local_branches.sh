resetBranches () {
    git fetch --tags origin
    echo "checking out origin/jump-start in order be able to reset all local branches"
    git checkout origin/jump-start
    git branch -f jump-start origin/jump-start
    git branch -f observables origin/observables
    git branch -f architecture origin/architecture
    git branch -f forms origin/forms
    git branch -f routing origin/routing
    git branch -f redux origin/redux
    git branch -f ngrx origin/ngrx
    git branch -f testing origin/testing
}

echo -n "You are about to *reset* all local branches with latest version from Github. Proceed? (y/n)? "
read answer
if echo "$answer" | grep -iq "^y" ;then
    resetBranches
else
    echo "kthxbye"
fi





