function filterPosts() {
  var newPost = $(".add-post-input").val();

  const filter = ['facista', 'Facista', 'nazista', 'Nazista', '#elenao', '#elenão', 'elenao', 'elenão', '#eleNão', '#elesim', 'elesim', '#eleSim', 'elesim', 'Bolsonaro', 'bolsonaro', 'bozossauro', 'bostonaro', 'Bolsominion', 'bolsominion', '#lulalivre', 'lulalivre', 'LulaLivre', '#LulaLivre', '#facistasNãoPassarão', 'facistasNãoPassarão', '#oGiganteAcordou', 'oGiganteAcordou', 'petista', 'petralha', 'Petista', 'Petralha', 'Comunista', 'comunista', 'coiso', 'Coiso', 'bozonaro', 'Bozonaro', 'bolsomito', 'Bolsomito', 'mensalao', 'Mensalao', 'mensalão', 'Mensalão', 'petrolao', 'petrolão', 'Petrolao', 'Petrolão', 'MDB', 'PTB', 'PDT', 'PT', 'DEM', 'PCdoB', 'PSB', 'PSDB', 'PTC', 'PSC', 'PMN', 'PRP', 'PPS', 'Esquerdopata', 'esquerdopata', 'corrupto', 'Corrupto', 'Corrupção', 'corrupção', 'Haddad', 'Amoedo', 'babaca', 'Babaca', 'Boceta', 'boceta', 'Buceta', 'buceta', 'Boquete', 'boquete', 'Bosta', 'bosta', 'Bunda', 'bunda', 'Burra', 'burra', 'Burro', 'burro', 'Caralho', 'caralho', 'Caraleo', 'caraleo', 'Cassete', 'cassete', 'cocô', 'Cocô', 'cú', 'CÚ', 'Escroto', 'Escrota', 'escroto', 'escrota', 'foda', 'FODA', 'Foda', 'Fode', 'fode', 'fudida', 'Fudida', 'Fuder', 'fuder', 'Fudeo', 'fudeo', 'Grelo', 'grelo', 'Masturba', 'masturba', 'Masturbação', 'masturbação', 'merda', 'Merda', 'Otaria', 'Otario', 'otaria', 'otario', 'Pau', 'pau', 'Pica', 'pica', 'Pika', 'pika', 'picka', 'Picka', 'Porra', 'porra', 'piroca', 'Piroca', 'Prostituta', 'Prostituto', 'prostituta', 'prostituto', 'puta', 'Puta', 'putaria', 'Putaria', 'Sapatao', 'Sapatão', 'sapatao', 'sapatão', 'Siririca', 'siririca', 'vadia', 'Vadia', 'Vagabunda', 'vagabunda', 'Vagabundo', 'vagabundo', 'Víado', 'víado', 'Viado', 'viado', 'Xavasca', 'xavasca', 'Xereca', 'xereca', 'Xota', 'xota', 'Xoxota', 'xoxota', 'xana', 'Xana', 'xxt', 'XXT', 'bixa', 'criolo', 'gayzão', 'bicha', 'bichinha', 'viadinho', 'frescura', 'homossexualismo', 'bichona', 'shit', 'fuck', 'damn', 'bitch', 'crap', 'dick', 'piss', 'darn', 'pussy', 'fag', 'cock', 'asshole', 'bastard', 'douche', 'slut', 'Cunt', 'Motherfucker', 'Wanker', 'jerk', 'Prick', 'Bollocks', 'asshole', 'Arsehole', 'Shag', 'hoe', 'Whore', 'Twat', 'Dickhead', 'ass', 'Arse', 'Crap', 'Arsemonger', 'Balls', 'Blast', 'Crickhold', 'Daft', 'Ejaculate', 'Fornication', 'pissed', 'Junky', 'Knob', 'Ninny', 'Nutter', 'Prat', 'Scrubber', 'Sex', 'Sttoned', 'fart', 'piss', 'Tramp', 'Trollop', 'candidates', 'vote', 'Violencia'];

  filter.map(word => {
    if (newPost.match(new RegExp(word))) {
      $('.add-posts').show();
      $('#alertModal').modal('show');
      $('.add-post-input').val('');
    } else {
      $('.add-posts').show();
    }
  });
}

