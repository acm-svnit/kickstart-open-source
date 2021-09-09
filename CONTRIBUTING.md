# Guidelines to contribute

- Create an issue in the main repo's [issue page](https://github.com/acm-svnit/kickstart-open-source/issues)
- For the assesment you have to `fork` this [repo](https://github.com/acm-svnit/kickstart-open-source)
- Clone it in your machine using
  ```
  git clone https://github.com/<YOUR USERNAME>/kickstart-open-source
  cd kickstart-open-source #to change directory to your local clone
  ```
- Create a branch with the name of your roll no. and change you current branch from `main -> <YOUR-ROLL-NO>`
  ```
  git branch <YOUR-ROLL-NO> # creates a branch with your roll no.
  git checkout <YOUR-ROLL-NO> # changes you current branch
  ```
- Make the changes to index.html file as shown in the comments of the file
- **Always test your code before making pull request**
- Add the code changes to the forked repository :

  `git add .` # adds all the untracked changes </br>
  `git commit` # Open a editor where you have to write about the commit as example given below

  ```
  <shortlog>

  <description>

  Closes <link of the issue>
  ```

  `git push origin <YOUR-ROLL-NO>` #pushes changes to your local branch

- Now head to github.com and create the pull request.

### Any doubts regarding git and github can be asked in the [issue](https://github.com/acm-svnit/kickstart-open-source/issues)
