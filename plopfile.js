export default function (plop) {
  // Define the generator for React components
  plop.setGenerator("New page", {
    description: "Create a new React component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your page name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/routes/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plopTemplates/NewPage.hbs",
      },
      {
        type: "add",
        path: "src/routes/{{pascalCase name}}/index.ts",
        templateFile: "plopTemplates/NewPageIndex.hbs",
      },
    ],
  });

  plop.setGenerator("Component in Page", {
    description: "Create a new React component",
    prompts: [
      {
        type: "input",
        name: "pageName",
        message: "What is your page name?",
      },
      {
        type: "input",
        name: "componentName",
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/routes/{{pascalCase pageName}}/components/{{pascalCase componentName}}/{{pascalCase componentName}}.tsx",
        templateFile: "plopTemplates/NewPageComponent.hbs",
      },
      {
        type: "add",
        path: "src/routes/{{pascalCase pageName}}/components/{{pascalCase componentName}}/index.ts",
        templateFile: "plopTemplates/NewPageComponentIndex.hbs",
      },
    ],
  });
}
