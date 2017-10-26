This is the seed project to create cli tools with Node and TypeScript. 


VS Code debugging is supported directly in TypeScript

## Workflow

Once cloned go to ``package.json`` and edit boilerplate values. 

Note: `name`, `version`, `description` are taken from package.json so you want to put relevant information there.

Use commands defined in `package.json` to develop and test the tool you are writing:

```
npm start -- --param1 value1
npm start -- -p value
```
Will start commanline with param1 passed

```
npm start -- --help
```
Will printout help for the tool

