
import { EventosMock } from './eventos';
import { setupWorker } from 'msw/browser';
import { isDevMode } from '@angular/core'
import { EscolasMock } from './escolas';
import { PlanoAcaoMock } from './planos-acao';
import { PessoasMock } from './pessoas';

export const setupMsw = async () => {
  // if (isDevMode()) {
  //   return;
  // }

  const worker = setupWorker(...EscolasMock.concat(EventosMock, PlanoAcaoMock, PessoasMock) );
  await worker.start();
};