function filterImages() {
  const image = $('#image').val();
  const imageTitle = image.match(new RegExp(/[^C:\\fakepath\\](.*)/g)).join('');
  const filter = ['facista', 'Facista', 'nazista', 'Nazista', '#elenao', '#elenão', 'elenao', 'elenão', '#eleNão', '#elesim', 'elesim', '#eleSim', 'elesim', 'Bolsonaro', 'bolsonaro', 'Bolsominion', 'bolsominion', '#lulalivre', 'lulalivre', 'LulaLivre', '#LulaLivre', '#facistasNãoPassarão', 'facistasNãoPassarão', '#oGiganteAcordou', 'oGiganteAcordou', 'petista', 'petralha', 'Petista', 'Petralha', 'Comunista', 'comunista', 'coiso', 'Coiso', 'bozonaro', 'Bozonaro', 'bolsomito', 'Bolsomito', 'mensalao', 'Mensalao', 'mensalão', 'Mensalão', 'petrolao', 'petrolão', 'Petrolao', 'Petrolão', 'MDB', 'PTB', 'PDT', 'PT', 'DEM', 'PCdoB', 'PSB', 'PSDB', 'PTC', 'PSC', 'PMN', 'PRP', 'PPS', 'Esquerdopata', 'esquerdopata', 'corrupto', 'Corrupto', 'Corrupção', 'corrupção', 'Haddad', 'Amoedo', 'puta', 'Puta', 'vadia', 'Vadia', 'cú', 'babaca', 'Boceta', 'boceta', 'Buceta', 'buceta', 'Boquete', 'boquete', 'Bosta', 'bosta', 'Bunda', 'bunda', 'Burra', 'burra', 'Burro', 'burro', 'Caralho', 'caralho', 'Cassete', 'cassete', 'cocô', 'Cocô', 'Escroto', 'Escrota', 'escroto', 'escrota', 'Fode', 'fode', 'fudida', 'Fudida', 'Fuder', 'fuder', 'Grelo', 'grelo', 'Masturba', 'masturba', 'Masturbação', 'masturbação', 'merda', 'Merda', 'Otaria', 'Otario', 'otaria', 'otario', 'Pau', 'pau', 'Pica', 'pica', 'Pika', 'pika', 'Porra', 'porra', 'piroca', 'Piroca', 'Prostituta', 'Prostituto', 'prostituta', 'prostituto', 'putaria', 'Putaria', 'Sapatao', 'Sapatão', 'sapatao', 'sapatão', 'Siririca', 'siririca', 'Vagabunda', 'vagabunda', 'Vagabundo', 'vagabundo', 'Víado', 'víado', 'Viado', 'viado', 'Xavasca', 'xavasca', 'Xereca', 'xereca', 'Xota', 'xota', 'Xoxota', 'xoxota', 'bixa', 'criolo', 'gayzão', 'bicha', 'bichinha', 'viadinho', 'frescura', 'homossexualismo', 'bichona', 'shit', 'fuck', 'damn', 'bitch', 'crap', 'dick', 'piss', 'darn', 'pussy', 'fag', 'cock', 'asshole', 'bastard', 'douche', 'slut', 'Cunt', 'Motherfucker', 'Wanker', 'jerk', 'Prick', 'Bollocks', 'asshole', 'Arsehole', 'Shag', 'hoe', 'Whore', 'Twat', 'Dickhead', 'ass', 'Arse', 'Crap', 'Arsemonger', 'Balls', 'Blast', 'Crickhold', 'Daft', 'Ejaculate', 'Fornication', 'pissed', 'Junky', 'Knob', 'Ninny', 'Nutter', 'Prat', 'Scrubber', 'Sex', 'Sttoned', 'fart', 'piss', 'Tramp', 'Trollop', 'candidates', 'vote', 'Violencia'];

  filter.map(word => {
    if (imageTitle.match(new RegExp(word))) {
      closeModals();
      $('#alertModal').modal('show');
    }
  });
}

