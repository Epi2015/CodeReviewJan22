describe("pingpong", function() {

  it("will return ping pong if a number > 0 is entered", function() {
    expect(pingPong(15)).to.eql("ping pong");
  });

  it("will return pong if a number > 0 is entered", function() {
    expect(pingPong(5)).to.eql("pong");
  });

  it("will return ping if a number > 0 is entered", function() {
    expect(pingPong(3)).to.eql("ping");
  });

});
