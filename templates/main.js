// import html helper
var html = require('choo/html')

// export template function
module.exports = function (state, emit) {
  var lion = state.animals.lion
  var crocodile = state.animals.crocodile

  return html`
    <div class="container">
      <div class="grass">
        <div class="lion">
          <img src="/assets/lion.gif">
          <div class="bubble">${lion}</div>
        </div>

        <div class="crocodile">
          <img src="/assets/crocodile.gif">
          <div class="bubble">${crocodile}</div>
        </div>
      </div>

      <div class="inputs">
        <div class="input">
          <div class="label">The Lion says</div>
          <input type="text" id="lion" value=${lion} oninput=${updateLion} />
        </div>

        <div class="input">
          <div class="label">The Crocodile says</div>
          <input type="text" id="crocodile" value=${crocodile} />
          <button onclick=${updateCrocodile}>Update</button>
        </div>
      </div>

      <footer>
        made by <a href="https://twitter.com/louiscenter">@louiscenter</a>
        with <a href="https://github.com/yoshuawuyts/choo">choo</a>
      </footer>
    </div>
  `

  // update what lion says
  function updateLion (e) {
    emit('updateAnimal', {
      type: 'lion',
      value: e.target.value
    })
  }

  // update what crocodile says
  function updateCrocodile () {
    emit('updateAnimal', {
      type: 'crocodile',
      value: document.getElementById('crocodile').value
    })
  }
}
