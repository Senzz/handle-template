const handleTemplate = require('./../src');
const expect = require('chai').expect;
const data = {
  name: "Senzz",
  age: '24',
  sex: 'male',
}
describe('handle-template', () => {
  describe('one line', () => {
    it('should return <div>Senzz</div>', () => {
      const tmpl = '<div>{{{name}}}</div>';
      expect(handleTemplate(tmpl, data)).to.equal('<div>Senzz</div>');
    });
    it('should retrun <div>Senzz, 24</div>', () => {
      const tmpl = '<div>{{{name}}}, {{{age}}}</div>';
      expect(handleTemplate(tmpl, data)).to.equal('<div>Senzz, 24</div>')
    })
  });

  describe('mutiple line', () => {
    it('should return <div>Senzz, 24</div> <div>male</div>', () => {
      const tmpl = `
        <div>{{{name}}}, {{{age}}}</div>
        <div>{{{sex}}}</div>
      `;
      expect(handleTemplate(tmpl, data)).to.equal(`
        <div>Senzz, 24</div>
        <div>male</div>
      `)
    })
  })
})