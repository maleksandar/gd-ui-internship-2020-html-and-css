## About
This repository contains practice materials and tasks for Grid Dynamics UI Internship in Belgrade. Purpose of this repository is to develop intern's skills in HTML, CSS and give them basic framework knowledge.

## Solving tasks (issues)
New tasks will be posted as github issues. Solutions should be pushed to your own branch named as *<firstName_lastName>* or *<team_name>*. Remember to reference issue numbers in your commits.

## Layout tasks:

For each layout task (tasks starting with `task_00` and ending with `task_05`) you should:
1. Copy and rename `task_00` folder into `task_<task_number>`
2. Add a link towards new task solution in `index.html`

## Framework tasks:

### React Trello Clone - `task_06`:
To develop locally a React application you can either run `cd react-trello && npm run start` or `npm run react-dev` at the root of the repository. Changing files inside `react-trello/src` should result in auto-refresh of the browser. To build a production-ready version of the app you can run `cd react-trello && npm i && npm run build` or `npm run build-react`. That will compile the app and place the output files into `task_06` folder.

### Angular Trello Clone - `task_07`:
To develop locally an Angular application you can either run `cd angular-trello && ng serve` or `npm run ng-dev` at the root of the repository. Changing files inside `angular-trello/src` should result in auto-refresh of the browser. To build a production-ready version of the app you can run `cd angular-trello && npm i && ng build --prod` or `npm run build-angular`. That will compile the app and place the output files into `task_07` folder.

## Review
For easier preview, PR should be created against the master branch. Once PR is created, Netlify will automatically do a preview deployment. The link to the deployed site can be accessed through the Netlify PR checks (last check's 'Details' link). The name will be auto-generated in this format:

```
https://deploy-preview-{#number_of_pr}--gd-ui-internship-2020-html-and-css.netlify.com/
```

## Build
Running `npm run build` creates a production build version of the site (compiles both Angular and React applications respectively). After compilation of framework applications, the script copies and pastes all `task_##` folders along with `index.html`, `reset.css` and `style.css` into `dist` folder, which is a target folder for deployment configured in Netlify console.

## Deployment
Master branch is automatically deployed [here](https://gd-ui-internship-2020-html-and-css.netlify.com/) whenever it gets updated.
