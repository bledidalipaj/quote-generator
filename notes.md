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

Merge the **iss53** branch back into your **master** branch:
```
$ git checkout master
$ git merge iss53
```

You can delete a branch with the **-d** option to **git branch**:
```
$ git branch -d iss53
```

This command will reset the index and working tree. Any changes to tracked files in the working tree since <commit> are discarded.
```
$ git reset --hard <commit>
```

## Git

Go to a previous commit:

```
$ git log
$ git checkout <hash>
```

When you checkout to a specific commit, git creates a detached branch. So, if you call:

```
$ git branch
```

You will see something like:
```
* (detached from 3i4j25)
  master
  other_branch
```

To come back to the master branch head you just need to checkout to your master branch again:

```
$ git checkout master
````

This command will automatically delete the detached branch. This command will automatically delete the detached branch.


## HTML

### <a title=""></a>
The **title** attribute of the anchor tag **a** defines the title of the link, which appears to the user as a tooltip.
The **tooltip** is a message which appears when a cursor is positioned over an icon, image, hyperlink, or other element in a graphical user interface.
