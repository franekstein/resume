module.exports = {
  babel: {
    plugins: [
      "@emotion/babel-plugin",
      [
        "@emotion/babel-plugin-jsx-pragmatic",
        {
          export: "jsx",
          import: "__cssprop",
          module: "@emotion/react",
        },
      ],
      [
        "@babel/plugin-transform-react-jsx",
        {
          pragma: "__cssprop",
          pragmaFrag: "React.Fragment",
        },
      ],
    ],
  },
}
