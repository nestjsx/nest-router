import { validatePath } from '../../utils/validate-path.util';

describe('ValidatePath', () => {
  const v = validatePath;
  test('it should add a / if it dose not exist', () => {
    expect(v('')).toEqual('/');
    expect(v('path')).toEqual('/path');
  });

  test('it should remove all trailing slashes at the end of the path', () => {
    expect(v('path/')).toEqual('/path');
    expect(v('path///')).toEqual('/path');
    expect(v('/path/path///')).toEqual('/path/path');
  });

  test('it should replace all slashes with only one slash', () => {
    expect(v('////path/')).toEqual('/path');
    expect(v('///')).toEqual('/');
    expect(v('/path////path///')).toEqual('/path/path');
  });
});
