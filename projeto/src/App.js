import React, { Fragment } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro.';

class App extends Component {
  render() {
    return (
      // Fragment serve como elemento pai que irá englobar os componentes que estamos criando
      <Fragment>
        <h1> Formulário de Cadastro</h1 >
        <FormularioCadastro />
      </Fragment>

    );
  }

}

export default App;
