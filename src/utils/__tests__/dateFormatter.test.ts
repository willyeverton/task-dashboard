import { dateFormatter } from '../dateFormatter';

describe('dateFormatter', () => {
  const testDate = new Date('2024-01-01T10:00:00');

  describe('toLocalDateTime', () => {
    it('formats date to local datetime string', () => {
      expect(dateFormatter.toLocalDateTime(testDate))
        .toMatch(/01\/01\/2024.*10:00/);
    });

    it('handles invalid date input', () => {
      expect(dateFormatter.toLocalDateTime(new Date('invalid')))
        .toBe('Invalid Date');
    });

    it('handles null or undefined dates', () => {
      expect(dateFormatter.toLocalDateTime(null)).toBe('Invalid Date');
      expect(dateFormatter.toLocalDateTime(undefined)).toBe('Invalid Date');
    });
  });

  describe('isOverdue', () => {
    it('handles edge dates', () => {
      const now = new Date();
      expect(dateFormatter.isOverdue(now)).toBeFalsy();

      const exactlyNow = new Date();
      expect(dateFormatter.isOverdue(exactlyNow)).toBeFalsy();

      const oneMillisecondAgo = new Date(Date.now() - 1);
      expect(dateFormatter.isOverdue(oneMillisecondAgo)).toBeTruthy();
    });

    it('handles invalid date inputs', () => {
      expect(dateFormatter.isOverdue(new Date('invalid'))).toBeFalsy();
      expect(dateFormatter.isOverdue(null)).toBeFalsy();
      expect(dateFormatter.isOverdue(undefined)).toBeFalsy();
    });
  });
});
