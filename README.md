## Building from Source 🏗️

1. **Clone the repository**

```bash
git clone https://github.com/FiveThing/expense-tracker.git
```

3. **Pull in project dependencies**

```bash
yarn
```

4. **Host the app locally**

```bash
yarn start
```

## Create a branch
```bash
git checkout -b <trelloNumber-Title>

#Example 
git checkout -b 15-header
```

## Switching branch
```bash
git checkout <branchname>

#Example
git checkout main  #if you want to go to the main branch
#or
git checkout 15-header #if you want to go to the header branch
```

## Push your code 
```bash
git add .
```
```bash
git commit -m "#TrelloNumber Title"

#Example 
git commit -m "#15 Header"
```
```bash
git push -u origin <branchName>

#Example
git push -u origin 15-header
```

3. Go to expense-tracker repo

4. Compare and Pull Request
![pull request](https://hisham.hm/img/posts/github-comparepr.png)

5. Document what you've changed
- **take a screenshot**
- **explain the code (optional) but highly recommended**

6. Create Pull Request
7. Don't merge the code yourself, wait for the reviewers
- you can request to review your code

## Update your main branch
```bash
#Go to your main branch
git checkout main

#Fetch
git fetch

#Merge
git merge
```







