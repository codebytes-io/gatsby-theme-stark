exports.createPages = async ({ graphql, actions }, themeOptions) => {
  console.log(themeOptions);

  const { createPage } = actions;

  if (themeOptions.aboutPage) {
    const productTemplate = require.resolve(
      `${__dirname}/src/templates/about.js`
    );

    createPage({
      path: `/about`,
      component: productTemplate,
    });
  }
};
