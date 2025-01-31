import { dateFormatter } from '../dateFormatter';

describe('dateFormatter', () => {
  const testDate = new Date('2024-01-01T10:00:00');

  it('formats date to local datetime string', () => {
    expect(dateFormatter.toLocalDateTime(testDate))
      .toMatch(/01\/01\/2024.*10:00/);
  });

  it('checks if date is overdue', () => {
    const futureDate = new Date(Date.now() + 86400000);
    const pastDate = new Date(Date.now() - 86400000);

    expect(dateFormatter.isOverdue(futureDate)).toBeFalsy();
    expect(dateFormatter.isOverdue(pastDate)).toBeTruthy();
  });
});
