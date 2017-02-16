const testsContext = require.context(".", true, /_test$/);
testsContext.keys().forEach(testsContext);

const srcContext = require.context('src', true, /^\.\/(?!index(\.js)?$)/)
srcContext.keys().forEach(srcContext)
