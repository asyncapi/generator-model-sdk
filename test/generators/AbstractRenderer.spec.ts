import { AbstractRenderer } from '../../src/generators'; 
import { IndentationTypes } from '../../src/helpers';
import { CommonInputModel, CommonModel } from '../../src/models';

describe('AbstractRenderer', function() {
  class TestRenderer extends AbstractRenderer {
    constructor() {
      super({
        indentation: {
          type: IndentationTypes.SPACES,
          size: 2,
        },
      }, [], new CommonModel(), new CommonInputModel());
    }
    render() { return "" }
  }

  let renderer: TestRenderer;
  beforeEach(() => {
    renderer = new TestRenderer();
  });

  test('renderLine function should render string with new line', async function() {
    const content = renderer.renderLine('Test');
    expect(content).toEqual('Test\n');
  });

  test('renderBlock function should render multiple lines', async function() {
    const content = renderer.renderBlock(['Test1', 'Test2']);
    expect(content).toEqual('Test1\nTest2');
  });

  describe('indent()', function() {
    test('should render text with indentation', function() {
      const content = renderer.indent('Test');
      expect(content).toEqual('  Test');
    });
    test('should render indentation  with options', function() {
      const content = renderer.indent('Test', 4, IndentationTypes.SPACES);
      expect(content).toEqual('    Test');
    });
  });
});
