module.exports = function(options) {
  this.add({ role: "math", cmd: "sum" }, (msg, respond) => {
    const sum = parseInt(msg.left) + parseInt(msg.right);
    respond(null, { answer: sum });
  });
  return 'operations';
};