function filterVideos() {
  const video = $('#video').val();
  const videoTitle = video.match(new RegExp(/[^C:\\fakepath\\](.*)/g)).join('');
  const filter = ['facista', 'Facista', 'nazista', 'Nazista', '#elenao', '#elenão', 'elenao', 'elenão', '#eleNão', '#elesim', 'elesim', '#eleSim', 'elesim', 'Bolsonaro', 'bolsonaro', 'Bolsominion', 'bolsominion', '#lulalivre', 'lulalivre', 'LulaLivre', '#LulaLivre', '#facistasNãoPassarão', 'facistasNãoPassarão', '#oGiganteAcordou', 'oGiganteAcordou', 'petista', 'petralha', 'Petista', 'Petralha', 'Comunista', 'comunista', 'coiso', 'Coiso', 'bozonaro', 'Bozonaro', 'bolsomito', 'Bolsomito', 'mensalao', 'Mensalao', 'mensalão', 'Mensalão', 'petrolao', 'petrolão', 'Petrolao', 'Petrolão', 'MDB', 'PTB', 'PDT', 'PT', 'DEM', 'PCdoB', 'PSB', 'PSDB', 'PTC', 'PSC', 'PMN', 'PRP', 'PPS', 'Esquerdopata', 'esquerdopata', 'corrupto', 'Corrupto', 'Corrupção', 'corrupção', 'Haddad', 'Amoedo', 'puta', 'Puta', 'vadia', 'Vadia', 'cú', 'babaca', 'Boceta', 'boceta', 'Buceta', 'buceta', 'Boquete', 'boquete', 'Bosta', 'bosta', 'Bunda', 'bunda', 'Burra', 'burra', 'Burro', 'burro', 'Caralho', 'caralho', 'Cassete', 'cassete', 'cocô', 'Cocô', 'Escroto', 'Escrota', 'escroto', 'escrota', 'Fode', 'fode', 'fudida', 'Fudida', 'Fuder', 'fuder', 'Grelo', 'grelo', 'Masturba', 'masturba', 'Masturbação', 'masturbação', 'merda', 'Merda', 'Otaria', 'Otario', 'otaria', 'otario', 'Pau', 'pau', 'Pica', 'pica', 'Pika', 'pika', 'Porra', 'porra', 'piroca', 'Piroca', 'Prostituta', 'Prostituto', 'prostituta', 'prostituto', 'putaria', 'Putaria', 'Sapatao', 'Sapatão', 'sapatao', 'sapatão', 'Siririca', 'siririca', 'Vagabunda', 'vagabunda', 'Vagabundo', 'vagabundo', 'Víado', 'víado', 'Viado', 'viado', 'Xavasca', 'xavasca', 'Xereca', 'xereca', 'Xota', 'xota', 'Xoxota', 'xoxota', 'bixa', 'criolo', 'gayzão', 'bicha', 'bichinha', 'viadinho', 'frescura', 'homossexualismo', 'bichona', 'shit', 'fuck', 'damn', 'bitch', 'crap', 'dick', 'piss', 'darn', 'pussy', 'fag', 'cock', 'asshole', 'bastard', 'douche', 'slut', 'Cunt', 'Motherfucker', 'Wanker', 'jerk', 'Prick', 'Bollocks', 'asshole', 'Arsehole', 'Shag', 'hoe', 'Whore', 'Twat', 'Dickhead', 'ass', 'Arse', 'Crap', 'Arsemonger', 'Balls', 'Blast', 'Crickhold', 'Daft', 'Ejaculate', 'Fornication', 'pissed', 'Junky', 'Knob', 'Ninny', 'Nutter', 'Prat', 'Scrubber', 'Sex', 'Sttoned', 'fart', 'piss', 'Tramp', 'Trollop', 'candidates', 'vote', 'Violencia'];
  filter.map(word => {
    if (videoTitle.match(new RegExp(word))) {
      closeModals();
      $('#alertModal').modal('show');
    }
  });
}

