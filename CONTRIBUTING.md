# Contributing to template-bp

In order to contribute to this project:

- **If you are working on a new feature:**

  - Create a new branch from `main` branch
  - Commit your changes to that branch (take pull and merge accordingly if new stuff gets pushed to main)
  - Open a pull request against the `main` branch
  - Resolve merge conflicts (if any)

## Naming Conventions

In order to keep the git log clean and consistent, please follow these conventions.

### Branch Names

Branches should be named using the following format:

`{token}/{task-description}`

**Token can be:**

- `feature`: Tasks to be merged into `develop`
- `hotfix`: Critical bug fixes to be merged into `master`
- `release`: Staging to be merged into `develop` and `master`
- `bug`: Low or Middle level priority Bug Fix to be merged into `develop` and probably `master`

**Task-number can be:**

- This is purely optional and correspond to any Github/Gitlab/JIRA/Trello etc issue no.

**Please use short and meaningful descriptions for your branch names and use dashes (`-`) as the delimeter.**

**Please use kebab case and small case letters for branch name.** `example: upload-functionality`

#### Branch name Positive Examples

`feature/upload-functionality`

`feature/logout-functionality`

`feature/logout-functionality`

`bug/logout-button-error`

`bug/upload-button-styling`

#### Branch name Negative Examples

`feature/UPLOAD`: description not in kebab case

`logout-functionality`: no token mentioned

`feature/logout_functionality`: description is in short snake case but needed in kebab case

`part-final/logout-button-error`: part-final is not a valid project token.

### Commits

Please try your best to follow these conventions when it comes to commit messages:

#### 1. No Capitalization the subject line

This is as simple as it sounds. Begin all subject lines with a small letter.

##### Example:

`feat: upgraded performance to 5x faster`

##### Instead of:

`feat: Upgraded performance to 5x faster`

#### 2. Do not end the subject line with a fullstop

Trailing punctuation is unnecessary in subject lines.

##### Example:

`fix: closed the redundant functionality`

##### Instead of:

`closed the redundant functionality.`

#### 3. Use the meaningful commit describing the task in the subject line

Imperative mood just means “spoken or written as if giving a command or instruction”. A few examples:

- `feat: added upload functionality button handler`
- `fix: updated CSS changes for the logout button`

#### 4. Use brackets to specify the workspace (optional)

If the commit contains changes related to a single workspace, specify workspace name before the actual commit message. Don't add full stop to the commits

#### 5. Small definitions of the token

- feat - A feature added in that commit
- fix - Commit having a fix
- chore - Anything that is not a feat or a fix

## PR Naming convention

Raising a PR is simple and we will follow some naming conventions for that which will be having workspace names as well as th description
Example Names:
[web-client] Added Table layout
[api-urls] Added some API
