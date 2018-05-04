// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDxRAWwPlLSJ2jT_sU6pmuT8MNZeyheHx4',
    authDomain: 'todolistapp-39dee.firebaseapp.com',
    databaseURL: 'https://todolistapp-39dee.firebaseio.com',
    projectId: 'todolistapp-39dee',
    storageBucket: 'todolistapp-39dee.appspot.com',
    messagingSenderId: '22124510752'
  }
};
