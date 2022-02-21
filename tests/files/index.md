## Conteúdo exempĺo

Observe o código abaixo:

{{< highlight css >}}

  // index.css

  .container {
    max-width: 960px;
    margin: 0 auto;
  }

{{< /highlight >}}

{{< highlight react >}}
  import React from 'react';
  import ReactDOM from 'react-dom';
  import './index.css';
  import App from './App';
  import * as serviceWorker from './serviceWorker';

  const rootElement = document.getElementById('root');

  function render() {
    ReactDOM.render(<App />, rootElement);
  }
{{< /highlight >}}

Interessante, né? Agora observe a imagem abaixo explicando o funcionamento do código.

{{< figure src="images/render-step-by-step.png" >}}

## Exercícios

- Entre no {{< extlink text="repositorio de exercícios" href="https://github.com/repo/exercicio" >}}.


{{< next-btn >}}