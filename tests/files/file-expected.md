## Conteúdo exempĺo

Observe o código abaixo:

```css

  // index.css

  .container {
    max-width: 960px;
    margin: 0 auto;
  }

```

```jsx
  import React from 'react';
  import ReactDOM from 'react-dom';
  import './index.css';
  import App from './App';
  import * as serviceWorker from './serviceWorker';

  const rootElement = document.getElementById('root');

  function render() {
    ReactDOM.render(<App />, rootElement);
  }
```

Interessante, né? Agora observe as imagens abaixo explicando o funcionamento do código.

|![Passo a passo](images/render-step-by-step1.png)|
|:--:|
|Passo a passo|

![render-step-by-step2](images/render-step-by-step2.png)


## Exercícios

- Entre no [repositorio de exercícios](https://github.com/repo/exercicio).


