/*
Desafio 9
A partir da coleção trips, determine o menor e o maior ano de nascimento.
Guarde essa informação, você precisará dela mais tarde.

Não considere documentos com valores vazios ("") e em que o campo não existe!

Para este desafio utilize o operador $toInt para converter de string para valor inteiro.

O resultado da sua query deve ter o seguinte formato:

{ "maiorAnoNascimento" : <ano>, "menorAnoNascimento" : <ano> }
*/
db.trips.aggregate([
  {
    $match: {
      $and: [
        { birthYear: { $exists: true } },
        { birthYear: { $gt: 0 } },
      ],
    },
  },
  {
    $group: {
      _id: 0,
      maiorAnoNascimento: { $max: "$birthYear" },
      menorAnoNascimento: { $min: "$birthYear" },
    },
  },
  {
    $project: {
      _id: 0,
    },
  },
]);

db.trips.findOne();
