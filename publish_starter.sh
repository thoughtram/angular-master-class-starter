git checkout $(git rev-list HEAD | tail -n 1)
git branch -D starter
git checkout -b starter
mv README_starter.md README.md
git add -A .
git commit --amend --no-edit
git push -f starter starter:master
