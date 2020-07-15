# @mcl/style-theme

This is a library project used to build the custom Bootstrap theme for Mayo Clinic Laboratories. The project contains both the `css` and `scss` files for the theme so that either can be used in the projects we create.

## NPM Package

The npm package updated by this project is called `@mcl/style-theme`. In Azure DevOps, go to the `Artifacts` option which lists all the npm packages available to our projects in MCL AD DevOps project.

Search for this package and you should see the version number match the one in the `package.json` file. You must update this number every time you check in changes or you will get an error during the pipeline build.

The `azure-pipelines.yml` script is what is used in the build to update the NPM package.

## Build Steps

Run these steps prior to checking in changes to update the npm package created for the Bootstrap theme.

1. Run the build command so that the css under the `/theme` directory gets updated based on the changes made to the Sass in the `.scss` files.

   - `> npm run build`

   - The build is using `gulp` and the command used for the build are in the `gulpfile.js` file.

2. Update the version in package.json. We use Semantic versioning, so increment the appropriate number: major, minor or patch.

   - A major update: 1.0.16 => 2.0.0
   - A minor update: 1.0.16 => 1.1.0
   - A patch update: 1.0.16 => 1.0.17

## Further information

To get more information on how to create a custom Bootstrap theme, visit the Bootstrap documentation on [themes](https://getbootstrap.com/docs/4.4/getting-started/theming/).

To get more information on semantic versioning, visit the [semver site](https://semver.org/).

To get more information on gulp commands, visit the [gulp.js site](https://gulpjs.com/).
