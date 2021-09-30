# Contribution Guidelines

This documentation is a set of guidelines to help you contribute to this repository.

First off, thanks for taking the time to contribute!  🙌

Please make sure to read the relevant section before making your contribution.

We look forward to your contributions. 🎉

### Getting starting with contributing? 💡

You can follow the following articles for the basics of Git/GitHub and contributing to a repository.
The Project Maintainers will be glad to help you out if you are stuck during the contribution process. :)

- [Basics of git and github](https://towardsdatascience.com/getting-started-with-git-and-github-6fcd0f2d4ac6)
- [Intoduction to github Lab](https://lab.github.com/githubtraining/introduction-to-github)
- [Contributing to Open Source for the first time](https://www.youtube.com/watch?v=c6b6B9oN4Vg)

## Contibute to this project 

You can follow along the workflow given below to contribute to this project:

### 1. Find an issue

- Pick and issue from the existing issues or create your own issue to start contributing.
- After a maintainer assigns you the issue, you can begin working on it!!

### 2. Fork and clone the repository

- Fork the repository. This creates a copy of this repository to your own GitHub repositories.
- Clone the forked repository to your own computer. This will create a copy of the repository on your own PC. Copy the forked repository link and run the following command:
```bash
git clone <cloning URL>
```
- Change your current directory to the directory of the project repository.
```bash
cd <project directory>
```
- Add a reference of the source repository to make sure your local copy is up to date.
```bash
git remote add upstream <source repository URL>
``` 

### 3. Create a new branch

Create a new branch. Set a name descriptive of the issue that you are solving. The following command will create and switch to a new branch.

```bash
git checkout -b Branch_Name
```

### 4. Work on your chosen issue!!!

- Work on the issue(s) assigned to you.
- After you've completed your work, add changes to your branch using:

```bash  
# To add all new files to branch Branch_Name  
git add .  

# To add only a few files to Branch_Name
git add <some files>
```

### 5. Commit your changes

- Commit your changes to the repository, remember to add a descriptive message for the changes you are making

```bash 
git commit -m "message"  
```

### 6. Sync the fork with your local copy

- Make sure your branch is synced to the source repository before pushing changes, use the following commands:

```bash
git fetch upstream
git checkout Branch_Name
git merge upstream/main
```

### 7. Push your changes

- When you think your code is ready to be reviewed, push your changes to your repository

```bash
git push -u origin Branch_Name
```

### 8. Pull request

- Go to your repository in browser and click on compare and pull requests.
Then add a title and description to your pull request that explains your contribution. 


- Congrats! Your Pull Request has been submitted and will be reviewed by the moderators and merged. 🥳
