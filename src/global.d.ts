declare module '@cypress/code-coverage/task' {
  const task: Cypress.PluginConfig;
  export = task;
}

interface User {
  email: string;
  name: string | null;
  id: string;
}
