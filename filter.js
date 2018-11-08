function filterPosts() {
  var newPost = $(".add-post-input").val();
  const filter = ['facista', 'Facista', 'nazista', 'Nazista', '#elenao', '#elenão', 'elenao', 'elenão', '#eleNão', '#elesim', 'elesim', '#eleSim', 'elesim', 'Bolsonaro', 'bolsonaro', 'Bolsominion', 'bolsominion', '#lulalivre', 'lulalivre', 'LulaLivre', '#LulaLivre', '#facistasNãoPassarão', 'facistasNãoPassarão', '#oGiganteAcordou', 'oGiganteAcordou', 'petista', 'petralha', 'Petista', 'Petralha', 'Comunista', 'comunista', 'coiso', 'Coiso', 'bozonaro', 'Bozonaro', 'bolsomito', 'Bolsomito', 'mensalao', 'Mensalao', 'mensalão', 'Mensalão', 'petrolao', 'petrolão', 'Petrolao', 'Petrolão', 'MDB', 'PTB', 'PDT', 'PT', 'DEM', 'PCdoB', 'PSB', 'PSDB', 'PTC', 'PSC', 'PMN', 'PRP', 'PPS', 'Esquerdopata', 'esquerdopata', 'corrupto', 'Corrupto', 'Corrupção', 'corrupção', 'Haddad', 'Amoedo', 'puta', 'Puta', 'vadia', 'Vadia', 'cú', 'babaca', 'Boceta', 'boceta', 'Buceta', 'buceta', 'Boquete', 'boquete', 'Bosta', 'bosta', 'Bunda', 'bunda', 'Burra', 'burra', 'Burro', 'burro', 'Caralho', 'caralho', 'Cassete', 'cassete', 'cocô', 'Cocô', 'Escroto', 'Escrota', 'escroto', 'escrota', 'Fode', 'fode', 'fudida', 'Fudida', 'Fuder', 'fuder', 'Grelo', 'grelo', 'Masturba', 'masturba', 'Masturbação', 'masturbação', 'Otaria', 'Otario', 'otaria', 'otario', 'Pau', 'pau', 'Pica', 'pica', 'Pika', 'pika', 'Porra', 'porra', 'piroca', 'Piroca', 'Prostituta', 'Prostituto', 'prostituta', 'prostituto', 'putaria', 'Putaria', 'Sapatao', 'Sapatão', 'sapatao', 'sapatão', 'Siririca', 'siririca', 'Vagabunda', 'vagabunda', 'Vagabundo', 'vagabundo', 'Víado', 'víado', 'Viado', 'viado', 'Xavasca', 'xavasca', 'Xereca', 'xereca', 'Xota', 'xota', 'Xoxota', 'xoxota', 'bixa', 'criolo', 'gayzão', 'bicha', 'bichinha', 'viadinho', 'frescura', 'homossexualismo', 'bichona'];
  filter.map(word => {
    if (newPost.match(new RegExp(word))) {
      alert('PROIBIDO');
      $(".add-post-input").val("");
    } else {
      $('.add-posts').show();
    }
  });
}