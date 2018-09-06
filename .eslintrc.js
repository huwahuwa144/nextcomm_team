module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react", "jsx-a11y", "import"
  ],
  "globals": {
    "window": true,
    "location": true,
    "document": true,
    "SubmissionError": true,
    "google": true,
    "console": true,
    "alert": true,
  },
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prefer-stateless-function": [0],
    "no-useless-constructor": [0],
    "import/no-unresolved": [0],
    "import/extensions": [0],
    "max-len": [1, 300, 2],
    "import/prefer-default-export": [0],
    "arrow-body-style": [0],
    "react/jsx-no-bind": [0],
    "yoda": [0],
    "no-restricted-syntax": [0],
    "react/require-default-props": [0],
    "linebreak-style": ["error", "windows"],
    "react/jsx-one-expression-per-line":[0],
    "react/destructuring-assignment": [0],
    "react/forbid-prop-types": [0]
  }

};
