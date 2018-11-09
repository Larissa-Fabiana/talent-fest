var database = firebase.database();
var USER_ID = window.location.search.match(/\?id=(.*)/)[1];

$(document).ready(function() {
  $('.add-posts').hide();
  $('.add-post-input').keyup(filterPosts);
  getPostsFromDB();
  $(".add-posts").click(addPostsClick);
  userInfo();
});

function addPostsClick(event) {
  event.preventDefault();

  var newPost = $(".add-post-input").val();
  var postFromDB = addPostToDB(newPost);

  createListItem(newPost, postFromDB.key);
  $(".add-post-input").val("");
}

function addPostToDB(text) {
  return database.ref("posts/" + USER_ID).push({
    text: text
  });
}

function getPostsFromDB() {
  database.ref("posts/" + USER_ID).once('value')
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        createListItem(childData.text, childKey)
      });
    });
}

function createListItem(text, key) {
  $(".posts-list").prepend(`
    <div class="post-box">
      <div class="post-box-header"><span class="current-user-name"></span></div>
      <div class="post-box-main">
        <i class="fas fa-user-circle fa-4x text-secondary mr-3"></i>
        <span id="post-text-${key}">${text}</span>
      </div>
      <div class="post-box-footer">
        <button type=button" id="edit-post-${key}"><i class="far fa-edit"></i> Editar</button>
        <button type=button" id="delete-post-${key}"><i class="far fa-trash-alt"></i> Deletar</button>
      </div>
    </div>`);

  $(`#edit-post-${key}`).click(function() {
    $(this).replaceWith(`<button id="save-post-${key}"><i class="far fa-heart"></i> Salvar</button>`);
    $(`#post-text-${key}`).attr('contentEditable', 'true').focus(function(){
      $(`#save-post-${key}`).click(function() {
        var editedPost = $(`#post-text-${key}`).html();
        database.ref("posts/" + USER_ID + "/" + key + "/text").set(editedPost);
        $(`#post-text-${key}`).attr('contentEditable', 'false');
        $(this).replaceWith(`<button id="edit-post-${key}"><i class="far fa-edit"></i> Editar</button>`);
      })
    })
  });

  $(`#delete-post-${key}`).click(function() {
    database.ref("posts/" + USER_ID + "/" + key).remove();
    $(this).parent().parent().remove();
  });

  userInfo();
}

function userInfo() {
  database.ref("users/" + USER_ID).once('value')
  .then(function(snapshot) {
    var userName = snapshot.val().name;
    var userEmail = snapshot.val().email;
    $('.username').html('<i class="fas fa-user"></i> ' + userName + ' <small>(' + userEmail + ')</small>');
    $('.current-user-name').html('Postado por: ' + userName + '<small> (SEU PERFIL)</small>');
  });
}

$('.newsfeed').click(function(){
  window.location = "posts.html?id=" + USER_ID;
})

$('.log-out').click(function() {
  firebase.auth().signOut().then(function() {
    window.location = "index.html";
  }).catch(function(error) {
    alert(error.message);
  });
})

function readImage(input) {
  const reader = new FileReader();
  reader.onload = function (e) {
    filterImages();

    $('.modal-image').prepend(`
      <img class="imagem" src="${e.target.result}"/>
    `);
    $('.post-image').click(function() {
      $('.posts-list').prepend(`
        <div class="post-box">
          <img src="${e.target.result}"/>
        </div>
      `);
      closeModals();
    })
  };
  reader.readAsDataURL(input.files[0]); 
}

function closeModals() {
  return $('.modal').modal('hide');
}

