// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyBaFkSmXqx82sKp3W1R84H-QfkIBW-0cNQ",
    authDomain: "moorect-photo-bucket-no-auth.firebaseapp.com",
    databaseURL: "https://moorect-photo-bucket-no-auth.firebaseio.com",
    projectId: "moorect-photo-bucket-no-auth",
    storageBucket: "moorect-photo-bucket-no-auth.appspot.com",
    messagingSenderId: "363075729324"
  }
};
