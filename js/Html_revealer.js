
function HTMLActuator() {
  this.tileContainer    = document.querySelector(".tile-container");
  this.scoreContainer   = document.querySelector(".score-container");
  this.bestContainer    = document.querySelector(".best-container");
  this.messageContainer = document.querySelector(".game-message");
  this.sharingContainer = document.querySelector(".score-sharing");

  this.score = 0;
}

HTMLActuator.prototype.actuate = function (grid, metadata) {
  var self = this;

  window.requestAnimationFrame(function () {
    self.clearContainer(self.tileContainer);

    grid.cells.forEach(function (column) {
      column.forEach(function (cell) {
        if (cell) {
          self.addTile(cell);
        }
      });
    });

    self.updateScore(metadata.score);
    self.updateBestScore(metadata.bestScore);

    if (metadata.terminated) {
      if (metadata.over) {
        self.message(false); // You lose
      } else if (metadata.won) {
        self.message(true); // You win!
      }
    }

  });
};

// Continues the game (both restart and keep playing)
HTMLActuator.prototype.continue = function () {
  if (typeof ga !== "undefined") {
    ga("send", "event", "game", "restart");
  }

  this.clearMessage();
};

HTMLActuator.prototype.clearContainer = function (container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

HTMLActuator.prototype.addTile = function (tile) {
  var self = this;

  var wrapper   = document.createElement("div");
  var inner     = document.createElement("div");
  var position  = tile.previousPosition || { x: tile.x, y: tile.y };
  var positionClass = this.positionClass(position);

  // We can't use classlist because it somehow glitches when replacing classes
  var classes = ["tile", "tile-" + tile.value, positionClass];

  if (tile.value > 3) classes.push("tile-4");
  if (tile.value > 7) classes.push("tile-8");

if (tile.value > 15) classes.push("tile-16");

if (tile.value > 31) classes.push("tile-32");

if (tile.value > 63) classes.push("tile-64");

if (tile.value > 127) classes.push("tile-128");

if (tile.value > 255) classes.push("tile-256");

if (tile.value > 511) classes.push("tile-512");

if (tile.value > 1023) classes.push("tile-1024");

if (tile.value > 2047) classes.push("tile-2048");

if (tile.value > 4095) classes.push("tile-4096");

if (tile.value > 8191) classes.push("tile-8192");

if (tile.value > 16383) classes.push("tile-16384");

if (tile.value > 32767) classes.push("tile-32768");

if (tile.value > 65535) classes.push("tile-65536");

if (tile.value > 131071) classes.push("tile-131072");

if (tile.value > 262143) classes.push("tile-262144");

if (tile.value > 524287) classes.push("tile-524288");

if (tile.value > 1048575) classes.push("tile-1048576");

if (tile.value > 2097151) classes.push("tile-2097152");
if (tile.value > 4194303) classes.push("tile-4194304");

if (tile.value > 8388607) classes.push("tile-8388608");

if (tile.value > 16777215) classes.push("tile-16777216");

if (tile.value > 33554431) classes.push("tile-33554432");

if (tile.value > 67108863) classes.push("tile-67108864");

if (tile.value > 134217727) classes.push("tile-134217728");

if (tile.value > 268435455) classes.push("tile-268435456");

if (tile.value > 536870911) classes.push("tile-536870912");

if (tile.value > 1073741823) classes.push("tile-1073741824");

if (tile.value > 2147483647) classes.push("tile-2147483648");

if (tile.value > 4294967295) classes.push("tile-4294967296");

if (tile.value > 8589934591) classes.push("tile-8589934592");

if (tile.value > 17179869183) classes.push("tile-17179869184");

if (tile.value > 34359738367) classes.push("tile-34359738368");

if (tile.value > 68719476735) classes.push("tile-68719476736");

if (tile.value > 137438953471) classes.push("tile-137438953472");

if (tile.value > 274877906943) classes.push("tile-274877906944");

if (tile.value > 549755813887) classes.push("tile-549755813888");

if (tile.value > 1099511627775) classes.push("tile-1099511627776");

if (tile.value > 2199023255551) classes.push("tile-2199023255552");

if (tile.value > 4398046511103) classes.push("tile-4398046511104");

if (tile.value > 8796093022207) classes.push("tile-8796093022208");

if (tile.value > 17523186044415) classes.push("tile-17592186044416");

if (tile.value > 35146372088831) classes.push("tile-35184372088832");

if (tile.value > 70368744177663) classes.push("tile-70368744177664");

if (tile.value > 140737488355327) classes.push("tile-140737488355328");

if (tile.value > 281474976710655) classes.push("tile-281474976710656");

if (tile.value > 562949953421311) classes.push("tile-562949953421312");

if (tile.value > 1125899906842623) classes.push("tile-1125899906842624");

if (tile.value > 2251799813685247) classes.push("tile-2251799813685248");

if (tile.value > 4503599627370495) classes.push("tile-4503599627370496");

if (tile.value > 9007199254740991) classes.push("tile-9007199254740992");

if (tile.value > 18014398509481983) classes.push("tile-18014398509481984");

if (tile.value > 36028797018963967) classes.push("tile-36028797018963970");

if (tile.value > 72057594037927935) classes.push("tile-72057594037927940");

if (tile.value > 144115188075955871) classes.push("tile-144115188075955870");

if (tile.value > 288230376151911743) classes.push("tile-288230376151911740");

if (tile.value > 576460742303823487) classes.push("tile-576460742303823500");

if (tile.value > 1152921484607646975) classes.push("tile-1152921484607647000");

if (tile.value > 2305842969215293951) classes.push("tile-2305842969215294000");

if (tile.value > 4611683938430587903) classes.push("tile-4611683938430588000");

if (tile.value > 9223367876861175807) classes.push("tile-9223367876861176000");

if (tile.value > 18446735753722351615) classes.push("tile-18446735753722352000");

if (tile.value > 36893471507444703231) classes.push("tile-36893471507444703000");
if (tile.value > 73786943014889406463) classes.push("tile-73786943014889410000");

if (tile.value > 147573886029778812927) classes.push("tile-147573886029778810000");

if (tile.value > 295147772059557625855) classes.push("tile-295147772059557630000");

if (tile.value > 590295544119115251711) classes.push("tile-590295544119115300000");

if (tile.value > 999999999999999999999) classes.push("tile-super");


  this.applyClasses(wrapper, classes);

  inner.classList.add("tile-inner");
  inner.textContent = tile.value;

  if (tile.previousPosition) {
    // Make sure that the tile gets rendered in the previous position first
    window.requestAnimationFrame(function () {
      classes[2] = self.positionClass({ x: tile.x, y: tile.y });
      self.applyClasses(wrapper, classes); // Update the position
    });
  } else if (tile.mergedFrom) {
    classes.push("tile-merged");
    this.applyClasses(wrapper, classes);

    // Render the tiles that merged
    tile.mergedFrom.forEach(function (merged) {
      self.addTile(merged);
    });
  } else {
    classes.push("tile-new");
    this.applyClasses(wrapper, classes);
  }

  // Add the inner part of the tile to the wrapper
  wrapper.appendChild(inner);

  // Put the tile on the board
  this.tileContainer.appendChild(wrapper);
};

HTMLActuator.prototype.applyClasses = function (element, classes) {
  element.setAttribute("class", classes.join(" "));
};

HTMLActuator.prototype.normalizePosition = function (position) {
  return { x: position.x + 1, y: position.y + 1 };
};

HTMLActuator.prototype.positionClass = function (position) {
  position = this.normalizePosition(position);
  return "tile-position-" + position.x + "-" + position.y;
};

HTMLActuator.prototype.updateScore = function (score) {
  this.clearContainer(this.scoreContainer);

  var difference = score - this.score;
  this.score = score;

  this.scoreContainer.textContent = this.score;

  if (difference > 0) {
    var addition = document.createElement("div");
    addition.classList.add("score-addition");
    addition.textContent = "+" + difference;

    this.scoreContainer.appendChild(addition);
  }
};

HTMLActuator.prototype.updateBestScore = function (bestScore) {
  this.bestContainer.textContent = bestScore;
};

HTMLActuator.prototype.message = function (won) {
  var type    = won ? "game-won" : "game-over";
  var message = won ? "You win!" : "Game over!";

  if (typeof ga !== "undefined") {
    ga("send", "event", "game", "end", type, this.score);
  }

  this.messageContainer.classList.add(type);
  this.messageContainer.getElementsByTagName("p")[0].textContent = message;

  this.clearContainer(this.sharingContainer);
  this.sharingContainer.appendChild(this.scoreTweetButton());
  twttr.widgets.load();
};

HTMLActuator.prototype.clearMessage = function () {
  // IE only takes one value to remove at a time.
  this.messageContainer.classList.remove("game-won");
  this.messageContainer.classList.remove("game-over");
};

HTMLActuator.prototype.scoreTweetButton = function () {
  var tweet = document.createElement("a");
  tweet.classList.add("twitter-share-button");
  tweet.setAttribute("href", "https://twitter.com/share");
  tweet.setAttribute("data-via", "gabrielecirulli");
  tweet.setAttribute("data-url", "http://git.io/2048");
  tweet.setAttribute("data-counturl", "http://gabrielecirulli.github.io/2048/");
  tweet.textContent = "Tweet";

  var text = "I scored " + this.score + " points at 2048, a game where you " +
             "join numbers to score high! #2048game";
  tweet.setAttribute("data-text", text);

  return tweet;
};
