import dateMask from '../src';

describe('#dateMask', () => {
  describe('Only with numbers', () => {
    test.each`
      date          | expected
      ${'1'}        | ${'1'}
      ${'13'}       | ${'13'}
      ${'130'}      | ${'13/0'}
      ${'1308'}     | ${'13/08'}
      ${'13081'}    | ${'13/08/1'}
      ${'130819'}   | ${'13/08/19'}
      ${'1308199'}  | ${'13/08/199'}
      ${'13081992'} | ${'13/08/1992'}
    `('should parse $date to $expected', ({ date, expected }) => {
      expect(dateMask(date)).toEqual(expected);
    })
  })

  describe('With mask', () => {
    test.each`
      date            | expected
      ${'1'}          | ${'1'}
      ${'13'}         | ${'13'}
      ${'13/0'}       | ${'13/0'}
      ${'13/08'}      | ${'13/08'}
      ${'13/08/1'}    | ${'13/08/1'}
      ${'13/08/19'}   | ${'13/08/19'}
      ${'13/08/199'}  | ${'13/08/199'}
      ${'13/08/1992'} | ${'13/08/1992'}
    `('should parse $date to $expected', ({ date, expected }) => {
      expect(dateMask(date)).toEqual(expected);
    });
  });

  describe('Without values', () => {
    test.each`
      date
      ${''}
      ${undefined}
    `('should parse $date to $expected', ({ date }) => {
      expect(dateMask(date)).toEqual('');
    });
  });

  describe('With unexpected mask', () => {
    test.each`
      date            | expected
      ${'1'}          | ${'1'}
      ${'13'}         | ${'13'}
      ${'13-0'}       | ${'13/0'}
      ${'13.08'}      | ${'13/08'}
      ${'13-08-1'}    | ${'13/08/1'}
      ${'13,08.19'}   | ${'13/08/19'}
      ${'13,08!199'}  | ${'13/08/199'}
      ${'13[08]1992'} | ${'13/08/1992'}
    `('should parse $date to $expected', ({ date, expected }) => {
      expect(dateMask(date)).toEqual(expected);
    });
  });

  describe('With unexpected inputs', () => {
    test.each`
      payload
      ${new Date()}
      ${1308}
      ${'treze08'}
      ${false}
      ${null}
    `('should throw an error', ({ payload }) => {
      expect(() => {
        dateMask(payload);
      }).toThrow(
        'You must to pass a digits as string with pattern DD/MM/YYYY or MM/DD/YYYY'
      );
    });
  });
});
