// Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos.

//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão);

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente";
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

// Resposta =>
// 1 - Pipoca – 10 segundos (padrão);
// 2 - Macarrão – 8 segundos (padrão);
// 3 - Carne – 15 segundos (padrão);
// 4 - Feijão – 12 segundos (padrão);
// 5 - Brigadeiro – 8 segundos (padrão);

function microOndas(opcao, tempo) {
  const tempoPipoca = 10;
  const tempoMacarrao = 8;
  const tempoCarne = 15;
  const tempoFeijao = 12;
  const tempoBrigadeiro = 8;

  const mensagem01 = `A comida queimou!!! Prato pronto, bom apetite!!!`;
  const mensagem02 = `kabumm!!! Prato pronto, bom apetite!!!`;
  const mensagem03 = `Tempo insuficiente!!! Prato pronto, bom apetite!!!`;
  const opcaoInvalida = 'Prato inexistente';

  if (opcao === 1 && tempo === tempoPipoca * 2) {
    return `${mensagem01}`;
  } else if (opcao === 1 && tempo === tempoPipoca * 3) {
    return `${mensagem02}`;
  } else if (opcao === 1 && tempo < tempoPipoca) {
    return `${mensagem03}`;
  } else if (opcao === 2 && tempo === tempoMacarrao * 2) {
    return `${mensagem01}`;
  } else if (opcao === 2 && tempo === tempoMacarrao * 3) {
    return `${mensagem02}`;
  } else if (opcao === 2 && tempo < tempoMacarrao) {
    return `${mensagem03}`;
  } else if (opcao === 3 && tempo === tempoCarne * 2) {
    return `${mensagem01}`;
  } else if (opcao === 3 && tempo === tempoCarne * 3) {
    return `${mensagem02}`;
  } else if (opcao === 3 && tempo < tempoCarne) {
    return `${mensagem03}`;
  } else if (opcao === 4 && tempo === tempoFeijao * 2) {
    return `${mensagem01}`;
  } else if (opcao === 4 && tempo === tempoFeijao * 3) {
    return `${mensagem02}`;
  } else if (opcao === 4 && tempo < tempoFeijao) {
    return `${mensagem03}`;
  } else if (opcao === 5 && tempo === tempoBrigadeiro * 2) {
    return `${mensagem01}`;
  } else if (opcao === 5 && tempo === tempoBrigadeiro * 3) {
    return `${mensagem02}`;
  } else if (opcao === 5 && tempo < tempoBrigadeiro) {
    return `${mensagem03}`;
  } else {
    return `${opcaoInvalida}`;
  }
}
