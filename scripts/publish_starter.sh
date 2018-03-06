git checkout $(git rev-list HEAD | tail -n 1)
git branch -D starter
git checkout -b starter
mv README_starter.md README.md
git add -A .
git commit --amend --no-edit
git push -f starter starter:master
git checkout $(git rev-list redux | tail -n 2 | head -1)
git branch -D redux-starter
git checkout -b redux-starter
git push -f starter redux-starter
