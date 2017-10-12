# Things I learned!

---

## General

Code **refactoring** is the process of restructuring existing computer code—changing the factoring—without changing its external behavior. **Refactoring** improves nonfunctional attributes of the software.

## [Git Branching - Basic Branching and Merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)

To create a new branch and switch to it at the same time, you can run the git checkout command with the -b switch:
```
$ git checkout -b iss53
Switched to a new branch "iss53"
```

This is shorthand for:
```
$ git branch iss53
$ git checkout iss53
```

This command will reset the index and working tree. Any changes to tracked files in the working tree since <commit> are discarded.
```
$ git reset --hard <commit>
```
