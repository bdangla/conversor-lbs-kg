const expect = require('chai').expect
const conversor= require('..').default
describe('#conversor', function(){
	  it('Si se le pasa lb se va a convertir a kg', function () {
    const translation = conversor(1,"lb")
    expect(translation).to.equal(0.45)
  })

  it('si se le pasa kg se convertira a lb', function () {
    const translation = conversor(0.45,'kg')
    expect(translation).to.equal(1)
  })
})